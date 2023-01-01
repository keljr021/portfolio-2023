<script>
import ContactForm from './partials/ContactForm.vue'
export default {
    name: 'Contact',
    props: {
        socialArray: Array
    },
    components: {
        ContactForm
    },
    methods: {
        openWindow(link) {
            window.open(link, '_blank');
        }
    }
}
</script>

<template>
    <v-container-fluid class="contact">
        <v-row>
            <v-col cols="12">
                <div class="contact-title">Contact Me</div>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="8" style="background:#eee">
                <ContactForm />
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4">
                <div class="pb-3 px-3" v-for="item in socialArray">
                    <v-icon v-if="item.type === 'icon'" :icon="item.src" variant="text" @click="openWindow(item.link)" />
                    <a v-else :href="item.link" target="_blank"><img :src="item.src" :alt="item.alt" /></a>
                    <span class="px-2" v-if="item.type === 'icon'">{{ item.text }}</span>
                </div>
            </v-col>
        </v-row>
    </v-container-fluid>
</template>

<style lang="scss" scoped>
.contact {
    min-height: 500px;
    padding: 50px 100px;
}

.contact-title {
    font-size: 24px;
    padding: 10px 0;
}

.contact-item {
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
}

@media all and (max-width: 768px) {
    .contact {
        padding: 20px;
    }
}
</style>
