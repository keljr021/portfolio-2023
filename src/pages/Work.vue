<script>
  import WorkList from '@/components/partials/WorkList.vue';
  import Footer from '@/components/partials/Footer.vue'

  export default {
    name: 'Work',
    data() {
      return {
        workType: 'all',
        workTypesArray: [
          {
            title: 'All',
            value: 'all'
          },
          {
            title: 'UX/UI Design',
            value: 'ux'
          },
          {
            title: 'Front-End Development',
            value: 'frontend'
          },
          {
            title: 'Logo Design',
            value: 'logo'
          }
        ]
      }
    },
    methods: {
      scrollTo(input) {
        let el = document.getElementById(input);
            if(el) el.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      },
      setWorkType(input) {

        if (typeof input === 'object') {
          this.workType = input.value;
        }
        else {
          this.workType = input;
        }

        console.log('work type is - ', this.workType);
      }
    },
    components: {
      WorkList,
      Footer
    }
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="work-title pa-4">Work</div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-if="$vuetify.display.mdAndUp" cols="10" offset="1">
        <v-chip v-for="item in workTypesArray" @click="setWorkType(item.value)" :color="(workType === item.value) ? 'black' : '#aaa'" class="work-type my-1 mr-5 px-5 py-1">
          {{  item.title }}
        </v-chip>
      </v-col>

      <v-col v-else cols="10" offset="1">
        <div>
          <v-select
            label="Work type..."
            :items="workTypesArray"
            item-title="title"
            item-value="value"
            v-model="workType"
          ></v-select>
        </div>
      </v-col>
      <v-col cols="10" class="">
        <div class="scroll overflow-x-hidden overflow-y-auto">
          <work-list :workType="workType"/>  
        </div>
      </v-col>
    </v-row>

    <Footer :onHomePage="false" />
  </v-container>
</template>

<style scoped lang="scss">
.v-container--fluid {
  padding-top: 41.5px !important; 
  height: calc(100% - 73.5px) !important;
}

.work-type {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.work-title {
    font-size: 28px;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0;
}

:deep(.work-section-title) {
    font-size: 20px !important;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0;
}

.scroll {
  max-height: calc(80vh - 150px);
}

@media all and (max-width: 768px) {
  .scroll {
    max-height: calc(70vh - 90px);
  }
}
</style>
