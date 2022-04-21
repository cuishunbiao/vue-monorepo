<template>
	<div style="border: #ddd 1px solid">
		<p>这是 Basic 组件{{ name }}，{{ age }}</p>
		<input type="text" v-model="name" />
		<input type="text" v-model="age" />
	</div>
</template>
<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number || null
	}
})
//把数据变成响应式数据
toRefs(props)
//对外暴露参数
defineExpose({
	result: props
})
</script>
