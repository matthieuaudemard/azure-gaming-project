from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
import yaml

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

config = yaml.full_load(open('database.yaml'))
client = MongoClient(config['uri'])
db = client['azure']


@app.route("/api/games")
def get_():
    all_data = db['games'].find()
    data_json = []
    for data in all_data:
        data_json.append({
            '_id': str(data['_id']),
            'name': data['name'],
            'cover': data['cover'],
            'review': str(data['review']) if 'review' in data else '0'
        })
    print(data_json)
    return jsonify(data_json)


app.run()
