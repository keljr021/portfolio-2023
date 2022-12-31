<script setup>
import ContactForm from './partials/ContactForm.vue'
</script>

<template>
    <v-container-fluid class="contact">
        <v-row>
            <v-col cols="12">
                <div class="contact-title">Contact Me</div>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="8">
                <ContactForm />
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4">
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

@media all and (max-width: 768px) {
    .contact {
        padding: 20px;
    }
}
</style>
