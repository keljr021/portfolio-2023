<script setup>

</script>

<template>
    <div ref="design" id="design">
        <div class="section-header pa-8">Design approach</div>

        <v-card variant="flat" class="pa-8 mx-8">
            <v-timeline class="px-8" align="start" dot-color="teal-darken-2">
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