<script lang="ts">
export default {
    props: {
        'title': {
            type: String
        },
        'dropdowns': {
            type: Array<{ title: string, link: string }>
        },
        'absolute': {
            type: Boolean
        },
        'isManaged': {
            type: Boolean
        }
    },
    emits: [
        'isDropdownOpened'
    ],
    data() {
        return {
            id: 0,
            isHidden: true,
            managedDropdowns: [] as ({title: string, link: string, display: boolean, id: number})[] | undefined
        }
    },
    computed: {
        getManagedDropdowns(){
            if(this.isManaged) return this.managedDropdowns
            // console.log(this.dropdowns)
            return this.dropdowns
        },
        setManagedDropdowns(){
            this.managedDropdowns = this.dropdowns.map((dropdown => ({display: false, id: this.id++, ...dropdown})))
        }
    },
    methods:{
   
    },
    mounted(){
        // this.setManagedDropdowns
        // console.log(`managed Dropdowns : ${this.managedDropdowns}`)
        // for(let key of this.managedDropdowns){
        //     console.log(`${key} : ${Object.keys(key)}`)
        // }
    },
    watch:{
        
    }
}
</script>


<template>
    <div class="dropdown" @click="isHidden = !isHidden">
        {{ title }}
        <svg width="15" height="12.5" viewBox="0 0 201 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.47131 0C6.4892 0 6.50706 0 6.52495 0L194.412 0C196.825 0 199.006 1.978 199.954 5.00971C200.919 8.04141 200.436 11.5537 198.774 13.9384L104.83 147.574C102.56 150.809 98.3947 150.809 96.1243 147.574L2.64565 14.6039C1.32275 13.1066 0.446777 10.8143 0.446777 8.24476C0.446777 3.6972 3.14619 0 6.47131 0Z"
                fill="#F9FAFD" />
        </svg>
        <ul class="dropdown-list" :class="{ 'display-absolute': absolute}">
            <li class="dropdown-list-item" v-for="dropdown in getManagedDropdowns" :class="{ hidden: isHidden }">
                <a :href="dropdown.link">
                    {{ dropdown.title }}
                </a>
            </li>
        </ul>
    </div>
</template>


<style scoped>
.dropdown {
    position: relative;
    cursor: pointer;
}

.dropdown-list {
    list-style: none;
}

.dropdown-list-item {
    padding: 12px 24px 12px 0;
}

a {
    color: var(--white);
}

.display-absolute{
    position: absolute;
    background-color: var(--dark-blue);
    opacity: .95;
    border-right: 1px solid var(--white);
    border-left: 1px solid var(--white);
    border-radius: 12px;
}

.hidden {
    display: none;
}
</style>