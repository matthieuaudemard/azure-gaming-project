from azure.mgmt.compute import ComputeManagementClient
from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from flask_cors import CORS
from msrestazure.azure_active_directory import ServicePrincipalCredentials
from pymongo import MongoClient
import yaml

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

config = yaml.full_load(open('database.yml'))
client = MongoClient(config['uri'])
db = client['azure']
# collections
users = db["users"]
games = db['games']
jwt = JWTManager(app)

# JWT Config
app.config["JWT_SECRET_KEY"] = "this-is-secret-key"  # change it

# Resource Group
GROUP_NAME = 'Parsec_group'
VM_NAME = 'cloudgaming'


@app.route("/api/auth/login", methods=["POST"])
def login():
    if request.is_json:
        username = request.json["username"]
        password = request.json["password"]
    else:
        username = request.form["username"]
        password = request.form["password"]

    user_from_db = db["users"].find_one({"username": username, "password": password})

    if user_from_db:
        access_token = create_access_token(identity=username)
        user_json = {
            '_id': str(user_from_db.get('_id')),
            'username': user_from_db.get('username'),
            'gameIds': user_from_db.get('gameIds')
        }
        return jsonify(message="Login Succeeded!", access_token=access_token, user=user_json), 201
    return jsonify(message="Bad credential"), 401


@app.route("/api/games")
def get_all_games():
    all_data = games.find()
    data_json = []
    for data in all_data:
        data_json.append({
            '_id': str(data['_id']),
            'name': data['name'],
            'cover': data['cover'],
            'review': int(data['review']) if 'review' in data else 0
        })
    return jsonify(data_json)


@app.route("/api/games/play")
def play_game():
    start_vm()


@app.route("/api/users/current", methods=["GET"])
@jwt_required()
def get_current_user():
    current_user = users.find_one({"username": get_jwt_identity()})
    if current_user:
        return jsonify({
            '_id': str(current_user.get('_id')),
            'username': current_user.get('username'),
            'gameIds': current_user.get('gameIds')
        }), 200
    return jsonify(message="Bad credential"), 404


def get_credentials():
    subscription_id = '848cb7db-a25d-4e28-abbf-50853f6b0437'
    credentials = ServicePrincipalCredentials(
        client_id='d4ab77c9-3187-40d9-b0ec-cd840925c0d8',
        secret='XXff8m-H5i3_78J2h.4FnsS26q.n21HK95',
        tenant='b7b023b8-7c32-4c02-92a6-c8cdaa1d189c'
    )
    return credentials, subscription_id


def start_vm():
    # Start the VM
    print('\nStart VM')
    credentials, subscription_id = get_credentials()
    compute_client = ComputeManagementClient(credentials, subscription_id)
    async_vm_start = compute_client.virtual_machines.start(
        GROUP_NAME, VM_NAME)
    async_vm_start.wait()


if __name__ == "__main__":
    app.run()
