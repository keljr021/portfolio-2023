<script>
import ContactForm from './../components/partials/ContactForm.vue'
export default {
    name: 'Contact',
    data() {
        return {
            resumeUrl: 'https://drive.google.com/drive/folders/1vQ4PuOoTukxV_RmmHZ6q0AngzDrxmQd-?usp=sharing'
        };
    },
    props: {
        socialIconsArray: Array
    },
    components: {
        ContactForm
    },
    methods: {
        openWindow(link) {
            window.open(link, '_blank');
        },
    }
}
</script>

<template>
    <v-container fluid>
        <v-row class="pa-4">
          <v-col>
            <div class="contact-title">Contact</div>
          </v-col>
        </v-row>
        <v-row class="contact">
            <v-col cols="12" lg="2">
                <div class="contact-links">
                    <div @click="openWindow('mailto:kmjr07@yahoo.com')">
                        <v-icon class="mr-2" icon="mdi-email" variant="text"  />
                        kmjr07@yahoo.com
                    </div>
                    <div @click="openWindow('mailto:keljr021@gmail.com')">
                        <v-icon class="mr-2" icon="mdi-email" variant="text"  />
                        keljr021@gmail.com
                    </div>
                    <div @click="openWindow(resumeUrl)" class="mt-4">
                        <v-icon class="mr-2" icon="mdi-folder-file" variant="text"  />
                        Open Resume
                    </div>
                </div>
                <div class="contact-icons py-3">
                    <span class="pr-3" v-for="item in socialIconsArray">
                        <a :href="item.link" target="_blank"><img class="content-item-img" :src="item.src" :alt="item.alt" /></a>
                    </span>
                </div>
            </v-col>
            <v-col cols="12" lg="9">
                <ContactForm />
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
.contact {
    min-height: 500px;
    padding: 0 100px;
}

.contact-title {
    font-size: 28px;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;
    padding: 30px 0;
}

.contact-links,
.contact-icons {
    padding: 30px 0;

    div, span {
        opacity: 0.8;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }
}

.contact-links {
    div {
        padding: 5px 0;
    }
}

.contact-icons {
    img {
        height: 40px !important;
    }
}

@media all and (max-width: 768px) {
    .contact {
        padding: 20px;
    }

    .contact-links,
    .contact-icons {
        padding: 10px 0;
    }
}
</style>

