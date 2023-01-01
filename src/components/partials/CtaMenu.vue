<script>
export default {
    name: 'ctaMenu',
    props: {
        navItems: Array
    },
    emits: [
        'scrollTo'
    ],
    computed: {
        ctaNavItems() {
           return this.navItems.filter(items => items.text);
        }
    },
    methods: {
        scrollTo(input) {
            this.$emit('scrollTo', input)
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
    font-size: 18px;
    font-weight: 300;
    height: 100px;
    padding: 0 50px;
}

.cta-menu-box {
    float: right;
}

.cta-menu-item {
    margin: 20px;
    padding: 0 10px 10px;
    cursor: pointer;
    text-align: right;
    opacity: 0.8;
    
    span {
        opacity: 0.8;
        border: 3px solid transparent;
        padding: 4px;
        transition: border-bottom-color 0.3s;

        &:hover {
            opacity: 1;
            border-bottom-color: white;
        }
    }   
}
</style>
