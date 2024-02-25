export const useTodoStore = defineStore(
    'todo', 
    {
    state: () => ({
      tasks: [],
    }),
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      increment() {
        this.count++
      },
      randomizeCounter() {
        this.count = Math.round(100 * Math.random())
      },
    },
  })