<script>
  import Divider from './../Divider.vue';
  export default {
    name: 'Empathize',
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
        <v-col cols="10">
            <div class="view-text-title" :style="'color:' + color">Empathize</div>

            <v-row justify="space-between" class="py-6">
                <v-col cols="11" sm="5" md="5" lg="5">
                    <div class="view-text-section-title">Problem</div>
                    <p>
                        <slot name="problem"></slot>
                    </p>
                </v-col>
                <v-col offset-sm="1" offset-md="1" offset-lg="1" sm="5" md="5" lg="5">
                    <div class="view-text-section-title">Goal</div>
                    <p>
                        <slot name="goal"></slot>
                    </p>
                </v-col>
            </v-row>

            <v-row justify="space-between" class="py-6">
                <v-col cols="11" sm="5" md="5" lg="5">
                    <div class="view-text-section-title">Persona</div>
                    <slot name="persona"></slot>
                </v-col>

                <v-col order-xs="first" offset-sm="1" offset-md="1" offset-lg="1" sm="5" md="5" lg="5">
                    <div class="view-text-section-title">User Map</div>
                    <slot name="user"></slot>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
