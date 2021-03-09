<template lang="pug">
	v-app  
		TheHeader
		transition(name="fade")
			router-view
	
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
	components: {
		TheHeader,
	},
};
</script>
<style lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

.v-application {
	font-family: "Montserrat", sans-serif !important;
}

html {
	overflow-y: auto !important;
}

body {
	margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
