<script>
export default {
    name: 'ctaMenu',
    props: {
        navItems: Array
    },
    computed: {
        ctaNavItems() {
           return this.navItems.filter(items => items.text);
        }
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
            <div class="cta-menu-item" v-for="navItem in ctaNavItems" @click="scrollTo(navItem.className)"><span>{{ navItem.text }}</span></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cta-menu {
    height: 100px;
    padding: 0 50px;
}

.cta-menu-box {
    float: right;
}

.cta-menu-item {
    margin: 20px;
    padding: 0 10px 10px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    text-align: right;
    opacity: 0.8;

    span {
        opacity: 0.8;
        border: 3px solid transparent;
        padding: 4px;

        &:hover {
            opacity: 1;
            border-bottom-color: white;
        }
    }   
}
</style>
