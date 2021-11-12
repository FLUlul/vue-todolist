/* 
Descrizione:
Rifare l’esercizio della to do list:
OK- stampare in pagina un item per ogni elemento contenuto in un array 
OK- ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
OK- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
ATTENZIONE PERO’!!!!
La vostra variante sarà che:
OK il vostro array nei data non avrà delle semplici stringhe, ma sarà un array di oggetti;
gli oggetti avranno questo formato:
{ text: 'Fare la spesa', done: true }, 
{ text: 'Fare il bucato', done: false }
etc. etc..
quindi nell’elenco di output ciò che sara “done” sarà barrato, il resto invece con testo normale.
Nella richiesta base mi limito al fatto che quel “done” nei task inseriti dall’utente sarà sempre false,
gli unici true saranno alcuni nei dati di partenza.
BONUS
Gesticso i done dall’interfaccia,
quindi il task potrà essere anche segnato come done e non per forza cancellato
poi se l’utente vuole potrà anche cancellarlo del tutto.
*/

var app = new Vue (
    {
        el: "#container",
        data: {
            newTask: {
                text: "", 
                done: false
            },
            tasks: [
                {
                    text: 'Fare la spesa', 
                    done: false
                },
                {
                    text: 'Guardare torneo di Dota2', 
                    done: false
                },
                {
                    text: 'Coding', 
                    done: false
                },
                {
                    text: 'Chiamare la mamma', 
                    done: false
                },
            ]
        },
        methods: {
            deleteTask(index){
                this.tasks.splice(index, 1);
            },
            addNewTask(){
                this.tasks.push(this.newTask);
                this.newTask = {
                    text: "", 
                    done: false
                };
            },
            doneTask(index){
                this.tasks[index].done=true;
            }
        }
    }
);