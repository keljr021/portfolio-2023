<script>
  import Divider from './Divider.vue';
  export default {
    name: 'ViewResults',
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
        <div class="view-text-title">Results</div>

        <v-row justify="center" justify-md="space-evenly" justify-lg="space-evenly" class="py-8">
          <v-col cols="11" sm="5" md="5" lg="5" class="my-auto">
            <div class="view-text-section-title">Logo</div>
            <slot name="logo1"></slot>
          </v-col>
          <v-col cols="11" sm="5" md="5" lg="5" class="my-auto">
            <p><b>&nbsp;</b></p>
            <slot name="logo2"></slot>
          </v-col>
        </v-row>

        <v-row justify="center" justify-md="space-evenly" justify-lg="space-evenly" class="py-8">
          <v-col>
            <slot name="mockups"></slot>
          </v-col>
        </v-row>
        
        
      </v-col>
    </v-row>

    <divider :color="color" />
</template>
