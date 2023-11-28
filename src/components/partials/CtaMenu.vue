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
            <div class="cta-menu-item" @click="$router.push({ name: 'work' })">
                <v-icon color="#EDA591" class="menu-icon" icon="mdi-menu-right" />
                <span>Work</span>
            </div>
            <div class="cta-menu-item" @click="$router.push({ name: 'about' })">
                <v-icon color="#EDA591" class="menu-icon" icon="mdi-menu-right" />
                <span>About</span>
            </div>
            <div class="cta-menu-item" @click="$router.push({ name: 'contact' })">
                <v-icon color="#EDA591" class="menu-icon" icon="mdi-menu-right" />
                <span>Contact</span>
            </div>
            <div class="cta-menu-item" @click="openWindow('./kelvin_morrisey_resume.pdf');">
                <v-icon color="#EDA591" class="menu-icon" icon="mdi-menu-right" />
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

    .menu-icon {        
        opacity: 0 !important;
    }
    
    span {
        border: 2px solid transparent;
        padding: 4px;
        transition: border-right-color 0.3s !important;

        &:hover {
            color: #fff;
            border-bottom-color: #EDA591;
            .menu-icon {
                opacity: 1 !important;
            }
        }
    }   
}
</style>
