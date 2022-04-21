<template>
	<p>Basic:</p>
	<div>
		<Basic ref="basicRef" :name="basicData.name" :age="basicData.age" />
	</div>
	<br />
	<button @click="getBasicDataFn">获取值</button>
</template>
<script setup lang="ts">
import Basic from './../packages/basic/basic.vue'
import { ref, reactive, watch, onMounted } from 'vue'

const basicRef = ref<InstanceType<typeof Basic>>()
const basicData = reactive({
	name: '',
	age: null
})
const getBasicDataFn = () => {
	console.log(basicRef.value && basicRef.value?.result)
}
</script>
