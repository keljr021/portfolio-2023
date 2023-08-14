<script>
  export default {
    name: 'WorkListItem',
    data() {
        return {
            overlay: false
        }
    },
    props: {
        color: {
            type: String,
            default: '#333'
        },
        linkId: String,
        type: String,
        title: String,
        caption: String,
        image: String,
        desktopImg: String,
        mobileImg: String,
        imageWidth: String,
        imageHeight: String,
    },
    methods: {
        hoverItem(input) {
            this.overlay = input;
        }
    }
}
</script>

<template>  
    <v-card flat class="list-item w-100" :style="{ 'border-bottom': '2px solid' + color }" :to="{ name: 'view', params: { id: this.linkId } }">
        <v-row justify="start" justify-md="center" justify-lg="center">
            <v-col cols="11" md="5" lg="5" class="list-item-text my-auto">
                <div class="list-item-text-title py-1" :style="{ 'color': color }">{{ title }}</div>
                <div class="list-item-text-caption py-1">{{ caption }}</div>
            </v-col>
            <v-col v-if="desktopImg" cols="6" md="3" lg="3" class="ma-auto">
                <v-img class="mx-auto" width="400" :src="desktopImg" />
            </v-col>
            <v-col v-if="mobileImg" cols="6" md="3" lg="3" class="ma-auto">
                <v-img class="mx-auto" height="250" :src="mobileImg" />
            </v-col>
        </v-row>
    </v-card>
</template>

<style scoped lang="scss">
.list-item {
    width: 100%;
    padding: 40px 0;
    margin: 20px 0;
    cursor: pointer;
}

.list-item-text {
    padding-left: 30px;
    .list-item-text-title {
        font-size: 22px;
    }

    .list-item-text-caption {
        font-size: 16px;
    }
}

:deep(.v-overlay__scrim) {
    opacity: 0.65;
}

@media all and (max-width: 768px) {
    .list-item {
        padding: 20px 0;
        margin: 10px 0;
    }
}
</style> 
