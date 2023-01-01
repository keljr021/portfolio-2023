<script>
  export default {
    name: 'workDialog',
    data () {
      return {
        dialog: false,
      };
    },
    methods: {
      closeDialog() {
        this.dialog = false;
      }
    }
  }
</script>

<template>
    <v-dialog class="item" v-model="dialog" activator="parent" scrollable :fullscreen="this.$vuetify.display.xs">
        <v-card>
          <v-card-title>
            <span>Title</span>

            <div class="float-right">
                <v-btn
                    class="item-close"
                    icon
                    variant="text"
                    @click="closeDialog()"
                >x</v-btn>
            </div>
          </v-card-title>
          <v-card-text class="item-text">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>  
        </v-card-text>
          <v-card-actions class="text-center">
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="closeDialog()">Close Dialog</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style>
.item {
    padding: 20px;
    margin: 20px;
}

.item-close {
    color: black;
}

.item-text {
    height: 800px;
}
</style>
