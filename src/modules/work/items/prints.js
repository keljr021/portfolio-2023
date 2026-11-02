
export const info = {
    title:      'Prints Webcomics',
    type:       'all',
    color:      '#4e4c67',
    link:       'prints',
    caption:    'Site to host and share comics',
    role:       "UX Designer, Logo Designer, Front-End Developer",
    ux:         "Figma, Inskape",
    fe:         "Vue JS, Bulma, Buefy",
    date:       "Aug 2023",
    logo:       "work/pr/pr-desktop.png",
    
    viewButtons: [
        {
            name: 'Site',
            link: 'https://poc.kelvin-m.com/prints-webcomics/#/',
            icon: 'mdi-link'
        },
                {
            name: 'Case Study',
            link: 'https://docs.google.com/presentation/d/1z19usKB6X4M1UkUDd9nJR8McTN70s8uCAhEH86uzqX0/edit?usp=sharing',
            icon: 'mdi-presentation'
        },
        {
            name: 'GitHub',
            link: 'https://github.com/keljr021/prints-webcomics',
            icon: 'mdi-github'
        },
        {
            name: 'Figma Prototype',
            link: 'https://www.figma.com/proto/Q3vhPUsXjeRLio6iVKsHDs/Prints-Webcomics-and-Hosting?page-id=30%3A1292&node-id=30-1293&node-type=FRAME&viewport=1018%2C386%2C0.15&t=7rVDl1AC6erlbujd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=30%3A1293',
            icon: 'mdi-open-in-new'
        }
    ]
};

export const overview = {
    image: 'logo-pr.png',
    problem: [
        "Artists are looking for a site to host and share their comic series; but the options available can be complex and difficult to understand. From a viewer's perspective, there are various sites available; but the user interface is very clunky and inaccessible.",

    ],
    goal: [
        "Design a site to host and view webcomics with an easy-to-use user interface, that improves the experience for all users.",
    ],
};

export const research = [
    {
        type:   'card',
        title:  '',
        size:   6,
        images: [
            {
                src:     'work/pr/pr-audit.png',
                caption: 'Started with a competitive audit of direct and indirect competitors for online webcomic sites. Documented the advantages and challenges of each site; and identified opportunities for improvement.'
            },
        ],
        text: [
                'Started with a competitive audit of direct and indirect competitors for online webcomic sites. Documented the advantages and challenges of each site; and identified opportunities for improvement.',
        ]
    },
    {
        type:   'card',
        title:  '',
        size:   6,
        images: [
            {
                src:     'work/pr/pr-persona2.png',
                caption: 'Created user personas for both webcomic artists and viewers.'
            },
        ],
        text: [
                'Created user personas for both webcomic artists and viewers.',
        ]
    }
];

export const design = {
    timeline: [
        {
            title:  'Defined goals',
            text:   [
                'From the above research, I have defined the following goals:',
                {
                    list: [
                        'Keep the site layout clean while focusing on the content.',
                        'Ensure the site is accessible and easy to navigate for all users.',
                        'The web comic view interface should be unobtrusive for both desktop and mobile views.',
                    ]
                }
            ]
        },
        {
            title:  'Organized notes to create a sitemap ',
            text:   [
                'Generated notes from the research and organized them into a sitemap to help visualize the site structure and user flow.',
            ],
            images: [
                'work/pr/pr-pframe1.png',
                'work/pr/pr-pframe4.png',
            ]
        },
        {
            title:  'Created paper wireframes',
            text:   [
                'Began drafting paper mockups of how each page should look like for both desktop and mobile views.',
            ],
            images: [
                'work/pr/pr-pframe5.jpg',
                'work/pr/pr-pframe6.jpg',
            ]
        },
        {
            title: 'Converted to low-fidelity wireframes',
            text: [
                'Created digital wireframes in Figma to help visualize the site layout and user flow.',
            ],
            images: [
                'work/pr/pr-dframe1.png',
            ]
        },
        {
            title: 'Conducted usability testing',
            text: [
                'Conducted usability testing with real users to gather feedback and identify areas for improvement.',
            ]
        },
        {
            title: 'Created high-fidelity mockups',
            text: [
                'Refined the wireframes based on feedback from usability testing and created high-fidelity mockups in Figma.',
            ],  
            images: [
                    'work/pr/pr-mock1.png',
                ]
        },
    ]
};

export const dev = {
    timeline: [
        {
            title:  'Test title',
            text:   [
                'This is a text title.',
            ],
            images: [
                'logo-pr.png',
                'logo-pr.png',
            ]
        },
        {
            title:  'Test title 2',
            text:   [
                'This is a text title.',
            ],
            images: [
                'logo-pr.png',
                'logo-pr.png',
            ]
        },
        {
            title:  'Test title 3',
            text:   [
                'This is a text title.',
            ],
            images: [
                'logo-pr.png',
                'logo-pr.png',
            ]
        }
    ],
    section: [
        {
            type:   'card',
            title:  'Card 1',
            text:   [
                'This is text',
                'This is text',
            ],
        },
        {
            type:   'image',
            images: [
                {
                    src:    'work/pr/pr-desktop.png',
                    caption: 'This is a text caption.'
                },
            ]
        },
    ],
};

export const mockups = {
    button: {
        name: 'Figma',
        link: 'https://www.figma.com/proto/Q3vhPUsXjeRLio6iVKsHDs/Prints-Webcomics-and-Hosting?page-id=30%3A1292&node-id=30-1293&node-type=FRAME&viewport=1018%2C386%2C0.15&t=7rVDl1AC6erlbujd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=30%3A1293',
        icon: 'mdi-open-in-new'
    },
    sticker: {
        src: 'work/pr/pr-sticker.png',
        caption: 'This is a text caption.'
    },
    list: [
        {
            title: 'Home',
            lofi: {
                src: 'work/pr/pr-dframe1.png',
                caption: 'The Call to Action is upfront with information about the site on the top of the page. An image is added to the left, with the text onto the right. Below the CTA, there are sections for both featured comics and authors.'
            },
            hifi: {
                src: 'work/pr/pr-mock1.png',
                caption: 'The image was scaled to the background; the text layout was kept similar, with an added button for the Genre pages. The featured comics and authors layouts were kept in below the CTA, with an added New Releases section.'
            },
        },
        {
            title: 'Genres',
            lofi: {
                src: 'work/pr/pr-dframe2.png',
                caption: 'The Genres menu is added to the left section, which will show the items available for each. On mobile, this has been replaced with a dropdown. The Comic items are separated in a three-column layout with information on the bottom for desktop; and a two-column layout for mobile.'
            },
            hifi: {
                src: 'work/pr/pr-mock2.png',
                caption: 'The Genres section layout was kept the same. The comic content adds several mock items that shows a title, genre, author, and trigger warnings if needed.'
            },
        },
        {
            title: 'View Comic',
            lofi: {
                src: 'work/pr/pr-dframe3.png',
                caption: 'The image is front and center with two menu buttons on each side. The left menu is to go back, while the right menu holds a submenu for comments, likes, etc. The idea was to keep the menu options out of the way, but available as needed.'
            },
            hifi: {
                src: 'work/pr/pr-mock3.png',
                caption: 'The title was added to the top of the screen. For the menu buttons, I\'ve revised it to only one fixed button on the bottom left of the screen. When selected, a submenu of options are shown, with the back button included into the submenu.'
            },
        }
    ]
};

export const accessibility = [
    {
        name:   'Text Caption 1',
        images: '',
        text:   [
            'This is a text caption',
        ],
    },
    {
        name:   'Text Caption 2',
        images: '',
        text:   [
            'This is a text caption',
        ],
    },
];


export const results = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus justo pellentesque felis lobortis, et hendrerit mauris cursus.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus justo pellentesque felis lobortis, et hendrerit mauris cursus.',
];


export const lessons = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus justo pellentesque felis lobortis, et hendrerit mauris cursus.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus justo pellentesque felis lobortis, et hendrerit mauris cursus.',
];
