<script>
import SkillsWork from './SkillsWork.vue'
import SkillsEdu from './SkillsEdu.vue'
export default {
    name: 'Skills',
    components: {
        SkillsWork,
        SkillsEdu
    }
}
</script>

<template>
    <v-row justify="start">
        <v-col cols="11" sm="11" md="11" lg="6" class="skills py-md-auto">
            <div class="skills-caption">Experience</div>
            <div class="skills-body py-3">
                <SkillsWork 
                    title="Digital Applications Developer" 
                    location="Blue Cross NC - Durham NC" 
                    date="October 2019 - Present" 
                    :desc="[ 
                        'Developed for and maintained the Blue Connect Member application for desktop and mobile', 
                        'Collaborated with UX designers to prototype and create features to improve member experience', 
                        'Helped to transition features into new platforms',
                        'Assisted in documenting policies, best practices, and procedures expressed among experienced team members'
                    ]" />

                <SkillsWork 
                    title="Web Developer" 
                    location="Immersion Media - Fayetteville NC" 
                    date="April 2016 - June 2018" 
                    :desc="[ 
                        'Worked with in-house designer to translate wireframes and mockups to functional solutions', 
                        'Developed new features based on marketing requests', 
                        'Collaborated with fellow developers on a consistent basis'
                    ]" />

                <SkillsWork 
                    title="JavaScript Developer" 
                    location="FirstHealth Moore Regional Hospital - Pinehurst NC" 
                    date="October 2012 - November 2014" 
                    :desc="[ 
                        'Built and maintained front-end webpages to main hospital\'s web application -- known as iForms', 
                        'Quickly analyzed and proposed solutions to complex workflows', 
                        'Maintained multiple iForms across four hospital environments',
                        'Transitioned several physical forms to iForms'
                    ]" />
            </div>
        </v-col>
        <v-col cols="11" sm="11" md="11" lg="6" class="skills py-md-auto">
            <div class="skills-caption">Education</div>
            <div class="skills-body py-3">
                <SkillsEdu 
                    title="Bachelors' of Science - Computer Science" 
                    location="UNC Pembroke" 
                    date="May 2012" />
                
                <SkillsEdu 
                    title="Google UX Design Certificate" 
                    location="Coursera" 
                    date="January 2023" />
            </div>
        </v-col>
        <v-col cols="11" sm="11" md="11" lg="6" class="skills py-md-auto">
            <div class="skills-caption">Skills</div>
            <div class="skills-body py-3">
                <div>Front-End Development</div>
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
        </v-col>
        <v-col cols="11" sm="11" md="11" lg="6" class="skills py-md-auto">
            <div class="skills-caption">&nbsp;</div>
            <div class="skills-body py-3">
                <div>UX Design</div>
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
        </v-col>
    </v-row>
</template>

<style lang="scss" scoped>
.skills {
    padding: 25px 100px 80px;
}

.skills-title {
    font-size: 28px;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0;
}

.skills-caption {
    line-height: 2.5;
    padding: 5px 0;
    font-size: 22px;
    font-weight: 300;
}
</style>