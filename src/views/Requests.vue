<template lang="pug">
	v-card
		div
			h2 Recieved Requests
			ul(v-if="hasRequests")
				RequestItem(v-for="request in recievedRequests" :key="request.id" :name="request.name" :email="request.email" :message="request.message")
			h3(v-else) No Requests Found!
</template>

<script>
import RequestItem from '../components/requests/RequestItem.vue'
export default {
	components: {
		RequestItem
	},
	computed: {
		recievedRequests() {
			return this.$store.getters['requests/requests'];
		},

		hasRequests() {
			return this.$store.getters['requests/hasRequests']
		}
	},

}
</script>