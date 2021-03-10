<template lang="pug">
	v-card.my-5.form-container
		h2.ma-5 Register as a teacher!
		TeacherForm(@save-data="saveTeacher").ma-3

</template>

<script>
import TeacherForm from '../components/teachers/TeacherForm.vue';

export default {
	components: {
		TeacherForm,
	},

	data() {
		return {
			
		}
	},

	methods: {
		saveTeacher(data) {
			this.$store.dispatch('teachers/addTeacher', data);
			this.$router.replace('/teachers')
		},
	},

}
</script>

<style scoped>


</style>