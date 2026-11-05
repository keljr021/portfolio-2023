
export const prevLink = 'four';
export const nextLink = 'badgey';

export const info = {
    title:      'Torch Mentorship Network',
    type:       'ux',
    color:      '#993838',
    link:       'to',
    caption:    'Mobile app and website project that connects students with mentors',
    role:       "UX Designer",
    ux:         "Figma, Inkscape",
    date:       "Jan 2023",
    logo:       "work/to/to-desktop.png",
    
    viewButtons: [
        {
            name: 'Case Study',
            link: 'https://docs.google.com/presentation/d/1CbvvBE5rUeZywcQJZRo_OzVhJJSYJrjRe7X77Tes8hE/edit?usp=sharing',
            icon: 'mdi-presentation'
        },
        {
            name: 'Figma Desktop',
            link: 'https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=28%3A11119&scaling=min-zoom&page-id=28%3A11118&starting-point-node-id=28%3A11119',
            icon: 'mdi-open-in-new'
        },
        {
            name: 'Figma Mobile',
            link: 'https://www.figma.com/proto/hgMpXvVZJfJno8AiRug0VC/Torch-Mobile-App?node-id=58-3934&scaling=scale-down&page-id=58%3A3610&starting-point-node-id=58%3A3934',
            icon: 'mdi-open-in-new'
        }
    ]
};

export const overview = {
    image: 'work/to/logo-to.png',
    problem: [
        "When students attempt to find a mentor, often there are missed opportunities during college studies to connect with an experienced mentor in their field of study.",

    ],
    goal: [
        "Create a dedicated mobile app and responsive web site that gives users a better solution to connect with fellow mentors in their career field.",
    ],
};

export const research = [
    {
        type:   'card',
        title:  '',
        size:   6,
        images: [
            {
                src:     'work/to/to-persona.png',
                caption: 'Created user personas for both webcomic artists and viewers.'
            },
        ],
        text: [
                'Created a user persona for a student that is struggling to find a mentor within his field of study.',
        ]
    },
    {
        type:   'card',
        title:  '',
        size:   6,
        images: [
            {
                src:     'work/to/to-audit.png',
                caption: 'Created a competitive audit of direct and indirect competitors for networking events that can connect a student with a proper mentor. From there, documented opportunities and areas to highlight for this project.'
            },
        ],
        text: [
                'Created a competitive audit of direct and indirect competitors for networking events that can connect a student with a proper mentor. From there, documented opportunities and areas to highlight for this project.',
        ]
    },

];

export const design = {
    timeline: [
        {
            title:  'Defined project goals',
            text:   [
                'Organized the following goals from documenting the above personas and audits:',
                {
                    list: [
                        'Create an easy to navigate home page for desktop users.',
                        'When filling out a form, should add a user\'s profile info from their account. This would allow for quicker form submissions.',
                        'Mentor availability status is kept up-to-date within the app.'
                    ]
                }
            ]
        },
        {
            title:  'Drafted paper wireframes and sitemap',
            text:   [
                'I used the "Crazy Eights" method to quickly brainstorm some ideas on paper.',
                'From there, I\'ve also drafted three separate versions of each page, and picked out ideas from each one by marking an asterisk on the chosen sections.',
                'Then created a sitemap to organize the sections; would benefit both the mobile app and the upcoming responsive site.'
            ],
            images: [
                'work/to/to-pframe2.jpg',
                'work/to/to-sitemap.png',
            ]
        },
        {
            title: 'Converted to low-fidelity wireframes',
            text: [
                'Created digital wireframes for Figma. I\'ve focused on the mobile application first, then created wireframes for the responsive site.',
            ],
            images: [
                'work/to/to-dframe5-alt.png',
            ]
        },
        {
            title: 'Conducted usability testing',
            text: [
                'There were several areas discovered after the usability testing.',
                {
                    list: [
                        'There was inconsistent workflow in the Mentor Search between navigation and the headers.',
                        'A majority of the testers had difficulty navigating through each page and would need to be improved.',
                        'The Article page confused a majority of the users when navigated. This would need refactoring in the upcoming prototype.'
                    ]
                }
            ],
            images: [
                'work/to/to-study.png',
            ]
        },
        {
            title: 'Drafted high-fidelity mockups',
            text: [
                'Refined the wireframes based on feedback from usability testing.',
            ],  
            images: [
                    'work/to/to-site1-alt.png',
                ]
        },
    ]
};

export const mockups = {
    buttons: [
        {
            name: 'Figma Mobile',
            link: 'https://www.figma.com/proto/hgMpXvVZJfJno8AiRug0VC/Torch-Mobile-App?node-id=58-3934&scaling=scale-down&page-id=58%3A3610&starting-point-node-id=58%3A3934',
            icon: 'mdi-open-in-new'
        },
        {
            name: 'Figma Desktop',
            link: 'figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=28%3A11119&scaling=min-zoom&page-id=28%3A11118&starting-point-node-id=28%3A11119',
            icon: 'mdi-open-in-new'
        }
    ],
    sticker: {
        src: 'work/to/to-sticker.png',
    },
    list: [
        {
            title: 'Mobile App - Home',
            lofi: {
                src: 'work/to/to-dframe1.png',
                caption: 'Adds a quick Title and message on the top page with an image placeholder. The sections below would be a quick link to various options and articles found on the site.'
            },
            hifi: {
                src: 'work/to/to-mobile1.png',
                caption: 'Instead of a long site, I\'ve refactored the site in the mockups to show a full screen login page front and center.'
            },
        },
        {
            title: 'Mobile App - Feed',
            lofi: {
                src: 'work/to/to-dframe1.png',
                caption: 'Derived from the Home page. The sections below would be a quick link to various options and articles found on the site.'
            },
            hifi: {
                src: 'work/to/to-mobile2.png',
                caption: 'I\'ve Used the previous Home layout from the wireframes for this page, with quick links and notifications after login.'
            },
        },
        {
            title: 'Mobile App - Find a mentor',
            lofi: {
                src: 'work/to/to-dframe2.png',
                caption: 'This page is similar to the mobile app, giving the users two options to select from. The images were created from Blush Designs.'
            },
            hifi: {
                src: 'work/to/to-mobile3.png',
                caption: 'Modified the layout structure, and added instructional text based on user feedback from the lo-fi prototype.'
            },
        },
        {
            title: 'Mobile App - Mentor profile',
            lofi: {
                src: 'work/to/to-dframe3.png',
                caption: 'Gives a page that displays a mentor\'s information; such as area of study.'
            },
            hifi: {
                src: 'work/to/to-mobile4.png',
                caption: 'Kept the structure similar to prototype, but adds two more buttons for students to quickly connect with a mentor.'
            },
        },
        {
            title: 'Site - Home',
            lofi: {
                src: 'work/to/to-dframe5-alt.png',
                caption: 'I wanted to give a quick way to either login or create a new account in the Call to Action. The navbar and account components were used from Salesforce\'s Lightning UI Kit.'
            },
            hifi: {
                src: 'work/to/to-site1-alt.png',
                caption: 'The Call to Action was modified to remove the two Username and Password textboxes. It also includes an image symbolizing the brand.'
            },
        },
        {
            title: 'Site - Feed',
            lofi: {
                src: 'work/to/to-dframe6.png',
                caption: 'This page is shown after a member logs into their account. The idea is to give them the sections as buttons they can click on to prevent searching for options. On the right is a notification section that pops in when a member has a message or important information from the site. The Chat icon should be a fixed button on the bottom right corner.'
            },
            hifi: {
                src: 'work/to/to-site2.png',
                caption: 'The mobile layout was referenced with this page. Components were shifted accordingly to make use of the wider screen.'
            },
        },
        {
            title: 'Site - Find a mentor',
            lofi: {
                src: 'work/to/to-dframe7.png',
                caption: 'This page is similar to the mobile app, giving the users two options to select from. The images were created from Blush Designs.'
            },
            hifi: {
                src: 'work/to/to-site3.png',
                caption: 'Keeps the same options, but adds a card component to the options for better accesssibility.'
            },
        },
        {
            title: 'Site - Chat',
            lofi: {
                src: 'work/to/to-dframe8.png',
                caption: 'This shows the behavior when the Chat button is pressed.'
            },
            hifi: {
                src: 'work/to/to-site4.png',
                caption: 'The Chat component was mostly kept the same, with some added styling.'
            },
        },
    ]
};

export const accessibility = [
    {
        name:   'Consistent styling',
        text:   [
            'Ensured that the styles are consistent across the mobile and web application.',
        ],
    },
    {
        name: 'Easily defined elements',
        text: [
            'All form elements, buttons, and links are defined.'
        ]
    },
    {
        name: 'Clear language',
        text: [
            'Application has plain language to understand each page.'
        ]
    }
];


export const results = [
    'Created mocks for a mobile app and web site with consistent branding across each view.',
    'Consistent navigation across all pages.',
    'Easy to navigate workflow for students and mentors accessing the site.',
];


export const lessons = [
    'I discovered a great insight on the importance of Information Architecture in web design. Creating an organized sitemap, and understanding how the data should be structured is critical when designing a new app or website.'
];
