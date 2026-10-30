<script setup>
import { ref } from 'vue'

const workType = ref(['all']);

const props = defineProps({
    input: Object,
});
</script>

<template>
    <v-card class="my-12 pa-8" variant="flat" ref="title" min-height="300">
        <v-row>
            <v-col>
                <span class="title-header pb-3">{{ input.title }}</span>
                <span class="mx-4 my-0">
                    <v-chip v-if="input.type === 'all'" size="small" class="pa-4" color="indigo-darken-3" variant="plain" prepend-icon="mdi-pencil-ruler">Hybrid Work</v-chip>
                    <v-chip v-if="input.type === 'ux'" size="small" class="pa-4" color="teal-darken-2" variant="plain" prepend-icon="mdi-palette-outline">UX/UI</v-chip>
                    <v-chip v-if="input.type === 'frontend'" size="small" class="pa-4" color="blue-darken-3" variant="plain" prepend-icon="mdi-code-tags">Front-End</v-chip>
                </span>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols="12" sm="12" md="8" lg="8">
                <div class="my-3">
                    <span style="font-weight: 500">Role: </span>
                    {{ input.role }}
                </div>
                <div class="my-3" v-if="input.ux">
                    <span style="font-weight: 500">UX Tools: </span>
                    {{ input.ux }}
                </div>
                <div class="my-3" v-if="input.fe">
                    <span style="font-weight: 500">Front-End Stack: </span>
                    {{ input.fe }}
                </div>
                <div class="my-3 py-6" v-if="input.viewButtons">
                    <v-btn 
                        v-for="button in input.viewButtons" 
                        class="mr-4" 
                        rounded="xl" 
                        variant="outlined" 
                        :prepend-icon="button.icon"
                        :key="button.name"
                    >{{ button.name }}
                    </v-btn>
                </div>
            </v-col>
            <v-col order-xs="1" :class="$vuetify.display.mdAndDown ? 'order-first' : ''">
                <img :src="$imageSrc(input.logo)" :alt="input.name + ' image'" class="w-100 align-self-center">
            </v-col>
        </v-row>
    </v-card>
</template>

<style scoped>
.title-header {
    font-size: 32px;
}

</style>