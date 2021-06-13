from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route("/api/games")
def get_():
    return jsonify([{
        'name': 'pong',
        'cover': 'https://cdn.tutsplus.com/active/uploads/legacy/tuts/450_easelJSPong/CreateJS_Pong.jpg'
    }, {
        'name': 'pacman',
        'cover': 'https://icon.azureedge.net/icon/prod-admin-game/d9b92090-123e-4c50-818f-1cb76a473f63/6daba886-3b4a-4d68-b407-d45fd69beef3/aa00014.jpg?width=500&height=500'
    }])


app.run()
