<script>
  export default {
    name: 'VueDefine',
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
        <div class="view-text-title">Define</div>

        <v-row>
          <v-col>
            <div class="view-text-section-title">Persona</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="my-auto" cols="12" xs="12" sm="12" md="12" lg="5">
            <p>
                <slot name="persona1"></slot>
            </p>
          </v-col>
          <v-col class="my-auto" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <p>
              <slot name="persona2"></slot>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="view-text-section-title">User Map</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="my-auto" cols="12" xs="12" sm="12" md="12" lg="5">
            <p>
              <slot name="user1"></slot>
            </p>
          </v-col>
          <v-col class="my-auto" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <p>
                <slot name="user2"></slot>
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>
