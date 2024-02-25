import { useTodoStore } from "../stores/todos";

export default (await import('vue')).defineComponent({
data() {
return {
todo: useTodoStore(),
};
},
});
