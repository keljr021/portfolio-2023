<script setup>
import ContactForm from './partials/ContactForm.vue'
</script>

<template>
    <v-container-fluid class="contact">
        <v-row>
            <v-col cols="12">
                <div class="contact-title">Contact Me</div>
            </v-col>
            <v-col cols="8">
                <ContactForm />
            </v-col>
            <v-col cols="4">
                <div class="contact-body">Contact body here.</div>
            </v-col>
        </v-row>
    </v-container-fluid>
</template>

<style lang="scss" scoped>
.contact {
    height: 500px;
    padding: 50px 100px;
}

.contact-title {
    font-size: 24px;
    padding: 10px 0;
}
</style>
