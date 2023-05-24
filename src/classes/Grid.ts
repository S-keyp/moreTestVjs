export class Grid {
    numberCellsX = 100
    numberCellsY = 100
    actualGeneration: boolean[][] = [];

    
    constructor() {
        for(let i = 0; i < this.numberCellsX; i++){
            const row: boolean[] = []
            for(let j = 0; j < this.numberCellsY; j++){
                row.push(false)
            }
            this.actualGeneration.push(row)
        }      
    }

    displayInfo(){
        console.log(`Grid grid: ${this.actualGeneration}`)
    }
}