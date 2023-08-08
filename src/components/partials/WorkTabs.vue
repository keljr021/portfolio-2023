<script>
  export default {
    name: 'WorkTabs',
    data() {
      return {
        tab: 'all',
        selectedColor: '#18184d'
      }
    },
    emits: [
        'set-tab'
    ],
    methods: {

    },
    watch: {
        tab(newVal, oldVal) {
            if (oldVal !== newVal) this.$emit('set-tab', newVal);
        }
    },
    mounted() {
     
    },
    components: {
    }
}
</script>

<template>
    <!-- Mobile tabs -->
    <div v-if="$vuetify.display.xs">
        <v-menu location="start" transition="slide-x-transition">
            <template v-slot:activator="{ props }">
                <button class="mobile-button px-2" v-bind="props">
                    <v-icon>mdi-filter-variant</v-icon>
                </button>
            </template>

            <v-list>
                <v-list-item
                    v-for="(item, index) in menuArray"
                    :key="index"
                    >
                    <v-list-item-title @click="this.tab = item.value">
                        <v-icon start>{{ item.icon }}</v-icon>
                        {{ item.name }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
     </div>

    <!-- Desktop tabs -->
    <div v-else>
        <v-tabs
            v-model="tab"
            direction="vertical"
            :color="selectedColor"
        >
            <v-tab value="all">
            <v-icon start>mdi-view-grid</v-icon>
            All
            </v-tab>
            <v-tab value="ui">
            <v-icon start>mdi-folder-account</v-icon>
            UI/UX Design
            </v-tab>
            <v-tab value="front">
            <v-icon start>mdi-code-tags</v-icon>
            Front-End
            </v-tab>
            <v-tab value="logos">
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
    top: 40%;
    border: 2px solid #aaa;
    border-left: none;
    color: #aaa;
}
</style>
