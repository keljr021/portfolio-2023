<script setup>
import Divider from './../../Divider.vue';

defineProps({
  color: {
    type: String,
    default: '#666'
  }
});
</script>

<template>
    <v-row class="view-text-section" justify="space-evenly">
        <v-col cols="10">
            <div class="view-text-title" :style="'color:' + color">
                <v-icon>mdi-chart-bubble</v-icon>
                Define
            </div>

            <v-row>
                <v-col cols="12">
                    <slot name="ideas"></slot>
                </v-col>
            </v-row>

        </v-col>
    </v-row>
</template>
