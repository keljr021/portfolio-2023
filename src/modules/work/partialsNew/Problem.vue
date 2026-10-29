<script setup>

</script>

<template>
    <v-card class="ma-2 pa-8" variant="flat">
        <div ref="problem" id="problem" class="overflow-y-auto">
            <v-row>
                <v-col>
                    <div class="py-6">
                        <div class="section-caption">Problem </div> 
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus justo pellentesque felis lobortis, et hendrerit mauris cursus.
                        </div>
                    </div>

                    <div class="py-6">
                        <div class="section-caption">Goal </div> 
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus justo pellentesque felis lobortis, et hendrerit mauris cursus.
                        </div>
                    </div>
                </v-col>
                <v-col class="text-center py-6">
                    <img :src="$imageSrc('logo-pr.png')" alt="Placeholder Image" style="width: 50%; height: auto;">
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>