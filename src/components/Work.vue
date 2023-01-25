<script>
import UiWork from './partials/UiWork.vue'
import DevWork from './partials/DevWork.vue'
import LogoWork from './partials/LogoWork.vue'
export default {
    name: 'work',
    data() {
        return {
            lazyLoad: false
        };
    },
    components: {
        UiWork,
        DevWork,
        LogoWork
    }
}
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
                <ui-work></ui-work>
                <dev-work></dev-work>
                <logo-work></logo-work>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss">
h4 {
    padding: 25px 0;
}

p {
    padding: 10px 0;
}

ul, ol {
    padding: 10px 0;
}

li {
    margin-left: 30px;
    padding: 5px 0;
}

.work {
    min-height: 500px;
    padding: 50px 100px !important;
}

.work-title,
.work-subtitle {
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
}

.work-title {
    font-size: 28px;
    padding: 40px 0;
    color: #18184d;
}

.work-subtitle {
    font-size: 18px;
    padding: 30px 0;
}

.work-section {
    min-height: 100px;
    padding: 75px 0;
}

.work-card {
    cursor: pointer;

    .v-card, .v-card-text {
        line-height: 1.5 !important;
    }
}

.work-section {
    padding: 10px 0;
}

@media all and (max-width: 768px) {
    .work {
        padding: 20px !important;
    }
}
</style>
