<script>
import WorkListItem from './WorkListItem.vue';
export default {
    name: 'WorkList',
    data() {
      return {
      }
    },
    props: {
        tabs: Array,
        showItems: String
    },
    computed: {
        getSubtitles() {
            return this.tabs.filter(tab => {
                return tab.value !== 'all'
            });
        }
    },
    methods: {},
    mounted() {},
    components: {
        WorkListItem
    }
}
</script>

<template>
    <v-container>

        <template v-if="showItems === 'all'">
            <template v-for="tab in getSubtitles">
                <v-row>
                    <v-col>
                        <div class="work-subtitle">{{ tab.name }}</div>
                    </v-col>
                </v-row>
            </template>
        </template>

        <v-row>
            <template v-for="item in 6">
                <v-col cols="4">
                    <work-list-item />
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<style scoped>

</style>
