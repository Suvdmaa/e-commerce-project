function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15)
}

const header = [
    {
        text: "Need help? Call us: (+98) 0234 456 789",
        description: "Our store",
        order: "Track your order",
        url: "#",
        votes: generateVoteCount(),
        logoUrl: "images/logo-1.svg"
    },
];

const PopularProductsData = [
    {
        page: 1,
        products: [
            {
                title: "Camera",
                position: 1,
                price: "$11,70",
                picUrl: "images/camera.png",
                rating: "2,3",
                id: '1',
                genre: "Cameras",
            },
            {
                title: "Wireless headphones",
                position: 2,
                price: "$11,70",
                picUrl: "images/Frame.png",
                id: '2',
                genre: "Headphones"
            },
            {
                title: "Wireless headphones",
                position: 3,
                price: "$11,70",
                picUrl: "images/ear-12.webp",
                id: '3',
                genre: "Headphones"
            },
            {
                title: "Play game",
                position: 4,
                price: "$11,70",
                picUrl: "images/Frame1.png",
                id: '4',
                genre: "game-controller",
            },
            {
                title: "Play game",
                position: 5,
                price: "$11,70",
                picUrl: "images/xbox.jpeg",
                id:'5',
                genre: "game-controller",
            },
            {
                title: "Tablet as a laptop",
                position: 6,
                price: "$11,70",
                picUrl: "images/Frame29.png",
                id:"6",
                genre: "Laptops",
            },
            {
                title: "Play game",
                position: 7,
                price: "$11,70",
                picUrl: "images/x-box-1.jpeg",
                id:"7",
                genre: "game-controller",
            },
            {
                title: "Tablet as a laptop",
                position: 8,
                price: "$11,70",
                picUrl: "images/laptop1.png",
                id: "8",
                genre: "Laptops",
            },
        ]
    },
    {
        page: 2,
        products: [
            {
                title: "iPad 10th Generation",
                position: 1,
                price: "$11,70",
                picUrl: "images/t5.jpg",
                rating: "2,3",
                id: '9',
                genre: "Tablets",
            },
            {
                title: "Bengoo Gaming Mouse",
                position: 2,
                price: "$11,70",
                picUrl: "images/m2.jpeg",
                id: '10',
                genre: "Mouse",
            },
            {
                title: "Bengoo G9000 Wireless headphones",
                position: 3,
                price: "$11,70",
                picUrl: "images/h3.jpg",
                id: '11',
                genre: "Headphones"
            },
            {
                title: "Gaming controller",
                position: 4,
                price: "$11,70",
                picUrl: "images/m10.jpg",
                id: '12',
                genre: "game-controller",
            },
            {
                title: "Tablet",
                position: 5,
                price: "$11,70",
                picUrl: "images/t1.webp",
                id:'13',
                genre: "Tablets",
            },
            {
                title: "Gaming Mouse",
                position: 6,
                price: "$11,70",
                picUrl: "images/m3.jpeg",
                id:"14",
                genre: "Mouse",
            },
            {
                title: "Tablet",
                position: 7,
                price: "$11,70",
                picUrl: "images/t2.png",
                id:"15",
                genre: "Tablets",
            },
            {
                title: "Gaming Mouse",
                position: 8,
                price: "$11,70",
                picUrl: "images/m1.jpeg",
                id: "16",
                genre: "Mouse",
            },
        ]
    }

]

const sectionProduct = [
    {
        picUrl: "images/pexels.png",
        text: "Sale up to 50% off",
        description: '12 inch hd display'
    }
]

const genreData = [
    {
        name: "Cameras"
    },
    {
        name: "Laptops"
    },
    {
        name: "Tablets"
    },
    {
        name: "Mouse"
    },
]


export { header, PopularProductsData, sectionProduct, genreData}

