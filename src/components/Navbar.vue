<script>
export default {
    name: 'navbar',
    data() {
        return {
            showNavDrawer: false
        };
    },
    props: {
        navItems: Array
    },
    computed: {
        mobileNavItems() {
           return this.navItems.filter(items => items.text);
        }
    },
    methods: {
        toggleNavDrawer() {
            this.showNavDrawer = !this.showNavDrawer;
        }
    }
}
</script>

<template>
    <div class="nav pa-2" v-if="$vuetify.display.mobile">
        <v-row class="align-center justify-space-between">
            <v-col sm="2" md="2" class="nav-logo" @click="this.$emit('scroll-to', 'cta')">
                Kelvin Morrisey Jr.
            </v-col>
            <v-col class="text-right">
                <v-icon @click.stop="toggleNavDrawer">mdi-menu</v-icon>

                <v-navigation-drawer v-model="showNavDrawer" location="right">
                    <v-list-item>
                        <template v-slot:append>
                            <v-icon @click.stop="toggleNavDrawer">mdi-close</v-icon>
                        </template>
                    </v-list-item>
                    <v-list density="compact" nav>
                        <v-list-item v-for="navItem in mobileNavItems" :title="navItem.text" :value="navItem.text" @click.stop="this.$emit('scroll-to', navItem.className);toggleNavDrawer()"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-col>
        </v-row>
    </div>

    <div class="nav w-100 pa-2" v-else>
        <v-row class="align-center">
            <v-col class="nav-logo" @click="this.$emit('scroll-to', 'cta')">
                Kelvin Morrisey Jr.
            </v-col>
            <v-col class="text-right">
                <span v-for="navItem in navItems" class="nav-item" @click="this.$emit('scroll-to', navItem.className)">{{ navItem.text }}</span>
            </v-col>
        </v-row>
    </div>

</template>

<style lang="scss" scoped>
.nav {
    width: calc(100% - 12px);
    background:white;
    position: fixed;
    z-index: 9999;
}

.nav-logo {
    cursor: pointer;
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
</style>
