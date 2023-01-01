<script setup>
import UiWork from './partials/UiWork.vue'
import DevWork from './partials/DevWork.vue'
import LogoWork from './partials/LogoWork.vue'
</script>

<template>
    <v-container fluid class="work">
        <v-row>
            <v-col>
                <div class="work-title">Work</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <UiWork />
                <DevWork />
                <LogoWork />
            </v-col>
        </v-row>
    </v-container>
</template>

<style >
.work {
    background:lightyellow;
    min-height: 500px;
    padding: 50px 100px;
}

.work-title {
    font-size: 24px;
    padding: 30px 0;
}

.work-subtitle {
    font-size: 18px;
    padding: 20px 0;
}

.work-section {
    min-height: 100px;
    padding-bottom: 50px;
}

@media all and (max-width: 768px) {
    .work {
        padding: 20px;
    }
}
</style>
