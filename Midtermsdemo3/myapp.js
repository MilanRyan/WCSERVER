//Activity Name: myapp.js
//Author Name: Ryan Joshua, Milan F.
//Section: WD-202 

const app = Vue.createApp({
  // Create functions, data
  data(){
   return{
      title: 'The Ledger',
      author:'Joseph',
      age: 34
    }
  }
  //template: "<h2> This is my website </h2>"
});

app.mount('#app')