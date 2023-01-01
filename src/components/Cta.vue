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
    methods: {
        scrollTo(input) {
            this.$emit('scroll-to', input);
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
    <v-container-fluid class="cta">
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
                <CtaMenu @scroll-to="scrollTo" :navItems="navItems"/>
            </v-col>
        </v-row>
    </v-container-fluid>
</template>

<style scoped>
.cta {
    background:#18184d;
    color: white;
    min-height: 500px;
    padding: 50px 100px;
}

@media all and (max-width: 768px) {
    .cta {
        padding: 20px;
    }
}
</style>
