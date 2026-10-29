<script setup>
import { ref } from 'vue'

const window = ref(null);
</script>

<template>
    <div ref="development" id="development">
        <div class="section-header pa-8">Development approach</div>

        <v-card variant="flat" class="pa-8 ma-8">
            <div v-if="$vuetify.display.mdAndDown">
                <v-window
                    v-model="window"
                    show-arrows
                >
                    <v-window-item
                        v-for="n in 3"
                        :key="n"
                        >
                        <v-card class="d-flex justify-center align-center" height="200px">
                            <span class="text-display-large">Card {{ n }}</span>
                        </v-card>
                    </v-window-item>
                </v-window>
            </div>

            <v-timeline v-else class="pa-8" align="start" dot-color="blue-darken-3">
                <v-timeline-item>
                <template v-slot:opposite>
                    Opposite content
                </template>
                <div>
                    <div class="text-title-large">Content title</div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                </v-timeline-item>

                <v-timeline-item>
                <template v-slot:opposite>
                    Opposite content
                </template>
                <div>
                    <div class="text-title-large">Content title</div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                </v-timeline-item>

                <v-timeline-item>
                <template v-slot:opposite>
                    Opposite content
                </template>
                <div>
                    <div class="text-title-large">Content title</div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                </v-timeline-item>
            </v-timeline>
        </v-card>
    </div>
</template>