<template >
  <div class=" bama-bg-special-gray">
    <v-col class="mx-auto " cols="12" md="8">
      <v-card
        class="d-flex justify-space-between mb-6 align-center bama-bg-special-gray" 
        elevation="0"
        flat
      >
        <v-card class="pa-2 bama-bg-special-gray" elevation="0">
          <v-row align="center" class="">
            <v-col class="">
              <v-btn
                color="#F3F4F2"
                elevation="1"
                class="rounded-pill font-weight-bold"
                x-large
              >
                <span style="font-size: 1.2rem"> ثبت آگهی</span>
                <div
                  class="
                    dot
                    ml-2
                    bama-bg-special-green
                    d-flex
                    justify-contenr-between
                    align-center
                    
                  "
                >
                  <v-icon> mdi-plus </v-icon>
                </div>
              </v-btn>
            </v-col>
            <v-col>
              <unicon
                name="user"
                fill="black"
                class="mt-1"
                style="position: relative; right: 10px"
                width="30"
                height="30"
              />
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-2 bama-bg-special-gray"   flat id="menu-not-responsive">
          <router-link
            class="text-h6 ms-3 text-decoration-none black--text"
            to="/"
            id="car-hover"
            >خودرو</router-link
          >
          <router-link
            class="text-h6 mx-2 text-decoration-none black--text"
            to="/"
          >
            موتورسیکلت</router-link
          >
          <router-link
            class="text-h6 me-3 text-decoration-none black--text"
            to="/"
          >
            باما</router-link
          >
        </v-card>
        <v-card flat id="responsive-btn" >
          <unicon name="align-justify" fill="black" width="30" height="30" class="bama-bg-special-gray"/>
        </v-card>
      </v-card>
    </v-col>
  </div>
</template>
<script>
// import { Slide } from "vue-burger-menu";
export default {
  //   components: {
  //     Slide, // Register your component
  //   },
  data() {
    return {};
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped>
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
#burger-menu {
  background-color: white !important;
}
</style>