<script>
  import Divider from './../Divider.vue';
  export default {
    name: 'Ideate',
    emits: [
      'open-lofi',
      'open-hifi'
    ],
    props: {
        color: {
            type: String,
            default: '#666'
        },
        hasLofi: {
            type: Boolean,
            default: false
        },
        hasHifi: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        openLofi() {
            if (this.hasLofi) this.$emit('open-lofi');
        },
        openHifi() {
            if (this.hasHifi) this.$emit('open-hifi');
        },
    },
    components: {
        Divider
    }
}
</script>

<template>
    <v-row class="view-text-section" justify="space-evenly">
        <v-col cols="10">
            <div class="view-text-title" :style="'color:' + color">
                <v-icon>mdi-lightbulb</v-icon>
                Ideate
            </div>

            <v-row>
                <v-col cols="12" v-if="$slots.paper" class="py-6">
                    <div class="view-text-section-title">Paper Wireframes</div>
                    <div>
                        <slot name="paper"></slot>
                    </div>
                </v-col>

                <v-col cols="12" v-if="$slots.lofi" class="py-6">
                    <div :class="{ 'view-text-section-title': true, 'link': hasLofi }" @click="openLofi" title="Open in new tab">
                        Lo-Fi Wireframes
                        <v-icon size="x-small" v-if="hasLofi">mdi-open-in-new</v-icon>
                    </div>
                    <div>
                        <slot name="lofi"></slot>
                    </div>
                </v-col>

                <v-col cols="12" v-if="$slots.study1 && $slots.study2" class="py-6">
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

                <v-col cols="12" v-if="$slots.hifi" class="py-6">
                    <div :class="{ 'view-text-section-title': true, 'link': hasHifi }" @click="openHifi" title="Open in new tab">
                        Hi-Fi Wireframes
                        <v-icon size="x-small" v-if="hasHifi">mdi-open-in-new</v-icon>
                    </div>
                    <div>
                        <slot name="hifi"></slot>
                    </div>
                </v-col>

                <v-col cols="12" v-if="$slots.logo1 && $slots.logo2" class="py-6">
                    <div class="view-text-section-title">Logo</div>
                    <div>
                        <v-row>
                            <v-col cols="11" sm="5" md="5" lg="5">
                                <slot name="logo1"></slot>
                            </v-col>
                            <v-col offset-sm="1" offset-md="1" offset-lg="1" sm="5" md="5" lg="5">
                                <slot name="logo2"></slot>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>

                <v-col cols="12" v-if="$slots.color" class="py-6">
                    <div class="view-text-section-title">Components and Typography</div>
                    <div>
                        <slot name="color"></slot>
                    </div>
                </v-col>
            </v-row>

        </v-col>
    </v-row>
</template>
