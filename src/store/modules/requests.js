export default {
	namespaced: true,

	state: {
		requests: []
	},

	mutations: {
		addRequest(state, payload) {
			state.requests.push(payload)
		},
	},

	actions: {
		createRequest(context, payload) {
			const request = {
				id : new Date().toISOString(),
				teacherId : payload.teacherId,
				name : payload.name,
				email : payload.email,
				message : payload.message
			}

			context.commit('addRequest', request);
		},
	},
	
	getters: {

	}
}