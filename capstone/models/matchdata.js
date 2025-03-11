const { v4: uuidv4 } = require('uuid');
const matchData = [
    {
        id: "1",
        sport: "Basketball",
        home: "Alex",
        away: "tim",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "2",
        sport: "basketball",
        home: "Bob",
        away: "frank",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "3",
        sport: "tennis",
        home: "Noah",
        away: "larson",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "4",
        sport: "ping pong",
        home: "Oliver",
        away: "charlie",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "5",
        sport: "basketball",
        home: "Henry",
        away: "ben",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "6",
        sport: "chess",
        home: "Lucas",
        away: "franklin",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
]

exports.find = () => {
    return matchData;
}

exports.findById = (id) => {
    return matchData.find(game => game.id === id);
}
exports.newgame = (game) => {

    game.id = uuidv4();
    matchData.push(game);
}
exports.updateById = function (id, newgame) {
    let game = matchData.find(game => game.id === id);
    game.sport = newgame.sport;
    game.away = newgame.away;
    game.location = newgame.location;
    game.home = newgame.home;

}
exports.deleteById = (id) => {
    let index = matchData.findIndex(game => game.id === id);
    if (index !== -1) {
        matchData.splice(index, 1);
    }
}