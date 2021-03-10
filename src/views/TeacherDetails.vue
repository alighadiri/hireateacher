<template lang="pug">
	div.container.mx-auto
		section.my-5
			v-card.pa-3.d-flex.justify-space-between.align-center
				h2 {{ fullName }}
				h3 ${{ rate }}/hour
		section.my-5
			v-card.pa-3
				p.my-3 {{ description }}
				v-chip.mx-1(label color="secondary" v-for="area in areas" :key="area") {{ area.toUpperCase() }}
		section.my-5
			v-card.pa-3
				header.d-flex.justify-space-between
					h2 Interested!? Reach Out NOW!
					router-link(:to="contactLink")
						v-btn(elevation="4" color="accent") CONTACT
				router-view
</template>

<script>
export default {
	props: ["id"],

	data() {
		return {
			selectedTeacher: null,
		};
	},

	created() {
		this.selectedTeacher = this.$store.getters[
			"teachers/teachers"
		].find((teacher) => teacher.id === this.id);
	},

	computed: {
		fullName() {
			return (
				this.selectedTeacher.firstName +
				" " +
				this.selectedTeacher.lastName
			);
		},
		rate() {
			return this.selectedTeacher.hourlyRate;
		},
		areas() {
			return this.selectedTeacher.areas;
		},
		description() {
			return this.selectedTeacher.description;
		},
		contactLink() {
			return this.$route.path + "/contact";
		},
	},
};
</script>
