<script setup>
import ViewImage from './ViewImage.vue'

const props = defineProps({
    input: Object,
});

const hasText = (item) => {
    return item.text && item.text.length > 0;
}

const hasImages = (item) => {
    return item.images && item.images.length > 0;
}
</script>

<template>
    <div ref="research" id="research" class="my-8">
        <div class="section-header px-md-8 my-2">Research</div>

        <v-row>

            <template v-for="item in input">
                <v-col v-if="item.type === 'card'" cols="12" :sm="item.size" :md="item.size" :lg="item.size">
                    <v-card class="my-2 ma-md-8 pa-8" variant="flat" min-height="300">
                        <v-row>
                            <v-col v-if="item.images" cols="12" :sm="item.size === 12 ? 6 : 12" :md="item.size === 12 ? 6 : 12" :lg="item.size === 12 ? 6 : 12">
                                <div v-if="item.title" class="section-caption">{{ item.title }}</div>
                                <div :class="{ 'my-8': true, 'text-center': item.size === 6 }">
                                    <view-image v-for="(imageItem, i) in item.images" 
                                        :key="i" 
                                        :class="`research-card-image ${item.size === 6 ? 'half' : 'full'}`"
                                        :src="imageItem.src" 
                                        :text="imageItem.caption"
                                        :img-width="item.size === 6 ? 'fit-width' : '30%'"
                                    />
                                    
                                </div>
                                <div v-if="item.size === 6">
                                    <p v-for="(textItem, t) in item.text" :key="t">{{ textItem }}</p>
                                </div>
                            </v-col>
                            <v-col v-if="item.text && item.size === 12" cols="12" :sm="item.size" :md="item.size" :lg="item.size">
                                <div>
                                    <p v-for="(textItem, t) in item.text" :key="t">{{ textItem }}</p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </template>

        </v-row>
    </div>
</template>

<style scoped>
.research-header {
    font-size: 24px;
}

.research-card-image {
    &.half {
        width: 75%;
        margin: 0 auto;
    }
    
    &.full {
        width: 30%;
    }
}
</style>