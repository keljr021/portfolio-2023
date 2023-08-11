<script>
  export default {
    name: 'ViewSolution',
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
        <div class="view-text-title">Solution</div>

        <v-row class="py-8">
          <v-col>
            <div class="view-text-section-title">Wireframes</div>
            <slot name="wireframes"></slot>
          </v-col>
        </v-row>
        
        <v-row class="py-8">
          <v-col cols="5">
            <div class="view-text-section-title">Usability Study</div>
            <slot name="usability1"></slot>
          </v-col>
          <v-col offset="1">
            <p><b>&nbsp;</b></p>
            <slot name="usability2"></slot>
          </v-col>
        </v-row>
        
      </v-col>
    </v-row>
</template>
