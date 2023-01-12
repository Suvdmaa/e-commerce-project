function generateStarsCount(){
    return Math.floor((Math.random() * 6) + 1)
}

const product =[
    {
        title: "JBL bar 2.1 deep bass",
        price: "$11,70",
        pic: "images/11.png",
        stars: generateStarsCount(),
    }
]

const twoProduct =[
    {
        title: "Play game",
        price: "$11,70",
        pic: "images/Frame30.png",
        stars: generateStarsCount(),
    },
    {
        title: "Play game",
        price: "$11,70",
        pic: "images/Frame31.png",
        stars: generateStarsCount(),
    },
]

export {product, twoProduct}

