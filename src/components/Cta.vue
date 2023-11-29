<script>
import CtaText from './partials/CtaText.vue'
import CtaMenu from './partials/CtaMenu.vue'
import Footer from './partials/Footer.vue'

export default {
    name: 'cta',
    props: {
        navItems: Array,
        socialIconsArray: Array
    },
    emits: [
        'scrollTo'
    ],
    methods: {
        scrollTo(input) {
            this.$emit('scrollTo', input);
        },
        imgSrc(input) {
            return new URL(`../assets/${input}`, import.meta.url).href;
        },
    },
    components: {
        CtaText,
        CtaMenu,
        Footer
    }
}
</script>

<template>
    <v-container fluid class="cta">
        <img class="cta-bg" src="../assets/cta/background-1060405_1280.png" />
        <v-row class="pa-3">
            <v-col cols="12" xs="12" sm="12" md="6">
                <h1 class="cta-title">Hi my name's <br v-if="$vuetify.display.xs" /><b>Kelvin Morrisey Jr.</b></h1>
                <CtaText @scrollTo="scrollTo" />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" class="text-right">
                <img alt="placeholder photo" height="400" class="elevation-8 ma-5" src="../assets/about-alt.jpg" />
            </v-col>
        </v-row>
        
        <Footer :fixed="true" />
    </v-container>
</template>

<style scoped lang="scss">
.cta {
    position: relative;
    height: 100%;
    padding: 100px 50px 100px;
    background: #17174f;
    -webkit-border-radius: 0;
    border-radius: 0;
    z-index: 0;
    color: #d9d9d9;
}

.cta-bg {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    object-fit: contain;
    overflow: hidden;
    opacity: 0.35;
    z-index: -1;
}

.cta-title {
    color: #b9e9e1;
    padding: 50px 0;
}

.cta-logo {
    position: absolute;
    left: 50px;
    top: 50px;
    height: 40px;
    opacity: 0.75;
}

@media all and (max-width: 768px) {
    .cta {
        padding: 20px;
    }

    .cta-logo {
        display: none;
    }
}
</style>
