<template>
    <div v-for="(task, i) in this.todo.tasks" :key="i"
    :class="`${!task.done?'odd:bg-orange-100 even:bg-orange-50 transition duration-300':'bg-green-100 line-through'} `">
        <div>
            <div class=" px-1 py-2 text-orange-800">{{ task.content }}</div>
            <div>
                <button @click="toggledone(task)">{{ task.done ? '❌' : '✔️' }}</button>
                <button @click="removetask(task)">🗑</button>
            </div>
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
        },
        removetask(task){
            this.todo.remove_task(task);
        },
    },
}
</script>

<style>

</style>