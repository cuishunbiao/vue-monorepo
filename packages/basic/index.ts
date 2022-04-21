import Basic from './basic.vue'

/* istanbul ignore next */
Basic.install = function (app) {
	app.component(Basic.name, Basic)
}

export default Basic
