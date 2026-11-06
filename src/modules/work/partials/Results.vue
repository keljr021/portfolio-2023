<script setup>
const props = defineProps({
    input: Object,
});
</script>

<template>
    <div ref="results" id="results">
        <div class="section-header pa-md-8 my-2">Results</div>
        <v-card class="mx-md-8 my-2 pa-8" variant="flat" min-height="300">
            <v-row>
                <ul>
                    <li v-for="(item, i) in input" :key="i" class="mb-4">
                        {{ item }}
                    </li>
                </ul>
            </v-row>
        </v-card>
    </div>
</template>