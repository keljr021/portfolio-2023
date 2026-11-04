<script setup>
import { computed, toRef } from 'vue'
import ViewImage from './ViewImage.vue'

const props = defineProps({
    input: Object,
});

const input = toRef(props, 'input');

const workColor = computed(() => input.value?.color ?? 'black');
const workLogo = computed(() => input.value?.logo ?? null);

</script>

<template>
    <v-card class="my-12 pa-8" variant="flat" ref="title" min-height="300">
        <v-row>
            <v-col>
                <span class="title-header pb-3" :style="{ 'color': workColor }">{{ input.title }}</span>
                <span class="mx-md-4 my-0">
                    <v-chip v-if="input.type === 'all'" size="small" class="pa-md-4" color="indigo-darken-3" variant="plain" prepend-icon="mdi-pencil-ruler">Hybrid Work</v-chip>
                    <v-chip v-if="input.type === 'ux'" size="small" class="pa-md-4" color="teal-darken-2" variant="plain" prepend-icon="mdi-palette-outline">UX/UI</v-chip>
                    <v-chip v-if="input.type === 'frontend'" size="small" class="pa-md-4" color="blue-darken-3" variant="plain" prepend-icon="mdi-code-tags">Front-End</v-chip>
                </span>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols="12" sm="8" md="8" lg="8">
                <div class="my-3" v-if="input.role">
                    <span :style="{ 'color': workColor, 'font-weight': 500 }">Role: </span>
                    {{ input.role }}
                </div>
                <div class="my-3" v-if="input.ux">
                    <span :style="{ 'color': workColor, 'font-weight': 500 }">UX Tools: </span>
                    {{ input.ux }}
                </div>
                <div class="my-3" v-if="input.fe">
                    <span :style="{ 'color': workColor, 'font-weight': 500 }">Front-End Stack: </span>
                    {{ input.fe }}
                </div>
                <div class="my-3 py-6" v-if="input.viewButtons">
                    <v-btn 
                        v-for="button in input.viewButtons" 
                        class="ma-4 ml-0" 
                        rounded="xl" 
                        variant="outlined" 
                        :prepend-icon="button.icon"
                        :key="button.name"
                        :href="button.link"
                        :color="workColor"
                        target="_blank"
                    >{{ button.name }}
                    </v-btn>
                </div>
            </v-col>
            <v-col v-if="workLogo" order-xs="1" order-sm="1" :class="$vuetify.display.smAndDown ? 'order-first' : ''">
                <view-image :src="workLogo" img-width="100%" />
            </v-col>
        </v-row>
    </v-card>
</template>

<style scoped>
.title-header {
    font-size: 32px;
}

</style>