<script setup>
import CtaText from './CtaText.vue'
import CtaMenu from './CtaMenu.vue'
import Footer from '@/components/Footer.vue'

defineProps({
  navItems: Array,
  socialIconsArray: Array
});

const emit = defineEmits(['scrollTo']);

function scrollTo(input) {
  emit('scrollTo', input);
}
</script>

<template>
    <v-container fluid class="cta">
        <div class="cta-bg">
            <img class="cta-bg-image" src="../../../assets/cta/annie-spratt-xTaOPMa6wAE-unsplash.jpg" />
            <img alt="drawing of me" class="cta-image" src="../../../assets/drawn-photo.png" />
        </div>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="6">
                <h1 class="cta-title">Hi my name's <br v-if="$vuetify.display.xs" /><b>Kelvin Morrisey Jr.</b></h1>
                <CtaText @scrollTo="scrollTo" />
            </v-col>
        </v-row>
        
        <Footer :fixed="true" :onHomePage="true"/>
    </v-container>
</template>

<style scoped lang="scss">
.cta {
    position: relative;
    height: 100%;
    padding: 70px 0 10px 50px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    -webkit-border-radius: 0;
    border-radius: 0;
    z-index: 0;
    color: #d9d9d9;
}

.cta-bg {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
    padding: 0;
    margin: 0;
    background: #323245;
    z-index: -1;

}

.cta-bg-image {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    object-fit: cover;
    overflow: hidden;
    opacity: 0.1;
    z-index: -1;
}

.cta-title {
    color: #b9e9e1;
    padding: 50px 0;
}

.cta-logo {
    position: absolute;
    left: 50px;
    top: 50px;
    height: 40px;
    opacity: 0.75;
}

.cta-image {
    position: absolute;
    right: -10px;
    bottom: -40px;
    opacity: 0.2;
    height: 400px;
    margin-top: 10%;
}

@media all and (min-width: 768px) and (max-width: 1023px) {
    .cta-bg-image {
        width: 100%;
        height: 100vh;
    }
}

@media all and (max-width: 768px) {
    .cta {
        padding: 20px;
    }

    .cta-bg-image {
        width: initial;
        height: 100vh;
    }

    .cta-logo {
        display: none;
    }

    .cta-image {
        width: 75%;
        height: initial;
    }
}
</style>
