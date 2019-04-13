import './../assets/style/footer.css'
export default {
  data(){
    return{
      author:'Johnny chan'
    }
  },
  render() {
    return(
      <div id="footer">
        <span>Writter by {this.author}</span>
      </div>
    )
  }
}