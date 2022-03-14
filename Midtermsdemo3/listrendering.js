//Activity Name: listrendering.js
//Author Name: Ryan Joshua, Milan F.
//Section: WD-202 

const ListRendering = {
data() {
  return {
    todos: [
      { text: 'Clean the House' },
      { text: 'Prepare Breakfast' },
      { text: ' Attend WCSERVER class' }
    ]
  }
}
  
}

Vue.createApp(ListRendering).mount('#List-rendering')