<template lang="pug">
	div.container.d-flex
		div filters
		div.ml-6 teachers list
			ul(v-if="hasTeachers")
				TeacherCard.my-5(v-for="teacher in filteredTeachers" :key="teacher.id" :id="teacher.id" :firstName="teacher.firstName" :lastName="teacher.lastName" :rate="teacher.hourlyRate" :areas="teacher.areas")
			h3(v-else) No Teacher Found!

</template>

<script>
import TeacherCard from "./../components/teachers/TeacherCard.vue";

export default {
	components: {
		TeacherCard,
	},
	computed: {
		filteredTeachers() {
			return this.$store.getters[
				"teachers/teachers"
			];
		},
		hasTeachers() {
			return this.$store.getters[
				"teachers/hasTeachers"
			];
		},
	},
};
</script>
