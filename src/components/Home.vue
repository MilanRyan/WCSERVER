<!---Author: Ryan Milan
    Code Name: Home.vue
    Section: WD-202-->

<template>
   <div class="Home">

    <h1>{{App}}</h1>

    <h2><p>Burger:</p></h2>


    <h2>a dish consisting of a round patty of ground beef, or sometimes another savory ingredient, that is fried or grilled and typically served in a split bun or roll with various condiments and toppings.</h2>
   
   <h2><p>Soft Drink:</p></h2>

    <h2>soft drink, any of a class of nonalcoholic beverages, usually but not necessarily carbonated, normally containing a natural or artificial sweetening agent, edible acids, natural or artificial flavours, and sometimes juice.</h2>
   </div>

    
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      App: 'WEOLCOME TO VUE.JS APP'
    }
  }
}

</script>

<style scoped>


.Home{
    
    margin: 50px 0px 0px 0px;

    height: 100%;

    width: 100%;

   
}

h2{
  
  font-size: 1.5em;

  font-family: Arial, sans-serif, monospace;

  margin: 2% 0% 0% 0%;

  width: 50%;
}

img{

  max-width: 50%;

  margin:  5% 0% 0% 25%;
}

h1{

  text-align: center;
  
  margin: 50px 0px 0px;
}

</style>