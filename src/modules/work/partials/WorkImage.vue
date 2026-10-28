<script setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const props = defineProps({
  image: String,
  caption: String,
  width: String,
  imageHeight: String
});

const display = useDisplay();
const imageWidth = computed(() => {
  if (display.xs.value) return '100% important';
  return props.width || '';
});
</script>

<template>
    <div class="pa-lg-2" :style="imageWidth">
        <v-img width="100%" :height="imageHeight" :src="image" class="text-center" />
        <div class="py-4">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>
