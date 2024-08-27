// const app = Vue.createApp({
//   data() {
//     return {
//       courseGoal1: "Lean vue and start practicing the acquired skills",
//       courseGoal2: "Master Vue and build amazing apps",
//       vueLink: "www.vincentanjiri.co.ke",
//     };
//   },
//   methods: {
//     outputGoal: function () {
//       const randomNumber = Math.random();
//       if (randomNumber > 0.5) {
//         return this.courseGoal1;
//       } else {
//         return this.courseGoal2;
//       }
//     },
//   },
// });

// app.mount("#user-goal");

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount("#events");
