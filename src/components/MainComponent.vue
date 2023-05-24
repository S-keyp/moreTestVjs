<script setup lang='ts'>
    import { computed, ref } from 'vue'
    import { GameOfLife } from '../classes/GameOfLife';

    const choosenWidth = ref(50)
    const choosenHeight = ref(50)

    const slotSizes = computed(()=>{
        return { width: choosenWidth.value, height: choosenHeight.value}
    })
        

    // console.log(slotSizes)

    const GOL = new GameOfLife(slotSizes)
    // let gameGrid = new Grid()

    // function update(){
    //     console.log("update RAF")
    //     requestAnimationFrame(update)
    // }
    // requestAnimationFrame(update)


    // onUpdated(() => {
    //     console.log('updated')
    // })
</script>

<template>
    <div class="selectionZone">
        <label for="height">Choisir une hauteur</label>
        <input type="range" v-model.lazy="choosenHeight" id="height" name="height" min="0" max="100">
        <label for="width">Choisir une largeur</label>
        <input type="range" v-model.lazy="choosenWidth" id="width" name="width" min="0" max="100">
    </div>

    <canvas class="gameZone" :style="{
        width: choosenWidth + 'vw', 
        height: choosenHeight + 'vh'
        }">
    </canvas>
</template>

<style scoped>
    .gameZone{
        background: red;
    }
</style>