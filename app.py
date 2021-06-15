from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from flask_cors import CORS
from pymongo import MongoClient
import yaml

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

config = yaml.full_load(open('database.yaml'))
client = MongoClient(config['uri'])
db = client['azure']
# collections
users = db["users"]
games = db['games']
jwt = JWTManager(app)

# JWT Config
app.config["JWT_SECRET_KEY"] = "this-is-secret-key"  # change it


@app.route("/api/login", methods=["POST"])
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
        return jsonify(message="Login Succeeded!", access_token=access_token), 201
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
            'review': str(data['review']) if 'review' in data else '0'
        })
    return jsonify(data_json)


@app.route("/api/users/current", methods=["GET"])
@jwt_required()
def get_current_user():
    current_user = users.find_one({"username": get_jwt_identity()})
    if current_user:
        return jsonify({
            '_id': str(current_user.get('_id')),
            'username': current_user.get('username')
        }), 200
    return jsonify(message="Bad credential"), 404


app.run()
