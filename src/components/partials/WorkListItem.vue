<script>
  export default {
    name: 'WorkListItem',
    props: {
        type: String,
        title: String,
        caption: String,
        image: String,
        imageWidth: String,
        imageHeight: String,
    },
    methods: {
        clickItem(input) {
            console.log('clicked item: ', title);
        }
    }
}
</script>

<template>
  <v-card class="work-menu" @click="clickItem">
    <v-card-text class="text-center">
        <v-img :width="imageWidth" :height="imageHeight" :src="image"/>
    </v-card-text>
  </v-card>
</template>

<style>
.work-menu-icon {
  font-size: 28px;
}

.work-menu-title {
  font-size: 20px;
}
</style>
