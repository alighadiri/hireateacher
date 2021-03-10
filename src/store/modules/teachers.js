export default {
  namespaced: true,
  state: {
    teachers: [
      {
        id: "t1",
        firstName: "Maximilian",
        lastName: "Schwarzmüller",
        areas: ["frontend", "backend", "fullstack"],
        description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        hourlyRate: 30,
      },
      {
        id: "t2",
        firstName: "Julie",
        lastName: "Jones",
        areas: ["frontend", "devops"],
        description:
          "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
        hourlyRate: 30,
      },
    ],
  },

  mutations: {
    registerTeacher(state, payload) {
      state.teachers.push(payload)
    }
  },

  actions: {
    addTeacher(context, data) {
      const teacher = {
        id : 't3',
        firstName : data.first,
        lastName : data.last,
        description : data.desc,
        hourlyRate : data.rate,
        areas : data.areas
      }
      context.commit('registerTeacher', teacher)
    },
  },

  getters: {
    teachers(state) {
      return state.teachers;
    },
    hasTeachers(state) {
      return state.teachers && state.teachers.length > 0;
    },
  },
};
