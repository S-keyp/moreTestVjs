import { ComputedRef } from "vue";
import { Grid } from "./Grid";

export class FrameCanvas{
    //gère le canvas, repaint etc ...
    // récupère la valeur de la grid et la peint 
    grid: Grid
    slotSizes: ComputedRef


    constructor(grid: Grid, slotSizes: ComputedRef){
        this.grid = grid;
        this.slotSizes = slotSizes
        // canvas = document.createElement("canvas");
        // document.querySelector('.gameZone')?.append()
    }


    displayInfo(){
        setInterval(()=> {
            console.log(this.slotSizes.value['width'])
            console.log(this.slotSizes.value['height'])
            console.log(`Frame Canvas grid: and slot sizes are: ${this.slotSizes.value['height']}`) //${this.grid.actualGeneration}
        }, 1000)
    }

}