<script setup>

</script>

<template>
    <v-container-fluid class="resume">
        <v-row>
            <v-col class="resume-title">Resume</v-col>
        </v-row>
        <v-row>
            <v-col class="justify-center">
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTFk-AapYRFoPBpfZGpbGLSwSZeQ1Xoz-_BrjVV4NA_xUYsfC6ZBLYJWHDuH-rssjgDhngosi_k6dho/pub?embedded=true"></iframe>
            </v-col>
        </v-row>
    </v-container-fluid>
</template>

<style lang="scss" scoped>
.resume {
    background:indigo;
    color: white;
    width: 100%;
    min-height: 500px;
    padding: 50px 100px;

    iframe {
        width: 75%;
        min-height: 100%;
        
    }
}

.resume-title {
    font-size: 24px;
    padding: 10px 0;
}
</style>
