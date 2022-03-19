<!---Name: Ryan Joshua Milan
     Code Name: Profile.vue
     Section: WD-202-->

<template>
  <div id="app">
    
    <form> <br/>
    <h1>{{name}} Ryan Joshua Milan </h1>
    

    <h2>{{course}} BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</h2>

    <h2>{{spec}} WEB DEVELOPER</h2>

    <h2>{{bdate}} 9/3/2001</h2>
    

    <h2>{{age}} 20</h2>
 

    <h2>{{gender}} Male</h2>
  

    <h2>{{goal}}<br> *My goal in this school college year is to futher my knowledge about this course so that i can use it to solve any problem that i face when it is time to use it.<br><br>*To have a nice stable job.</h2>
    
      
   
  </form>
  
  </div>

</template>

<script>


export default {
  name: 'app',

  data () {
    return {
      name:'NAME:',

      course:'COURSE:',

      spec:'SPECIALTY:',

      bdate:'DATE OF BIRTH:',

      age:'AGE:',

      gender:'GENDER:',

      goal:'GOAL:',
    
      
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Consolas', 'Courier New', monospace;
  
  color: blue;

  float: left;

  margin-left: 3%;

  margin-top: 2%;
 
  
  
  

}

form{
  background-color:#C2E5D3;

  height: 50em;

  width: 50em;
}

h1{
  font-size: 1em;

  margin-left: 10%;

  margin-top: 5%;

  border: 	#ADD8E6;

  border-color: 	#ADD8E6;
}
h2{
  font-size: 1em;

  margin-top: 3%;

  margin-left: 10%;
}

p{
  margin-top: 2%;

  font-size: .9em;

  margin-left: 11%;
}

body {
  background-color: lightblue;
}


</style>
