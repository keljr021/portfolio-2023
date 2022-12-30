<script setup>
import CtaText from './partials/CtaText.vue'
import CtaMenu from './partials/CtaMenu.vue'
</script>

<template>
    <v-container-fluid class="cta">
        <v-row class="pa-3 justify-center">
            <v-col>
                <h1 class="cta-title">Lorem ipsum</h1>
            </v-col>
        </v-row>
        <v-row class="pa-3 justify-center">
            <v-col>
                <CtaText />
            </v-col>
            <v-col>
                <CtaMenu />
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
</style>
