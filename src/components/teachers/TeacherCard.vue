<template lang="pug">
	li
		v-card
			v-card-text
				h2.my-4 {{ teacherFullName }}
				h4.mb-4 ${{ rate }}/hour
				div.d-flex.my-2
					v-chip.mx-1(label color="secondary" v-for="area in areas" :key="area") {{ area.toUpperCase() }}
				div.d-flex.justify-space-between.mt-6
					router-link(:to="teacherContactLink")
						v-btn(elevation="4" color="accent") Contact
					router-link(:to="teacherDetailLink")
						v-btn(elevation="4" color="info") Details
									

</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "areas", "rate"],
  computed: {
    teacherFullName() {
      return this.firstName + " " + this.lastName;
    },
    teacherContactLink() {
      return "/teachers/" + this.id + "/contact";
    },
    teacherDetailLink() {
      return "/teachers/" + this.id;
    },
  },
};
</script>

<style scoped>

li {
	list-style: none;
}

a:link, a:visited {
	text-decoration: none;
	color: white;
	font-weight: bold;
}

</style>
