<script lang="ts">
import HardCTA from './HardCTA.vue'
import DropDown from './DropDown.vue';


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
    components: { HardCTA, DropDown },
}
</script>

<template>
    <div class="cr-navbar">

        <a href="/" class="cr-navbar-logo" title="Sereema">
            <img src="../../../assets/logo-sereema.png" alt="Logo Sereema">
        </a>

        <div v-if="isMobile" @click="isOverlayHidden = !isOverlayHidden" class="cr-navbar-menu-mobile">
            <a class="cr-navbar-menu-item cr-burger-menu">
                <svg width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 3.53486C0 1.83947 1.37438 0.465088 3.06977 0.465088H84.9302C86.6256 0.465088 88 1.83947 88 3.53486C88 5.23024 86.6256 6.60462 84.9302 6.60462H3.06977C1.37438 6.60462 0 5.23024 0 3.53486Z"
                        fill="#F9FAFD" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.228 23.9999C10.228 22.3046 11.6024 20.9302 13.2978 20.9302H74.7017C76.3971 20.9302 77.7714 22.3046 77.7714 23.9999C77.7714 25.6953 76.3971 27.0697 74.7017 27.0697H13.2978C11.6024 27.0697 10.228 25.6953 10.228 23.9999Z"
                        fill="#F9FAFD" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20.458 44.465C20.458 42.7696 21.8324 41.3953 23.5278 41.3953H64.4713C66.1667 41.3953 67.541 42.7696 67.541 44.465C67.541 46.1604 66.1667 47.5348 64.4713 47.5348H23.5278C21.8324 47.5348 20.458 46.1604 20.458 44.465Z"
                        fill="#F9FAFD" />
                </svg>
            </a>
        </div>
        <ul v-else class="cr-navbar-menu">
            <li v-for="entry in getMenuEntries" class="cr-navbar-menu-item">
                <DropDown :is-managed="true" v-if="entry.childrens" :absolute="true" :title="entry.title" :dropdowns="entry.childrens" /> <!--@is-dropdown-opened="(n) => dropdownHandler(n)" get back the emit isDropdownOpened and n is the value-->
                <a v-else :href="entry.link">{{ entry.title }}</a>
            </li>
        </ul>


        <div class="wf-portal-and-account">
            <a href="/" class="cr-windfit-portal">
                Windfit
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M42 21C42 9.40415 32.5972 0 21 0C9.40275 0 0 9.40275 0 21C0 32.5972 9.40275 42 21 42C32.5972 42 42 32.5958 42 21ZM16.4521 30.786C15.4729 29.8068 15.4729 28.2227 16.4521 27.2437L20.0228 24.129L2.06815 24.2517C2.06815 24.2517 0.0213752 23.3387 0.0734997 21.0143C0.125624 18.69 2.06815 18.197 2.06815 18.197L20.0228 17.8997L16.4521 14.785C15.4729 13.8059 15.4729 12.2217 16.4521 11.2427C17.4417 10.2689 19.0417 10.2635 20.0312 11.2427L28.1109 19.2465C29.0901 20.2203 29.0901 21.8098 28.1109 22.7878L20.0312 30.786C19.0416 31.7651 17.4416 31.7651 16.4521 30.786Z"
                        fill="white" />
                </svg>
            </a>
        </div>
    </div>

    <div v-if="isMobile" @click.self="isOverlayHidden = !isOverlayHidden" class="cr-menu-overlay"
        :class="{ hidden: isOverlayHidden }">
        <img src="../../../assets/logo-sereema-full-white.svg" alt="Logo Sereema">
        <ul class="cr-navbar-menu">
            <li v-for="entry in menu" class="cr-navbar-menu-item">
                <DropDown v-if="entry.childrens" :title="entry.title" :dropdowns="entry.childrens" /> <!--@is-dropdown-opened="(n) => dropdownHandler(n)" get back the emit isDropdownOpened and n is the value -->
                <a v-else :href="entry.link">{{ entry.title }}</a>
            </li>
        </ul>
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



