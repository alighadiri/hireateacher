<template lang="pug">
	div
		div.my-5.mx-auto.card-container
			v-card
				TeacherFilter(@change-filter="setFilters")
				div.d-flex.justify-space-between
					v-btn.ma-2(outlined) Refresh
					router-link(to="/register")
						v-btn.ma-2(color="success") Register as a teacher
			ul.p-0(v-if="hasTeachers")
				TeacherCard.my-5(v-for="teacher in filteredTeachers" :key="teacher.id" :id="teacher.id" :firstName="teacher.firstName" :lastName="teacher.lastName" :rate="teacher.hourlyRate" :areas="teacher.areas")
			h3(v-else) No Teacher Found!

</template>

<script>
import TeacherCard from "./../components/teachers/TeacherCard.vue";
import TeacherFilter from "../components/teachers/TeacherFilter.vue"

export default {
	components: {
		TeacherCard,
		TeacherFilter
	},
	
	data() {
		return {
			activeFilters: {
				frontend: true,
				backend: true,
				fullstack: true,
				devops: true
			},
			
		}
	},

	computed: {
		filteredTeachers() {
			const teachers = this.$store.getters["teachers/teachers"];
			return teachers.filter(teacher => {
        if (this.activeFilters.frontend && teacher.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && teacher.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.fullstack && teacher.areas.includes('fullstack')) {
          return true;
        }
				if (this.activeFilters.devops && teacher.areas.includes('devops')) {
          return true;
        }
        return false;
      });
			
		},
		hasTeachers() {
			return this.$store.getters["teachers/hasTeachers"];
		},
	},

	methods: {
	setFilters(updatedFilters) {
		this.activeFilters = updatedFilters;
	},
	},

};
</script>

<style sccoped >

.card-container {
	max-width: 50%;
}

a:link, a:visited {
	text-decoration: none;
	color: white;
	font-weight: bold;
}

.v-application ul {
 padding-left: 0 !important;
}

</style>