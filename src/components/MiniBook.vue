<template>
  <div class="ma-0">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="pa-2" :elevation="hover ? 10 : 4">
          <v-container>
            <v-row>
              <v-col class="col-3 col-sm-4 pa-0 ma-0">
                <v-img
                  contain
                  :aspect-ratio="10 / 16"
                  :src="book.image"
                ></v-img>
              </v-col>
              <v-col class="col-9 col-sm-8 pa-sm-2 pa-xs-0">
                <div>
                  <span class="text-caption font-weight-medium">
                    {{ book.authors }}
                  </span>
                  <p class="text-caption mt-0 mb-0 h overflow-hidden">
                    {{ book.name }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "MiniBook",
  data: () => ({
    annotation: "",
  }),
  props: {
    book: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.h {
  height: 60px;
}
</style>