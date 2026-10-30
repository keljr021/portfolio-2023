<script setup>
const props = defineProps({
    input: Object,
});
</script>

<template>
    <v-card class="ma-2 pa-8" variant="flat">
        <div ref="overview" id="overview" class="overflow-y-auto">
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <div class="py-4">
                        <div class="section-caption">Problem </div> 
                        <div v-if="input.problem">
                            <p v-for="item in input.problem">{{ item }}</p>
                        </div>
                    </div>

                    <div class="py-4">
                        <div class="section-caption">Goal </div> 
                        <div v-if="input.goal">
                            <p v-for="item in input.goal">{{ item }}</p>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="text-center align-self-center">
                    <img :src="$imageSrc(input.image)" alt="Placeholder Image" class="w-75">
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>