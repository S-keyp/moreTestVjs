import { ComputedRef } from 'vue'
import { FrameCanvas } from './FrameCanvas'
import { Grid } from './Grid'

export class GameOfLife {
    grid: Grid  
    frameCanvas: FrameCanvas
    

    constructor(slotSizes : ComputedRef) {
        this.grid = new Grid()
        this.frameCanvas = new FrameCanvas(this.grid, slotSizes)

        // this.grid.displayInfo()
        // this.frameCanvas.displayInfo()
        // this.displayInfo()

    }

    displayInfo(){
        console.log(`GOL grid: ${this.grid.actualGeneration}`)
    }
}