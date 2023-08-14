<script>
  import Divider from './Divider.vue';
  export default {
    name: 'ViewSolution',
    props: {
        color: {
            type: String,
            default: '#666'
        }
    },
    components: {
        Divider
    }
}
</script>

<template>
 <v-row class="view-text-section" justify="space-evenly">
      <v-col cols="11">
        <div class="view-text-title">Solution</div>

        <v-row justify="center">
          <v-col cols="12">
            <slot name="wireframes"></slot>
          </v-col>
        </v-row>
        
        <v-row justify="center" class="py-8">
          <v-col offset="1" cols="11" class="my-auto">
            <div class="view-text-section-title">Usability Study</div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly">
          <v-col cols="11" md="11" lg="5" class="my-auto">
            <slot name="usability1"></slot>
          </v-col>
          <v-col cols="11" md="11" lg="5" class="my-auto">
            <slot name="usability2"></slot>
          </v-col>
        </v-row>
        
      </v-col>
    </v-row>

    <divider :color="color" />
</template>
