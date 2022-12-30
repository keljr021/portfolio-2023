<script setup>

</script>

<template>
    <div class="nav w-100 pa-2">
        <v-row class="align-center">
            <v-col style="font-weight:bold">
                Kelvin Morrisey Jr.
            </v-col>
            <v-col class="text-right">
                <span class="nav-item">Dev</span>
                <span class="nav-item">UI/UX</span>
                <span class="nav-item">Logos</span>
                <span class="nav-item">About</span>
                <span class="nav-item">Resume</span>
                <span class="nav-item">Contact</span>
                <span class="nav-item" @click="this.$emit('toggle-theme')">Theme</span>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.nav {
    background:white;
    position: fixed;
}

.nav-item {
    padding: 0 20px;
    cursor: pointer;
    text-align: center;
}
</style>
