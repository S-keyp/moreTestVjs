<script lang="ts">
import DropDown from './DropDown.vue';


interface Child {
    title: string,
    link?: string,
    childrens?: {title: string, link: string}[]
}



export default {
    props:{
        'dropdowns' : {
            type: Array<Child>
        }
        // 'dropdowns': {
        //     type: Any[]
        // }
    },
    data(){
        return{
            managedDropdowns : [] as ({ id: number, title: string, link?: string, childrens?: {title: string, link: string}[], display: boolean })[] | undefined
        }
    },
    computed: {
        setManagedDropdowns(){
            this.managedDropdowns = this.dropdowns?.map(((dropdown: Child, index: number) =>({id: index, ...dropdown, display: false})))
        }
    },
    mounted(){
        this.setManagedDropdowns
        if(this.managedDropdowns != undefined) console.log(`managed dd: ${this.managedDropdowns}`)
        for(let dd of this.managedDropdowns){
            console.log(`${Object.keys(dd)}`)
            // if(dd.childrens){
            //     for(let chil of dd.childrens) console.log(`${chil[Object.keys(chil)]}, ${Object.keys(chil)}`)
            // }
        }
    },
    components: { DropDown }
}
</script>

<template>
   <ul>
        <li v-for="entry in managedDropdowns" class="cr-navbar-menu-item">
            <DropDown :is-managed="true" v-if="entry.childrens" :key="entry.id" :absolute="true" :title="entry.title" :dropdowns="entry.childrens" /> <!--@is-dropdown-opened="(n) => dropdownHandler(n)" get back the emit isDropdownOpened and n is the value-->
            <a v-else :href="entry.link">{{ entry.title }}</a>
        </li>
    </ul>
</template>

<style>

</style>