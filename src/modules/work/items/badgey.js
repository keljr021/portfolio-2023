
export const prevLink = 'to';
export const nextLink = 'reys';

const figmaLink = 'https://www.figma.com/proto/e6yZ3D35MfUyAiAZysIW8n/Badgey-Online-Badge-Site?page-id=53%3A970&node-id=368-2558&viewport=347%2C228%2C0.05&t=0wvuJ6BeI860sety-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=506%3A3468';
const githubLink = 'https://github.com/keljr021/badgey';

export const info = {
    title:      'Badgey Badges (site in progress)',
    type:       'ux',
    color:      '#2a5547',
    link:       'badgey',
    caption:    'Platform to create and share event badges',
    role:       "UX Designer, Front-End Developer",
    ux:         "Figma, Inkscape",
    fe:         "Vue JS, Konva JS, Nuxt UI",
    date:       "Mar 2026 (Ongoing)",
    logo:       "work/badgey/badgey-desktop.png",
    
    viewButtons: [
        {
            name: 'Figma',
            link: figmaLink,
            icon: 'mdi-open-in-new'
        },
        {
            name: 'GitHub',
            link: githubLink,
            icon: 'mdi-github'
        },
    ]
};

export const overview = {
    image: 'work/badgey/badgey-logo.png',
    problem: [
        'Convention attendees would like a souvenir of some sort to display and show the type of convention or event they have attended. Attendees can be given a physical item; but over time can be lost or damaged.',

    ],
    goal: [
        'Create an online platform to display digital badges based on the event.'
    ],
};

export const research = [
    {
        type:   'card',
        size:   6,
        images: [
            {
                src:     'work/badgey/badgey-persona.png',
                caption: 'x'
            },
        ],
        text: [
                'Started with creating a persona for a user who attends conventions, and loves to collect souvenirs after attending. However, over the years these items often gets misplaced.'
        ]
    },
        {
        type:   'card',
        size:   6,
        images: [
            {
                src:     'work/badgey/badgey-usermap.png',
                caption: 'Then organized notes regarding her experience and created a usermap detailing the steps taken when finding a souvenir.'
            },
        ],
        text: [
                'Then organized notes regarding her experience and created a usermap detailing the steps taken when finding a souvenir.',
        ]
    },
];

export const design = {
    timeline: [
        {
            title:  'Documented notes',
            text:   [
                'Written down all ideas for the site, along with features based on the personas and user maps. Documented general ideas for pages, data structures, and sitemaps.'
            ],
            images: [
                'work/badgey/badgey-notes.png',
            ]
        },
        {
            title:  'Created sitemap',
            text:   [
                'Generated a sitemap of the site layout based on the documented notes.',
            ],
            images: [
                'work/badgey/badgey-outline.png',
            ]
        },
        {
            title: 'Created wireframes based on the sitemap',
            text: [
                'Started up Figma to generate wireframes for both desktop and mobile flows.'
            ],
            images: [
                'work/badgey/badgey-wire1.png',
            ]
        },
        {
            title: 'Conducted a usability study',
            text: [
                'From the study, documented areas of friction and opportunities for improvement; mainly for the Create Badge workflows. ',
                {
                    list: [
                        'The workflow was non-existent and needs to be more interactive',
                        'There was also no way to Publish a new badge',
                    ]
                }
            ],
            images: [
                'work/badgey/badgey-study.png',
            ]
        },
        {
            title: 'Refined wireframes and created mockups',
            text: [
                'Used the feedback from the study to update the Create Badge workflow.',
                'Selected a proper color palette and checked the WCAG contrast to make sure colors were accessible as well.'
            ],
            images: [
                'work/badgey/badgey-mock1.png',
            ]
        }
    ]
};

export const mockups = {
    button: {
        name: 'Figma',
        link: figmaLink,
        icon: 'mdi-open-in-new'
    },
    sticker: {
        src: 'work/badgey/badgey-sticker.png',
    },
    list: [
        {
            title: 'Home',
            lofi: {
                src: 'work/badgey/badgey-wire1.png',
                caption: 'Created a Call to Action that gives a brief blurb about the site with a button to directly login or create an account; with an image placeholder to the side.'
            },
            hifi: {
                src: 'work/badgey/badgey-mock1.png',
                caption: 'Updated the Call to Action to show a background with an opaque image, with the blurb and button in the center of the page.'
            },
        },
        {
            title: 'Dashboard',
            lofi: {
                src: 'work/badgey/badgey-wire2.png',
                caption: 'Once the user is logged in or account is created, this page is loaded with options to quickly access the links without going to the navbar. Added placeholder images for the user account profile and icons.'
            },
            hifi: {
                src: 'work/badgey/badgey-mock2.png',
                caption: 'The Dashboard adds a sample image with the account user\'s name and last login date. The links were refactored to be a row of 2x2 cards of equal length. On mobile these cards will stack on top of one another.'
            },
        },
        {
            title: 'Create Badge',
            lofi: {
                src: 'work/badgey/badgey-wire3.png',
                caption: 'Created a badge canvas in the center with an menu on the left. The accordion show several sections that allows members to open drafts, insert shapes, text, and images. There is also an option to Undo and Redo steps.'
            },
            hifi: {
                src: 'work/badgey/badgey-mock3.png',
                caption: 'The page is updated with Nuxt UI elements. The menu on the left is refactored from accordions to a smaller menu with a window that displays options based on the selected items.'
            },
        },
        {
            title: 'Manage Badges',
            lofi: {
                src: 'work/badgey/badgey-wire4.png',
                caption: 'There are two tabs with badges obtained, and badges the user owns. The badges are displayed in a grid that shows the badge description when clicked.'
            },
            hifi: {
                src: 'work/badgey/badgey-mock4.png',
                caption: 'The tabs are updated with Nuxt UI tabs, with an added Drafts tab. The badges were randomized, and displays a modal when clicked that shows the badge description.'
            },
        },
        {
            title: 'Redeem Badge',
            lofi: {
                src: 'work/badgey/badgey-wire5.png',
                caption: 'The Redeem Badge page allows users to enter a badge ID to claim their badge. It also notifies the user that they can scan a corresponding QR code to access their new badge.'
            },
            hifi: {
                src: 'work/badgey/badgey-mock5.png',
                caption: 'The page is kept similar, but with new Nuxt UI cards and custom typography. The elements have been shortened to fit on the entire page.'
            },
        },
    ]
};

export const accessibility = [
    {
        name:   'Color contrast',
        text:   [
            'Validated that the selected colors are WCAG compliant between foreground and background.',
        ],
    },
    {
        name: 'Defined elements across the site',
        text: [
            'Ensured that form and navigation elements are properly defined.'
        ]
    },
    {
        name:   'Plain language',
        text:   [
            'Used simple and clear language for pages and headers.',
        ],
    },
];


export const gallery = [
    'work/badgey/gallery/ba-home.png',
    'work/badgey/gallery/ba-login.png',
    'work/badgey/gallery/ba-dash.png',
    'work/badgey/gallery/ba-followers.png',
    'work/badgey/gallery/ba-create.png',
    'work/badgey/gallery/ba-manage.png',
    'work/badgey/gallery/ba-redeem.png',
    'work/badgey/gallery/ba-claim.png',
];



export const results = [
    'Created a badge creation system with full CRUD options to customize a badge online.',
    'Consistent interface and layout across desktop and mobile devices.',
    'Organized several workflows for account login, badge redeems, and badge management.',
];


export const lessons = [
    'Working on this project taught me a lot about how to organize different workflows into a manageable hand-off to developers. Along with the various components in Figma and using external libraries; this has improved my knowledge in UX design.',
    'As I begin to develop this site, I feel more confident in making sure the styling and layout will match the initial mocks.'
];
