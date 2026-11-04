<script setup>
const props = defineProps({
    input: Object,
});
</script>

<template>
    <div ref="accessibility" id="accessibility" class="py-8">
        <div class="section-header px-md-8 my-2">Accessibility</div>

        <v-card class="ma-md-8 pa-8" variant="flat">
            <v-row>
                <v-col v-for="item in input" cols="12" sm="6" md="6" lg="6" class="py-4">
                    <div class="section-caption">{{ item.name }}</div>
                    <div v-for="textItem in item.text">{{ textItem }}</div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>