<template>
  <section class="read-app">
    <input 
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    >
    <Item
      :todo="todo"
      v-for="todo in filterTodoList"
      :key="todo.id"
      @delThisTodo="deleteTodo"
    />
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggleFilter="toggleFilter"
      @delFinishTodo="delFinishTodo"
    ></Tabs>  
  </section>
</template>

<script>
import Item from './Item.vue'
import Tabs from './Tabs.vue'
let id = 0;
export default {
  data(){
    return{
      todos: [],
      filter: 'all'
    }
  },
  components:{
    Item,
    Tabs,
  },
  methods:{
    addTodo(e){
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = '';
    },
    deleteTodo(id){
      this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1)
    },
    toggleFilter(state){
      this.filter = state
    },
    delFinishTodo(){
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  computed:{
    filterTodoList(){
      if( this.filter === 'all' ){
        return this.todos
      }

      const completed = this.filter === 'completed';
      return this.todos.filter(todo =>todo.completed === completed)
    }
  }
}
</script>

<style scoped>
.read-app{
  position: relative;
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}
.add-input{
  display: block;
  padding: 10px 0;
  text-indent: 20px;
  border: 0;
  font-size: 18px;
  color:#333;
  width: 100%;
}
  
</style>
