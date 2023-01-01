<script setup></script>

<template>
    <v-container fluid class="about">
        <v-row>
            <v-col cols="12" sm="6" md="6" lg="8" class="about-text">
                <div class="about-text-title">About Me</div>
                <div class="about-text-caption">Art and tech: and my quest to find the median between the two.</div>
                <div class="about-text-body py-3">
                    <p>Growing up in the 90's, I was always fascinated with computers, technology, and art. After graduating with a B.S. in Computer Science from UNC Pembroke, I have worked in several IT environments; including hospitals, healthcare, and media companies as well.</p>
                    <p>My goal is to find an opportunity to flex my creative skills with UI, UX, and visual design; and grow with a great company with like-minded people. My versatility with web development also provides a valuable resource along with my creative skills.</p>
                    <p>I'm an avid note-taker, researcher, thinker, drawer, and Google...er (if that's a word). When I'm out of work; I'm usually surfing the web, drawing, writing, listening to music, or gaming online.</p>
                    <p>Want to learn more? Drop a note below!</p>
                </div>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4" class="text-center text-md-right">
                <img class="about-image" alt="about photo" src="../assets/about-alt.jpg" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>.about-text {
    padding: 50px 100px;
}

.about-text-title {
    font-size: 28px;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0;
}

.about-text-caption {
    line-height: 2.5;
    padding: 15px 0;
    font-size: 20px;
}

.about-text-body {
    p {
        line-height: 2.25;
        padding: 10px 0;
        opacity: 0.9;
    }
}

.about-image {
    width: 100%;
}

@media all and (max-width: 768px) {
    .about,
    .about-text,
    .about-image {
        padding: 20px;
    }

    .about-image {
        width: initial !important;
        height: 300px;
    }
}
</style>
