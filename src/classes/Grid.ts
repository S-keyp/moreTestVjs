export class Grid {
    gridWidth = 150
    patate = 0

    constructor( patate : number ) {
        this.patate = patate
    }

    displayGrid(): String{

        return this.gridWidth + ' ' + this.patate
    }
}