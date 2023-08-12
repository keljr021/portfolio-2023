<script>
import CtaText from './partials/CtaText.vue'
import CtaMenu from './partials/CtaMenu.vue'
import CtaSocials from './partials/CtaSocials.vue'

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
        CtaSocials
    }
}
</script>

<template>
    <v-container fluid class="cta">
        <v-row class="pa-3 justify-center">
            <v-col>
                <h1 class="cta-title">Hi, my name's <b class="color:#18184d">Kelvin Morrisey Jr.</b></h1>
            </v-col>
        </v-row>
        <v-row class="px-3 py-2 justify-center">
            <v-col class="my-auto">
                <CtaText @scrollTo="scrollTo" />
            </v-col>
            <v-col v-if="!$vuetify.display.xs">
                <CtaMenu />
            </v-col>
        </v-row>
    </v-container>
    
</template>

<style scoped lang="scss">
.cta {
    height: 100%;
    padding: 100px 50px 100px;
    background: rgba(217,217,217,1); /* Old browsers */
    background: -moz-linear-gradient(45deg, rgba(217,217,217,1) 0%, rgba(241,240,240,1) 51%, rgba(255,255,255,1) 100%);
    background: -webkit-linear-gradient(45deg, rgba(217,217,217,1) 0%, rgba(241,240,240,1) 51%, rgba(255,255,255,1) 100%);
    background: linear-gradient(45deg, rgba(217,217,217,1) 0%, rgba(241,240,240,1) 51%, rgba(255,255,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d9d9d9",endColorstr="#ffffff",GradientType=1);
    background-size: 30px cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

.cta-title {
    color: #18184d;
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
