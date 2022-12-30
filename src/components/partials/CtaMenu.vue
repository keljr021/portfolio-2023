<script setup></script>

<template>
    <div class="cta-menu text-right">
        <div class="cta-menu-box">
            <div class="cta-menu-item">Dev</div>
            <div class="cta-menu-item">UI/UX</div>
            <div class="cta-menu-item">Logos</div>
            <div class="cta-menu-item">About</div>
            <div class="cta-menu-item">Resume</div>
            <div class="cta-menu-item">Contact</div>
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
