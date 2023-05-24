<script setup lang='ts'>
    import { ref } from 'vue'
    const choosenWidth = ref(50)
    const choosenHeight = ref(50)

</script>

<template>
    <div class="selectionZone">
        <label for="height">Choisir une hauteur</label>
        <input type="range" v-model="choosenHeight" id="height" name="height" min="0" max="100">
        <label for="width">Choisir une largeur</label>
        <input type="range" v-model="choosenWidth" id="width" name="width" min="0" max="100">
    </div>
    <div class="gameZone" :style="{width: choosenWidth + 'vw', height: choosenHeight + 'vh'}"></div>
</template>

<style scoped>
    .gameZone{
        background: red;
    }
</style>