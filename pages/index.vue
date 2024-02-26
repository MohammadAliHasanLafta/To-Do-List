<template>
    <main class="bg-orange-200 flex justify-center flex-col items-center h-screen">
        <div class="container w-full max-w-2xl">
            <h1 class="text-3xl text-center font-bold mb-5 uppercase">To Do List</h1>

            <div class="bg-gray-100 mt-5 p-5 rounded-xl shadow-lg text-gray-700">
                <h1 class="font-bold text-xl italic block mb-0 leading-none">Todo's</h1>
                <small class="block mb-5 mt-0 text-xs text-gray-500">{{ remaining }} Todos pending, {{ backloged }} Todos in Backlog, {{ completed }} Completed.</small>
                <div class="md:flex">
                    <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                        <li @click="task">
                            <a href="#" class="inline-flex items-center px-4 py-3 text-black bg-gray-200  rounded-lg active w-full hover:text-gray-900 hover:bg-orange-500" aria-current="page">
                                <svg v-if="!this.taskpage" class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-3 5h3m-6 0h0m3 4h3m-6 0h0m1-13v4h4V3h-4Z"/>
                                </svg>
                                <svg v-if="this.taskpage" class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                </svg>
                                TODOList
                            </a>
                        </li>
                        <li @click="backlog">
                            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg text-black hover:text-gray-900 bg-gray-200  hover:bg-orange-500 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg v-if="!this.backlogpage" class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z"/>
                                </svg>
                                <svg v-if="this.backlogpage" class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                </svg>
                                Backlog
                            </a>
                        </li>
                        <li @click="done">
                            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg text-black hover:text-gray-900 bg-gray-200  hover:bg-orange-500 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg v-if="!this.donepage" class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg> 
                                <svg v-if="this.donepage" class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                </svg>                          
                                {{ completed }} Done
                            </a>
                        </li>
                    </ul>
                <div class="p-4 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                    <div class="h-80 overflow-y-auto w-full">
                        <Task v-if="this.taskpage" />
                        <Backlog v-if="this.backlogpage" />
                        <Done v-if="this.donepage" />
                    </div> 
                </div>
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
            taskpage: true,
            backlogpage: false,
            donepage: false,
        }
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.todo.add_task(this.newTask, this.date);
                this.newTask = '';
            }
        },
        task(){
            if (!this.taskpage) {
                this.taskpage = true;
                this.backlogpage = false;
                this.donepage = false;
            }
        },
        backlog(){
            this.taskpage = false;
            this.backlogpage = true;
            this.donepage = false;
        },
        done(){
            this.taskpage = false;
            this.backlogpage = false;
            this.donepage = true;
        },
    },
    computed: {
        remaining() {
            return this.todo.tasks.filter(todo => !todo.done).length;
        },
        completed() {
            return this.todo.donetask.filter(todo => todo.done).length;
        },
        backloged() {
            return this.todo.backlog.length;
        }
    },
}
</script>