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




const categories = [
    {
        title: "Camera",
        position: 1,
    },
    {
        title: "Desktop & Laptop",
        position: 2,
    },
    {
        title: "Headphones",
        position: 3,
    },
    {
        title: "Speakers",
        position: 3,
    },
];


const menu = [
    {
        title: "Home",
        children: [
            {
                title: 'Popular',
                position: 1,
            },
            
        ]

    },
    {
        title: "Catalog",
        children: [
            {

            }
        ]
    }
];

export {header, categories, menu}

