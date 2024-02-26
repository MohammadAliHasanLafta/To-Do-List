<template>
    <div v-if="this.todo.backlog.length <= 0"
    class="bg-gray-300 mt-20 p-20 rounded-xl shadow-lg animate-bounce text-gray-700 font-bold text-xl italic leading-none flex justify-center">
        No Backlog found.
    </div>
    
    <div v-else>
        <div class="flex justify-center mb-1">
                <div>
                    <input type="text" 
                    v-model="searchtext" 
                    placeholder="search..." 
                    @keypress.enter="search" 
                    class="text-orange-800 placeholder-orange-400 py-2 px-5 mr-1 bg-orange-100 rounded-full outline-orange-200" />
                    <button @click="sortbyname" 
                    class="text-orange-100 placeholder-orange-400 py-2 pr-3 pl-4 mr-1 bg-orange-500 text-sm rounded-l-full">
                        Sort by Name
                    </button>
                    <button @click="sortbydate" 
                    class="text-orange-100 placeholder-orange-400 py-2 pr-3 pl-4 bg-orange-500 text-sm rounded-r-full">
                        Sort by Date
                    </button>
                </div>  
            </div>
                <div v-for="(task, i) in this.todo.backlog" :key="i"
                class="odd:bg-orange-100 even:bg-orange-50 transition duration-300 hover:">
                    <div>

                        <div class="text-xl px-1 py-2 text-orange-800">{{ task.content }}
                            <div class="float-right">
                                <button class="hover:bg-white hover:rounded-xl mr-5" @click="relist(task)">
                                    <svg class="w-6 h-6 text-orange-800 dark:text-white" 
                                    aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m4 6h8m0 0-2-2m2 2-2 2M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <small class="block text-base text-gray-500">{{ task.date }}</small>
                        
                    </div>
                </div>
            
    </div>
    
</template>

<script>
export default {
    data (){
        return {
            todo : useTodoStore(),
            searchtext : "",
            result : [],
            sortOrder: "asc",
        }
    },
    methods: {
        relist(task){
            this.todo.relist(task);
        },

        sortbyname() {
        this.setOrder = "asc";
          let sortedArray = [...this.todo.backlog];
          sortedArray.sort((a, b) => {
            let comparison = 0;
            if (a.content < b.content) {
              comparison = -1;
            } else if (a.content > b.content) {
              comparison = 1;
            }
            return comparison;
          });

          this.todo.backlog = sortedArray;
        },

        sortbydate() {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'

          this.todo.backlog.sort((a, b) => {
            const sortOrder = this.sortOrder === 'asc' ? 1 : -1
            const aValue = a[this.date]
            const bValue = b[this.date]

            if (aValue > bValue) {
              return sortOrder
            } 
            else if (aValue < bValue) {
              return -sortOrder
            } 
            else {
              return 0
            }
          })
        },
    },
}
</script>