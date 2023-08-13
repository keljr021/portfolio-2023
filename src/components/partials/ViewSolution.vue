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
      <v-col offset-xs="1" offset-sm="1" offset-md="1" offset="2" xs="11" sm="11" md="11" cols="8">
        <div class="view-text-title">Solution</div>

        <v-row>
          <v-col>
            <slot name="wireframes"></slot>
          </v-col>
        </v-row>
        
        <v-row class="py-8">
          <v-col cols="11" md="5" lg="5" class="my-auto">
            <div class="view-text-section-title">Usability Study</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="11" md="5" lg="5" class="my-auto">
            <slot name="usability1"></slot>
          </v-col>
          <v-col offset-md="1" offset-lg="1" class="my-auto">
            <slot name="usability2"></slot>
          </v-col>
        </v-row>
        
      </v-col>
    </v-row>
</template>
