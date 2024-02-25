<template>
    <main class="bg-orange-200 flex justify-center flex-col items-center h-screen">
        <div class="container w-full max-w-2xl">
            <h1 class="text-3xl text-center font-bold mb-5 uppercase">To Do List</h1>

            <div class="bg-gray-100 mt-5 p-5 rounded-xl shadow-lg text-gray-700">
                <h1 class="font-bold text-xl italic block mb-0 leading-none">Todo's</h1>
                <small class="block mb-5 mt-0 text-xs text-gray-500">{{ remaining }} Todos pending, {{ completed }} Completed.</small>
                <div class="h-80 overflow-y-auto w-full">
                    <Task />
                </div>
            </div>
            <div class="flex justify-center mt-20">
                <div>
                    <input type="text" 
                    v-model="newTask" 
                    placeholder="Enter task..." 
                    @keypress.enter="addTask" 
                    class="text-xl text-orange-800 placeholder-orange-400 py-2 px-5 bg-orange-100 rounded-l-full outline-orange-200" />
                    <button @click="addTask" 
                    class="text-xl text-orange-100 placeholder-orange-400 py-2 pr-5 pl-4 bg-orange-500 rounded-r-full">
                        Add
                    </button>
                </div>  
            </div>
        </div>
    </main>
</template>

<script>
import { useTodoStore } from "../stores/todos"
export default {
    data (){
        return {
            newTask : '',
            todo : useTodoStore(),
            date : new Date(),
        }
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.todo.add_task(this.newTask, this.date);
                this.newTask = '';
            }
        }
    },
    computed: {
        remaining() {
            return this.todo.tasks.filter(todo => !todo.done).length;
        },
        completed() {
            return this.todo.tasks.filter(todo => todo.done).length;
        }
    },
}
</script>