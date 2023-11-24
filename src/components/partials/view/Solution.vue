<script>
  import Divider from './../Divider.vue';
  export default {
    name: 'Solution',
    props: {
        color: {
            type: String,
            default: '#666'
        }
    },
    components: {
        Divider
    }
}
</script>

<template>
    <v-row class="view-text-section" justify="space-evenly">
        <v-col cols="11">
            <div class="view-text-title" :color="color">Solution</div>

            <v-row justify="center">
                <v-col cols="12">
                    x
                </v-col>
            </v-row>

        </v-col>
    </v-row>

    <divider :color="color" />
</template>
