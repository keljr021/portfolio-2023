<script>
export default {
    name: 'navbar',
    data() {
        return {
            showNav: false,
            showNavDrawer: false
        };
    },
    props: {
        navItems: Array,
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
    },
    watch: {
        $route: function(to, from) {
            this.showNav = this.$route.name !== 'home' && !this.$vuetify.display.xs;
        }
    },
    mounted() {
        this.showNav = this.$route.name !== 'home' && !this.$vuetify.display.xs;
    }
}
</script>

<template>
    <!-- Mobile Navigation -->
    <div class="nav w-100 px-4 py-2" :class="{'show': showNav }" v-if="$vuetify.display.smAndDown">
        <v-row class="align-center justify-space-between">
            <v-col cols="8" class="nav-logo" @click="$router.push({ name: 'home' })">
                <img class="mt-2 mx-4" src="../assets/km-icon.svg" alt="Kelvin Morrisey Jr" />
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
                        <v-list-item title="Home" value="home" @click="$router.push({ name: 'home' })">Home</v-list-item>
                        <v-list-item title="Work" value="work" @click="$router.push({ name: 'work' })">Work</v-list-item>
                        <v-list-item title="About" value="about" @click="$router.push({ name: 'about' })">About</v-list-item>
                        <v-list-item title="Contact" value="contact" @click="$router.push({ name: 'contact' })">Contact</v-list-item>
                        <v-list-item title="Resume" value="resume" @click="window.open('https://drive.google.com/drive/folders/1vQ4PuOoTukxV_RmmHZ6q0AngzDrxmQd-?usp=drive_link', '_blank')">Resume</v-list-item>
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
                <span class="nav-item" @click="window.open('https://drive.google.com/drive/folders/1vQ4PuOoTukxV_RmmHZ6q0AngzDrxmQd-?usp=drive_link', '_blank')">Resume</span>
            </v-col>
        </v-row>
    </div>

</template>

<style lang="scss" scoped>
.nav {
    background:white;
    position: fixed;
    z-index: 1;
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
        transition: opacity 0.25s ease-in-out;
    }

    .logo {
        opacity: 1;
    }

    .full {
        left: 10px;
        opacity: 0;
        z-index: 1;
    }

    &:hover {
        .logo {
            opacity: 0;
        }

        .full {
            opacity: 1;
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
