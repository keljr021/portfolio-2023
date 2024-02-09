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
        <div class="cta-bg">
            <img class="cta-bg-image" src="../assets/cta/background-1060405_1280.png" />
            <img alt="drawing of me" class="cta-image" src="../assets/cta-self.png" />
        </div>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="6">
                <h1 class="cta-title">Hi my name's <br v-if="$vuetify.display.xs" /><b>Kelvin Morrisey Jr.</b></h1>
                <CtaText @scrollTo="scrollTo" />
            </v-col>
        </v-row>
        
        <Footer :fixed="true" :onHomePage="true"/>
    </v-container>
</template>

<style scoped lang="scss">
.cta {
    position: relative;
    height: 100%;
    padding: 150px 0 100px 50px;
    background-attachment: fixed;
    background-repeat: no-repeat;
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
    height: 100%;
    object-fit: contain;
    overflow: hidden;
    padding: 0;
    margin: 0;
    background: #17174f;
    z-index: -1;

}

.cta-bg-image {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    object-fit: cover;
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

.cta-image {
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.6;
    height: 500px;
    margin-top: 10%;
}

@media all and (min-width: 768px) and (max-width: 1023px) {
    .cta-bg-image {
        width: 100%;
        height: 100vh;
    }
}

@media all and (max-width: 768px) {
    .cta {
        padding: 20px;
    }

    .cta-bg-image {
        width: initial;
        height: 100vh;
    }

    .cta-logo {
        display: none;
    }

    .cta-image {
        width: 75%;
        height: initial;
    }
}
</style>
