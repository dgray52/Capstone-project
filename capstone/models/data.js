
const swapItems = [
    {
        id : "1",
        category: "Electronics",
        seller: "Alex",
        name: "TI-84 Calculator",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "2",
        category: "Electronics",
        seller: "Bob",
        name: "Charger",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "3",
        category: "Clothing",
        seller: "Noah",
        name: "Jacket",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "4",
        category: "Clothing",
        seller: "Oliver",
        name: "Hoodie",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "5",
        category: "Materials",
        seller: "Henry",
        name: "Notebook",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "6",
        category: "Materials",
        seller: "Lucas",
        name: "Course Textbook",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
]

exports.find = () =>{
    return swapItems;
}

exports.findById = (id)=>{
    return swapItems.find(item=>item.id === id);
}