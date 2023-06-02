<script lang="ts">
    export default {
        props: [
            'title',
            'dropdowns' 
        ],

        data(){
            return {
                isHidden: true
            }
        }
    }
</script>


<template>
    <div @click="isHidden = !isHidden">
        {{ title }}
        <svg width="15" height="12.5" viewBox="0 0 201 150" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.47131 0C6.4892 0 6.50706 0 6.52495 0L194.412 0C196.825 0 199.006 1.978 199.954 5.00971C200.919 8.04141 200.436 11.5537 198.774 13.9384L104.83 147.574C102.56 150.809 98.3947 150.809 96.1243 147.574L2.64565 14.6039C1.32275 13.1066 0.446777 10.8143 0.446777 8.24476C0.446777 3.6972 3.14619 0 6.47131 0Z" fill="#F9FAFD"/></svg>
        <ul v-for="dropdown in dropdowns" :class="{hidden: isHidden}">
            <li>
                <a :href="dropdown[1]">
                    {{ dropdown[0] }}
                </a>
            </li>
        </ul>
    </div>
</template>


<style scoped>
    div{
        cursor: pointer;
    }
    
    ul{
        list-style: none;
    }

    a{
        color: var(--white);
    }

    .hidden{
        display: none;
    }
</style>