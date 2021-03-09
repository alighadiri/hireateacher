<template lang="pug">
	li
		v-card
			v-card-text
				h3.my-4 {{ teacherFullName }}
				h4.mb-4 ${{ rate }}/hour
				div.d-flex.my-2
					v-chip.mx-1(label color="secondary" v-for="area in areas" :key="area") {{ area }}
				div.d-flex.justify-space-between.mt-6
					v-btn(elevation="4" color="success")
						router-link(:to="teacherContactLink") Contact
					v-btn(elevation="4" color="info")
						router-link(:to="teacherDetailLink") Details			

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
