
export const prevLink = 'prints';
export const nextLink = 'four';

export const info = {
    title:      'K&A Morrisey Cleaning Services',
    type:       'all',
    color:      '#444c95',
    link:       'ka',
    caption:    'Responsive site for the family janitorial business',
    role:       "UX Designer, Front-End Developer",
    ux:         "Figma, Inkscape",
    fe:         "HTML, SASS, JavaScript, Vue JS",
    date:       "Jan 2019, updated Jun 2023",
    logo:       "work/ka/ka-desktop.png",
    
    viewButtons: [
        {
            name: 'Live Site',
            link: 'https://ka-clean.com/',
            icon: 'mdi-open-in-new'
        },
        {
            name: 'Case Study',
            link: 'https://docs.google.com/presentation/d/181XSVIOJkkjA9xZBpeepm3Is4oX9U1xV_AqXgBc-NXU/edit?usp=sharing',
            icon: 'mdi-presentation'
        },
        {
            name: 'Figma',
            link: 'https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=86-243&scaling=scale-down&page-id=86%3A130&starting-point-node-id=86%3A243',
            icon: 'mdi-open-in-new'
        },
        {
            name: 'GitHub',
            link: 'https://github.com/keljr021/ka-clean-2023',
            icon: 'mdi-github'
        },
    ]
};

export const overview = {
    image: 'work/ka/logo-ka-2023.png',
    problem: [
        'Local janitorial business is looking for an online presence to advertise to potential customers in Sampson County. The previous website experience did not provide a good user experience for potential customers, needing improvement.',

    ],
    goal: [
        'Improve the user experience for the website. The idea was to better showcase the company janitorial services offered and give a more streamlined way to connect customers to the business.'
    ],
};

export const research = [
    {
        type:   'card',
        size:   6,
        images: [
            {
                src:     'work/ka/ka-persona.png',
                caption: 'Started with a persona to help define the target audience for the site. The persona is based on a potential customer that would be looking for janitorial services around their area.'
            },
        ],
        text: [
                'Started with a persona to help define the target audience for the site. The persona is based on a potential customer that would be looking for janitorial services around their area.'
        ]
    },
        {
        type:   'card',
        size:   6,
        images: [
            {
                src:     'work/ka/ka-audit.png',
                caption: 'Then drafted a competitive audit to analyze the strengths and weaknesses of competitors in the janitorial services industry. The audit helped identify opportunities to differentiate the business from competitors.'
            },
        ],
        text: [
                'Then drafted a competitive audit to analyze the strengths and weaknesses of competitors in the janitorial services industry. The audit helped identify opportunities to differentiate the business from competitors.',
        ]
    },
];

export const design = {
    timeline: [
        {
            title:  'Defined goals and objectives',
            text:   [
                'From documenting the user map, there were several opportunities to improve the user experience, including:',


                {
                    list: [
                        'Proper communication with the user after a Contact Form has been sent.',
                        'Search engines needs to be able to find the business website.',
                        'Client\'s contact information needs to be in a more accessible area.',
                    ]
                }
            ]
        },
        {
            title:  'Created a sitemap',
            text:   [
                'Organized notes into a sitemap to help visualize the site structure and user flow.',
            ],
            images: [
                'work/ka/ka-sitemap.png',
            ]
        },
        {
            title: 'Drafted low-fidelity wireframes',
            text: [
                'Started to create digital wireframes in Figma using the sitemap and notes.',
            ],
            images: [
                'work/ka/ka-dframe1.png',
            ]
        },
        {
            title: 'Conducted usability testing',
            text: [
                'Hosted a quick usability test with a few end users. Noted all positive and negative feedback from the site with the below notes:',
                {
                    list: [
                        'The Contact and Contact Form areas confused end users when attempting to contact the client.',
                        'Contact Information would need to be more streamlined for end users.',
                        'Navigation and scrolling to the proper section was clunky and needed to be revised.'
                    ]
                }
            ],
            images: [
                'work/ka/ka-study.png',
            ]
        },
        {
            title: 'Created high-fidelity mockups',
            text: [
                'Refined the wireframes based on feedback from usability testing and created high-fidelity mockups.',
            ],  
            images: [
                    'work/ka/ka-mock1.png',
                ]
        },
    ]
};

export const dev = {
    button: {
        name: 'Github',
        link: 'https://github.com/keljr021/ka-clean-2023',
        icon: 'mdi-github'
    },
    timeline: [
        {
            title:  'Created a new Vue project',
            text:   [
                'Used Vue CLI to generate the proper configs, then removed the excess files generated.',
            ],
            images: [
                'work/ka/ka-dev1.png',
            ]
        },
        {
            title:  'Added Vuetify and scaffholded the components',
            text:   [
                'Created the sections for index site.',
                'Used the sitemap and wireframes as a reference for developing the layout and child components.',
            ],
            images: [
                'work/ka/ka-dev2.png',
            ]
        },
        {
            title:  'Added styles for each corresponding section',
            text:   [
                'Aligned with Figma for proper styling; and used SASS for consistent classes. Also added Parallax scrolling to background images.',
            ],
            images: [
                'work/ka/ka-parallax.gif'
            ]
        },
        {
            title:  'Breakpoints for mobile and tablet views',
            text:   [
                'Added the proper breakpoints and updated styles for proper responsive viewing on both desktop and mobile devices.',
            ],  
            images: [
                'work/ka/ka-mobile.gif',
            ]
        },
        {
            title:  'Final testing and cleanup',
            text:   [
                'Manually tested the site on both desktop and mobile devices. Added a favicon and cleaned up code.',
            ],
            images: [
                'work/ka/ka-mock1.png',
            ]
        }
    ]
};

export const mockups = {
    button: {
        name: 'Figma',
        link: 'https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=86-243&scaling=scale-down&page-id=86%3A130&starting-point-node-id=86%3A243',
        icon: 'mdi-open-in-new'
    },
    sticker: {
        src: 'work/ka/ka-sticker.png',
    },
    list: [
        {
            title: 'Call to Action',
            lofi: {
                src: 'work/ka/ka-dframe1.png',
                caption: 'Define the business and a brief blurb on about the client with a placeholder for the image background. Also added a large button to contact the client front and center.'
            },
            hifi: {
                src: 'work/ka/ka-mock1.png',
                caption: 'Added the logo in the center of the page. The content was given more spacing from the wireframes; and the button was replaced with links for each section of the site. The bottom has a fixed button that slides out with the user\'s contact information when clicked.'
            },
        },
        {
            title: 'Services',
            lofi: {
                src: 'work/ka/ka-dframe2.png',
                caption: 'Lists the different types of service items the client offers in a three-column layout.'
            },
            hifi: {
                src: 'work/ka/ka-mock2.png',
                caption: 'The service layout is kept the same from the wireframes, with the icons representing each service item.'
            },
        },
        {
            title: 'Contact',
            lofi: {
                src: 'work/ka/ka-dframe3.png',
                caption: 'Gives the client\'s information and a possible map to show the client\'s location.'
            },
            hifi: {
                src: 'work/ka/ka-mock3.png',
                caption: 'Updated the section to include the Contact Form button, and a Google Maps iFrame to show the client\'s location.'
            },
        },
        {
            title: 'Contact form',
            lofi: {
                src: 'work/ka/ka-dframe4.png',
                caption: 'A popup that allows the user to Submit a query to the client.'
            },
            hifi: {
                src: 'work/ka/ka-mock4.png',
                caption: 'A popup is defined with an embedded Google Form in the desktop, with a button to close the popup or open the form in a new tab. For mobile members, the Google Form is opened in a new window by default.'
            },
        }
    ]
};

export const accessibility = [
    {
        name:   'Proper color contrast',
        text:   [
            'Ensured sufficient color contrast between text and background elements to meet WCAG AA standards.',
        ],
    },
    {
        name:   'Easy to understand elements',
        text:   [
            'All form elements like textboxes, links, and buttons are clearly defined in each page.',
        ],
    },
    {
        name:   'Accessible elements for both desktop and mobile',
        text:   [
            'Elements are able to be clicked on desktop and touched on mobile. Also created a floating menu to the bottom of the screen to easily access the clients\' contact information.',
        ],
    },    

];


export const gallery = [
    'work/ka/gallery/ka-home.png',
    'work/ka/gallery/ka-services.png',
    'work/ka/gallery/ka-contact.png',
]


export const results = [
    'Created a responsive site with items fully accessible for the end user.',
    'Reduced navigation to one-page format for each section',
    'Quick links from the Call to Action to quickly access information.',
    'Contact information fixed to the bottom-right menu for easier access.',
];


export const lessons = [
    'I gained experience in user interviews and incorporating client feedback within mockups and prototypes.',
    'During this project, I\'ve also learned how to validate color contrasts with the WCAG AA guidelines moving forward.'
];
