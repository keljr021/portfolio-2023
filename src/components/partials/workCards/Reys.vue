<script>
export default {
    name: 'Reys',
    data() {
        return {
            dialog: true,
            title: 'Rey\'s Resturant App'
        }
    },
    emits: [],
    props: {

    },
    computed: {

    },
    methods: {
        imgSrc(input) {
            return new URL(`../../../assets/${input}`, import.meta.url).href;
        },
        closeDialog() {
            this.dialog = false;
        },
        openWindow(link) {
            window.open(link, '_blank');
        }
    },
}
</script>

<template>
    <v-col cols="12" sm="6" md="6" lg="4" class="text-center pa-4">
        <v-card class="work-card">
            <v-card-title class="text-left">{{ title }}</v-card-title>
            <v-card-text>
                <div class="work-card-img" style="max-height:250px;overflow-y:hidden">
                    <v-img width="50%" :src="imgSrc('reys-mock1.png')" class="mx-auto"/>
                </div>
                <div class="work-card-caption text-left mt-2">
                    A mobile app to streamline the ordering process
                </div>
            </v-card-text>
       </v-card>
       <v-dialog class="item" v-model="dialog" activator="parent" scrollable :fullscreen="$vuetify.display.xs">
            <v-card class="pt-xs-10">
                <v-card-title>
                    <span>{{ title }}</span>
                    <v-btn
                        v-if="!$vuetify.display.xs"
                        class="float-right item-close"
                        icon="mdi-close"
                        variant="text"
                        @click="closeDialog()"
                    ></v-btn>
                </v-card-title>
                <v-card-text class="item-text">
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="4" class="item-text-img">
                            <v-img height="500" :src="imgSrc('reys-mock1.png')" />
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="4">
                            <div class="pb-4">
                                <h2>Company</h2>
                                <div class="py-2">Rey's Mexican Restaurant</div>
                            </div>
                            <div class="pb-4">
                                <h2>Role</h2>
                                <div class="py-2">
                                    <div>UX Designer</div>
                                    <ul>
                                        <li>Logo Design</li>
                                        <li>Paper and Digital Wireframes</li>
                                        <li>Competitive Audits</li>
                                        <li>Prototyping</li>
                                        <li>Testing</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pb-4">
                                <h2>Tools used</h2>
                                <div class="py-2">
                                    <ul>
                                        <li>Figma</li>
                                    </ul>
                                </div>
                            </div>
                        </v-col>
                        <v-col  cols="12" sm="12" md="12" lg="4">
                            <div class="pb-4">
                                <h2>Project Date</h2>
                                <div class="py-2">Sep 2022 - Nov 2022</div>
                            </div>
                            <div class="pb-4">
                                <h2>Overview</h2>
                                <div class="py-2">
                                    <p>During my studies in UI/UX design, I focused on designing a menu app for a Mexican Restaurant. Rey's Mexican Restaurant is a fictional restaurant chain that provides authentic Mexican food with a variety of options.</p>
                                    <p>For this project, I focused on designing a new mobile app which will allow customers to browse and order food without waiting in line for long periods of time.</p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="py-2">
                        <v-col>
                            <h2>Challenges</h2>
                            <div>
                                <v-row>
                                    <v-col>
                                        <div class="py-2">
                                            <h4>Problem</h4>
                                            <p>Customers have complained about long wait times when ordering lunch, and frustration regarding the accuracy of their orders when ready for pickup.</p>
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <div class="py-2">
                                            <h4>Goal</h4>
                                            <p>Design an app that allows users to order food online, and pick up their order within the allotted time frame; which avoids long waits in line to order, and improves accuracy when picking up their order.</p>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>       
                    <v-row class="py-2">
                        <v-col>
                            <h2>Solution</h2>
                            <div class="py-2">
                                <h4>Summary</h4>
                                <p>During this research, I have conducted empathy maps and personas by interviewing several users that have ordered through this app, and have conducted competitive audits using similar apps as well.</p>
                                <p>I have discovered a handful of features, including updating users with busy schedules about their order pickups; and accessibility options for other users with difficulty understanding English. I've also modified wireframes based on user feedback; including moving the Language features, and modifying the Add to Cart workflows.</p>
                            </div>
                            <div class="py-2">
                                <h4>Pain Points</h4>
                                <ul>
                                    <li><b>Budgeting.</b> Users may have a limited budget when ordering food, so it's difficult to find items that are reasonable at the time.</li>
                                    <li><b>Order Tracking.</b> There have been frustrations expressed by users who still have to wait on items to be completed even when ordering in advance. Sometimes orders for pickup are inaccurate, which causes frustration for members with limited time. Sitting and waiting for a correction causes longer wait times than previously intended.</li>
                                    <li><b>Difficulty with understanding English.</b> Users with English difficulty have limited options on what to order. Additional accessibility for language options would expand the item options for the application.</li>
                                </ul>
                            </div>
                            <div class="py-2">
                                <h4>Persona</h4>
                                <v-row>
                                    <v-col>
                                        <v-img width="600" :src="imgSrc('reys-persona.png')" />
                                    </v-col>
                                    <v-col>
                                        <div>
                                            <p><b>Cal Murphy.</b> Cal is a busy office manager who needs more accurate order tracking because his time is limited due to his work schedule.</p>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <div class="py-2">
                                <h4>User Map</h4>
                                <v-row>
                                    <v-col>
                                        <p>From documenting Cal's User journey, I have discovered the following:</p>
                                        <ul>
                                            <li>An Order Tracker would increase the accuracy of takeout orders; and notify users when items are ready for pickup.</li>
                                            <li>Specials section should be added</li>
                                        </ul>
                                    </v-col>
                                    <v-col>
                                        <v-img width="600" :src="imgSrc('reys-usermap.png')" />
                                    </v-col>
                                </v-row>
                            </div>
                            <div class="py-2">
                                <h4>Paper Wireframes</h4>
                                <v-row>
                                    <v-col class="text-center">
                                        <div class="pa-2 float-left" style="width:33%">
                                            <v-img height="300" :src="imgSrc('reys-pframe1.jpg')" class="text-center" />
                                            <div class="py-4">
                                                Sketched out the general workflow of the app.
                                            </div>
                                        </div>
                                        <div class="pa-2 float-left" style="width:33%">
                                            <v-img height="300" :src="imgSrc('reys-pframe2.jpg')" class="text-center"></v-img>
                                            <div class="py-4">
                                               Then began to brainstorm several rough draft ideas of how the app should look. From these drafts, I've picked a few items from each to add to the final wireframe.
                                            </div>
                                        </div>
                                        <div class="pa-2 float-left" style="width:33%">
                                            <v-img height="300" :src="imgSrc('reys-pframe3.jpg')" class="text-center"></v-img>
                                            <div class="py-4">
                                                Finally, I've drawn up the final version of the wireframes. Above is an example of the Menu pages.
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <div class="py-2">
                                <h4>Digital Wireframes</h4>
                                <v-row class="text-center">
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-dframe1.png')" />
                                        <div class="py-4">
                                            Home
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-dframe2.png')" />
                                        <div class="py-4">
                                            Menu using Grid View
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-dframe3.png')" />
                                        <div class="py-4">
                                            Menu using List View
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-dframe4.png')" />
                                        <div class="py-4">
                                            Food item when clicked from the menu
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-dframe5.png')" />
                                        <div class="py-4">
                                            Order Tracker
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <div class="py-2">
                                <h4>Mockups</h4>
                                <v-row class="text-center">
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-mock1.png')" />
                                        <div class="py-4">
                                            Home - Added a Cart icon and Account button to the navigation.
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-mock2.png')" />
                                        <div class="py-4">
                                            Menu using Grid View - The Grid and List buttons were grouped to show the relation among one another.
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-mock3.png')" />
                                        <div class="py-4">
                                            Menu using List View - For the list items, added a description to each item.
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-mock4.png')" />
                                        <div class="py-4">
                                            Food item when clicked from the menu - Added an icon to go back to the Menu screen.
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <v-img height="300" :src="imgSrc('reys-mock5.png')" />
                                        <div class="py-4">
                                            Order Tracker - Added Order number and time on top instead of the bottom area.
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                            <div class="py-2">
                                <h4>Prototypes</h4>
                                <v-row class="justify-center">
                                    <v-col>
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
                                    <v-col>
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
                            <div class="py-2">
                                <h4>Accessibilty</h4>
                                <ul>
                                    <li>For color, I've validated with the WebAIM contrast checker to ensure all colors were selected with accessibility in mind.</li>
                                    <li>Ensured that most icons have text associated with the type of action that is expected to help with screen reading.</li>
                                    <li>An option was added to modify the language of the entire app from the Menu section; which allows non-English users set another language when viewing the app.</li>
                                </ul>
                            </div>
                        </v-col>
                    </v-row>    
                    <v-row>
                        <v-col>
                            <h2>Results</h2>
                            <div class="py-2">
                                <h4>Lessons Learned</h4>
                                <p>From working on this app, I have learned the great importance of usability studies and user feedback. It has given me insight to areas that were not thought about during the prototyping phase of the app. Going through the process has been very beneficial to designing in the future.</p>
                            </div>
                            <div class="py-2">
                                <h4>Next Steps</h4>
                                <ol>
                                    <li>Continue with a webpage for desktop users to give customers an additional online option for the restaurant.</li>
                                    <li>Added a UI framework (such as Material UI) to streamline the mockups and prototyping phase.</li>
                                    <li>Conduct another usability study on the high-fidelity designs. There may be an additional feature or section that could be improved in the future.</li>
                                </ol>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="justify-end px-4 mx-4">
                    <v-btn variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://docs.google.com/presentation/d/1L7N0_CG95WT4dYPjiDQqjJcviKUniSmyCGsc_-OxTvg/edit?usp=sharing')">
                        <v-icon class="mx-2">mdi-link</v-icon>
                        Case Study PPT
                    </v-btn>
                    <v-btn variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://www.figma.com/proto/5NxCYVA06z3PUwJN9qYVR1/Mexican-Restaurant-App---Revised?node-id=140%3A485&scaling=scale-down&page-id=140%3A2&starting-point-node-id=140%3A485')">
                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                        Prototype
                    </v-btn>
                    <v-btn variant="outlined" :block="$vuetify.display.xs" @click="closeDialog()">
                        <v-icon class="mx-2">mdi-close</v-icon>
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<style scoped>
.work-card-img {
    padding: 5px 0;
}

p {
    padding: 10px 0;
}

ul, ol {
    padding: 10px 0;
}

li {
    margin-left: 30px;
    padding: 5px 0;
}

h4 {
    padding: 25px 0;
}

@media screen and (max-width: 768px) {
    img {
        width: 100%;
    }
}
</style>