import locations from '@/assets/data/locations.json';

export const state = () => ({
	locations
});

export const getters = {
	allLocations(state) {
		return state.locations;
	}
};

export const mutations = {
	addLocation(state, location) {
		state.locations.unshift(location);
	},

	updateLocation(state, location) {
		const locationIndex = state.locations.findIndex(loca => loca.id === location.id);

		if (locationIndex < 0) return;

		state.locations.splice(locationIndex, 1, location);
	},

	deleteLocation(state, location) {
		const locationIndex = state.locations.findIndex(loca => loca.id === location.id);

		if (locationIndex < 0) return;

		state.locations.splice(locationIndex, 1);
	}
};

export const actions = {
	addLocation({ commit }, location) {
		commit('addLocation', location);
	},

	updateLocation({ commit }, location) {
		commit('updateLocation', location);
	},

	deleteLocation({ commit }, location) {
		commit('deleteLocation', location);
	}
};
