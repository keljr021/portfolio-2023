<script>
export default {
    name: 'navbar',
    props: {
        navItems: Array
    }
}
</script>

<template>
    <div class="nav w-100 pa-2">
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
