//Activity Name: two-ways.js
//Author Name: Ryan Joshua, Milan F.
//Section: WD-202 

const TwoWayBinding = {
  data(){
      return{
          message: 'Hello Vue'
      }
  }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')