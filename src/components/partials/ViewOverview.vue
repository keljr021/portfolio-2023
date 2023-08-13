<script>
  export default {
    name: 'ViewOverview'
}
</script>

<template>
    <v-row class="view-text-overview">
        <v-col offset-xs="1" offset-sm="1" offset-md="1" offset="2" xs="10" sm="10" md="10" cols="8">
            <v-row justify="center" class="py-8">
                <v-col class="my-auto">
                    <slot name="overview"></slot>
                </v-col>
                <v-col v-if="$slots.image">
                    <slot name="image"></slot>
                </v-col>
            </v-row>
            <v-row class="py-8">
                <v-col cols="5" v-if="$slots.problem">
                    <div class="view-text-section-title">Problem</div>
                    <p>
                        <slot name="problem"></slot>
                    </p>
                </v-col>
                <v-col offset="1" v-if="$slots.goal">
                    <div class="view-text-section-title">Goal</div>
                    <p>
                        <slot name="goal"></slot>
                    </p>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
