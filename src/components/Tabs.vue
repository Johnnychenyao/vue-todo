<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter == state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="ckearALlCompleted">Clear completed</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states:['all','active','completed']
    }
  },
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  computed:{
    unFinishedTodoLength() {
      return this.todos.filter((todo)=>!todo.completed).length
    }
  },
  methods:{
    toggleFilter(state){
      this.$emit('toggleFilter',state)
    },
    ckearALlCompleted(){
      this.$emit('delFinishTodo')
    }
  }
}
</script>

<style scope>
  .helper{
    font-weight: 100;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    line-height: 30px;
    background-color: #fff;
    font-size: 14px;
  }
  .left, .clear, .tabs{
    padding: 0 10px;
    box-sizing: border-box;
  }
  .left, .clear{
    width: 150px;
  }
  .clear{
    text-align: right;
    cursor: pointer;
  }
  .tabs{
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
  .tabs > *{
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175,47,47,0);
  }
  .tabs > *.actived{
    border-radius: 5px;
    border: 1px solid rgba(175,47,47,0.4);
  }
</style>