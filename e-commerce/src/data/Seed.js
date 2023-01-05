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

const heroSection = [
        {
            title: "Canon camera",
            votes: generateVoteCount(),
            picUrl: "images/8.png"
        },
        {
            title: "Laptop",
            votes:  generateVoteCount(),
            picUrl: "images/5.png"
        }
]

const PopularProducts =[
    {
        title: "Camera",
        position: 1,
        price: "$11,70",
        picUrl: "images/camera.png"
    },
    {
        title: "Wireless headphones",
        position: 2,
        price: "$11,70",
        picUrl: "images/Frame.png"
    },
    {
        title: "Wireless headphones",
        position: 3,
        price: "$11,70",
        picUrl: "images/Frame.png"
    },
    {
        title: "Play game",
        position: 4,
        price: "$11,70",
        picUrl: "images/Frame1.png"
    },
    {
        title: "Play game",
        position: 5,
        price: "$11,70",
        picUrl: "images/Frame1.png"
    },
    {
        title: "Tablet as a laptop",
        position: 6,
        price: "$11,70",
        picUrl: "images/Frame29.png"
    },
    {
        title: "Play game",
        position: 7,
        price: "$11,70",
        picUrl: "images/Frame1.png"
    },
    {
        title: "Tablet as a laptop",
        position: 8,
        price: "$11,70",
        picUrl: "images/Frame29.png"
    },
]

export {header,PopularProducts}

