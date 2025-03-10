const { v4: uuidv4 } = require('uuid');
const matchData = [
    {
        id: "1",
        sport: "Electronics",
        home: "Alex",
        away: "TI-84 Calculator",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "2",
        sport: "Electronics",
        home: "Bob",
        away: "Charger",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "3",
        sport: "Clothing",
        home: "Noah",
        away: "Jacket",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "4",
        sport: "Clothing",
        home: "Oliver",
        away: "Hoodie",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "5",
        sport: "Materials",
        home: "Henry",
        away: "Notebook",
        img: "/images/books.png",
        location: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: "6",
        sport: "Materials",
        home: "Lucas",
        away: "Course Textbook",
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