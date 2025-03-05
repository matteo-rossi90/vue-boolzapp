**Boolzapp** 

Progetto realizzato con l'intento di replicare un'applicazione simile per template e funzionalità a WhattSapp. 
Realizzata interamente con Vue.js e JavaScript, l'applicazione è formata da una barra laterale dove l'utente può scorrere la lista dei contatti e cercare, attraverso un filtro di ricerca posto in alto, i contatti
specifici. L'applicazione è stata strutturata per consentire all'utente di scambiare messaggi con alcuni contatti ipotetici, i quali possono simulare una risposta generata automaticamente. 
Prima della risposta, nel nome del profilo contattato una funzione JavaScript simulerà il collegamento online del contatto e dopo un breve intervallo di tempo una notifica avvertirà l'utente che il contatto
sta scrivendo un messaggio.

Per creare questa applicazione ho seguito alcuni step:

1) ho creato il markup di base statico con HTML e CSS delle parti che compongono l'applicazione (area dei messaggi e pannello che gestisce i contatti) per capire le proprozioni e lo stile
2) ho popolato dinamicamente della lista contatti e della messaggistica sfruttando al direttiva v-for e applicandola ad un array a d oggetti di riferimento listContacts, che contiene un altro array chiamato messages
3) ho gestito i messaggi e distinzione delle tonalità in base alla proprietà status contenuta nell'array stabilendo una condizione
4) con javaScript ho fatto in modo di mostrare per ciascun contatto i messaggi che l'utente ha scambiato con quel contatto specifico creando un metodo che tiene conto del numero di posizione del contatto espresso con un numero indice
5) ho gestito l'invio messaggi da parte dell'utente sfruttando la direttiva v-model e creando una variabile in cui salvare il messaggio inviato e regolando degli intervalli di tempo specifici per avviare e disattivare la simulazione dello stato online e della scrittura dell'utente
