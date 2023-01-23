<script>
import ContactForm from './partials/ContactForm.vue'
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
    <v-container fluid class="contact">
        <v-row>
            <v-col cols="12">
                <div class="contact-title">Contact Me</div>
            </v-col>
            <v-col cols="12" lg="4" class="px-4">
                <div class="contact-emails">
                    <div @click="openWindow('mailto:kmjr07@yahoo.com')">
                        <v-icon icon="mdi-email" variant="text"  />
                        kmjr07@yahoo.com
                    </div>
                    <div @click="openWindow('mailto:keljr021@gmail.com')">
                        <v-icon icon="mdi-email" variant="text"  />
                        keljr021@gmail.com
                    </div>
                </div>
                <div class="contact-icons py-3">
                    <span class="pr-3" v-for="item in socialIconsArray">
                        <a :href="item.link" target="_blank"><img class="content-item-img" :src="item.src" :alt="item.alt" /></a>
                    </span>
                </div>
                <div class="py-3" :class="{'pa-3 text-center' : this.$vuetify.display.xs }">
                    <v-btn variant="outlined" color="#1A237E" @click="openWindow(resumeUrl)">
                        View Resume
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="12" lg="8">
                <ContactForm />
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
.contact {
    min-height: 500px;
    padding: 50px 100px;
}

.contact-title {
    font-size: 28px;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 10px 0;
    color: #18184d;
}

.contact-emails,
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

.contact-emails {
    div {
        padding: 10px 0;
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

    .contact-emails,
    .contact-icons {
        padding: 10px 0;
    }
}
</style>
