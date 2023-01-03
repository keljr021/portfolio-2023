<script>
export default {
    name: 'LogoWork',
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
            <v-col cols="12" sm="6" md="6" lg="4">
                <v-card class="mx-auto" :height="$vuetify.display.xs ? 'auto' : '100px'">
                    <v-card-text>
                        <v-img width="70%" :src="imgSrc('logo-reys.png')" class="mx-auto" />
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4">
                <v-card class="mx-auto" :height="$vuetify.display.xs ? 'auto' : '100px'">
                    <v-card-text>
                        <v-img contain  width="70%" :src="imgSrc('logo-lb.png')" class="mx-auto" />
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4">
                <v-card class="mx-auto" :height="$vuetify.display.xs ? 'auto' : '100px'">
                    <v-card-text>
                        <v-img contain  width="50%" :src="imgSrc('logo-if.png')" class="mx-auto" />
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4">
                <v-card class="mx-auto" :height="$vuetify.display.xs ? 'auto' : '100px'">
                    <v-card-text>
                        <v-img contain width="70%" :src="imgSrc('logo-ka.png')" class="mx-auto" />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped></style>
