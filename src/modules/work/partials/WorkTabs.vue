<script setup>
import { onMounted, ref, watch } from 'vue';

const emit = defineEmits(['scroll-to', 'set-tab']);
const props = defineProps({
  tab: {
    type: String,
    default: 'ui'
  }
});

const selectedColor = '#18184d';
const selectedTab = ref('ui');

watch(selectedTab, (newVal, oldVal) => {
  if (oldVal !== newVal) emit('set-tab', newVal);
});

watch(() => props.tab, (newVal) => {
  selectedTab.value = newVal;
});

onMounted(() => {
  selectedTab.value = props.tab ? props.tab : 'ui';
});
</script>

<template>
    <!-- Mobile tabs -->
    <div v-if="$vuetify.display.smAndDown">
        <v-menu location="start" transition="slide-x-transition">
            <template v-slot:activator="{ props }">
                <button class="mobile-button px-2" v-bind="props">
                    <v-icon>mdi-filter-variant</v-icon>
                </button>
            </template>

            <v-list>
                <v-list-item>
                    <v-list-item-title class="py-2" @click="emit('scroll-to', 'ui')">
                        <v-icon start>mdi-folder-account</v-icon>
                        UI/UX Design
                    </v-list-item-title>
                    <v-list-item-title class="py-2" @click="emit('scroll-to', 'frontend')">
                        <v-icon start>mdi-code-tags</v-icon>
                        Front-End
                    </v-list-item-title>
                    <v-list-item-title class="py-2" @click="emit('scroll-to', 'logos')">
                        <v-icon start>mdi-drawing</v-icon>
                        Logos
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
     </div>

    <!-- Desktop tabs -->
    <div v-else>
        <v-tabs
            v-model="selectedTab"
            direction="vertical"
            :color="selectedColor"
        >
            <v-tab value="ui" @click="emit('scroll-to', 'ui')">
                <v-icon start>mdi-folder-account</v-icon>
                UI/UX Design
            </v-tab>
            <v-tab value="frontend" @click="emit('scroll-to', 'frontend')">
                <v-icon start>mdi-code-tags</v-icon>
                Front-End
            </v-tab>
            <v-tab value="logos" @click="emit('scroll-to', 'logos')">
                <v-icon start>mdi-drawing</v-icon>
                Logos
            </v-tab>
        </v-tabs>
      </div>
</template>

<style scoped>
.v-tabs :deep(.v-tab__slider) {
  left: auto !important;
  right: 0;
}

.mobile-button {
    position: fixed;
    left: 0;
    top: 15%;
    border: 2px solid #aaa;
    border-left: none;
    color: #aaa;
}
</style>
