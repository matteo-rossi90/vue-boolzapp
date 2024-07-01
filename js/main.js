/*Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////

const { createApp } = Vue;

createApp({
    
    //elenco dati
    data(){

        return{

            searchQuery:'', //stringa vuota che permette di raccogliere il nome digitato dall'utente
            userMessage: '', // stringa vuota che raccoglie i messaggi digitati dall'utente
            dropdownIndex: null,
            currentIndex: 0,//indice del contatto considerato in quel momento che va aggiornato in base al contatto di riferimento
            listContacts: [//lista dei contatti
                {
                    name: 'Michele',
                    avatar: 'img/user-avatar1.png',
                    visible: true,
                    lastMessageTime: '10/01/2020 16:15:22',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/user-avatar3.png',
                    visible: true,
                    lastMessageTime: '20/03/2020 16:30:55',
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/user-avatar4.png',
                    visible: true,
                    lastMessageTime: '28/03/2020 16:15:22',
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/user-avatar5.png',
                    visible: true,
                    lastMessageTime: '10/01/2020 15:50:00',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/user-avatar6.png',
                    visible: true,
                    lastMessageTime: '10/01/2020 15:50:22', 
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/user-avatar7.png',
                    visible: true,
                    lastMessageTime: '10/01/2020 15:50:00',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Alessia',
                    avatar: 'img/user-avatar8.png',
                    visible: true,
                    lastMessageTime: '10/01/2020 15:50:00',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Clarissa',
                    avatar: 'img/user-avatar9.png',
                    visible: true,
                    lastMessageTime: '10/01/2020 15:50:00',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]

        }
    },
    methods:{

        //selezionare il pannello dei messaggi di un contatto al click del contatto corrispondente
        selectContact(index){
            const selectedContact = this.filteredUser[index];
            this.currentIndex = this.listContacts.findIndex(contact => contact.name === selectedContact.name);
        },
        //aggiungere il messaggio scritto dall'utente
        addMessage(){
            if(this.userMessage !== ''){

                //creare una nuova variabile che permetta di raccogliere i messaggi inviati
                const newMessage = {
                    date: luxon.DateTime.now().toFormat('dd/mm/yyyy HH:mm:ss'),
                    message: this.userMessage,
                    status: 'sent'
                };


                //aggiungere il nuovo messaggio al contatto corrente
                this.listContacts[this.currentIndex].messages.push(newMessage);

                // aggiornare la data e l'ora dell'ultimo messaggio inviato
                this.updateContactTime(this.currentIndex, newMessage.date);

                //svuotare il messaggio digitato dall'utente
                this.userMessage = '';

                setTimeout(() =>{

                    //creare una nuova variabile che raccolga il messaggio autogenerato
                    const autoReply = {
                        date: luxon.DateTime.now().toFormat('dd/mm/yyyy HH:mm:ss'),
                        message: 'Ok!',
                        status: 'received'
                    }

                    //aggiungere il nuovo messaggio al contatto corrente
                    this.listContacts[this.currentIndex].messages.push(autoReply);

                    // aggiornare la data e l'ora dell'ultimo messaggio ricevuto
                    this.updateContactTime(this.currentIndex, autoReply.date);

                }, 1000)//delay di 1 secondo
            }

            
        },
        //attivazione del menu a tendina cliccando sull'icona nel messaggio
        toggleDropdown(index) {
            this.dropdownIndex = this.dropdownIndex === index ? null : index;
        },
        //cancella il messaggio dal menu a tendina
        deleteMessage(index, status){
            if(status === 'sent'){
                this.listContacts[this.currentIndex].messages.splice(index, 1);
            }
        
        },
        // aggiorna la data e l'ora dell'ultimo messaggio del contatto
        updateContactTime(index, date) {
            this.listContacts[index].lastMessageTime = date;
        }
    },
    computed:{

        //funzione che filtra i nomi dei contatti partendo dalle lettere digitate dall'utente
        filteredUser() {
            const query = this.searchQuery.toLowerCase();

            return this.listContacts.filter(contact =>{
                return contact.name.toLowerCase().includes(query)
            })
        }

    }
}).mount('#app')

