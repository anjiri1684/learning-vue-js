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
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "Enter your name first";
      }
      return this.name + " " + "Anjiri";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      // e.preventDefault();
      alert("Form submitted");
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
