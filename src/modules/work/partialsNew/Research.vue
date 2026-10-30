<script setup>
const props = defineProps({
    input: Object,
});
</script>

<template>
    <div ref="research" id="research" class="my-8">
        <div class="section-header px-8">Research</div>

        <v-row>

            <template v-for="item in input">
                <v-col v-if="item.type === 'card'" cols="12" sm="12" md="6" lg="6">
                    <v-card class="ma-8 pa-8" variant="flat" min-height="300">
                        <v-row>
                            <v-col>
                                <div class="section-caption">{{ item.title }}</div> 
                                <div v-if="item.text">
                                    <p v-for="(textItem, t) in item.text" :key="t">{{ textItem }}</p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col v-if="item.type === 'image'" cols="12" sm="12" md="6" lg="6">
                    <img v-for="(imageItem, i) in item.images" :key="i" :src="$imageSrc(imageItem.src)" :alt="imageItem.caption" class="my-8 w-75" />
                </v-col>
            </template>

        </v-row>
    </div>
</template>

<style scoped>
.research-header {
    font-size: 24px;
}
</style>