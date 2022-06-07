export class Score{
        private score:number;
        private addScore: boolean;
        private storeScore: Array<number> =[];
        public constructor(){{
          this.score = 0;
          this.addScore = true;
          this.storeScore[0] = 0;
        }}
        public addstoreScore():void{
          var sizeOfStoreScore = this.storeScore.length;
          this.storeScore[sizeOfStoreScore] = this.score;
        }
        public getMaxscore():any{
          return Math.max.apply(null,  this.storeScore);
        }
        public setScore(Score: any):void{
          this.score = Score;
        }
        public getScore() :number{
          return this.score;
        }
        public reset():void{
          this.score = 0;
          this.addScore = true;
        }
        public update(bird:any, columns:any,rectCollision:any) :void{
          var collision = false;
          
          for(var i = 0 ; i < 6 ; i+=2){
            var rectColumn = [columns[i].x + columns[0].width, columns[i+1].y - 240, 1, columns[0].blank];
            var rectBird = [bird.x, bird.y, bird.width, bird.height];
            if (rectCollision(rectBird, rectColumn) == true)
            { 
              collision = true;
              break;
            }
          }
          if (collision == true){
            if (this.addScore == true)
              this.score += 1;
            this.addScore = false;
          }
          else{
            this.addScore = true;
          }
        }
}