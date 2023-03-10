const menus = [
    {
        title: 'Home',
        position: 1,
        children: [
            {
                title: 'Home Children 1',
                position: 1
            },
            {
                title: 'Home Children 2',
                position: 2
            },
        ]
    },
    {
        title: 'Catalog',
        position: 2,
        children: [
            {
                title: 'Catalog Children 1',
                position: 1,
            },
            {
                title: 'Catalog Children 2',
                position: 2,
            },
            {
                title: 'Catalog Children 3',
                position: 3,
            },
        ]
    },
    {
        title: 'Blog',
        position: 3,
        children: []
    },

    {
        title: 'Pages',
        position: 4,
        children: [
            {
                title: 'Pages Children 1',
                position: 1,
            },
            {
                title: 'Pages Children 2',
                position: 2,
            },
            {
                title: 'Pages Children 3',
                position: 3,
            },

        ]
    },
    {
        title: 'About us',
        position: 5,
        children: []

    },
]

const categories = [
    {
        title: "Browse categories",
        children: [
            {
                title: "Camera",
                position: 1
            },
            {
                title: "Desktop & laptop",
                position: 2
            },
            {
                title: "Speaker",
                position: 3
            },
        ]
    }
]

export {menus, categories} 