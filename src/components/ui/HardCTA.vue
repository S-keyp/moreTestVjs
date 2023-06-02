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
    </a>
</template>

<style scoped>
    a {
        height: 60px;
        background: #E65026;
        border: 1px solid #F9FAFD;
        border-radius: 60px;
        padding: 12px 24px;
        color: var(--white);
    }
</style>