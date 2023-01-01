<script>
export default {
    name: 'ContactForm',
    methods: {
        openWindow(link) {
            window.open(link, '_blank');
        }
    }
}

</script>

<template>
    <v-row class="justify-center">
        <v-col v-if="!this.$vuetify.display.xs">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScDaM4cS0uWQZGlPmm1SMcMvV3Zqtxcu_OZemKMIM_tVSRj-w/viewform?embedded=true" width="640" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </v-col>

        <div v-else class="pa-3">
            <v-btn variant="outlined" color="#1A237E" @click.stop="openWindow('https://forms.gle/SjGiCC78n1cYoeBk7')">
                Fill out contact form
            </v-btn>
        </div>
    </v-row>
</template>

<style scoped>
iframe {
    width: 100%;
    min-height: 100%;
}
</style>
