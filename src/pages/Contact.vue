<script>
import ContactForm from './../components/partials/ContactForm.vue'
export default {
    name: 'Contact',
    data() {
        return {
            resumeUrl: 'https://drive.google.com/drive/folders/1vQ4PuOoTukxV_RmmHZ6q0AngzDrxmQd-?usp=sharing'
        };
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
            <v-col cols="11" md="3" lg="3">
                <div class="contact-links">
                    <div @click="openWindow('mailto:kmjr07@yahoo.com')" title="Email kmjr07@yahoo.com">
                        <v-icon class="mr-2" icon="mdi-email" variant="text"  />
                        kmjr07@yahoo.com
                    </div>
                    <div @click="openWindow('mailto:keljr021@gmail.com')" title="Email keljr021@gmail.com">
                        <v-icon class="mr-2" icon="mdi-email" variant="text"  />
                        keljr021@gmail.com
                    </div>
                    <div @click="openWindow(resumeUrl)" class="mt-4">
                        <v-icon class="mr-2" icon="mdi-folder-file" variant="text"  />
                        Open Resume
                    </div>
                </div>
                <div class="contact-icons pt-3">
                    <a class="mr-3" href="https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/" target="_blank"><img class="content-item-img" src="../assets/LI-black.png" alt="LinkedIn link" title="View LinkedIn Profile"/></a>
                    <a class="mr-3" href="https://github.com/keljr021" target="_blank"><img class="content-item-img" src="../assets/github-black.png" alt="GitHub link" title="View GitHub Profile" /></a>
                </div>
            </v-col>
            <v-col cols="11" md="6" lg="6">
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
        height: 30px !important;
        opacity: 0.7;

        &:hover {
            opacity: 1;
        }
    }
}

@media all and (max-width: 768px) {
    .contact {
        min-height: initial;
        padding: 20px;
    }

    .contact-links,
    .contact-icons {
        padding: 10px 0;
    }
}
</style>

