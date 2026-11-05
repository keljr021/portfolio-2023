<script setup>
import Skills from './partials/Skills.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <v-container fluid class="about bg">
        <v-row class="pa-4">
          <v-col>
            <div class="about-text-title">About</div>
          </v-col>
        </v-row>
        <v-row justify="start" justify-md="center" justify-lg="center">
            <v-col cols="11" sm="11" md="11" lg="4" class="about-image text-center">
                <img alt="about photo" class="elevation-8 pt-4" src="../../assets/about-alt.jpg" />
            </v-col>
            <v-col cols="11" sm="11" md="11" lg="8" class="about-text">
                <div class="about-text-caption pl-3 w-md-75">My goal - to bring ideas to life. Taking an idea or wireframe and translating to clean, functional, and accessible code.</div>
                <div class="about-text-body py-3 pl-3 w-md-75">
                    <p>I was always curious with computers, electronics, and art all my life. Even today that curiosity still exists throughout my career.</p>
                    <p>Websites have been a career goal when I graduated from UNC Pembroke. The idea of developing was always like finding the right pieces to a puzzle. From either using references from designers, or a document of ideas from clients; being able to translate their ideas into a live working site makes me proud to be a developer.</p>
                </div>
            </v-col>

            <v-col cols="11" class="about-text">
                <div class="about-text-body mx-auto py-3 pl-3 w-md-75">
                    <p>Over the years working in the development field, I was also lucky to work with great design teams. The designers were all very friendly and approachable; and their workflow of how they translate client ideas to wireframes also ignited a fire of design in me. It's always exciting to find the right layout, and choosing the correct tone with typography and colors.</p>
                    <p>For both of these passions, the end goal is the same; <b>improve the process for the end user.</b> Being able to take a complex workflow or outdated site, then modernizing it always is exciting to do.</p>
                    <p>What I'm looking for in my next career opportunity is to work in front-end development or an opportunity to learn more in UI/UX design; even better if I can merge these two. I want to learn more ways to be versatile in both technical and creative areas.</p>
                </div>
            </v-col>
        </v-row>
        
        <Footer :fixed="$vuetify.display.mdAndUp" :onHomePage="false" />
    </v-container>
</template>

<style lang="scss" scoped>
.about-text-title {
    font-size: 28px;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0 10px 0;
}

.about-text-caption {
    line-height: 2.5;
    padding-bottom: 10px;
    font-size: 22px;
    font-weight: 300;
}

.about-text-body {
    font-size: 1.1em;
    p {
        line-height: 2.25;
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
    .about-image img {
        width: initial !important;
        height: 300px;
    }
}
</style>
