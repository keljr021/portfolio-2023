<script>
  export default {
    name: 'WorkListItem',
    data() {
        return {
            overlay: false
        }
    },
    props: {
        type: String,
        title: String,
        caption: String,
        image: String,
        imageWidth: String,
        imageHeight: String,
    },
    methods: {
        hoverItem(input) {
            this.overlay = input;
        },

        clickItem() {
            console.log('clicked item: ', this.title);
        }
    }
}
</script>

<template>
  <v-card height="200" @click="clickItem" @mouseover="hoverItem(true)" @mouseleave="hoverItem(false)">
    <v-card-text class="pa-0 ma-0">
        <v-img :width="imageWidth" :height="imageHeight" :src="image"/>

        <v-overlay
          v-model="overlay"
          class="align-center justify-center"
          scrim="#18184d"
          contained>
            <div class='list-item-text text-white text-left pa-3'>
                <div class="list-item-text-title py-2 font-weight-bold">{{ title }}</div>
                <div class="list-item-text-caption">{{ caption }}</div>
            </div>
        </v-overlay>

       
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
.list-item-text {
    width: 300px;
}
</style>
