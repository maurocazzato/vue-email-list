// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

  
const app = new Vue({
  data() {
    return {
      emailList: [],
      emailListGenerated: false,
    };
  },
  
  methods: {
    async generateEmails() {
      this.emailList = [];
    // Utilizziamo un ciclo for per effettuare 10 chiamate Axios per ottenere gli indirizzi email casuali.
      for (let i = 0; i < 10; i++) {
        // Il codice all'interno di try è il blocco in cui potrebbe verificarsi un errore.
        // Se si verifica un errore durante l'esecuzione del blocco try, l'esecuzione viene interrotta e viene passato al blocco catch.
        try {
        //  uso axios.get per ottenere i dati da una URL specifica
          const response = await axios.get('https://flynn.boolean.careers/exercises/api/random/mail');
          this.emailList.push(response.data.response);
        //   In caso di errore stampo un messaggio di errore nella console.
        // (error è un parametro di catch che rappresenta l'errore che è stato generato nel blocco try)
        } catch (error) {
          console.error('Errore durante la richiesta:', error);
        }
      }
    //   Dopo aver ottenuto tutti gli indirizzi email, imposto emailListGenerated su true.
      this.emailListGenerated = true;
      console.log('Ecco la lista generata:', this.emailList);
    },
  },
  // Collego new Vue all'elemento con id "app"
});app.$mount('#app');