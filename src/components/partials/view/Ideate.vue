<script>
  import Divider from './../Divider.vue';
  export default {
    name: 'Ideate',
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
    <v-row class="view-text-section" justify="space-evenly">
        <v-col cols="10">
            <div class="view-text-title" :style="'color:' + color">Ideate</div>

            <v-row>
                <v-col cols="12" v-if="$slots.paper">
                    <div class="view-text-section-title">Paper Wireframes</div>
                    <div>
                        <slot name="paper"></slot>
                    </div>
                </v-col>

                <v-col cols="12" v-if="$slots.lofi">
                    <div class="view-text-section-title link" @click="$emit('open-lofi')" title="Open in new tab">
                        Lo-Fi Wireframes
                        <v-icon size="x-small">mdi-open-in-new</v-icon>
                    </div>
                    <div>
                        <slot name="lofi"></slot>
                    </div>
                </v-col>

                <v-col cols="12" v-if="$slots.study1 && $slots.study2">
                    <div class="view-text-section-title">Usability Study</div>
                    <div>
                        <v-row>
                            <v-col cols="11" sm="5" md="5" lg="5">
                                <slot name="study1"></slot>
                            </v-col>
                            <v-col offset-sm="1" offset-md="1" offset-lg="1" sm="5" md="5" lg="5">
                                <slot name="study2"></slot>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>

                <v-col cols="12" v-if="$slots.hifi">
                    <div class="view-text-section-title link" @click="$emit('open-hifi')" title="Open in new tab">
                        Hi-Fi Wireframes
                        <v-icon size="x-small">mdi-open-in-new</v-icon>
                    </div>
                    <div>
                        <slot name="hifi"></slot>
                    </div>
                </v-col>

                <v-col cols="12" v-if="$slots.logo1 && $slots.logo2">
                    <div class="view-text-section-title">Logo</div>
                    <div>
                        <v-row>
                            <v-col>
                                <slot name="logo1"></slot>
                            </v-col>
                            <v-col>
                                <slot name="logo2"></slot>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>

        </v-col>
    </v-row>
</template>
