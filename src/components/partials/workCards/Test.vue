<script>
export default {
    name: 'Test',
    data() {
        return {
            dialog: false
        }
    },
    emits: [],
    props: {

    },
    methods: {
        closeDialog() {
            this.dialog = false;
      }
    },
}
</script>

<template>
    <v-col cols="12" sm="6" md="6" lg="4" class="text-center pa-4">
        <v-card class="work-card">
            <v-card-title class="text-left">Test Item</v-card-title>
            <v-card-text>
                Fusce quis dictum erat. Praesent at dolor sed lectus imperdiet finibus. Nunc aliquet dignissim volutpat. Maecenas sit amet eros nibh. Quisque fermentum ac ligula rhoncus elementum. Nullam hendrerit non ante a mattis. Proin ut purus lorem. Donec dolor erat, aliquam non pulvinar at, ultrices sed neque. Vivamus rhoncus eget diam id consequat. In sit amet sagittis eros.
            </v-card-text>
       </v-card>
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
    </v-col>
</template>