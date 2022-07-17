<template>
  <div>
    <div class="bama-bg-special-gray" style="position:relative;bottom:40px">
      <v-col flat class="mt-10 mx-auto" cols="12" md="8">
        <v-col class="">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            width="90"
            class="d-block mx-auto"
          ></v-img>
        </v-col>
        <v-col cols="12" md="8" sm="10" class="d-block mx-auto">
          <v-text-field
            class=""
            label=" ... جستجو خودرو "
            prepend-icon="fas fa-search"
          ></v-text-field>
        </v-col>

        <v-row justify="space-around">
          <v-col cols="12" md="8" sm="10">
            <v-sheet elevation="0" class="py-4 px-1 bama-bg-special-gray">
              <v-chip-group
                multiple
                active-class="primary--text"
                mobile-breakpoint
              >
                <v-chip v-for="tag in tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-sheet>
          </v-col>
        </v-row>
        <v-col>
          <v-sheet
            class="mx-auto bama-bg-special-gray"
            elevation="0"
            max-width="100%"
          >
            <v-slide-group v-model="model" class="pa-4" show-arrows>
              <v-slide-item v-for="n in 15" :key="n" v-slot="{ toggle }">
                <v-card
                  class="ma-4 bama-bg-special-gray"
                  height="81"
                  width="215"
                  @click="toggle"
                >
                  <v-row
                    class="fill-height bama-bg-special-gray"
                    align="center"
                    justify="center"
                  >
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
        <v-card
          class="d-flex flex-md-row align-center flex-column"
          flat
          id="second-box"
        >
          <v-card flat>
            <v-btn
              tile
              color="#BEFA00"
              large
              class="rounded-pill"
              elevation="0"
            >
              <span class="font-weight-bold f1"> نمایش یک میلیارد خودرو</span>
              <v-icon class="ms-2"> mdi-car</v-icon>
            </v-btn>
          </v-card>
          <v-card flat width="80%">
            <v-card-text>
              <span> میلیون {{ value[1] }} </span>
              -
              <span> میلیارد {{ value[0] }} </span>

              <v-range-slider
                v-model="value"
                step="10"
                color="black"
                track-color="dark"
              ></v-range-slider>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-row>
              <v-col cols="6">
                <v-select
                  :items="items"
                  label="Standard"
                  color="black"
                  disabled
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  :items="items"
                  label="Normal"
                  color="black"
                  readonly
                  eager
                  disable-lookup
                ></v-select>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-col>
    </div>
    <div class="mt-15">
      <v-col cols="12" md="10" class="text-right mx-auto">
        <span class="text-h5 font-weight-bold"> محبوب ترین مدل ها</span>
        <v-col>
          <v-card
            class="fill-height d-flex flex-row overflow-auto justify-space-between"
            flat
          >
            <template v-for="(item, i) in items1">
              <v-card :key="i" class="mx-3">
                <v-hover v-slot="{ hover }">
                  <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                  >
                    <v-img :src="item.img" width="225px" height="300px">
                      <v-card-title class="text-h6 white--text">
                        <v-row
                          class="fill-height flex-column"
                          justify="space-between"
                        >
                          <p class="mt-4 subheading text-center">
                            {{ item.title }}
                          </p>

                          <div>
                            <p
                              class="
                                ma-0
                                text-body-1
                                font-weight-bold font-italic
                                text-center
                              "
                            >
                              {{ item.text }}
                            </p>
                          </div>
                        </v-row>
                      </v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-card>
            </template>
          </v-card>
        </v-col>
      </v-col>
    </div>

    <v-col cols="12" md="10" class="mx-auto mt-6">
      <v-card class="d-flex flex-sm-row flex-column" flat>
        <v-card
          flat
          class="text-right bama-bg-special-gray d-flex flex-column"
          height="300"
          id="Vehicle-price"
        >
          <div class="mt-4 me-4">
            <span
              class="text-h5 font-weight-bold me-3"
              style="position: relative; bottom: 6px"
              >قیمت خودرو</span
            >

            <unicon
              name="chart-line"
              fill="black"
              width="35"
              height="35"
              class="pa-2 rounded-pill"
              style="background-color: #e5e6e4"
            />
          </div>
          <div style="height: 191px"></div>
          <div class="text-right">
            <unicon
              name="angle-left-b"
              fill="#438FFF"
              width="30"
              height="30"
              style="position: relative; top: 8px"
            />
            <router-link
              to="/"
              class="text-h6 text-decoration-none me-6 font-weight-bold"
              >تماشای همه</router-link
            >
          </div>
        </v-card>
        <v-card width="5%" flat></v-card>
        <v-card
          flat
          id="Checking-the-technical-specifications-of-the-car"
          class="d-flex flex-column justify-center"
          height="300"
        >
          <div class="text-right mx-auto mt-5">
            <span
              class="text-h5 font-weight-bold me-3"
              style="position: relative; bottom: 6px"
              >بررسی مشخصات فنی خودرو</span
            >

            <unicon
              name="wrench"
              fill="black"
              width="35"
              height="35"
              class="pa-2 rounded-pill"
              style="background-color: #e5e6e4"
            />
          </div>
          <div>
            <v-img
              class="d-block mx-auto"
              src="https://cdn.bama.ir/assets/spec/spec.svg"
              width="285"
              height="191"
            ></v-img>
          </div>
          <div class="text-right">
            <unicon
              name="angle-left-b"
              fill="#438FFF"
              width="30"
              height="30"
              style="position: relative; top: 8px"
            />
            <router-link
              to="/"
              class="text-h6 text-decoration-none me-16 font-weight-bold"
              >تماشای همه</router-link
            >
          </div>
        </v-card>
      </v-card>
    </v-col>
 
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        "Work",
        "Home Improvement",
        "Vacation",
        "Food",
        "Drawers",
        "Shopping",
        "Art",
        "Tech",
        "Creative Writing",
      ],
      model: null,
      value: [0, 100],
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
      items1: [
        {
          title: "",
          text: ``,
          img: "https://cdn.bama.ir/assets/popularModels/5-hires.webp",
        },
        {
          title: "",
          text: "",
          img: "https://cdn.bama.ir/assets/popularModels/2-hires.webp",
        },
        {
          title: "",
          text: "",

          img: "https://cdn.bama.ir/assets/popularModels/10-hires.webp",
        },
        {
          title: "",
          text: "",

          img: "https://cdn.bama.ir/assets/popularModels/11-hires.webp",
        },
        {
          title: "s",
          text: "",

          img: "https://cdn.bama.ir/assets/popularModels/6-hires.webp",
        },
        {
          title: "",
          text: "",

          img: "https://cdn.bama.ir/assets/popularModels/1-hires.webp",
        },
      ],
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
};
</script>
<style scoped>
</style>