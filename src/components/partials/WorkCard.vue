<script>
import WorkDialog from './WorkDialog.vue'

export default {
    name: 'work-card',
    methods: {},
    components: {
        WorkDialog
    }
}
</script>

<template>
    <v-col cols="12" sm="6" md="6" lg="4" v-for="n in 6" class="text-center pa-4">
        <v-card @click="openItem" class="work-card">
            <v-card-title class="text-left">x</v-card-title>
            <v-card-text>
                Fusce quis dictum erat. Praesent at dolor sed lectus imperdiet finibus. Nunc aliquet dignissim volutpat. Maecenas sit amet eros nibh. Quisque fermentum ac ligula rhoncus elementum. Nullam hendrerit non ante a mattis. Proin ut purus lorem. Donec dolor erat, aliquam non pulvinar at, ultrices sed neque. Vivamus rhoncus eget diam id consequat. In sit amet sagittis eros.
            </v-card-text>
       </v-card>
       <WorkDialog />
    </v-col>
</template>

<style>
.work-card {
    cursor: pointer;
}
</style>
