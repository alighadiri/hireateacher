<template lang="pug">
	v-form(ref="contactForm")
		v-text-field(label="Name" outlined counter :rules="[rules.required, rules.counter]" v-model.trim="formData.name")
		v-text-field(label="Email" type="email" outlined :rules="[rules.required, rules.emailRules]" v-model.trim="formData.email" )
		v-textarea(label="Message" outlined counter :rules="[rules.required, rules.counterMsg]"  v-model.trim="formData.message" )
		v-btn(color="success" @click="submit") Send Message!
</template>

<script>
export default {
	data() {
		return {
			formData: {
				name: "",
				email: "",
				message: "",
			},

			rules: {
				required: (value) =>
					!!value || "Required.",
				counter: (value) =>
					value.length <= 20 ||
					"Max 20 characters",
				counterMsg: (value) =>
					value.length >= 20 ||
					"Min 20 characters",
				emailRules: (v) =>
					/.+@.+\..+/.test(v) ||
					"E-mail must be valid",
			},
		};
	},

	methods: {
		validate() {
			return this.$refs.contactForm.validate();
		},

		submit() {
			if (this.validate()) {
				console.log(this.formData);
			}
		},
	},
};
</script>
