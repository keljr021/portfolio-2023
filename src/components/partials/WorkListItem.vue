<script>
  export default {
    name: 'WorkListItem',
    data() {
        return {
           overlay: null 
        }
    },
    methods: {
      imgSrc(input) {
        return new URL(`../../assets/${input}`, import.meta.url).href;
      },
      windowOpen(input) {
        this.$emit('window-open', input);
      }
    },
    props: {
        bg: {
            type: String,
            default: 'light'
        },
        color: {
            type: String,
            default: '#333'
        },
        title: String,
        caption: String,
        role: String,
        logo: String,
        logoWidth: String,
        logoHeight: String,
        linkId: String
    }
}
</script>

<template>
  <v-col cols="12" class="pb-sm-8 pt-3 pb-6" @click="$router.push({ name: 'view', params: { id: this.linkId } })">
    <v-container fluid>
        <v-row class="list-item">
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" class="list-item-img my-xs-6 my-sm-6 ma-md-0 pa-md-0">
                <v-img v-if="$vuetify.display.smAndDown" class="mx-auto w-100" :src="imgSrc(logo)" />
                <v-img v-else :aspect-ratio="linkId === 'reys' ? 1 : ''" :class="{'mx-auto': true, 'my-5': linkId !== 'reys'}" :width="logoWidth ? logoWidth : ''" :src="imgSrc(logo)" />
            </v-col>
            <v-col>
                <div><b :style="'color:' + color">{{ title }}</b></div>
                <div class="pb-4">{{ caption }}</div>
                <div class="pb-4"><b>Role: </b>{{ role }}</div>
                <div>
                    <v-btn class="my-6" :color="color" block variant="outlined" :to="{ name: 'view', params: { id: this.linkId } }">
                        View
                        <v-icon class="ml-2">mdi-arrow-right</v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
  </v-col>
</template>

<style scoped lang="scss">
.list-item {
    font-size: 1.1em;
    width: 100%;
    padding: 30px 0;
    cursor: pointer;
    background-color: transparent;
    transition: transform 0.3s ease-in-out;

    &:hover {
        background-color: #e9e9e9;
        transform: scale(1.05);
    }
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
</style>
