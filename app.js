const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Lean vue and start practicing the acquired skills",
      vueLink: "www.vincentanjiri.co.ke",
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return "Learn Vue";
      } else {
        return "Master Vue";
      }
    },
  },
});

app.mount("#user-goal");
