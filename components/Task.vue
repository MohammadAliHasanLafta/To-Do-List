<template>
    <div v-if="this.todo.tasks.length <= 0"
    class="bg-gray-300 mt-20 p-20 rounded-xl shadow-lg animate-bounce text-gray-700 font-bold text-xl italic leading-none flex justify-center">
        No Todos found. Add a few to begin.
    </div>
    <div v-for="(task, i) in this.todo.tasks" :key="i"
    :class="`${!task.done?'odd:bg-orange-100 even:bg-orange-50 transition duration-300 hover:':'bg-green-100 animate-pulse line-through'} `">
        <div>

            <div class="text-xl px-1 py-2 text-orange-800">{{ task.content }}
                <div class="float-right">
                    <button class="mr-5 hover:bg-white hover:rounded-xl" @click="toggledone(task)">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                    <button class="hover:bg-white hover:rounded-xl " @click="removetask(task)">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        stroke-width="2">
                            <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                    <button class="mr-5 ml-5 hover:bg-white hover:rounded-xl " @click="addtobacklog(task)">
                        <svg class="w-[24px] h-[24px] text-orange-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11v5m0 0 2-2m-2 2-2-2M3 6v1c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1Zm2 2v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V8H5Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <small class="block text-base text-gray-500">{{ task.date }}</small>
            
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            todo : useTodoStore(),
        }
    },
    methods: {
        toggledone(task){
            this.todo.toggle_task(task);
            this.todo.add_donetask(task);
        },
        removetask(task){
            this.todo.remove_task(task);
        },
        addtobacklog(task){
            this.todo.add_backlog(task);
        }
    },
}
</script>