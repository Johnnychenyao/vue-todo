<template>
  <div id="app">
    <div id="background-cover"></div>
    <Header></Header>
    <Todo/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Footer from './layout/footer.jsx'
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Todo,
  }
}
</script>

<style>
  #background-cover{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #999;
    opacity: .9;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
</style>

