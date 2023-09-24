<script>
  export default {
    name: 'WorkGridItem',
    data() {
        return {
           overlay: null 
        }
    },
    methods: {
      imgSrc(input) {
        return new URL(`../../assets/${input}`, import.meta.url).href;
      },
      windowOpen(input) {
        this.$emit('window-open', input);
      }
    },
    props: {
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
        logo: String,
        logoWidth: String,
        logoHeight: String,
        linkId: String,
        cover: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
  <v-col cols="10" sm="6" md="4" lg="4" class="ma-0 pa-0">
    <v-hover v-slot="{ isHovering, props }">
        <v-card :color="bg === 'dark' ? '#666' : ''" v-bind="props" class="list-item" flat :rounded="false" :to="{ name: 'view', params: { id: this.linkId } }">
            <v-img v-if="$vuetify.display.smAndDown" :cover="cover" class="ma-auto" width="180" style="max-width:inherit" :src="imgSrc(logo)" />
            <v-img v-else aspect-ratio="1" :cover="cover" :content-class="cover ? 'align-start' : ''" class="ma-auto" :width="logoWidth ? logoWidth : ''" :height="logoHeight ? logoHeight : ''" :src="imgSrc(logo)" />

            <v-overlay
                v-model="overlay"
                :model-value="isHovering"
                contained
                :scrim="color"
                class="align-center justify-center">
                <div class="px-4 text-white">
                    <div><b>{{ title }}</b></div>
                    <div>{{ caption }}</div>
                </div>
            </v-overlay>
        </v-card>
    </v-hover>
  </v-col>
</template>

<style scoped lang="scss">
.list-item {
    width: 100%;
    height: 150px;
    padding: 30px 0;
    cursor: pointer;
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

:deep(.v-overlay__scrim) {
    opacity: 0.9;
}
</style>
