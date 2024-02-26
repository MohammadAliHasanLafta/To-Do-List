export const useTodoStore = defineStore(
    'todo', 
    {
    state: () => ({
      tasks: [],
      donetask: [],
      backlog: [],
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
      add_donetask(task){
        this.donetask.push(task);
        this.tasks.splice(this.tasks.indexOf(task), 1);
      },
      add_backlog(task){
        this.backlog.push(task);
        this.tasks.splice(this.tasks.indexOf(task), 1);
      },
      retask(task) {
        this.tasks.unshift(task);
        this.donetask.splice(this.donetask.indexOf(task), 1);
      },
      relist(task){
        this.tasks.push(task);
        this.backlog.splice(this.backlog.indexOf(task), 1);
      },
    },
  })