<template>
    <body class="bg-orange-200 flex justify-center items-center h-screen">
    <div class="container w-full max-w-2xl" id="app">
        <Todo/>
        <div class="bg-gray-100 mt-5 p-10 rounded-xl shadow-lg text-gray-700">
            <h1 class="font-bold text-xl italic block mb-0 leading-none">Todo's</h1>
            <small id="todo_stats" class="block mb-5 mt-0 text-xs text-gray-500">1 Todos pending, 0 Completed.</small>
            <div class="max-h-80 overflow-y-auto">
                <Todotable />
            </div>  
        </div>
        <Addtodo />
    </div>
</body>
</template>