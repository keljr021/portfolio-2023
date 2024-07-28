<script>
  import Divider from './../Divider.vue';
  export default {
    name: 'Overview',
    props: {
        title: {
            type: String
        },
        color: {
            type: String,
            default: '#666'
        },
        noDivider: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Divider
    }
}
</script>

<template>
    <v-row class="view-text-overview">
        <v-col offset="1" cols="11">
            <v-row justify="start" class="py-8">
                <v-col cols="11" :md="$slots.image ? 6 : 11" :lg="$slots.image ? 6 : 11">
                    <slot name="overview"></slot>
                </v-col>
                <v-col cols="11" sm="6" md="6" lg="6" v-if="$slots.image">
                    <slot name="image"></slot>
                </v-col>
            </v-row>
            <v-row justify="space-evenly" class="py-8" v-if="$slots.problem || $slots.goal">
                <v-col cols="11" lg="5" v-if="$slots.problem">
                    <div class="view-text-section-title">Problem</div>
                    <p>
                        <slot name="problem"></slot>
                    </p>
                </v-col>
                <v-col cols="11" offset-lg="1" lg="5" v-if="$slots.goal">
                    <div class="view-text-section-title">Goal</div>
                    <p>
                        <slot name="goal"></slot>
                    </p>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
