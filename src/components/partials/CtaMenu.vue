<script>
export default {
    name: 'ctaMenu',
    methods: {
        openWindow(link) {
            window.open(link, '_blank');
        }
    }
}
</script>

<template>
    <div class="cta-menu text-right">
        <div class="cta-menu-box">
            <div class="cta-menu-item" @click="$router.push({ name: 'work' })"><span>Work</span></div>
            <div class="cta-menu-item" @click="$router.push({ name: 'about' })"><span>About</span></div>
            <div class="cta-menu-item" @click="$router.push({ name: 'contact' })"><span>Contact</span></div>
            <div class="cta-menu-item" @click="openWindow('https://drive.google.com/drive/folders/1vQ4PuOoTukxV_RmmHZ6q0AngzDrxmQd-?usp=sharing');"><span>Resume</span></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cta-menu {
    font-size: 20px;
    font-weight: 300;
    height: 100px;
    padding: 0 50px;
}

.cta-menu-box {
    float: right;
}

.cta-menu-item {
    margin: 30px;
    padding: 0 10px 10px;
    cursor: pointer;
    text-align: right;
    
    span {
        border: 2px solid transparent;
        padding: 4px;
        transition: border-right-color 0.3s;

        &:hover {
            color: #18184d;
            border-bottom-color: #18184d;
        }
    }   
}
</style>
