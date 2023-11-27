<script>
export default {
    name: 'navbar',
    data() {
        return {
            showNav: false,
            showNavDrawer: false,
        };
    },
    props: {
        logo: String
    },
    emits: [
        'scrollTo'
    ],
    computed: {
        mobileNavItems() {
           return this.navItems.filter(items => items.text);
        }
    },
    methods: {
        toggleNavDrawer() {
            this.showNavDrawer = !this.showNavDrawer;
        },
        openWindow(link) {
            window.open(link, '_blank');
        }
    },
    watch: {
        $route: function(to, from) {
            this.showNav = this.$route.name !== 'home';
        }
    },
    mounted() {
        this.showNav = this.$route.name !== 'home';
    }
}
</script>

<template>
    <!-- Mobile Navigation -->
    <div class="nav show w-100 px-4 py-2" v-if="$vuetify.display.smAndDown">
        <v-row class="align-center justify-space-between">
            <v-col cols="8" class="nav-logo" @click="$router.push({ name: 'home' })">
                <img class="mt-2 mx-1" src="../assets/km-icon.svg" alt="Kelvin Morrisey Jr" />
            </v-col>
            <v-col cols="4" class="text-right">
                <v-icon @click.stop="toggleNavDrawer">mdi-menu</v-icon>

                <v-navigation-drawer v-model="showNavDrawer" location="right">
                    <v-list-item>
                        <template v-slot:append>
                            <v-icon @click.stop="toggleNavDrawer">mdi-close</v-icon>
                        </template>
                    </v-list-item>
                    <v-list density="compact" nav>
                        <v-list-item title="Home" value="home" @click="$router.push({ name: 'home' })"></v-list-item>
                        <v-list-item title="Work" value="work" @click="$router.push({ name: 'work' })"></v-list-item>
                        <v-list-item title="About" value="about" @click="$router.push({ name: 'about' })"></v-list-item>
                        <v-list-item title="Contact" value="contact" @click="$router.push({ name: 'contact' })"></v-list-item>
                        <v-list-item title="Resume" value="resume" @click="openWindow('./kelvin_morrisey_resume.pdf')"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-col>
        </v-row>
    </div>

    <!-- Tablet/Desktop navigation -->
    <div class="nav w-100 pa-2" :class="{'show': showNav }" v-else>
        <v-row class="align-center">
            <v-col cols="3" class="nav-logo" @click="$router.push({ name: 'home' })">
                <img class="logo mt-2" src="../assets/km-icon.svg" alt="Kelvin Morrisey Jr"/>
                <img class="full mt-2" src="../assets/km-logo.svg" alt="Kelvin Morrisey Jr"/>
            </v-col>
            <v-col cols="9" class="text-right">
                <span class="nav-item" @click="$router.push({ name: 'home' })">Home</span>
                <span class="nav-item" @click="$router.push({ name: 'work' })">Work</span>
                <span class="nav-item" @click="$router.push({ name: 'about' })">About</span>
                <span class="nav-item" @click="$router.push({ name: 'contact' })">Contact</span>
                <span class="nav-item" @click="openWindow('./kelvin_morrisey_resume.pdf')">Resume</span>
            </v-col>
        </v-row>
    </div>

</template>

<style lang="scss" scoped>
.nav {
    background:white;
    position: fixed;
    z-index: 99;
    top: -42px;
    transition: top 0.3s;

    &.show {
        top: 0 !important;
    }
}

.nav-logo {
    padding: 3px 20px;
    cursor: pointer;

    img {
        height: 26px;
        position: absolute;
        left: 20px;
        top: 0;
        transition: top 0.3s ease-in-out, opacity 0.2s ease-in-out;
    }

    .logo {
        opacity: 1;
    }

    .full {
        top: -100px;
        left: 10px;
        z-index: 1;
    }

    &:hover {
        .logo {
            opacity: 0;
        }

        .full {
            top: 0;
        }
    }
}

.nav-item {
    padding: 0 20px;
    cursor: pointer;
    text-align: center;
    opacity: 0.8;

    &:hover {
       opacity: 1;
    }
}

:deep(.v-list-item--nav .v-list-item-title) {
    font-size: 18px !important;
    font-weight: 300 !important;
    padding: 10px 0;
}

@media all and (max-width: 768px) {
    .nav-logo {
        padding-left: 5px;
        padding-right: 5px;
    }
}
</style>
