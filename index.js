class Game {
    constructor(name, genre) {
        this.name=name;
    }

    describe(){
        return `${this.name}.`;
    }
}

class Menu {
    constructor() {
        this.Game = [];
        this.selectedGame = null;
    }
start() {
    let selection = this.showMainMenuOptions();

    while (selection != 0){
        switch (selection) {
            case '1':
                this.inputGame();
                break;
           /* case '2':
                this.viewGame();
                break;v*/
            case '2':
                this.deleteGame();
                break;
            case '3':
                this.viewGames();
                break;
            default:
                selection = 0;
        }
        selection = this.showMainMenuOptions();
     }

     alert('Goodbye. Until next time.');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit 
            1) input new game
            2) delete game
            3) view all games
        `);
    }
    
    viewGames() {
        let gameString = '';
        for (let i=0; i < this.Game.length; i++) {
            gameString += i + ')' + this.Game[i].name + '\n'
        }
        alert(gameString);
    }

    inputGame() {
        let name = prompt('Enter name for new game:');
        this.Game.push(new Game(name));
    }

    deleteGame() { //deletes a team
        let index=prompt('Enter the index of the game that you wish to delete:')
        if (index > -1 && index < this.Game.length) {
            this.Game.splice(index, 1);
        }
    }
}
let menu=new Menu();
menu.start();