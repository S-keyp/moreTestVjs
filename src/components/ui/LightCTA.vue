<script lang="ts">
    export default{
        props: {
            href: String,
        },
    }
</script>

<template>
    <a :href="href">
        <slot></slot>
        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7998 0C7.52612 0 0.799805 6.72632 0.799805 15C0.799805 23.2737 7.52612 30 15.7998 30C24.0735 30 30.7998 23.2737 30.7998 15C30.7998 6.72632 24.0735 0 15.7998 0ZM23.884 16.1684L18.863 21.1895C18.5472 21.5053 18.1366 21.6632 17.6946 21.6632C17.2525 21.6632 16.842 21.5053 16.5262 21.1895C15.8946 20.5579 15.8946 19.5157 16.5262 18.8526L18.7368 16.6421H8.85254C7.93673 16.6421 7.21049 15.9157 7.21049 15C7.21049 14.0842 7.93686 13.358 8.85254 13.358H18.7683L16.5578 11.1474C15.9262 10.5159 15.9262 9.47371 16.5578 8.81058C17.1894 8.179 18.2315 8.179 18.8947 8.81058L23.8841 13.8316C24.5473 14.4948 24.5471 15.5053 23.884 16.1684Z" fill="#1E4057"/>
        </svg>
    </a>
</template>

<style scoped>
    a {
        font-size: 20px;
        font-weight: 700;
        color: #444;
    }

    svg{
        width: 24px;
        padding-left: 12px;
        vertical-align: middle;
    }
</style>