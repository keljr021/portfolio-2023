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
    <div class="cta-menu">
        <div class="cta-menu-box">
            <div class="cta-menu-item" @click="$router.push({ name: 'work' })">
                <span>Work</span>
            </div>
            <div class="cta-menu-item" @click="$router.push({ name: 'about' })">
                <span>About</span>
            </div>
            <div class="cta-menu-item" @click="$router.push({ name: 'contact' })">
                <span>Contact</span>
            </div>
            <div class="cta-menu-item" @click="openWindow('./kelvin_morrisey_resume.pdf');">
                <span>Resume</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cta-menu {
    font-size: 20px;
    font-weight: 300;
    height: 100px;
}

.cta-menu-box {
    margin: 0 auto;
    text-align: center;
}

.cta-menu-item {
    margin: 30px;
    padding: 0 10px 10px;
    cursor: pointer;
    text-align: left;
    float: left;

    span {
        padding: 0 4px;
        opacity: 0.8;

        &:hover {
            text-decoration: underline;
            .menu-icon {
                opacity: 1 !important;
            }
        }
    }   
}
</style>
