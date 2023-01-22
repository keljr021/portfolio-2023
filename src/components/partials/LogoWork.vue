<script>
export default {
    name: 'LogoWork',
    data() {
        return {
            logos: [
                {
                    src: 'logo-to.png'
                },
                {
                    src: 'logo-reys.png'
                },
                {
                    src: 'logo-lb.png',
                    height: 50
                },
                {
                    src: 'logo-if.png',
                    height: 50
                },
                {
                    src: 'logo-ka.png',
                    height: 50
                }
            ]
        };
    },
    methods: {
        imgSrc(input) {
            return new URL(`../../assets/${input}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="work-section logos">
        <v-row>
            <v-col>
                <div class="work-subtitle">Logo Design</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" md="6" lg="4" class="d-flex" v-for="logo in logos">
                <v-card width="100%" :min-height="$vuetify.display.xs ? 'auto' : 150" class="align-stretch d-flex">
                    <v-card-text class="align-center ma-auto">
                        <v-img contain :height="$vuetify.display.xs ? 50 : (logo.height ? logo.height : 80)" :src="imgSrc(logo.src)" />
                    </v-card-text>
                </v-card>
            </v-col>
         </v-row>
    </div>
</template>

<style scoped></style>
