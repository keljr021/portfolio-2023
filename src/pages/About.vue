<script>
import Skills from './../components/partials/Skills.vue';
import Footer from './../components/partials/Footer.vue';
export default {
    name: 'About',
    components: {
        Skills,
        Footer
    }
}
</script>

<template>
    <v-container fluid class="about">
        <v-row class="pa-4">
          <v-col>
            <div class="about-text-title">About</div>
          </v-col>
        </v-row>
        <v-row justify="start" justify-md="center" justify-lg="center">
            <v-col cols="11" sm="11" md="11" lg="8" class="about-text py-md-auto">
                <div class="about-text-caption">Art and tech: and finding the perfect median between the two.</div>
                <div class="about-text-body py-3">
                    <p>Computers, technology, and art always fascinated me as a child. That curiosity has never stopped even as an adult today. I'm an avid note-taker, researcher, thinker, drawer, and Google...er (if that's a word).</p>
                    <p>My goal is to find an opportunity to flex my creative skills with UI, UX, and visual design with a great company with like-minded people. I have previously worked in a variety of IT environments; including hospitals, healthcare, and media companies. </p>
                    <p>Outside of work; I'm usually surfing the web, drawing, writing, listening to music, or gaming online.</p>
                </div>
            </v-col>
            <v-col cols="11" sm="11" md="11" lg="4" class="about-image text-center py-md-auto">
                <img alt="about photo" class="elevation-8" src="../assets/about-alt.jpg" />
            </v-col>
        </v-row>
        
        <Skills />
        
        <Footer :fixed="$vuetify.display.mdAndUp" />
    </v-container>
</template>

<style lang="scss" scoped>
.about-text {
    padding: 25px 100px 80px;
}

.about-text-title {
    font-size: 28px;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0;
}

.about-text-caption {
    line-height: 2.5;
    padding: 5px 0;
    font-size: 22px;
    font-weight: 300;
}

.about-text-body {
    font-size: 1.1em;
    p {
        line-height: 2.25;
        padding: 10px 0;
        opacity: 0.9;
    }
}

.about-image img {
    width: 55%;
}

@media all and (min-width: 768px) and (max-width: 1023px) {
    .about-image img {
        width: 150px;
    }
}

@media all and (max-width: 768px) {
    .about,
    .about-text,
    .about-image {
        padding: 20px;
    }

    .about-image img {
        width: initial !important;
        height: 300px;
    }
}
</style>

