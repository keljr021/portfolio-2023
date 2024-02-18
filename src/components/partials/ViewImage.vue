<script>
export default {
    name: 'ViewImage',
    data() {
        return {

        }
    },
    props: {
        src: {
            type: String,
            default: null
        },
        text: {
            type: String,
            default: null
        },
        imgWidth: {
            type: String,
            default: '100%'
        },
        imgHeight: {
            type: String,
            default: null
        }
    },
    methods: {
        getSource() {
            return new URL(`../../assets/${this.src}`, import.meta.url).href;
        },
    },
    componets: {}
}
</script>
<template>
     <v-dialog width="800" class="pa-0 ma-0">
        <template v-slot:activator="{ props }">
            <v-img 
                v-bind="props" 
                class="pt-1 cursor-pointer" 
                :width="imgWidth" 
                :height="imgHeight ? imgHeight : ''" 
                lazy-src="https://picsum.photos/id/11/100/60" 
                :src="getSource()">
                
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular color="grey-lighten-4" indeterminate />
                    </div>
                </template>
            </v-img>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card width="800" class="pa-0 ma-0">

                <template v-slot:loader="{ isActive }">
                    <v-progress-linear
                        :active="isActive"
                        color="deep-purple"
                        height="4"
                        indeterminate
                    ></v-progress-linear>
                </template>

                <v-img
                    class="mx-1"
                    width="100%"
                    min-height="500"
                    lazy-src="https://picsum.photos/id/11/100/60" 
                    :src="getSource()" />

                
                <v-card-text v-if="text" class="ma-2 font-italic">
                    {{ text }}
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>
<style scoped lang="scss">
.cursor-pointer {
    cursor: pointer;
}
</style>