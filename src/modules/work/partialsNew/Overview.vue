<script setup>
const props = defineProps({
    input: Object,
});
</script>

<template>
    <v-card class="my-2 mx-md-8 pa-8" variant="flat">
        <div ref="overview" id="overview" class="overflow-y-auto">
            <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                    <div v-if="input.info" class="pt-6 pb-4 px-4">
                        <div>
                            <p v-for="item in input.info">{{ item }}</p>
                        </div>
                    </div>

                    <div v-if="input.problem" class="pb-4">
                        <div class="section-caption">Problem </div> 
                        <div v-if="input.problem">
                            <p v-for="item in input.problem">{{ item }}</p>
                        </div>
                    </div>

                    <div v-if="input.goal" class="pb-4">
                        <div class="section-caption">Goal </div> 
                        <div v-if="input.goal">
                            <p v-for="item in input.goal">{{ item }}</p>
                        </div>
                    </div>
                </v-col>
                <v-col v-if="input.image" cols="12" sm="6" md="6" lg="6" class="text-center pt-8 pb-4">
                    <img :src="$imageSrc(input.image)" alt="Placeholder Image" class="w-75">
                </v-col>
                <v-col v-if="input.features" cols="12" sm="6" md="6" lg="6" class="pt-8 pb-4 px-4">
                    <div class="section-caption">Features</div> 
                    <div>
                        <ul>
                            <li v-for="feature in input.features" :key="feature">{{ feature }}</li>
                        </ul>
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>