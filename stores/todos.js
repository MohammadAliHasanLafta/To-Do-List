export const useTodoStore = defineStore(
    'todo', 
    {
    state: () => ({
      tasks: [],
    }),
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      add_task(task , d) {
        this.tasks.unshift({ content: task, done: false, date: d.toDateString()});
      },
      remove_task(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
      },
      toggle_task(task) {
        task.done = !task.done;
      },
    },
  })
  //pinia added