enum StateGame {
    startGame = 0,
    playGame = 1,
    endGame = 2,
  }
export class GameStateManager{
    private currentState : StateGame;
    constructor(){
        this.currentState = StateGame.startGame;
    }
    setState(newState : number): void{
        // console.log(newState);
        this.currentState = newState;
        // console.log(this.currentState);
    }
    getState():number{
        return this.currentState;
    }
}