<script>
export default {
    name: 'ctaMenu',
    props: {
        navItems: Array
    },
    methods: {
        scrollTo(input) {
            this.$emit('scroll-to', input)
        }
    }
}
</script>

<template>
    <div class="cta-menu text-right">
        <div class="cta-menu-box">
            <div class="cta-menu-item" v-for="navItem in navItems" @click="scrollTo(navItem.className)">{{ navItem.text }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cta-menu {
    height: 100px;
    padding: 0 50px;
}

.cta-menu-box {
    width: 50px;
    float: right;
}

.cta-menu-item {
    margin: 20px;
    padding: 0 10px 10px;
    cursor: pointer;
    text-align: right;

    &:hover {
        text-decoration: underline;
    }
}
</style>
