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
        <v-row class="pa-3">
            <v-col cols="12" xs="12" sm="12" md="6">
                <h1 class="cta-title">Hi, my name's <br v-if="$vuetify.display.xs" /><b class="color:#18184d">Kelvin.</b></h1>
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
    height: 100%;
    padding: 100px 50px 100px;
    background: #18184d;
    background-size: 30px cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: #d9d9d9;
}

.cta-title {
    color: #EDA591;
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
