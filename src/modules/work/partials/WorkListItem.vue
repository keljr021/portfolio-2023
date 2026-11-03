<script setup>
import { ref } from 'vue';

const emit = defineEmits(['window-open']);
const overlay = ref(null);

defineProps({
  bg: {
    type: String,
    default: 'light'
  },
  color: {
    type: String,
    default: '#333'
  },
  title: String,
  caption: String,
  role: String,
  logo: String,
  logoWidth: String,
  logoHeight: String,
  linkId: String,
  workType: String,
  type: String,
  uxTools: String,
  frontendStack: String,
});

function windowOpen(input) {
  emit('window-open', input);
}
</script>

<template>
    <v-col cols="12" sm="12" md="6" lg="6" class="list-item pb-sm-8 pt-3 pb-6 px-9" @click="$router.push({ name: 'view', params: { id: linkId } })">
        <v-card class="mb-4 mx-auto" variant="elevated" :width="$vuetify.display.smAndDown ? '100%' : '75%'" min-height="400" link>
            <v-img v-if="$vuetify.display.smAndDown" class="mx-auto py-2 w-100" :src="$imageSrc(logo)" :height="linkId === 'reys' ? '300px' : ''"/>
            <v-img v-else :aspect-ratio="linkId === 'reys' ? 1 : ''" :class="{'mx-auto': true, 'py-2 my-5': linkId !== 'reys'}" width="80%" :src="$imageSrc(logo)" :height="linkId === 'reys' ? '210px' : ''"/>

            <div class="py-2 px-5">
                <div><b :style="'color:' + color">{{ title }}</b></div>
                <div class="pb-4">{{ caption }}</div>
            </div>

            <div class="pb-2 px-5">
                <div class="pb-2" v-if="uxTools">
                    <span class="list-item-tools">UX: </span>
                    <span>{{ uxTools }}</span> 
                </div>
                <div class="pb-2" v-if="frontendStack">
                    <span class="list-item-tools">Front-End: </span> 
                    <span>{{ frontendStack }}</span>
                </div>
            </div>

            <div class="pt-2 pb-5 px-5">
                <v-chip v-if="type === 'all'" class="px-4 mr-3" color="indigo-darken-3" variant="tonal" prepend-icon="mdi-pencil-ruler" @click="scrollToSection('all')">Hybrid Work</v-chip>
                <v-chip v-if="type === 'ux'" class="px-4 mr-3" color="teal-darken-2" variant="tonal" prepend-icon="mdi-palette-outline" @click="scrollToSection('ux')">UX/UI</v-chip>
                <v-chip v-if="type === 'frontend'" class="px-4 mr-3" color="blue-darken-3" variant="tonal" prepend-icon="mdi-code-tags" @click="scrollToSection('frontend')">Front-End</v-chip>
            </div>
        </v-card>

    </v-col>
</template>

<style scoped lang="scss">
.list-item {
    font-size: 1.05em;
    width: 100%;
    padding: 30px 0;
    cursor: pointer;
    background-color: transparent;

    &.display {
        display: initial !important;
    }

    .list-item-tools {
        font-weight: 500;
    }
}
.list-item-text {
    padding-left: 30px;
    .list-item-text-title {
        font-size: 22px;
    }

    .list-item-text-caption {
        font-size: 16px;
    }
}
</style>
