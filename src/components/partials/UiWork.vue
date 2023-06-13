<script>
import WorkItem from './WorkItem.vue'
import WorkImage from './WorkImage.vue'

export default {
    name: 'UiWork',
    components: {
        WorkItem,
        WorkImage
    },
    props: {
        showSlide: String
    },
    emits: [
        'set',
        'move',
        'close'
    ],
    methods: {
        imgSrc(input) {
            return new URL(`../../assets/${input}`, import.meta.url).href;
        },
        openWindow(link) {
            window.open(link, '_blank');
        },
        setSlide(input) {
            this.$emit('set', input);
        },
        moveSlide(input) {
            this.$emit('move', input);
        },
        closeSlide(input) {
            this.$emit('close', input);
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
        <v-row>
            <work-item 
                title="K&A Morrisey Cleaning Services" 
                caption="A responsive website for family janitorial business" 
                :image="imgSrc('ka-full-2023.png')"
                imageWidth="100%"
                company="K&A Morrisey Cleaning Services"
                date="June 2019 - Updated June 2023"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="u0"
                :showSlide="showSlide"
                >
                <template v-slot:role>
                    <div>Web Developer & UX Designer</div>
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
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>JavaScript</li>
                        <li>Vue JS</li>
                        <li>Vuetify</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>My father and my grandfather taught me the value of hard work at a very early age. They have both instilled a strong work-ethic that I hold onto this day. When he talked about having a website for his new business, I immediately jumped on the project without hesitation.</p>
                    <p>K&A Morrisey Cleaning Services is a commercial janitorial business that is local to Sampson County. This site is a redesign of the previous website using the UX design principles learned.</p>
                </template>
                <template v-slot:challenges>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Problem</h4>
                                <p>K&A Morrisey Cleaning Services did not have an online presence to advertise to potential customers in Sampson County. From viewing the previous web site, I discovered several opportunities to improve their online presence.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Goal</h4>
                                <p>Re-design their website that will showcase K&A Cleaning Services and the type of services that are offered.</p>
                            </div>
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:body>
                    <div class="work-section">
                        <h4>Persona</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('ka-persona.png')" />
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <div>
                                    <p><b>Eric Robinson.</b> Eric is a business owner of a masonry company in Roseboro, NC. He is looking for a janitorial business to clean and maintain the corporate offices daily, with occasional work on the weekends.</p>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>User Map</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <p>From documenting Eric's User journey, I have found several opportunities:</p>
                                <ul>
                                    <li>Ensure that online search engines can find their business website</li>
                                    <li>Add a professional email and/or phone number</li>
                                    <li>Notify the user when the Contact Form has been sent and received</li>
                                </ul>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('ka-usermap.png')" />
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Digital Wireframes</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('ka-dframe1.png')">
                                    Home
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('ka-dframe2.png')">
                                    Services
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('ka-dframe3.png')">
                                    Contact 
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('ka-dframe4.png')">
                                    Contact Form
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>

                    <div class="work-section">
                        <h4>Usability Study Insights</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <ul>
                                    <li>The Contact and Contact Form links was confusing to end users finding Contact information. Both links needs to be revised</li>
                                    <li>The Contact information needs to be easily accessed</li>
                                    <li>The scrolling from the prototype did not scroll to the correct sections, and needed to be corrected in the mockups</li>
                                </ul>

                                <div class="my-3">
                                    <v-btn class="my-3 px-3" variant="outlined" @click="openWindow('https://docs.google.com/spreadsheets/d/1Kzox0Pj99egWzYeoKLnOd7jnaNGtsaHfJksv7ssFnlI/edit?usp=sharing')">
                                        <v-icon class="mr-2">mdi-link</v-icon>
                                        View Full Usability Study
                                    </v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('ka-study.png')" />
                            </v-col>
                        </v-row>
                    </div>


                    <div class="work-section">
                        <h4>Mockups</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('ka-mock1.png')">
                                    Home - Added a photo with a color overlay. Also added a fixed footer for the Contact Us that gives the user quick access to K&A Services' phone and email.

                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('ka-mock2.png')">
                                    Services - Kept the three-column layout; added Font Awesome icons based on each content section.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('ka-mock3.png')">
                                    Contact - Added a Google Map location of the general area.

                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <work-image width="100%" imageHeight="400" :image="imgSrc('ka-mock4.png')">
                                    Contact Form - The Contact Form button opens up a modal with a Google Form embedded in the modal for desktop; and a new window for mobile.
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Prototypes</h4>
                        <v-row class="justify-center">
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <div>
                                    <v-img height="300" :src="imgSrc('ka-lofi-desktop.png')" />

                                    <div class="py-4 text-center">
                                        <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=14-287&scaling=scale-down&page-id=14%3A227&starting-point-node-id=14%3A287')">
                                            <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                            Desktop Lo-Fi Prototype
                                        </v-btn>
                                    </div>
                                    <div class="py-4 text-center">
                                        <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=14-44&scaling=scale-down&page-id=14%3A43&starting-point-node-id=14%3A44')">
                                            <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                            Mobile Lo-Fi Prototype
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <v-img height="300" :src="imgSrc('ka-hifi-desktop.png')" />
                                <div class="py-4 text-center">
                                    <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=86-243&scaling=scale-down&page-id=86%3A130&starting-point-node-id=86%3A243')">
                                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                        Desktop Hi-Fi Prototype
                                    </v-btn>
                                </div>
                                <div class="py-4 text-center">
                                    <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=86-474&scaling=scale-down&page-id=86%3A471&starting-point-node-id=86%3A474')">
                                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                        Moblie Hi-Fi Prototype
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </div>

                </template>
                <template v-slot:results>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Lessons Learned</h4>
                                <p>From this project I have gained experience in user interviews and incorporating client feedback within mockups and prototypes.</p>
                                <p>With Figma, I have learned how to create multiple instances of the site to simulate on and off states of components. This is shown in the fixed footer options from the high fidelity prototypes. I have also discovered how to add overlays with colors above images. Both will give a wider variety of options in Figma for future projects.</p>
                                <p>Lastly, I ensured that the colors used will comply with WCAG guidelines for accessibility by using the WebAIM contrast checker.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Next Steps</h4>
                                <ol>
                                    <li>I would add a Gallery of Work section for potential clients to see before and after steps of the services provided.</li>
                                    <li>I would add a Testimonials section for clients to add positive reviews of the work that K&A Services provide.</li>
                                    <li>For the site, I would improve SEO and add domains from a development standpoint to ensure users can get to the site seamlessly.</li>
                                </ol>
                            </div>
                        </v-col>
                    </v-row>
                    
                    <div v-if="$vuetify.display.xs">
                        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://docs.google.com/presentation/d/181XSVIOJkkjA9xZBpeepm3Is4oX9U1xV_AqXgBc-NXU/edit?usp=sharing')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Case Study PPT
                        </v-btn>
                        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://ka-clean.com')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Site
                        </v-btn>
                    </div>
                </template>
                <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://docs.google.com/presentation/d/181XSVIOJkkjA9xZBpeepm3Is4oX9U1xV_AqXgBc-NXU/edit?usp=sharing')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Case Study PPT
                    </v-btn>
                    <v-btn  class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=86-243&scaling=scale-down&page-id=86%3A130&starting-point-node-id=86%3A243')">
                        <v-icon class="mr-2">mdi-open-in-new</v-icon>
                        View Prototype
                    </v-btn>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://ka-clean.com')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site
                    </v-btn>
                </template>
            </work-item>

            <work-item 
                title="Rey's Restaurant App" 
                caption="A menu app to streamline the ordering process" 
                :image="imgSrc('reys-mock1.png')"
                imageWidth="80%"
                imageHeight="500"
                company="Rey's Mexican Restaurant"
                date="Sep 2022 - Nov 2022"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="u1"
                :showSlide="showSlide"
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
                    <p>The idea was to make a casual and family-friendly app with a more authentic feel using the colors and typography.</p>
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
                                    <li>Specials section should be added.</li>
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
                            <v-col offset-lg="2" cols="12" sm="12" md="2" lg="2">
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
                                <work-image width="100%" imageHeight="400" :image="imgSrc('reys-dframe5.png')">
                                    Order Tracker
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>

                    <div class="work-section">
                        <h4>Usability Study Insights</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <ul>
                                    <li>A confirmation page is needed during the order submission workflow.</li>
                                    <li>The Language feature needs to have a more simplified workflow for users.</li>
                                    <li>The app needs a Log In/Out option for easier access to customer information.</li>
                                </ul>

                                <div class="my-3">
                                    <v-btn class="my-3 px-3" variant="outlined" @click="openWindow('https://docs.google.com/spreadsheets/d/1JPXFuY_JmU1EpBIJ-EJDESaTmYvrJCPU87cs1LKXNKo/edit?usp=sharing')">
                                        <v-icon class="mr-2">mdi-link</v-icon>
                                        View Full Usability Study
                                    </v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('reys-study.png')" />
                            </v-col>
                        </v-row>
                    </div>


                    <div class="work-section">
                        <h4>Mockups</h4>
                        <v-row>
                            <v-col offset-lg="2" cols="12" sm="12" md="2" lg="2">
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

                </template>
                <template v-slot:results>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Lessons Learned</h4>
                                <p>From working on this app, I have learned the great importance of usability studies and user feedback. It has given me insight to areas that were not thought about during the prototyping phase of the app. Going through the process has been very beneficial to designing in the future.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Next Steps</h4>
                                <ol>
                                    <li>Currently the UI has a responsive site feel. I would modify the structure of the UI for a dedicated mobile app.</li>
                                    <li>Continue with a webpage for desktop users to give customers an additional online option for the restaurant.</li>
                                    <li>Reformat the input components using a UI framework (such as Material UI).</li>
                                    <li>Conduct another usability study on the high-fidelity designs.</li>
                                </ol>
                            </div>
                        </v-col>
                    </v-row>
                    
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
                :image="imgSrc('lb-full.png')"
                imageWidth="100%"
                company="LemonBranch LTD"
                date="Nov 2022 - Dec 2022"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="u2"
                :showSlide="showSlide"
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
                    <p>One of my projects is to design a responsive website for searching and viewing online DIY tutorials. LemonBranch is a fictional company that hosts various online tutorials to view; and also allows members to create their own tutorials.</p>
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
                                    <p><b>Jerry Lyn.</b> Jerry is a newlywed Network Admin that uses his phone to find quick tutorials on different projects to help him navigate new home ownership.</p>
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
                        <h4>Usability Study Insights</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <ul>
                                    <li>The Account workflow needs to be redefined for Login and Create Account steps.</li>
                                    <li>The Tutorial Authors page could not be easily navigated to, and needs restructure.</li>
                                    <li>Filter options in the Search Results page needs to be well-defined.</li>
                                </ul>
                                <div class="my-3">
                                    <v-btn class="my-3 px-3" variant="outlined" @click="openWindow('https://docs.google.com/spreadsheets/d/1bPrRw3pJN4eLAu6JzLy7-hcM1MiTDUFRS55CzMIUea0/edit?usp=sharing')">
                                        <v-icon class="mr-2">mdi-link</v-icon>
                                        View Full Usability Study
                                    </v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('lb-study.png')" />
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
                                    <v-btn variant="outlined" @click="openWindow('https://xd.adobe.com/view/39ebb787-4097-4220-85a0-e901d27a116f-6cb8/screen/834dee81-37bd-4411-98b2-023f9a754dce?fullscreen')">
                                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                        Mobile Hi-Fi Prototype
                                    </v-btn>
                                </div>
                                <div class="py-4 text-center">
                                    <v-btn variant="outlined" @click="openWindow('https://xd.adobe.com/view/39ebb787-4097-4220-85a0-e901d27a116f-6cb8/?fullscreen')">
                                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                        Desktop Hi-Fi Prototype
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </div>

                </template>
                <template v-slot:results>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Lessons Learned</h4>
                                <p>During the prototyping phase of this project, I've gained more experience in using the Components and Library options in Adobe XD. Using these options will streamline prototyping in the future.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Next Steps</h4>
                                <ol>
                                    <li>Currently the site only has text versions of tutorials. I would enhance the workflow to allow  video tutorials, along with the video and text filtering in the search queries.</li>
                                    <li>I would also add in tablet responsive views, to ensure the prototype also handle tablet view</li>
                                    <li>I would slightly restructure the site map and navigation. For example, having a search page alongside the search bar during the navigation could cause confusion.</li>
                                </ol>
                            </div>                            
                        </v-col>
                    </v-row>

                    <div v-if="$vuetify.display.xs">
                        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://docs.google.com/presentation/d/1KkYDj0hg_QahT5ULisc1QjGmakgCmZHS1LnPMD-qadA/edit?usp=sharing')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Case Study PPT
                        </v-btn>
                    </div>
                </template>
                <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://docs.google.com/presentation/d/1KkYDj0hg_QahT5ULisc1QjGmakgCmZHS1LnPMD-qadA/edit?usp=sharing')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Case Study PPT
                    </v-btn>
                    <v-btn v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://xd.adobe.com/view/39ebb787-4097-4220-85a0-e901d27a116f-6cb8/?fullscreen')">
                        <v-icon class="mr-2">mdi-open-in-new</v-icon>
                        View Prototype
                    </v-btn>
                </template>
            </work-item>

            <work-item 
                title="Torch Mentor Network" 
                caption="A mobile app and website that connects students with mentors" 
                :image="imgSrc('to-full.png')"
                imageWidth="100%"
                company="Torch Mentor Network"
                date="Jan 2023"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="u3"
                :showSlide="showSlide"
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
                        <li>Inkscape</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>My final project was to design both a mobile app and responsive website for a career mentorship service to help college graduates. Torch Mentor Network is an online service that helps students connect with a mentor during their college studies.</p>
                    <p>The main idea of the project was a simple and intuitive online presence geared towards college students and experienced mentors.</p>
                    <p>For this project, I used a red and purple color scheme, while keeping the typography and layout modern. I've also used the Lightning UI by Salesforce for most of the components and elements in the pages.</p>
                </template>
                <template v-slot:challenges>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Problem</h4>
                                <p>Students have a troubling time finding ways to participate in a mentorship. Often there are missed opportunities out during college studies to connect with someone with experience in their field of study.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Goal</h4>
                                <p>The goal of this project is to create both a dedicated mobile app and responsive web site that gives users easier options to connect with fellow mentors in their field of interest.</p>
                            </div>
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:body>
                    <div class="work-section">
                        <h4>Persona</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('to-persona.png')" />
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <div>
                                    <p><b>Joseph Strawn.</b> Joseph is an upcoming college graduate who wants to find a mentor to learn more about the radio communication field. However, he has a hard time navigating online to find an experienced mentor in his area.</p>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>User Map</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <p>From documenting Joseph's user journey there were several improvement opportunities, including:</p>
                                <ul>
                                    <li>Creating an easy to navigate home page for desktop</li>
                                    <li>Automatically add user's profile info into corresponding forms</li>
                                    <li>Mentor availability status is kept up-to-date</li>
                                </ul>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('to-usermap.png')" />
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Paper Wireframes</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-pframe1.jpg')">
                                    For the mobile app, I've began rough drafting some ideas.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-pframe2.jpg')">
                                    From there, I've also drafted three versions of each page, and picked out ideas from each.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-pframe3.jpg')">
                                    I have referenced these mobile wireframes to alse layout the digital wireframes for the responsive site.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-sitemap.png')">
                                    I've added a sitemap for each page to properly structure the pages and help with Information Architecture.
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Digital Wireframes - Mobile App</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-dframe1.png')">
                                    Home
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-dframe2.png')">
                                    Find a Mentor page
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-dframe3.png')">
                                    Mentor Profile page
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Usability Study Insights</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <ul>
                                    <li>The Mentor Search workflow was inconsistent between navigation and the headers.</li>
                                    <li>Testers had difficulty navigating through each page during the workflow.</li>
                                    <li>The Article page navigation confused a majority of the users and needed refactoring.</li>
                                </ul>
                                <div class="my-3">
                                    <v-btn class="my-3 px-3" variant="outlined" @click="openWindow('https://docs.google.com/spreadsheets/d/18TCiQddKUSuKNrsb9TlDge-TGEJcoSBqCPi6vuxMzIY/edit?usp=sharing')">
                                        <v-icon class="mr-2">mdi-link</v-icon>
                                        View Full Usability Study
                                    </v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img width="600" :src="imgSrc('to-study.png')" />
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Mockups - Mobile App</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-mobile1.png')">
                                    Home - Instead of a long site, I've refactored the site to show a quick login page first.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-mobile2.png')">
                                    User Feed - The previous Home layout was restructured to this page, with quick links and notifications after login.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-mobile3.png')">
                                    Find a Mentor - Modified the layout structure, and added instructional text based on user feedback from the lo-fi prototype.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="3">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-mobile4.png')">
                                    Mentor Profile page - Kept the structure similar to prototype, but adds two more buttons to quickly connect with the mentor.
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Prototypes - Mobile App</h4>
                        <v-row class="justify-center">
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <div>
                                    <v-img height="300" :src="imgSrc('to-mobile-lofi.png')" />

                                    <div class="py-4 text-center">
                                        <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/hgMpXvVZJfJno8AiRug0VC/Torch-Mobile-App?node-id=23%3A3&scaling=scale-down&page-id=23%3A2&starting-point-node-id=23%3A3')">
                                            <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                            Lo-Fi Prototype
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img height="300" :src="imgSrc('to-mobile-hifi.png')" />
                                <div class="py-4 text-center">
                                    <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/hgMpXvVZJfJno8AiRug0VC/Torch-Mobile-App?node-id=58%3A3934&scaling=scale-down&page-id=58%3A3610&starting-point-node-id=58%3A3934')">
                                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                        Hi-Fi Prototype
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </div>

                    <div class="work-section">
                        <h4>Digital Wireframes - Responsive Site</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-dframe5.png')">
                                    Home
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-dframe6.png')">
                                    User Feed page
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-dframe7.png')">
                                    Find a Mentor page
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Mockups - Responsive Site</h4>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-site1.png')">
                                    Home - The CTA was modified to remove the two Username and Password textboxes, and an image symbolizing the brand.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-site2.png')">
                                    User Feed - The mobile layout was referenced with this page. The items were shifted accordingly to make use of the wider screen.
                                </work-image>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="4">
                                <work-image width="100%" imageHeight="350" :image="imgSrc('to-site3.png')">
                                    Find a Mentor - Keeps the same options, but adds a Card component to the options for better accesssibility.
                                </work-image>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="work-section">
                        <h4>Prototypes - Responsive Site</h4>
                        <v-row class="justify-center">
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <div>
                                    <v-img height="300" :src="imgSrc('to-site-lofi.png')" />

                                    <div class="py-4 text-center">
                                        <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=6%3A4996&scaling=scale-down&page-id=6%3A4995&starting-point-node-id=6%3A4996')">
                                            <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                            Mobile Lo-Fi Prototype
                                        </v-btn>
                                    </div>
                                    <div class="py-4 text-center">
                                        <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=6%3A6495&scaling=min-zoom&page-id=6%3A6494&starting-point-node-id=6%3A6495')">
                                            <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                            Desktop Lo-Fi Prototype
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-img height="300" :src="imgSrc('to-site-hifi.png')" />
                                <div class="py-4 text-center">
                                    <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=28%3A9537&scaling=scale-down&page-id=28%3A9536&starting-point-node-id=28%3A9537')">
                                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                        Mobile Hi-Fi Prototype
                                    </v-btn>
                                </div>
                                <div class="py-4 text-center">
                                    <v-btn variant="outlined" @click="openWindow('https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=28%3A11119&scaling=min-zoom&page-id=28%3A11118&starting-point-node-id=28%3A11119')">
                                        <v-icon class="mx-2">mdi-open-in-new</v-icon>
                                        Desktop Hi-Fi Prototype
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </div>

                </template>
                <template v-slot:results>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Lessons Learned</h4>
                                <p>I discovered a great insight on the importance of Information Architecture in web design. Creating an organized sitemap, and understanding how the data should be structured is critical when designing a new app or website.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="work-section">
                                <h4>Next Steps</h4>
                                <ol>
                                    <li>Design a responsive feel for tablet screens. Currently the above projects are only focused on mobile and desktop versions of the project.</li>
                                    <li>I would add availability options to the mentor list and profile pages. This would give great insight to a fellow user looking for a mentor in their area.</li>
                                    <li>I would attempt to merge the Mentor Form into a single form, rather than breaking it up into pieces. To do that, I would need to ensure that form validation is instant on each field to prevent excess scrolling to resolve invalid parameters.</li>
                                </ol>
                            </div>
                        </v-col>
                    </v-row>
                    <div class="work-section">
                        
                    </div>

                    <div v-if="$vuetify.display.xs">
                        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://docs.google.com/presentation/d/1CbvvBE5rUeZywcQJZRo_OzVhJJSYJrjRe7X77Tes8hE/edit?usp=sharing')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Case Study PPT
                        </v-btn>
                    </div>
                </template>
                <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://docs.google.com/presentation/d/1CbvvBE5rUeZywcQJZRo_OzVhJJSYJrjRe7X77Tes8hE/edit?usp=sharing')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Case Study PPT
                    </v-btn>
                    <v-btn v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=28%3A9537&scaling=scale-down&page-id=28%3A9536&starting-point-node-id=28%3A9537')">
                        <v-icon class="mr-2">mdi-open-in-new</v-icon>
                        View Mobile App Prototype
                    </v-btn>
                    <v-btn v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=28%3A11119&scaling=min-zoom&page-id=28%3A11118&starting-point-node-id=28%3A11119')">
                        <v-icon class="mr-2">mdi-open-in-new</v-icon>
                        View Site Prototype
                    </v-btn>
                </template>
            </work-item>



        </v-row>
    </div>
</template>

<style scoped></style>
