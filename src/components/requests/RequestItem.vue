<template lang="pug">
	li
		div
			h3 {{name}}
			a(:href="emailLink") {{email}}
			p {{message}}
</template>

<script>
export default {

	props:['name', 'email', 'message'],

	computed: {
		emailLink() {
			return 'mailto:' + this.email
		}
	}
	
}
</script>