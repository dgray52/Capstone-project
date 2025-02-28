const swapItems = [
    {
        id : "1",
        category: "Electronics",
        author: "Alex",
        name: "TI-84 Calculator",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "2",
        category: "Electronics",
        author: "Bob",
        name: "Charger",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "3",
        category: "Clothing",
        author: "Noah",
        name: "Jacket",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "4",
        category: "Clothing",
        author: "Oliver",
        name: "Hoodie",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "5",
        category: "Materials",
        author: "Henry",
        name: "Notebook",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id : "6",
        category: "Materials",
        author: "Lucas",
        name: "Course Textbook",
        img: "/images/books.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
]

exports.find = () =>{
    return swapItems;
}

exports.findById = (id)=>{
    return swapItems.find(item=>{
        item.id === id;
    })
}