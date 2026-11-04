<script setup>
  import WorkListItem from './WorkListItem.vue';
  import listArray from './../items/itemList.js';

  defineProps({
    workType: String
  });
</script>

<template>
  <v-container fluid>
    <v-row>
      <template v-for="item in listArray" :key="item.id">
        <work-list-item
          v-if="workType === item.type"
          :type="item.type"
          :color="item.color"
          :linkId="item.link"
          :title="item.title"
          :caption="item.caption"
          :role="item.role"
          :logo="item.logo"
          :uxTools="item.ux"
          :frontendStack="item.fe"
        />
      </template>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
</style>
