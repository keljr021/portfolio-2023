<script>
  import Divider from './../Divider.vue';
  export default {
    name: 'Evaluate',
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
            <div class="view-text-title" :style="'color:' + color">
                <v-icon>mdi-finance</v-icon>
                Evaluate
            </div>

            <v-row justify="space-between" class="py-6">
                <v-col cols="11" sm="5" md="5" lg="5">
                    <div class="view-text-section-title">Lessons Learned</div>
                    <slot name="lessons"></slot>
                </v-col>
                <v-col offset-sm="1" offset-md="1" offset-lg="1" sm="5" md="5" lg="5">
                    <div class="view-text-section-title">Next Steps</div>
                    <slot name="next"></slot>
                </v-col>
            </v-row>

        </v-col>
    </v-row>
</template>
