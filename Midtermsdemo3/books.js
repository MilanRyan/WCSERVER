//Activity Name: books.js
//Author Name: Ryan Joshua, Milan F.
//Section: WD-202 

const books = Vue.createApp({
  data() {
      return{

          showBooks: true,
          btitle: 'The Ledger',
          bauthor: 'Joseph Esquivel',
          year: 2008

      }
  },
  methods:{
      toggleShowBooks(){
          this.showBooks = !this.showBooks
      }
  }
});
books.mount('#books')