<template>
    <div v-if="this.todo.donetask.length <= 0"
    class="bg-gray-300 mt-20 p-20 rounded-xl shadow-lg animate-bounce text-gray-700 font-bold text-xl italic leading-none flex justify-center">
        No Done todos found.
    </div>
    <div v-for="(task, i) in this.todo.donetask" :key="i"
    class="bg-green-100 animate-pulse line-through">
        <div>
            <div class="text-xl px-1 py-2 text-orange-800">{{ task.content }}
                <div class="float-right">
                    <button v-if="task.done" class="mr-5 hover:bg-white hover:rounded-xl" @click="toggledone(task)">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
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
            this.todo.retask(task);
        }
    },
}
</script>