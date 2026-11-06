<script setup>
const props = defineProps({
    input: Object,
});
</script>

<template>
    <div>
        <div class="section-header pa-md-8">Lessons learned</div>
        <v-card class="mx-md-8 my-2 pa-8" variant="flat" min-height="300">
            <v-row>
                <div v-for="(item, i) in input" :key="i" class="pb-2">
                    {{ item }}
                </div>
            </v-row>
        </v-card>
    </div>
</template>