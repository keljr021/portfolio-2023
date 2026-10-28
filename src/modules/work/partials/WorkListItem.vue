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
  displayFor: Array
});

function windowOpen(input) {
  emit('window-open', input);
}
</script>

<template>
    <v-col cols="12" sm="6" md="6" lg="6" class="list-item pb-sm-8 pt-3 pb-6 px-9" :class="{ 'display' : displayFor.includes(workType) }" @click="$router.push({ name: 'view', params: { id: linkId } })">
        <v-card class="mb-4 mx-auto" variant="elevated" :width="$vuetify.display.smAndDown ? '100%' : '75%'" min-height="350" link>
            <v-img v-if="$vuetify.display.smAndDown" class="mx-auto w-100" :src="$imageSrc(logo)" :height="linkId === 'reys' ? '300px' : ''"/>
            <v-img v-else :aspect-ratio="linkId === 'reys' ? 1 : ''" :class="{'mx-auto': true, 'my-5': linkId !== 'reys'}" :width="logoWidth ? logoWidth : ''" :src="$imageSrc(logo)" :height="linkId === 'reys' ? '210px' : ''"/>

            <div class="pa-5">
                <div><b :style="'color:' + color">{{ title }}</b></div>
                <div class="pb-4">{{ caption }}</div>
            </div>
        </v-card>

    </v-col>
</template>

<style scoped lang="scss">
.list-item {
    font-size: 1.1em;
    width: 100%;
    padding: 30px 0;
    cursor: pointer;
    background-color: transparent;
    display: none;

    &.display {
        display: initial !important;
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
