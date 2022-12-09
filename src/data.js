export const socialIcons = [
    {
      id: 123,
      icon: 'facebook',
      color: '#3245fa',
      tooltip: 'Share on facebook',
      link: 'https://facebook.com/it',
    },
    {
      id: 124,
      icon: 'twitter',
      color: '#3245aa',
      tooltip: 'Share on twitter',
      link: 'https://twitter.com/it',
    },
    {
      id: 125,
      icon: 'github',
      color: '#999',
      tooltip: 'Push on github',
      link: 'https://github.com/it',
    }
]

export const productItems = [
    {
        id: 123,
        img: 'man.png//https://men.png.com',
        category: 'man',
        title: 'Jins Pant',
        oldPrice: '$19',
        newPrice: '$15',
        batch: ['new', 'sale'],
        wishlist: true,
    }
]

export const products = {
    breadcrumbs: [
        {
            text: 'Home',
            link: 'https://google.com?q=home'
        },
        {
            text: 'Shop',
            link: 'https://google.com?q=shop'
        },
        {
            text: 'Man',
            link: 'https://google.com?q=man'
        },
        {
            text: 'T-Shirts',
            link: 'https://google.com?q=tshirt'
        }
    ],
    title: 'Osaka Entry Tee Superdry 12',
    price: {
        sale: 29.00,
        regular: 39.00
    },
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis massa nec velit commodo lobortis. Quisque diam lacus, tincidunt vitae eros porta, sagittis rhoncus est. Quisque sed justo a erat lobortis gravida.',
    categories: [
        {
            text: 'Man',
            link: 'https://google.com?q=man'
        },
        {
            text: 'T-Shirts',
            link: 'https://google.com?q=tshirts'
        }
    ],
    tags: [
        {
            text: 'Jeans',
            link: 'https://google.com?q=jeans'
        },
        {
            text: 'Man',
            link: 'https://google.com?q=man'
        },
        {
            text: 'T-Shirts',
            link: 'https://google.com?q=tshirts'
        },
        {
            text: 'White',
            link: 'https://google.com?q=white'
        }
    ],
    share: socialIcons,
    images: [
        {
            thumb: 'thumb-url',
            original: 'original-url',
            alt: 'alt-text',
            featured: true,
        },
        {
            thumb: 'thumb-url',
            original: 'original-url',
            alt: 'alt-text',
            featured: false
        }
    ],
    wishlist: false
} 

// {
//      id: ObjectID
//     title: String,
//     description: String,
//     images: [Object],
//     price: String,
//     categories: [Object],
//     tags: [Object],
//     socialIcons: [Object],
//     wishlist: Boolean,
// }

// const menus = [
//     {
//         id: 1,
//         text: 'Home',
//         link: '#'
//     },
//     {
//         id: 2,
//         text: 'Home page 1',
//         link: '#'
//     },
//     {
//         id: 3,
//         text: 'Home page 2',
//         link: '#'
//     },
//     {
//         id: 4,
//         text: 'Shop',
//         link: '#'
//     },
//     {
//         id: 5,
//         text: 'two column',
//         link: '#'
//     },
//     {
//         id: 6,
//         text: 'single column',
//         link: '#'
//     },
// ]

// const childrenMap = [
//     {
//         parent: 1,
//         chilren: [2, 3]
//     },
//     {
//         parent: 4,
//         children: [5, 6]
//     }
// ]