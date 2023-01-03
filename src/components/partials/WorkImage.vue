<script>
export default {
    name: 'workImage',
    props: {
        image: String,
        caption: String,
        width: String,
        imageHeight: String
    },
    computed: {
        imageWidth() {
            if (this.$vuetify.display.xs) return "100% important";
            else {
                if (this.width) return this.width;
                else return '';
            }
        }
    }
}
</script>

<template>
    <div class="pa-lg-2" :style="imageWidth">
        <v-img width="100%" :height="imageHeight" :src="image" class="text-center" />
        <div class="py-4">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>
