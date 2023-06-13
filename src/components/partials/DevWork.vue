<script>
import WorkItem from './WorkItem.vue'
import WorkImage from './WorkImage.vue'
export default {
    name: 'DevWork',
    components: {
        WorkItem,
        WorkImage
    },
    props: {
        showSlide: String
    },
    emits: [
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
    <div class="work-section dev">
        <v-row>
            <v-col>
                <div class="work-subtitle">Web Developement</div>
            </v-col>
        </v-row>
        <v-row>
            <work-item 
                title="iFolio" 
                caption="An online portfolio page to host images" 
                :image="imgSrc('if-full.png')"
                imageWidth="90%"
                date="Oct 2016 - Feb 2018"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="d0"
                :showSlide="showSlide"
                >
                <template v-slot:role>
                    <ul>
                        <li>Web Developer (Front-End)</li>
                        <li>Web Designer</li>
                        <li>Logo Designer</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>Material Design Lite</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>iFolio was an idea that a fellow co-worker of mine came up with. When he asked for help in this endeavor, I had no problem in giving him a hand.</p>
                    <p>iFolio was a web application that allowed users to create their own web page to post images; mainly for stylists and barbers to showcase their work. We attempted to make it as simple as possible for clients to use. I worked on the front-end of the application; including the home page.</p>
                </template>
                <template v-slot:features>
                    <ul>
                        <li>Users can create their own webpage with custom colors and fonts</li>
                        <li>Users can add up to 150 photos per account based on subscription</li>
                    </ul>
                    <v-btn class="px-3" v-if="$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://web.archive.org/web/20180809104951/http://ifolio.online/')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site (Archived Wayback)
                    </v-btn>
                </template>
                 <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://web.archive.org/web/20180809104951/http://ifolio.online/')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site (Archived Wayback)
                    </v-btn>
                </template>
            </work-item>

            <work-item 
                title="Soccer for Success" 
                caption="An e-learning platform for coaches and players" 
                :image="imgSrc('s4s-alt.png')"
                imageWidth="90%"
                company="Soccer for Success/Immersion Media"
                date="Mar 2017 - Jun 2018"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="d1"
                :showSlide="showSlide"
                >
                <template v-slot:role>
                    <ul>
                        <li>Web Developer (Front-End)</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>React JS</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>PHP CodeIgniter</li>
                        <li>JSON</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>Soccer for Success was an online e-learning platform that allows coaches to view videos and answer questions on various soccer techniques and learning principles. We've even built-in a Content Management System for Administrators, which allows them to add and update their own custom learning content and upload videos.</p>
                    <p>The site was built with React on the front-end, PHP CodeIgniter on the back-end, and JSON for saving and editing content.</p>
                </template>
            </work-item>   


            <work-item 
                title="ScoreShots 2.0" 
                caption="A platform to create and share infographics" 
                :image="imgSrc('ss-full.png')"
                imageWidth="90%"
                company="ScoreShots/Immersion Media"
                date="Aug 2016 - Jan 2018"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="d2"
                :showSlide="showSlide"
                >
                <template v-slot:role>
                    <ul>
                        <li>Web Developer</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>PHP CodeIgniter</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>ScoreShots is Immersion Media's in-house website. It allows a user to create a web-based sports infographic (ie. ScoreShot) using the user's custom colors, fonts, and images. A user can submit the finished graphic to their phone, download it to their computer, and even submit it to their own Facebook or Twitter account.</p>
                    <p>The entire development team at Immersion each pulled their weight with the re-design of the ScoreShots interface from 1.0 to version 2.0; and in the process added several new features on the new site as well. We've each had a part of every page; with successful results.</p>
                </template>
                <template v-slot:features>
                    <ul>
                        <li>Uses an built-in image editor to create an infographic</li>
                        <li>Images and logos are able to be uploaded and saved onto their accounts</li>
                        <li>Ability to export XML files for team scores into the editor</li>
                        <li>Enables social media connections with Facebook and Twitter to post their graphic</li>
                    </ul>
                    <v-btn class="px-3" v-if="$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://web.archive.org/web/20180105122544/https://scoreshots.com/')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site (Archived Wayback)
                    </v-btn>
                </template>
                 <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://web.archive.org/web/20180105122544/https://scoreshots.com/')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site (Archived Wayback)
                    </v-btn>
                </template>
            </work-item>            
            
            <work-item 
                title="React Calculator" 
                caption="A calculator component built with React JS" 
                :image="imgSrc('react-full.png')"
                imageWidth="90%"
                date="Mar 2019"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="d3"
                :showSlide="showSlide"
                >
                <template v-slot:role>
                    <ul>
                        <li>Web Developer</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>React JS</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>This is a basic calculator component built with React. The component itself performs basic math calculations, allowing the user to click the buttons on screen, or key in the values themselves using the keyboard.</p>
                    <p v-if="$vuetify.display.xs">
                        <v-btn class="px-3" variant="flat" block @click="openWindow('https://github.com/keljr021/react-calculator')">
                            View Code on Github
                        </v-btn>
                        <v-btn class="px-3" variant="flat" block @click="openWindow('http://poc.kelvin-m.com/react-calculator')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Site
                        </v-btn>
                    </p>
                </template>
                 <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://github.com/keljr021/react-calculator')">
                        View Code on Github
                    </v-btn>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('http://poc.kelvin-m.com/react-calculator')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site
                    </v-btn>
                </template>
            </work-item>               


            <work-item 
                title="Vue Calendar" 
                caption="A calendar component built with Vue JS" 
                :image="imgSrc('vuejs-full.png')"
                imageWidth="90%"
                date="Mar 2019"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="d4"
                :showSlide="showSlide"
                >
                <template v-slot:role>
                    <ul>
                        <li>Web Developer</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>Vue JS</li>
                        <li>Bootstrap</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>This is a calendar component built with Vue and Bootstrap. The component uses the current date and generates a full calendar for display.</p>
                    <p v-if="$vuetify.display.xs">
                        <v-btn class="px-3" variant="flat" block @click="openWindow('https://github.com/keljr021/vue-calendar')">
                            View Code on Github
                        </v-btn>
                        <v-btn class="px-3" variant="flat" block @click="openWindow('http://poc.kelvin-m.com/vue-calendar')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Site
                        </v-btn>
                    </p>
                </template>
                 <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://github.com/keljr021/vue-calendar')">
                        View Code on Github
                    </v-btn>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('http://poc.kelvin-m.com/vue-calendar')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site
                    </v-btn>
                </template>
            </work-item>               

            <work-item 
                v-if="false"
                title="Discharge Preparation iForm" 
                caption="Web form to prepare patients for hospital release" 
                :image="imgSrc('iform-discharge.png')"
                imageWidth="90%"
                company="FirstHealth Moore Regional Hospital"
                date="2013-2014"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="d5"
                :showSlide="showSlide"
                >
                <template v-slot:role>
                    <ul>
                        <li>JavaScript Developer</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>This webpage is part of Moore Regional's front-end of the web application -- known as iForms. An iForm takes the values and selections a user has made, and add those values to the hospital's application once the form is submitted. Below is an example of one of the iForms that I have worked on.</p>
                    <p>This iForm allows nurses to enter information for a patient's discharge from the hospital. During this process, the tabs goes through each step and adds information to the front-end when submitted.</p>
                    <p>
                        <v-btn class="px-3" v-if="$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://poc.kelvin-m.com/iForms/discharge_2014.htm')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Site
                        </v-btn>
                    </p>
                </template>
                 <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://poc.kelvin-m.com/iForms/discharge_2014.htm')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site
                    </v-btn>
                </template>
            </work-item> 

            <work-item 
                v-if="false"
                title="Integrilin Dosing iForm" 
                caption="Web form to measure proper integrilin dosing" 
                :image="imgSrc('iform-integrilin.png')"
                imageWidth="90%"
                company="FirstHealth Moore Regional Hospital"
                date="2013-2014"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="d7"
                :showSlide="showSlide"
                >
                <template v-slot:role>
                    <ul>
                        <li>JavaScript Developer</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>This webpage is part of Moore Regional's front-end of the web application -- known as iForms. An iForm takes the values and selections a user has made, and add those values to the hospital's application once the form is submitted. Below is an example of one of the iForms that I have worked on.</p>
                    <p>The Integrilin iForm is a page that I have built using Moore Regional Hospital in 2014. The user would put in a patient's weight in kilograms, then select the dosing type, and a table is displayed with the proper dosage highlighted based on the user's input.</p>
                    <p>
                        <v-btn class="px-3" v-if="$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://poc.kelvin-m.com/iForms/int_dosing.htm')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Site
                        </v-btn>
                    </p>
                </template>
                 <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://poc.kelvin-m.com/iForms/int_dosing.htm')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site
                    </v-btn>
                </template>
            </work-item> 

            <work-item 
                v-if="false"
                title="Respiratory Common Orders iForm" 
                caption="Web form for quick access to respiratory treatments" 
                :image="imgSrc('iform-respiratory.png')"
                imageWidth="90%"
                company="FirstHealth Moore Regional Hospital"
                date="2013-2014"
                @set="setSlide"
                @move="moveSlide"
                @close="closeSlide"
                slideId="d6"
                :showSlide="showSlide"
                >
                <template v-slot:role>
                    <ul>
                        <li>JavaScript Developer</li>
                    </ul>
                </template>
                <template v-slot:tools>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                    </ul>
                </template>
                <template v-slot:overview>
                    <p>This webpage is part of Moore Regional's front-end of the web application -- known as iForms. An iForm takes the values and selections a user has made, and add those values to the hospital's application once the form is submitted. Below is an example of one of the iForms that I have worked on.</p>
                    <p>The Respiratory iForm give the user tests and medications to select from and fill out the information if needed. For dates, we added a HTML calendar widget that toggles when the calendar icon is clicked.</p>
                    <p>
                        <v-btn class="px-3" v-if="$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://poc.kelvin-m.com/iForms/resp_ords.htm')">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            View Site
                        </v-btn>
                    </p>
                </template>
                 <template v-slot:buttons>
                    <v-btn class="px-3" v-if="!$vuetify.display.xs" variant="flat" :block="$vuetify.display.xs" @click="openWindow('https://poc.kelvin-m.com/iForms/resp_ords.htm')">
                        <v-icon class="mr-2">mdi-link</v-icon>
                        View Site
                    </v-btn>
                </template>
            </work-item>            
        </v-row>
    </div>
</template>

<style scoped></style>
