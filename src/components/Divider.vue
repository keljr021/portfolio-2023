<script>
export default {
    name: 'Divider',
    data() {
      return {}
    },
    props: {
      color: {
        type: String,
        default: '#666'
      }
    }
}
</script>

<template>
    <v-row>
      <v-col cols="11">
        <v-divider thickness="1" :color="color" inset></v-divider>
      </v-col>
    </v-row>
</template>

<style scoped lang="scss">
@media all and (max-width: 768px) {
    :deep(.v-divider--inset:not(.v-divider--vertical)) {
        max-width: calc(100% - 32px);
        margin-inline-start: 32px;
    }
}
</style>