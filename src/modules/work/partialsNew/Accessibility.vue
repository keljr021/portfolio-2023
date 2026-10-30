<script setup>
const props = defineProps({
    input: Object,
});
</script>

<template>
    <div ref="accessibility" id="accessibility" class="py-8">
        <div class="section-header px-8">Accessibility</div>

        <v-card class="ma-8 pa-8" variant="flat">
            <div class="py-6" v-for="item in input">
                <div class="section-caption">{{ item.name }}</div> 
                <div v-if="item.text">
                    <div v-for="textItem in item.text">{{ textItem }}</div>
                </div>
            </div>
        </v-card>
    </div>
</template>