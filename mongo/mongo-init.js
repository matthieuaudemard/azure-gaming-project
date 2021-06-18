db = new Mongo().getDB("azure");

db.createCollection('users', {capped: false});
db.createCollection('games', {capped: false});

db.users.insert([
    {
        username: 'player1',
        password: 'player1',
        gameIds: ["60c790e71bee2f5f84cc2d3d"]
    }, {
        username: 'player2',
        password: 'player2',
        gameIds: []
    }
]);

db.games.insert([
    {
        _id: ObjectId("60c790e71bee2f5f84cc2d3d"),
        name: "Pinball Clash",
        cover: "https://images.crazygames.com/pinball-clash/20210611080612/pinball-clash-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
        review: NumberInt(4)
    }, {
        "_id": ObjectId("60c791261bee2f5f84cc2d5a"),
        "name": "pac-xson",
        "cover": "https://images.crazygames.com/games/pac-xon/cover-1586285413312.jpg?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
        "review": NumberInt(3)
    }, {
        "_id": ObjectId("60c791491bee2f5f84cc2d72"),
        "name": "Injustice Gods Among Us",
        "cover": "https://images.crazygames.com/injusticegodsamongus.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"
    }, {
        "_id": ObjectId("60c7915f1bee2f5f84cc2d84"),
        "name": "BombIt 6",
        "cover": "https://images.crazygames.com/bombit6.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
        "review": NumberInt(3)
    }, {
        "_id": ObjectId("60c791761bee2f5f84cc2d9a"),
        "name": "Bomb Ball 3D",
        "cover": "https://images.crazygames.com/bomb-balls-3d-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
        "review": NumberInt(3)
    }, {
        "_id": ObjectId("60c791881bee2f5f84cc2dac"),
        "name": "Gold Digger",
        "cover": "https://images.crazygames.com/games/gold-digger-frvr/cover-1608107647188.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
        "review": NumberInt(3)
    }, {
        "_id": ObjectId("60c791941bee2f5f84cc2db7"),
        "name": "Fireboy & Watergirl",
        "cover": "https://images.crazygames.com/games/fireboy-and-watergirl-5-elements/cover-1586285304860.jpg?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
        "review": NumberInt(3)
    }
])