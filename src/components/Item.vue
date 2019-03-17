<template>
  <div :class="['todo-item',todo.completed ? 'completed' : '']">
    <input 
      type="checkbox" 
      v-model="todo.completed"
      class="toggle"
    >
    <label>
      {{todo.content}}
    </label>
    <button class="destory" @click="deleteTodo">删除</button>
  </div>
</template>

<script>
export default {
  props:{
    todo:{
      type: Object,
      required: true
    }
  },
  methods:{
    deleteTodo(){
      this.$emit('delThisTodo',this.todo.id)
    },
  }
}
</script>

<style scope>
  .todo-item{
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    padding: 10px;
    font-size: 24px;
  }
  .todo-item.completed label{
    text-decoration-line: line-through;
    color: rgb(189, 189, 189);
  }
  label{
    /* white-space: pre-line; */
    word-wrap: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    color: #000;
  }
  label.completed{
    color: #d9d9d9;
  }
  .todo-item:hover .destory{
    display: block;
  }
  .toggle{
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    margin: auto 0;
    width: 32px;
    height: 32px;
    outline: none;
  }
  .toggle::before{
    content:url('../assets/false.png') ;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: 0 auto;
    width: 32px;
    height: 32px;
    background-color: #fff;
    /* background: url('../assets/false.png') no-repeat; */
  }
  .toggle:checked:before{
    content:url('../assets/true.png') ;
  }
  .destory{
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 12px;
    border-radius: 5px;
    color: #cc9a9a;
    background-color: transparent;
    transition: color 0.2s ease-out;
    border: 1px solid #cc9a9a;
    cursor: pointer;
    outline: none;
    appearance: none;
  }
  .destory:hover{
    color: #fff;
    border: 1px solid #f71c1c;
    background-color: #f71c1c;
  }
</style>
