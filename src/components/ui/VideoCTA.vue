<script lang="ts">
    export default{
        data(){
            return {

            }
        }
    }
</script>

<template>
    <div class="cr-video-cta">
        <svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.81117 2.84338V40.852L28.6516 21.8477L9.81117 2.84338ZM1.12817 2.84338V40.852L19.9686 21.8477L1.12817 2.84338Z" stroke="#E66D2C" stroke-width="2"/>
        </svg>
        Watch our video
    </div>
</template>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        font-size: 16px;
        padding: 12px 24px;
        margin: 12px auto;
        border: 1px solid var(--white);
    }
    svg{
        height: 30px;
        padding-right: 12px;
    }

    @media print, screen and (min-width: 720px) {
        div{
            font-size: 24px;
            padding: 24px 36px;
        }
    }
</style>