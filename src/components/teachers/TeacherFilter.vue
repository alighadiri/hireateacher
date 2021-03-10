<template lang="pug">
	div
		h2.ma-3 Filter Teachers
		div.d-flex.justify-space-around
			v-checkbox(label="Frontend" id="frontend" v-model="filters.frontend" @change="setFilters")
			v-checkbox(label="Backend" id="backend" v-model="filters.backend" @change="setFilters")
			v-checkbox(label="Fullstack" id="fullstack" v-model="filters.fullstack" @change="setFilters") 
			v-checkbox(label="Devops" id="devops" v-model="filters.devops" @change="setFilters")
</template>

<script>
export default {
	emits: ['change-filter'],

	data() {
		return {
			filters: {
				frontend: true,
				backend: true,
				fullstack: true,
				devops: true
			},
		}
	},

	methods: {
		setFilters(event) {

			this.$emit('change-filter', this.filters)
			
		},
	},

}
</script>