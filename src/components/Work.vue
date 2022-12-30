<script setup>
import UiWork from './partials/UiWork.vue'
import DevWork from './partials/DevWork.vue'
import LogoWork from './partials/LogoWork.vue'
</script>

<template>
    <v-container-fluid class="work">
        <v-row>
            <v-col>
                <UiWork />
                <DevWork />
                <LogoWork />
            </v-col>
        </v-row>
    </v-container-fluid>
</template>

<style scoped>
.work {
    background:lightyellow;
    min-height: 500px;
    padding: 50px 100px;
}
</style>
