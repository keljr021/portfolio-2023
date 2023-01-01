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
        }
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
                <h1 class="cta-title">Lorem ipsum</h1>
            </v-col>
        </v-row>
        <v-row class="px-3 py-2 justify-center">
            <v-col>
                <CtaText />
            </v-col>
            <v-col v-if="!$vuetify.display.xs">
                <CtaMenu @scrollTo="scrollTo" :navItems="navItems"/>
            </v-col>

            <img class="cta-logo" src="../assets/km-icon.svg" />
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
    position: absolute;
    bottom: 10%;
    right: 100px;
    opacity: 0.4;
    height: 50px;
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
