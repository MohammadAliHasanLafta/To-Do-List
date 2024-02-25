<template>
    <main>
        <h1>To Do List</h1>
        <p>2 complate, 0 undone</p>

        <div>
            <input type="text" 
            v-model="newTask" 
            placeholder="Enter task..." 
            @keypress.enter="addTask" />
        </div>
        <button @click="addTask">Add</button>

        <div>

        </div>
    </main>
</template>

<script>
import { useTodoStore } from "../stores/todos"
export default {
    data (){
        return {
            newTask : '',
            c : useTodoStore()
        }
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.newTask = '';
            }
        }
    },
    mounted() {
      console.log(this.c.tasks);
    },
}
</script>