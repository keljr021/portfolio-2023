<script setup>
import { ref } from 'vue'

const workType = ref(['all']);
</script>

<template>
    <v-card class="my-12 pa-8" variant="flat" ref="title" min-height="300">
        <v-row>
            <v-col>
                <span class="title-header py-3">Title</span>
                <span class="mx-4">
                    <v-chip v-if="workType.includes('all')" size="medium" class="pa-4" color="indigo-darken-3" variant="plain" prepend-icon="mdi-pencil-ruler">Hybrid Work</v-chip>
                    <v-chip v-if="workType.includes('ux')" size="medium" class="pa-4" color="teal-darken-2" variant="plain" prepend-icon="mdi-palette-outline">UX/UI</v-chip>
                    <v-chip v-if="workType.includes('frontend')" size="medium" class="pa-4" color="blue-darken-3" variant="plain" prepend-icon="mdi-code-tags">Front-End</v-chip>
                </span>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols="12" sm="12" md="8" lg="8">
                <div class="my-3">
                    <span style="font-weight: 500">Role: </span>
                    UX Designer, Logo Designer, Front-End Developer
                </div>
                <div class="my-3">
                    <span style="font-weight: 500">UX Tools: </span>
                    UX Designer, Logo Designer, Front-End Developer
                </div>
                <div class="my-3">
                    <span style="font-weight: 500">Front-End Stack: </span>
                    UX Designer, Logo Designer, Front-End Developer
                </div>
                <div class="my-3 py-6">
                    <v-btn class="mr-4" rounded="xl" variant="outlined" prepend-icon="$vuetify">Button</v-btn>
                    <v-btn class="mr-4" rounded="xl" variant="outlined" prepend-icon="$vuetify">Button</v-btn>
                    <v-btn class="mr-4" rounded="xl" variant="outlined" prepend-icon="$vuetify">Button</v-btn>
                </div>
            </v-col>
            <v-col order-xs="1" :class="$vuetify.display.mdAndDown ? 'order-first' : ''">
                <img :src="$imageSrc('work/pr-desktop.png')" alt="Placeholder Image" style="width: 100%; height: auto;">
            </v-col>
        </v-row>
    </v-card>
</template>

<style scoped>
.title-header {
    font-size: 32px;
}

</style>