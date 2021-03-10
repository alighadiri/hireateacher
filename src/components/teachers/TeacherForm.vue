<template lang="pug">
	v-form(ref="teacherForm")
		v-text-field(label="FirstName" outlined counter :rules="[rules.required, rules.counter]" v-model.trim="formData.first")
		v-text-field(label="LastName" outlined counter :rules="[rules.required, rules.counter]" v-model.trim="formData.last" )
		v-textarea(label="Description" outlined counter :rules="[rules.required, rules.counterDesc]"  v-model.trim="formData.desc" )
		v-text-field(label="Hourly Rate ($)" type="number" outlined :rules="[rules.required, rules.rate]" v-model.number="formData.rate")
		v-select(label="Areas of Expertice" outlined multiple chips :items="areas" :rules="[rules.required, rules.areas]" v-model="formData.areas")
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

			rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
					counterDesc: value => value.length >= 20 || 'Min 20 characters',
					rate: value => value > 0 || 'Must be greater than 0',
					areas: value => value.length > 0 || 'At least 1 should be selected'
          },
		};
	},

	methods: {
		validate() {
        return this.$refs.teacherForm.validate()
      },
		register() {
			if (this.validate()) {
				this.$emit("save-data", this.formData);
			}
			
		},
	},
};
</script>

<style scoped></style>
