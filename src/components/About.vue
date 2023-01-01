<script setup></script>

<template>
    <v-container fluid class="about">
        <v-row>
            <v-col cols="12" sm="6" md="6" lg="8" class="about-text">
                <div class="about-text-title">About</div>
                <div class="about-text-body py-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nisl tempus felis egestas eleifend. Fusce sagittis faucibus neque. Aliquam vehicula enim vel nisl consequat imperdiet. Quisque commodo, massa eu luctus ullamcorper, lorem enim sodales ipsum, eu bibendum augue neque vel massa. Nulla facilisi. Suspendisse potenti. In porta quam efficitur posuere maximus. Nam tortor metus, convallis vel sollicitudin ut, suscipit at ipsum. Vestibulum dapibus, ligula at aliquam rutrum, eros odio iaculis elit, et hendrerit est erat quis mauris. Cras suscipit leo vitae condimentum cursus.</p>
                    <p>Fusce quis dictum erat. Praesent at dolor sed lectus imperdiet finibus. Nunc aliquet dignissim volutpat. Maecenas sit amet eros nibh. Quisque fermentum ac ligula rhoncus elementum. Nullam hendrerit non ante a mattis. Proin ut purus lorem. Donec dolor erat, aliquam non pulvinar at, ultrices sed neque. Vivamus rhoncus eget diam id consequat. In sit amet sagittis eros.</p>
                    <p>Fusce quis dictum erat. Praesent at dolor sed lectus imperdiet finibus. Nunc aliquet dignissim volutpat. Maecenas sit amet eros nibh. Quisque fermentum ac ligula rhoncus elementum. Nullam hendrerit non ante a mattis. Proin ut purus lorem. Donec dolor erat, aliquam non pulvinar at, ultrices sed neque. Vivamus rhoncus eget diam id consequat. In sit amet sagittis eros.</p>
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
