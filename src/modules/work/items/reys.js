
export const prevLink = 'badgey';

export const info = {
    title:      'Rey\'s Mexican Restaurant',
    type:       'ux',
    color:      '#993c1f',
    link:       'reys',
    caption:    'Mobile app to streamline restaurant orders',
    role:       "UX Designer",
    ux:         "Figma, Inkscape",
    date:       "Sep 2022 - Nov 2022",
    logo:       "work/reys/reys-mobile.png",
    
    viewButtons: [
        {
            name: 'Case Study',
            link: 'https://docs.google.com/presentation/d/1L7N0_CG95WT4dYPjiDQqjJcviKUniSmyCGsc_-OxTvg/edit?usp=sharing',
            icon: 'mdi-presentation'
        },
        {
            name: 'Figma',
            link: 'https://www.figma.com/proto/5NxCYVA06z3PUwJN9qYVR1/Mexican-Restaurant-App---Revised?node-id=140%3A485&scaling=scale-down&page-id=140%3A2&starting-point-node-id=140%3A485',
            icon: 'mdi-open-in-new'
        }
    ]
};

export const overview = {
    image: 'work/reys/logo-reys.png',
    problem: [
        "Customers have frustrations about the long wait times when ordering lunch and the accuracy of their orders during pickup.",

    ],
    goal: [
        "Design a mobile app that allows users to order food online, and pick up their order within the allotted time frame; which avoids long waits in line to order, and helps accuracy when picking up their order.",
    ],
};

export const research = [
    {
        type:   'card',
        title:  '',
        size:   6,
        images: [
            {
                src:     'work/reys/reys-persona.png',
                caption: 'Created a user persona for a corporate employee that has a strict time crunch between work and lunch times.'
            },
        ],
        text: [
                'Created a user persona for a corporate employee that has a strict timeframe between work and lunch times.',
        ]
    },
    {
        type:   'card',
        title:  '',
        size:   6,
        images: [
            {
                src:     'work/reys/reys-usermap.png',
                caption: 'Created a usermap for the chosen persona to highlight the actions and improvement opportunities.'
            },
        ],
        text: [
                'Created a usermap for the chosen persona to highlight the actions and improvement opportunities.',
        ]
    },

];

export const design = {
    timeline: [
        {
            title:  'Defined project goals',
            text:   [
                'From documenting Cal\'s User journey, I have discovered that an Order Tracker would increase the accuracy of takeout orders. The app can notify users when items are ready for pickup, and allowing members to confirm their order status.'
            ]
        },
        {
            title:  'Drawn workflow and wireframes',
            text:   [
                'Began to sketch out the general workflow of the application.',
                'Then I brainstormed several rough draft ideas of how the app should look. From these drafts, I\'ve picked a few items from each to add to the final wireframe.',
                'Finally, I\'ve drawn up the final version of the wireframes. Above is an example of the Menu pages.'
            ],
            images: [
                'work/reys/reys-pframe1.jpg',
                'work/reys/reys-pframe2.jpg',
            ]
        },
        {
            title: 'Created low-fidelity wireframes',
            text: [
                'Created digital wireframes for each page: including the Home, Menu, and Order Tracker pages.',
            ],
            images: [
                'work/reys/reys-dframe1.png',
            ]
        },
        {
            title: 'Conducted usability study',
            text: [
                'From the study, I\'ve discovered several improvements for the application.',         
                {
                    list: [
                        'Added Confirmation page during the order submission workflow before submission. This will ensure that orders are accurate before-hand.',
                        'The Language option needs to be simplified.',
                        'The application should have an Account system for quicker access to customer information.'
                    ]
                }
            ],
            images: [
                'work/reys/reys-study.png',
            ]
        },
        {
            title: 'Drafted high-fidelity mockups',
            text: [
                'Refined the wireframes based on feedback from usability testing. Added colors and typography to the mockups.',
            ],  
            images: [
                    'work/reys/reys-mock1.png',
                ]
        },
    ]
};

export const mockups = {
    button: {
        name: 'Figma',
        link: 'https://www.figma.com/proto/5NxCYVA06z3PUwJN9qYVR1/Mexican-Restaurant-App---Revised?node-id=140%3A485&scaling=scale-down&page-id=140%3A2&starting-point-node-id=140%3A485',
        icon: 'mdi-open-in-new'
    },
    sticker: {
        src: 'work/reys/reys-sticker.png',
    },
    list: [
        {
            title: 'Home',
            lofi: {
                src: 'work/reys/reys-dframe1.png',
                caption: 'The page is layout with the restaurant image, and a slider of menu options. There is a View Menu button across the width of the screen. Near the navigation, a Cart button is added.'
            },
            hifi: {
                src: 'work/reys/reys-mock1.png',
                caption: ' Added a Cart and Account button to the navigation. The color and typography has been updated accordingly.'
            },
        },
        {
            title: 'Menu - Grid View',
            lofi: {
                src: 'work/reys/reys-dframe3.png',
                caption: 'The Grid View shows the various menu items in a grid like layout to quickly sort through each choice. There is also an option to toggle between Grid and List view.'
            },
            hifi: {
                src: 'work/reys/reys-mock3.png',
                caption: 'The Grid and List buttons were grouped to show the relation among one another.'
            },
        },
        {
            title: 'Menu - List View',
            lofi: {
                src: 'work/reys/reys-dframe2.png',
                caption: 'The List View shows the items in a list layout with more information for each item.'
            },
            hifi: {
                src: 'work/reys/reys-mock2.png',
                caption: 'For the list items, added a description to each item.'
            },
        },
        {
            title: 'Order Tracker',
            lofi: {
                src: 'work/reys/reys-dframe5.png',
                caption: 'Diagrams a vertical stepper which will allow users to track their order status until pickup.'
            },
            hifi: {
                src: 'work/reys/reys-mock5.png',
                caption: 'Added the Order number and estimated time on top instead of the bottom area.'
            },
        },
    ]
};

export const accessibility = [
    {
        name: 'Easily defined elements',
        text: [
            'All form elements, buttons, and links are defined.'
        ]
    },
    {
        name:   'Consistent styling',
        text:   [
            'Ensured that the styles are consistent across the mobile application.',
        ],
    },
    {
        name: 'Clear language',
        text: [
            'Application has plain language to understand each page.'
        ]
    }
];


export const results = [
    'Order tracker for users to track pickup orders.',
    'Account workflow for consistent members.',
    'Versatile application to change views and language if needed.',
];


export const lessons = [
    'From working on this app, I have learned the great importance of usability studies and user feedback. It has given me insight to areas that were not thought about during the prototyping phase of the app.'
];
