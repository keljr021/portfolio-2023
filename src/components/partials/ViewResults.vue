<script>
  export default {
    name: 'ViewResults',
    data() {
      return {}
    },
    props: {
        
    },
    methods: {

    },
    mounted() {
     
    },
    components: {
      
    }
}
</script>

<template>
 <v-row class="view-text-section">
      <v-col offset-xs="1" offset-sm="1" offset-md="1" offset="2" xs="10" sm="10" md="10" cols="8">
        <div class="view-text-title">Results</div>

        <v-row class="py-8">
          <v-col cols="5" class="my-auto">
            <div class="view-text-section-title">Logo</div>
            <slot name="logo1"></slot>
          </v-col>
          <v-col offset="1" class="my-auto">
            <p><b>&nbsp;</b></p>
            <slot name="logo2"></slot>
          </v-col>
        </v-row>

        <v-row class="py-8">
          <v-col>
            <slot name="mockups"></slot>
          </v-col>
        </v-row>
        
        
      </v-col>
    </v-row>
</template>
