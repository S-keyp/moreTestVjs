<script lang="ts">
import HardCTA from './HardCTA.vue'
import DropDownMenu from './DropDownMenu.vue';


//Todo: change ismobile for smth else
export default {
    data() {
        return {
            isMobile: true,
            isOverlayHidden: true,
            menu: [
                {
                    title: 'Home',
                    link: '/',
                    hide_desktop: true
                },
                {
                    title: 'Our Solutions',
                    childrens: [
                        { title: 'Windfit Fleet', link: 'solutions/windfit-fleet' },
                        { title: 'Windfit Diagnosis', link: 'windfit-diagnosis' },
                        { title: 'More Features', link: '/more-features' }
                    ]
                },
                {
                    title: 'Resources',
                    childrens: [
                        { title: 'Use Cases', link: 'case-studies' },
                        { title: 'Documents', link: 'documents' },
                        { title: 'News', link: 'news/' }
                    ]
                },
                {
                    title: 'Profile',
                    childrens: [
                        { title: 'Account', link: 'account' },
                        { title: 'Log Out', link: 'logout' },
                        { title: 'Sereema Admin', link: 'admin' },
                        { title: 'Windfit Admin', link: 'wfadming' },
                        { title: 'Demo Mode', link: '/demo' }
                    ],
                    hide_desktop: true
                },
                {
                    title: 'FAQ',
                    link: '/faq'
                }
            ]
        }
    },
    methods: {
        detectIsMobile() {
            this.isMobile = window.innerWidth < 720 ? true : false
        },
        // dropdownHandler(n: Boolean){
        //     if ( n !== this.otherDDopened) console.log(n)
        // },
    },
    computed: {
        getMenuEntries(){
            return this.isMobile ? 
            this.menu : 
            this.menu.filter(t => !t.hasOwnProperty('hide_desktop'))
        }
    },
    mounted() {
        this.detectIsMobile();
        window.addEventListener("resize", this.detectIsMobile);
    },
    unmounted() {
        window.removeEventListener("resize", this.detectIsMobile);
    },
    components: { HardCTA, DropDownMenu },
}
</script>

<template>
    <div class="cr-navbar">

        <DropDownMenu :dropdowns="menu"/>
       


    </div>


</template>

<style scoped>
.cr-navbar {
    font-family: 'Alegreya Sans', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    max-width: 800px;
    max-height: 40px;
    margin: auto;
    padding: 6px 24px;
    border-radius: 40px;
    border: 1px solid var(--white);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        linear-gradient(90deg, #1E84A5 0%, #1E97BB 100%);
    font-size: 20px;
}

.cr-navbar-menu {
    list-style: none;
}

.cr-navbar-menu-mobile {
    cursor: pointer;
}

.cr-navbar .cr-navbar-menu {
    padding: 0;
}

.cr-navbar>* {
    display: flex;
}

.cr-navbar img,
.cr-navbar svg {
    align-self: flex-start;
    width: 36px;
    height: 36px;
    vertical-align: middle;
}

.cr-navbar a,
.cr-navbar-menu a {
    color: var(--white)
}

.wf-portal-and-account .cr-windfit-portal{
    margin-right: 12px;
}

.cr-windfit-portal svg {
    width: 30px;
    height: 30px;
    padding-left: 6px;
}

.cr-menu-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 999;
    background: radial-gradient(92.55% 1739.13% at 7.45% 50.11%, #284A61 0%, #3D5B70 61.66%, #284A61 100%);
}

.cr-menu-overlay .cr-navbar-menu {
    padding: 0;
    font-size: 26px;
    padding-left: 25vw;
}

.cr-menu-overlay .cr-navbar-menu-item {
    padding: 12px;
}

.cr-menu-overlay .cr-navbar-menu-item a>svg {
    padding-left: 12px;
}

.cr-menu-overlay>img {
    padding-left: 15vw;
    width: 250px;
}

.hidden {
    display: none;
}

@media print,
screen and (min-width: 720px) {
    .cr-navbar-menu {
        min-width: 350px;
        justify-content: space-between;
    }
}
</style>



