export const state = () => ({
    tasks: []
})

export const mutation = {
    ADD_TASK (state ,task){
        state.tasks = [{ content: task , done: false}, ...state.tasks];
    },
    REMOVE_TASK (state ,task){
        state.tasks.splice(state.tasks.indexof(task), 1);
    },
    TOGGLE_TASK (state, task){
        task.done = !task.done;
    }
}