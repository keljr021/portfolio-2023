<script>
  export default {
    name: 'WorkListItem',
    props: {
      
    },
    methods: {
        clickItem(input) {
            console.log('clicked item: ', input);
        }
    }
}
</script>

<template>
  <v-card class="work-menu" @click="clickItem">
    <v-card-text class="text-center">
        x
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
