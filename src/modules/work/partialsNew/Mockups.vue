<script setup>
const props = defineProps({
    input: Object,
});
</script>

<template>
    <div ref="mockups" id="mockups">
        <div class="section-header pa-md-8">
            Mockups
            <span class="px-4" >
                <template v-if="input.buttons">
                    <v-btn
                        v-for="buttonItem in input.buttons" 
                        class="ma-4 ml-0" 
                        size="small"
                        rounded="xl" 
                        variant="outlined" 
                        :prepend-icon="buttonItem.icon"
                        :href="buttonItem.link"
                        target="_blank"
                        >{{ buttonItem.name }}
                    </v-btn>
                </template>
                <template v-if="input.button">
                    <v-btn 
                        class="ma-4 ml-0" 
                        size="small"
                        rounded="xl" 
                        variant="outlined" 
                        :prepend-icon="input.button.icon"
                        :href="input.button.link"
                        target="_blank"
                        >{{ input.button.name }}
                    </v-btn>
                </template>
            </span>
        </div>
        <div class="my-2">
            <v-card class="mx-md-8 mb-12 pa-8" variant="flat" v-for="(listItem, i) in input.list" :key="i">
                <v-card-title>{{ listItem.title }}</v-card-title>
                <v-row>
                    <v-col cols="12" sm="6" md="6" lg="6">
                        <img class="mockups-item-image" :src="$imageSrc(listItem.lofi.src)" :alt="listItem.lofi.caption" />
                        <div>
                            <div class="section-caption">Before</div>
                            <p>
                                {{ listItem.lofi.caption }}
                            </p>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6">
                        <img class="mockups-item-image" :src="$imageSrc(listItem.hifi.src)" :alt="listItem.hifi.caption" />
                        <div>
                            <div class="section-caption">After</div>
                            <p>
                                {{ listItem.hifi.caption }}
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-card>

            <v-row v-if="input.sticker" class="my-8">
                <v-col>
                    <v-card class="mx-8 mb-12 pa-8" variant="flat">
                        <v-card-title>Sticker sheet</v-card-title>
                        <div class="my-5">
                            <img class="mockups-item-sticker" :src="$imageSrc(input.sticker.src)" :alt="input.sticker.caption" />
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<style scoped>
.mockups-item-image {
    width: 100%;
    height: 200px;
    object-fit: scale-down;
    margin: 30px 0;
}
.mockups-item-sticker {
    height: 500px;
    object-fit: scale-down;
    margin: 30px 0;
}

@media all and (max-width: 768px) {
    .mockups-item-sticker {
        width: 100%;
        height: auto;
    }
}
</style>