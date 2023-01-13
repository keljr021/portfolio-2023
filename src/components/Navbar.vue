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
        checkToShowNavbar() {
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) 
            return false;

            // Here we determine whether we need to show or hide the navbar
            this.showNav = currentScrollPosition >= 300;    
      }
    },
    mounted() {
        if (!this.$vuetify.display.xs) {
            this.checkToShowNavbar();
            window.addEventListener('scroll', this.checkToShowNavbar)
        } else {
            this.showNav = true;
        }
    },
    beforeDestroy () {
        if (!this.$vuetify.display.xs)
            window.removeEventListener('scroll', this.checkToShowNavbar)
    },
}
</script>

<template>
    <!-- Mobile Navigation -->
    <div class="nav w-100 pa-2" :class="{'show': showNav }" v-if="$vuetify.display.xs">
        <v-row class="align-center justify-space-between">
            <v-col cols="6" class="nav-logo" @click="this.$emit('scrollTo', 'cta')">
                <img class="mt-2" src="../assets/km-logo.png" alt="Kelvin Morrisey Jr" />
            </v-col>
            <v-col cols="6" class="text-right">
                <v-icon @click.stop="toggleNavDrawer">mdi-menu</v-icon>

                <v-navigation-drawer v-model="showNavDrawer" location="right">
                    <v-list-item>
                        <template v-slot:append>
                            <v-icon @click.stop="toggleNavDrawer">mdi-close</v-icon>
                        </template>
                    </v-list-item>
                    <v-list density="compact" nav>
                        <v-list-item v-for="navItem in mobileNavItems" :title="navItem.text" :value="navItem.text" @click.stop="this.$emit('scrollTo', navItem.className);toggleNavDrawer()"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-col>
        </v-row>
    </div>

    <!-- Tablet/Desktop navigation -->
    <div class="nav w-100 pa-2" :class="{'show': showNav }" v-else>
        <v-row class="align-center">
            <v-col cols="3" class="nav-logo" @click="this.$emit('scroll-to', 'cta')">
                <img class="mt-2" src="../assets/km-logo.png" alt="Kelvin Morrisey Jr"/>
            </v-col>
            <v-col cols="9" class="text-right">
                <span v-for="navItem in navItems" class="nav-item" @click="this.$emit('scroll-to', navItem.className)">{{ navItem.text }}</span>
            </v-col>
        </v-row>
    </div>

</template>

<style lang="scss" scoped>
.nav {
    background:white;
    position: fixed;
    z-index: 9999;
    top: -42px;
    transition: top 0.3s;

    &.show {
        top: 0 !important;
    }
}

.nav-logo {
    padding: 5px 20px;
    cursor: pointer;

    img {
        height: 26px;
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

@media all and (max-width: 768px) {
    .nav-logo {
        img {
            width: 100% !important;
            height: auto !important;
        }
    }
}
</style>
