<script>
import WorkItem from './WorkItem.vue'
import WorkImage from './WorkImage.vue'

export default {
    name: 'UiWork',
    components: {
        WorkItem,
        WorkImage
    },
    methods: {
        imgSrc(input) {
            return new URL(`../../assets/${input}`, import.meta.url).href;
        },
        openWindow(link) {
            window.open(link, '_blank');
        }
    }
}
</script>

<template>
    <div class="work-section ui">
        <v-row>
            <v-col>
                <div class="work-subtitle">UI/UX Design</div>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <work-item 
                title="Rey's Restaurant App" 
                caption="A mobile app to streamline the ordering process" 
                :image="imgSrc('reys-mock1.png')"
                imageWidth="80%"
                imageHeight="500"
                company="Rey's Mexican Restaurant"
                date="Sep 2022 - Nov 2022"
                >
                <template v-slot:role>
                    <div>UX Designer</div>
                    <ul>
                        <li>Logo Design</li>
                        <li>Paper and Digital Wireframes</li>
                        <li>Competitive Audits</li>
                        <li>Prototyping</li>
                        <li>Testing</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>Figma</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>During my studies in UI/UX design, I focused on designing a menu app for a Mexican Restaurant. Rey's Mexican Restaurant is a fictional restaurant chain that provides authentic Mexican food with a variety of options.</p>
                    <p>For this project, I focused on designing a new mobile app which will allow customers to browse and order food without waiting in line for long periods of time. I've added a green, red and white color scheme; which resembles the Mexican flag. The idea was to make a family-friendly app with a more authentic feel using the colors and typography.</p>
                </template>
                <template v-slot:challenges>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Problem</h4>
                                <p>Customers have complained about long wait times when ordering lunch, and frustration regarding the accuracy of their orders when ready for pickup.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Goal</h4>
                                <p>Design an app that allows users to order food online, and pick up their order within the allotted time frame; which avoids long waits in line to order, and improves accuracy when picking up their order.</p>
                            </div>
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:body>
                    <div class="work-section">
                        <h4>Summary</h4>
                        <p>During this research, I have conducted empathy maps and personas by interviewing several users that have ordered through this app, and have conducted competitive audits using similar apps as well.</p>
                        <p>I have discovered a handful of features, including updating users with busy schedules about their order pickups; and accessibility options for other users with difficulty understanding English. I've also modified wireframes based on user feedback; including moving the Language features, and modifying the Add to Cart workflows.</p>
                    </div>
                    <div class="work-section">
                        <h4>Pain Points</h4>
                        <ul>
                            <li><b>Budgeting.</b> Users may have a limited budget when ordering food, so it's difficult to find items that are reasonable at the time.</li>
                            <li><b>Order Tracking.</b> There have been frustrations expressed by users who still have to wait on items to be completed even when ordering in advance. Sometimes orders for pickup are inaccurate, which causes frustration for members with limited time. Sitting and waiting for a correction causes longer wait times than previously intended.</li>
                            <li><b>Difficulty with understanding English.</b> Users with English difficulty have limited options on what to order. Additional accessibility for language options would expand the item options for the application.</li>
                        </ul>
                    </div>
                    <div class="work-section">
                        <h4>Persona</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('reys-persona.png')" />
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <div>
                                    <p><b>Cal Murphy.</b> Cal is a busy office manager who needs more accurate order tracking because his time is limited due to his work schedule.</p>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>User Map</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <p>From documenting Cal's User journey, I have discovered the following:</p>
                                <ul>
                                    <li>An Order Tracker would increase the accuracy of takeout orders; and notify users when items are ready for pickup.</li>
                                    <li>Specials section should be added</li>
                                </ul>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('reys-usermap.png')" />
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Paper Wireframes</h4>
                        <v-row>
                            <v-col offset-lg="1" cols="12" sm="12" md="2" lg="3">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-pframe1.jpg')">
                                    Sketched out the general workflow of the app.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="3">
                                <work-image width="100%" :image="imgSrc('reys-pframe2.jpg')">
                                    Then began to brainstorm several rough draft ideas of how the app should look. From these drafts, I've picked a few items from each to add to the final wireframe.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="3">
                                <work-image width="100%" :image="imgSrc('reys-pframe3.jpg')">
                                    Finally, I've drawn up the final version of the wireframes. Above is an example of the Menu pages.
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Digital Wireframes</h4>
                        <v-row>
                            <v-col offset-lg="1" cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-dframe1.png')">
                                    Home
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-dframe2.png')">
                                    Menu Grid View
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-dframe3.png')">
                                    Menu List View
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-dframe4.png')">
                                    Food item when clicked from the menu
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-dframe5.png')">
                                    Order Tracker
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Mockups</h4>
                        <v-row>
                            <v-col offset-lg="1" cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-mock1.png')">
                                    Home - Added a Cart icon and Account button to the navigation.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-mock2.png')">
                                    Menu using Grid View - The Grid and List buttons were grouped to show the relation among one another.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-mock3.png')">
                                    Menu using List View - For the list items, added a description to each item.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-mock4.png')">
                                    Food item when clicked from the menu - Added an icon to go back to the Menu screen.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="2" lg="2">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-mock5.png')">
                                    Order Tracker - Added Order number and time on top instead of the bottom area.
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Prototypes</h4>
                        <v-row class="justify-center">
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <div>
                                    <v-img height="300" :src="imgSrc('reys-lofi.png')" />

                                    <div class="py-4 text-center">
                                        <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/VaAdj9uN0B0Oh85trN10t6/Mexican-Restaurant-App---Lo-Fi-Prototype?node-id=1%3A6&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A6')">
                                            <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                            Lo-Fi Prototype
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <v-img height="300" :src="imgSrc('reys-hifi.png')" />
                                <div class="py-4 text-center">
                                    <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/5NxCYVA06z3PUwJN9qYVR1/Mexican-Restaurant-App---Revised?node-id=140%3A485&scaling=scale-down&page-id=140%3A2&starting-point-node-id=140%3A485')">
                                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                        Hi-Fi Prototype
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Accessibilty</h4>
                        <ul>
                            <li>For color, I've validated with the WebAIM contrast checker to ensure all colors were selected with accessibility in mind.</li>
                            <li>Ensured that most icons have text associated with the type of action that is expected to help with screen reading.</li>
                            <li>An option was added to modify the language of the entire app from the Menu section; which allows non-English users set another language when viewing the app.</li>
                        </ul>
                    </div>

                </template>
                <template v-slot:results>
                    <div class="work-section">
                        <h4>Lessons Learned</h4>
                        <p>From working on this app, I have learned the great importance of usability studies and user feedback. It has given me insight to areas that were not thought about during the prototyping phase of the app. Going through the process has been very beneficial to designing in the future.</p>
                    </div>
                    <div class="work-section">
                        <h4>Next Steps</h4>
                        <ol>
                            <li>Continue with a webpage for desktop users to give customers an additional online option for the restaurant.</li>
                            <li>Added a UI framework (such as Material UI) to streamline the mockups and prototyping phase.</li>
                            <li>Conduct another usability study on the high-fidelity designs. There may be an additional feature or section that could be improved in the future.</li>
                        </ol>
                    </div>
                    <div v-if="$vuetify.display.xs">
                        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://docs.google.com/presentation/d/1L7N0_CG95WT4dYPjiDQqjJcviKUniSmyCGsc_-OxTvg/edit?usp=sharing')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Case Study PPT
                        </v-btn>
                    </div>
                </template>
                <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://docs.google.com/presentation/d/1L7N0_CG95WT4dYPjiDQqjJcviKUniSmyCGsc_-OxTvg/edit?usp=sharing')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Case Study PPT
                    </v-btn>
                    <v-btn  class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://www.figma.com/proto/5NxCYVA06z3PUwJN9qYVR1/Mexican-Restaurant-App---Revised?node-id=140%3A485&scaling=scale-down&page-id=140%3A2&starting-point-node-id=140%3A485')">
                        <v-icon class="mr-2">mdi-open-in-new</v-icon>
                        View Prototype
                    </v-btn>
                </template>
            </work-item>


            <work-item 
                title="LemonBranch DIY Site" 
                caption="A responsive website to search and view tutorials and how-tos" 
                :image="imgSrc('lb-home-rev.png')"
                imageWidth="100%"
                company="LemonBranch LTD"
                date="Nov 2022 - Dec 2022"
                >
                <template v-slot:role>
                    <div>UX Designer</div>
                    <ul>
                        <li>Logo Design</li>
                        <li>Paper and Digital Wireframes</li>
                        <li>Competitive Audits</li>
                        <li>Prototyping</li>
                        <li>Testing</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>Adobe XD</li>
                        <li>Clip Studio Paint</li>
                        <li>Inkscape</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>During my studies in UI/UX design, one of my projects was to design a responsive website for searching and viewing online DIY tutorials. LemonBranch is a fictional company that hosts various online tutorials to view; and also allows members to create their own tutorials.</p>
                    <p>For this project, I kept a minimal color scheme, and focused on functionality with a search feature with filtering and sort options, while making the designs as responsive as possible for mobile.</p>
                </template>
                <template v-slot:challenges>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Problem</h4>
                                <p>Users often have to use various search engines to find a tutorial; which can generate inaccurate results, causing frustration.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Goal</h4>
                                <p>Give users an option to find and view tutorials online in a streamlined way so members are able to fix and work on items without paying a professional, saving themselves money.</p>
                            </div>
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:body>
                    <div class="work-section">
                        <h4>Persona</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('lb-persona.png')" />
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <div>
                                    <p><b>Jerry Lyn.</b> Jerry is a newlywed Network Admin who has recently purchased his first house. He often uses his phone to find quick tutorials on different projects to help him navigate home ownership.</p>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>User Map</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <p>From documenting Jerry's User journey, I have discovered the following opportunities:</p>
                                <ul>
                                    <li>Sections, filter, and sort options would improve search queries</li>
                                    <li>Add a comment and rating system to each tutorial item</li>
                                    <li>Filter between video or article tutorials</li>
                                </ul>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('lb-usermap.png')" />
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Paper Wireframes</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-sitemap.png')">
                                    Brainstormed a sitemap to document the types of pages that would be needed.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-pframe1.jpg')">
                                    Started to draw several rough drafts of the site and it's corresponding pages.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-home-drafts.jpg')">
                                    Used Clip Studio Paint to draw up a few rough drafts of the Home page, and highlighted the items that should be in the final draft.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-pframe3.jpg')">
                                    Finally, I've drawn up the final version of the wireframes.
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Digital Wireframes</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-dframe1.png')">
                                    Home
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-dframe2.png')">
                                    Search Results page
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-dframe3.png')">
                                    Tutorial article page
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-dframe4.png')">
                                    Author page
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Mockups</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-home-rev.png')">
                                    Home - Added an image on the home page to enhance the message of the site.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-search-query.png')">
                                    Search Results - Updated the query items using a rating system and author. Used a light green background to separate the results section.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-tutorial.png')">
                                    Tutorial article page - Added print and enlarge font icons, with different typography for the title. 
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('lb-author.png')">
                                    Author page - Updated the typography of the page, and updated the body text with indentation to separate from the title and subtitle.
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Prototypes</h4>
                        <v-row class="justify-center">
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <div>
                                    <v-img height="300" :src="imgSrc('lb-lofi.png')" />

                                    <div class="py-4 text-center">
                                        <v-btn variant="outlined" @click="openWindow('https://xd.adobe.com/view/25553f55-f5fc-4c50-9954-ab41db3bf124-7006/?fullscreen')">
                                            <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                            Lo-Fi Prototype
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img height="300" :src="imgSrc('lb-hifi.png')" />
                                <div class="py-4 text-center">
                                    <v-btn variant="outlined" @click="openWindow('https://xd.adobe.com/view/39ebb787-4097-4220-85a0-e901d27a116f-6cb8/?fullscreen')">
                                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                        Hi-Fi Prototype
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Accessibilty</h4>
                        <ul>
                            <li>Kept the color scheme minimal to give more focus on the content</li>
                            <li>Web content are grouped together when elements are similar</li>
                            <li>Buttons and input fields are clearly defined</li>
                        </ul>
                    </div>

                </template>
                <template v-slot:results>
                    <div class="work-section">
                        <h4>Lessons Learned</h4>
                        <p>During the prototyping phase of this project, I've gained more experience in using the Components and Library options in Adobe XD. Using these options will streamline prototyping in the future.</p>
                    </div>
                    <div class="work-section">
                        <h4>Next Steps</h4>
                        <ol>
                            <li>Currently the site only has text versions of tutorials. I would add a video version of these pages, along with the video and text filtering as well.</li>
                            <li>I would also add in tablet responsive views, to ensure the prototype also handle tablet view</li>
                            <li>I would slightly restructure the site map and navigation. For example, having a search page alongside the search bar during the navigation could cause confusion.</li>
                        </ol>
                    </div>
                </template>
                <template v-slot:buttons>
                    <v-btn v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://xd.adobe.com/view/39ebb787-4097-4220-85a0-e901d27a116f-6cb8/?fullscreen')">
                        <v-icon class="mr-2">mdi-open-in-new</v-icon>
                        View Prototype
                    </v-btn>
                </template>
            </work-item>





        </v-row>
    </div>
</template>

<style scoped></style>
