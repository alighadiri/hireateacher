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
		requests(state, _, _2, rootGetters ) {
			const teacherId = rootGetters.teacherId;
			return state.requests.filter(req => req.teacherId === teacherId)
		},

		hasRequests(_, getters) {
			return getters.requests && getters.requests.length > 0 ;
		}
	}
}