<script>
  import Divider from './Divider.vue';
  export default {
    name: 'ViewDefine',
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
 <v-row class="view-text-section">
      <v-col offset-xs="1" offset-sm="1" offset-md="1" offset="2" xs="10" sm="10" md="10" cols="8">
        <div class="view-text-title">Define</div>

        <v-row>
          <v-col>
            <div class="view-text-section-title">Persona</div>
          </v-col>
        </v-row>
        <v-row justify-md="space-evenly" justify-lg="space-evenly">
          <v-col class="my-auto" cols="11" sm="5" md="5" lg="5">
            <p>
                <slot name="persona1"></slot>
            </p>
          </v-col>
          <v-col order-xs="first" offset-sm="1" offset-md="1" offset-lg="1" sm="5" md="5" lg="5">
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
        <v-row justify-md="space-evenly" justify-lg="space-evenly">
          <v-col class="my-auto" cols="11" xs="12" sm="12" md="11" lg="5">
            <p>
              <slot name="user1"></slot>
            </p>
          </v-col>
          <v-col class="my-auto" cols="11" xs="12" sm="12" md="11" lg="5">
            <p>
                <slot name="user2"></slot>
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <divider :color="color" />
</template>
