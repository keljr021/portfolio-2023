<script>
  export default {
    name: 'ViewOverview'
}
</script>

<template>
    <v-row class="view-text-overview">
        <v-col offset="1" cols="11" lg="8">
            <v-row justify="start" justify-md="center" justify-lg="center" class="py-8">
                <v-col cols="11" md="6" lg="6" class="my-auto">
                    <slot name="overview"></slot>
                </v-col>
                <v-col cols="11" md="6" lg="6" v-if="$slots.image">
                    <slot name="image"></slot>
                </v-col>
            </v-row>
            <v-row class="py-8">
                <v-col cols="11" md="5" lg="5" v-if="$slots.problem">
                    <div class="view-text-section-title">Problem</div>
                    <p>
                        <slot name="problem"></slot>
                    </p>
                </v-col>
                <v-col cols="11" offset-md="1" offset-lg="1" v-if="$slots.goal">
                    <div class="view-text-section-title">Goal</div>
                    <p>
                        <slot name="goal"></slot>
                    </p>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
