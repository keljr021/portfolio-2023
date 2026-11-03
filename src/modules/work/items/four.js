
export const info = {
    title:      '4 Lives AI',
    type:       'ux',
    color:      '#0d6d95',
    link:       'four',
    caption:    'AI information site for video games',
    role:       "UX Designer",
    ux:         "Figma, Inkscape",
    date:       "Jan 2024",
    logo:       "work/fl/fl-desktop.png",
    
    viewButtons: [
        {
            name: 'Figma Desktop',
            link: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=28-242&t=7r8PqfSf9rv4qlZX-1&scaling=min-zoom&page-id=28%3A187&starting-point-node-id=28%3A242&mode=design',
            icon: 'mdi-open-in-new'
        },
                {
            name: 'Figma Mobile',
            link: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=76-5666&t=V6DdFKCvilGcjKaA-1&scaling=scale-down-width&page-id=76%3A3524&starting-point-node-id=78%3A1674&mode=design',
            icon: 'mdi-open-in-new'
        },
        {
            name: 'Case Study',
            link: 'https://docs.google.com/presentation/d/11AmaJsV7683gmRCD8ctkhfBbgtaMJRarI9DvzXZhG2Q/edit?usp=sharing',
            icon: 'mdi-presentation'
        },
    ]
};

export const overview = {
    image: 'work/fl/logo-fl.png',
    problem: [
        "With the excess of video game options, new consumers to the hobby are overwhelmed with the choices out there; or what all items are needed to set up their equipment.",

    ],
    goal: [
        "Provide an online resource that takes a question from the user and generates recommended information of items based on the request. This gives consumers a clear and informative option of what is needed for their specific game console or equipment.",
    ],
};

export const research = [
    {
        type:   'card',
        size:   6,
        images: [
            {
                src:     'work/fl/fl-persona.png',
                caption: 'Created a user persona for a consumer that is somewhat new to video games, but is interested in purchasing equipment for his nephew.'
            },
        ],
        text: [
                'Created a user persona for a consumer that is somewhat new to video games, but is interested in purchasing equipment for his nephew.'
        ]
    },
        {
        type:   'card',
        size:   6,
        images: [
            {
                src:     'work/fl/fl-audit.png',
                caption: 'Created a competitive audit of direct and indirect competitors.'
            },
        ],
        text: [
                'Created a competitive audit of direct and indirect competitors; including GameStop, Wikipedia, and Best Buy.',
        ]
    },
];

export const design = {
    timeline: [
        {
            title:  'Created a user diagram',
            text:   [
                'Started with a user diagram that organizes the workflow. The diagram allows us to clearly define the below goals:',
                {
                    list: [
                        'User should be able to enter a query to gather specific information.',
                        'Query should give information laid out in an easy to read format.',
                        'An option for the user to share that generated content.',
                    ]
                }
            ],
            images: [
                'work/fl/fl-diagram.png',
            ]
        },
        {
            title:  'Written notes and created a sitemap ',
            text:   [
                'Documented ideas from the research and organized them into a sitemap to help visualize the site structure and user flow.',
            ],
            images: [
                'work/fl/fl-pframe1.png',
                'work/fl/fl-pframe2.png',
            ]
        },
        {
            title:  'Created paper wireframes',
            text:   [
                'Began drafting paper mockups of how each page should look.',
            ],
            images: [
                'work/fl/fl-pframe3.jpg',
            ]
        },
        {
            title: 'Converted to low-fidelity wireframes',
            text: [
                'Created digital wireframes in Figma to help visualize the site layout and user flow.',
            ],
            images: [
                'work/fl/fl-dframe1.png',
            ]
        },
        {
            title: 'Conducted usability testing',
            text: [
                'Conducted usability testing with real users to gather feedback and identify areas for improvement. Some of the feedback:',
                {
                    list: [
                        'Several of the users noticed that they have to navigate to the Home page or Ask page to update their questions. Needs to be a quicker way for users to refine or update queries.',
                        'The Share and Print options were missed in a few of the studies that would allow users to share content. These would need to be more prominently displayed to the user.'
                    ]
                }
            ]
        },
        {
            title: 'Created high-fidelity mockups',
            text: [
                'Refined the wireframes based on feedback from usability testing and created high-fidelity mockups in Figma.',
            ],  
            images: [
                    'work/fl/fl-mock1.png',
                ]
        },
    ]
};

export const mockups = {
    button: {
        name: 'Figma',
        link: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=28-242&t=7r8PqfSf9rv4qlZX-1&scaling=min-zoom&page-id=28%3A187&starting-point-node-id=28%3A242&mode=design',
        icon: 'mdi-open-in-new'
    },
    sticker: {
        src: 'work/fl/fl-sticker.png',
    },
    list: [
        {
            title: 'Home',
            lofi: {
                src: 'work/fl/fl-dframe1.png',
                caption: 'Adds a textarea and Submit button as a Call to Action to the page so the user has a quick way to query the site.'
            },
            hifi: {
                src: 'work/fl/fl-mock1.png',
                caption: 'Used Microsoft Fluent UI for the components. A background image was added to complement the AI-generated workflow. Scrolling below displays a most recently searched section with links to quickly generate content.'
            },
        },
        {
            title: 'Query page',
            lofi: {
                src: 'work/fl/fl-dframe2.png',
                caption: 'After the user submits a question, this page is generated with the main answer on top. Additional information is laid out below with links to more content.'
            },
            hifi: {
                src: 'work/fl/fl-mock2.png',
                caption: 'The question component near the navbar is now clickable for the user to quickly refine or update their question; and re-submit. The Share and Print options are added to the right of the page and fixed whenever the user scrolls.'
            },
        },
        {
            title: 'Section page',
            lofi: {
                src: 'work/fl/fl-dframe3.png',
                caption: 'Based on the information given, the content may lay out as a grid of items. When clicked, the query page would be loaded with content based on the selection. The question section near the navbar lets the user keep track of what current question has been asked.'
            },
            hifi: {
                src: 'work/fl/fl-mock3.png',
                caption: 'The layout is kept the same; and used the Card components to separate each item. The Share and Print options are also on the right of the page.'
            },
        }
    ]
};

export const accessibility = [
    {
        name:   'Color contrast',
        text:   [
            'Ensured sufficient color contrast between text and background elements to meet WCAG AA standards.',
        ],
    },
    {
        name:   'Easy to understand elements',
        text:   [
            'Textboxes, links, and buttons are clearly defined in each page.',
        ],
    },
    {
        name:   'Large clickable areas',
        text:   [
            'Elements are able to be clicked on desktop and touched on mobile.',
        ],
    },    
];


export const results = [
    'Created a site with a search workflow that gives members all the needed information.',
    'Adds an editable query for members to quickly edit and update.',
    'A navigation menu that highlights the latest video game consoles and equipment.',
];


export const lessons = [
    'Working on this project, I have gained more knowledge in using Figma\'s assets panel. This has proved very beneficial when prototyping the project to reuse assets, components, and layout structure.',
    'It has also given me experience around AI-generated queries; AI can be very powerful and informative when generating requests.'
];
