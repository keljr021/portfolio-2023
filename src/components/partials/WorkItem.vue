<script>
import { useSlots } from 'vue'
export default {
    name: 'WorkItem',
    data() {
        return {
            dialog: false
        }
    },
    props: {
        title: String,
        caption: String,
        image: String,
        imageWidth: String,
        imageHeight: String,
        company: String,
        date: String
    },
    methods: {
        imgSrc(input) {
            return new URL(`../../assets/${input}`, import.meta.url).href;
        },
        closeDialog() {
            this.dialog = false;
        },
        openWindow(link) {
            window.open(link, '_blank');
        },
        isSlotFilled(name) {
            const slots = useSlots();
            return slots[name] !== null;
        }
    },
}
</script>

<template>
    <v-col cols="12" sm="6" md="6" lg="4" class="text-center pa-4">

         <!-- Card component-->
        <v-card class="work-card">
            <v-card-title class="text-left">{{ title }}</v-card-title>
            <v-card-text>
                <div class="work-card-img" style="height:200px;overflow-y:hidden">
                    <v-img :width="imageWidth" :height="imageHeight" :src="image" class="mx-auto"/>
                </div>
                <div class="work-card-caption text-left mt-2">
                    {{ caption }}
                </div>
            </v-card-text>
       </v-card>

       <!-- Dialog component -->
       <v-dialog class="item" v-model="dialog" activator="parent" scrollable :fullscreen="$vuetify.display.xs">
            <v-card class="pt-xs-10">
                <v-card-title>
                    <span>{{ title }}</span>
                    <v-btn
                        v-if="!$vuetify.display.xs"
                        class="float-right item-close"
                        icon="mdi-close"
                        variant="text"
                        @click="closeDialog()"
                    ></v-btn>
                </v-card-title>
                <v-card-text class="item-text">
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="4" class="item-text-img">
                            <v-img :width="imageWidth" :height="imageHeight" :src="image" />
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="4">
                            <div class="pb-4" v-if="company">
                                <h2>Company</h2>
                                <div class="py-2">
                                    {{ company }}
                                </div>
                            </div>
                            <div class="pb-4" v-if="isSlotFilled('role')">
                                <h2>Role</h2>
                                <div class="py-2">
                                    <slot name="role"></slot>
                                </div>
                            </div>
                            <div class="pb-4" v-if="isSlotFilled('tools')">
                                <h2>Tools used</h2>
                                <div class="py-2">
                                    <slot name="tools"></slot>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="4">
                            <div class="pb-4" v-if="date">
                                <h2>Project Date</h2>
                                <div class="py-2">{{ date }}</div>
                            </div>
                            <div class="pb-4" v-if="isSlotFilled('overview')">
                                <h2>Overview</h2>
                                <div class="py-2">
                                    <slot name="overview"></slot>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="py-2" v-if="isSlotFilled('challenges')">
                        <v-col>
                            <h2>Challenges</h2>
                            <div>
                                <slot name="challenges"></slot>
                            </div>
                        </v-col>
                    </v-row>       
                    <v-row class="py-2" v-if="isSlotFilled('body')">
                        <v-col>
                            <h2>Solution</h2>
                            <slot name="body"></slot>
                         </v-col>
                    </v-row>    
                    <v-row>
                        <v-col>
                            <h2>Results</h2>
                            <slot name="results"></slot>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="justify-end px-4 mx-4">
                    <slot name="buttons"></slot>
                    <v-btn variant="outlined" :block="$vuetify.display.xs" @click="closeDialog()">
                        <v-icon class="mx-2">mdi-close</v-icon>
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<style scoped></style>