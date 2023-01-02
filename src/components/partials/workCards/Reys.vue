<script>
export default {
    name: 'Reys',
    data() {
        return {
            dialog: false,
            title: 'Rey\'s Mexican Resturant App'
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
            <v-card-title class="text-left">{{ title }}</v-card-title>
            <v-card-text>
                <div class="work-card-img">
                    <img src="https://via.placeholder.com/200" />
                </div>
                <div class="work-card-caption text-left">
                    A mobile app to streamline the ordering process
                </div>
            </v-card-text>
       </v-card>
       <v-dialog class="item" v-model="dialog" activator="parent" scrollable :fullscreen="$vuetify.display.xs">
            <v-card class="pt-10">
                <v-card-title>
                    <span>{{ title }}</span>

                    <div class="float-right" v-if="!$vuetify.display.xs" >
                        <v-btn
                            class="item-close"
                            icon
                            variant="text"
                            @click="closeDialog()"
                        >x</v-btn>
                    </div>
                </v-card-title>
                <v-card-text class="item-text">
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="3" class="item-text-img">
                            <img src="https://via.placeholder.com/300" />
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="9">
                            <div class="pb-2">
                                <h2>Company</h2>
                                <div>x</div>
                            </div>
                            <div>
                                <h2>Overview</h2>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Convallis a cras semper auctor neque vitae tempus quam.</p>
                                    <p>Vulputate dignissim suspendisse in est ante in. Pulvinar sapien et ligula ullamcorper malesuada. Gravida quis blandit turpis cursus in hac habitasse platea. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Egestas diam in arcu cursus euismod. Dui id ornare arcu odio ut sem. Magnis dis parturient montes nascetur ridiculus mus. Lectus mauris ultrices eros in cursus. Convallis convallis tellus id interdum velit laoreet.</p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <h2>Challenges</h2>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Convallis a cras semper auctor neque vitae tempus quam.</p>
                                <p>Vulputate dignissim suspendisse in est ante in. Pulvinar sapien et ligula ullamcorper malesuada. Gravida quis blandit turpis cursus in hac habitasse platea. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Egestas diam in arcu cursus euismod. Dui id ornare arcu odio ut sem. Magnis dis parturient montes nascetur ridiculus mus. Lectus mauris ultrices eros in cursus. Convallis convallis tellus id interdum velit laoreet.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="py-2">
                                <h2>Date</h2>
                                <div>x</div>
                            </div>
                            <div class="py-2">
                                <h2>Role</h2>
                                <div>x</div>
                            </div>
                        </v-col>
                    </v-row>       
                    <v-row>
                        <v-col>
                            <h2>Solution</h2>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Convallis a cras semper auctor neque vitae tempus quam.</p>
                                <p>Vulputate dignissim suspendisse in est ante in. Pulvinar sapien et ligula ullamcorper malesuada. Gravida quis blandit turpis cursus in hac habitasse platea. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Egestas diam in arcu cursus euismod. Dui id ornare arcu odio ut sem. Magnis dis parturient montes nascetur ridiculus mus. Lectus mauris ultrices eros in cursus. Convallis convallis tellus id interdum velit laoreet.</p>
                            </div>
                            <div class="py-2">
                                <v-row>
                                    <v-col><img src="https://via.placeholder.com/300" class="item-text-img"/></v-col>
                                    <v-col cols="12" sm="8" md="8" lg="8">x</v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>    
                    <v-row>
                        <v-col>
                            <h2>Results</h2>
                            <div>
                            <v-row>
                                    <v-col cols="12" sm="12" md="12" lg="6">x</v-col>
                                    <v-col cols="12" sm="12" md="12" lg="6">x</v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="justify-end px-4 mx-4">
                    <v-btn variant="outlined" :block="$vuetify.display.xs" @click="closeDialog()">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<style scoped>
.work-card-img {
    padding: 5px 0;
}

p {
    padding: 10px 0;
}

.work-card-img,
.item-text-img {
    text-align: center;
}
</style>