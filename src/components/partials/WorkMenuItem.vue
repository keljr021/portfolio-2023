<script>
  export default {
    name: 'WorkMenuItem',
    props: {
      icon: String,
      name: String,
      title: String
    }
}
</script>

<template>
  <v-card class="work-menu" @click="scrollTo(name)">
    <v-card-text class="text-center">
        <div class="work-menu-icon py-4">
          <v-icon :icon="icon" color="#18184d"  />
          <div class="work-menu-title py-4">
              {{ title }}
          </div>
        </div>
    </v-card-text>
  </v-card>
</template>

<style>
.work-menu-icon {
  font-size: 28px;
}

.work-menu-title {
  font-size: 20px;
}
</style>
