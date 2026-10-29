<script setup>

</script>

<template>
    <div ref="development" id="development">
        <div class="section-header pa-8">Development approach</div>

        <v-card variant="flat" class="pa-8 mx-8">
            <v-timeline class="pa-8" align="start" dot-color="blue-darken-3">
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