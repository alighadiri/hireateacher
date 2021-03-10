<template lang="pug">
	v-form
		div
			v-text-field(label="FirstName" outlined v-model.trim="formData.first")
			v-text-field(label="LastName" outlined v-model.trim="formData.last" )
			v-textarea(label="Description" outlined v-model.trim="formData.desc" )
			v-text-field(label="Hourly Rate ($)" type="number" outlined v-model.number="formData.rate")
			v-select(label="Areas of Expertice" outlined multiple chips :items="areas" v-model="formData.areas")
			v-btn(color="success" @click="register") Register!
</template>

<script>
export default {
	emits: ["save-data"],
	data() {
		return {
			
			areas: [
				{
					text: "Frontend Development",
					value: "frontend",
				},
				{
					text: "Backend Development",
					value: 'backend'
				},
				{
					text: "Fullstack Development",
					value: 'fullstack'
				},
				{
					text: "DevOps",
					value: "devops"
				},
			],

			formData: {
				first: "",
				last: "",
				desc: "",
				rate: null,
				areas: [],
			},
		};
	},

	methods: {
		register() {
			this.$emit("save-data", this.formData);
		},
	},
};
</script>

<style scoped></style>
