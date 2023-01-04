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
                <h1 class="cta-title">Hi, my name's <b class="color:#18184d">Kelvin.</b></h1>
            </v-col>
        </v-row>
        <v-row class="px-3 py-2 justify-center">
            <v-col>
                <CtaText @scrollTo="scrollTo" />
            </v-col>
            <v-col v-if="!$vuetify.display.xs">
                <CtaMenu @scrollTo="scrollTo" :navItems="navItems"/>
            </v-col>
        </v-row>
        <v-row class="px-3 py-2 justify-end" v-if="!$vuetify.display.xs">
            <v-col class="text-right">
                <img class="cta-logo px-3 ma-3 text-right" :src="imgSrc('km-icon.svg')" />
            </v-col>
        </v-row>
    </v-container>
    
</template>

<style scoped>
.cta {
    min-height: 500px;
    padding: 100px 50px 100px;
}

.cta-title {
    color: #18184d;
}

.cta-logo {
    height: 40px;
    filter: grayscale(1);
    opacity: 0.3;
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
