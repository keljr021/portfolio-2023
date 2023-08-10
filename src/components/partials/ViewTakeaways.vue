<script>
  export default {
    name: 'ViewTakeaways',
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
        <div class="view-text-title">Takeaways</div>

        <v-row class="py-8">
          <v-col>
            <div class="view-text-section-title">Lessons Learned</div>
            <slot name="lessons"></slot>
          </v-col>
          <v-col>
            <div class="view-text-section-title">Next Steps</div>
            <slot name="next"></slot>
          </v-col>
        </v-row>
        
      </v-col>
    </v-row>
</template>
