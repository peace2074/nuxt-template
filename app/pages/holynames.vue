<script lang="ts" setup>
import { useNuxtApp } from 'nuxt/app';

const nuxtApp = useNuxtApp()
interface HolyNameI {
    name: string,
    text: string
}
const { $HolyNames } = nuxtApp
const holynames: HolyNameI[] = $HolyNames as HolyNameI[]

</script>
<template>
    <QPage padding class="holynames-page fit flex wrap rtl">
        <Glory class="glory" v-for="one in holynames" :name="one
            .name" :text="one.text" :key="one.text">{{ one.name }}</Glory>
    </QPage>
</template>

<style>
.glory {
    font: calc(4rem + 100vw);
}
</style>