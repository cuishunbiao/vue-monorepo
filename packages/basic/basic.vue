<template>
    <p>这是 Basic 组件</p>
    <div><input type="text" v-model="cuishunbiao"></div>
    {{cuishunbiao}}
</template>
<script setup>
    import {ref} from 'vue'
    const cuishunbiao = ref('')
</script>