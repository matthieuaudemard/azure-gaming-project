from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/games")
def get_():
    return jsonify([{
        'name': 'Pinball Clash',
        'cover': 'https://images.crazygames.com/pinball-clash/20210611080612/pinball-clash-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop',
        'review': 4
    }, {
        'name': 'pac-xson',
        'cover': 'https://images.crazygames.com/games/pac-xon/cover-1586285413312.jpg?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop',
        'review': 3
    }, {
        'name': 'Injustice Gods Among Us',
        'cover': 'https://images.crazygames.com/injusticegodsamongus.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop',
    }, {
        'name': 'Crused Treasure',
        'cover': 'https://images.crazygames.com/games/cursed-treasure/cover-1588758575748.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop',
        'review': 3
    }, {
        'name': 'BombIt 6',
        'cover': 'https://images.crazygames.com/bombit6.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop',
        'review': 3
    }, {
        'name': 'Bomb Ball 3D',
        'cover': 'https://images.crazygames.com/bomb-balls-3d-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop',
        'review': 3
    }, {
        'name': 'Gold Digger',
        'cover': 'https://images.crazygames.com/games/gold-digger-frvr/cover-1608107647188.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop',
        'review': 3
    }, {
        'name': 'Fireboy & Watergirl',
        'cover': 'https://images.crazygames.com/games/fireboy-and-watergirl-5-elements/cover-1586285304860.jpg?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop',
        'review': 3
    }])


app.run()
