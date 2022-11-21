import { genID } from '@/utils';

const DISPLAY_TIME = 5000;

export const state = () => ({
	alerts: []
});

export const getters = {
	allAlerts(state) {
		return state.alerts;
	},

	hasAlerts(state) {
		return state.alerts.length;
	}
};

export const mutations = {
	addAlert(state, alert) {
		state.alerts.unshift(alert);
	},

	deleteAlert(state, alert) {
		state.alerts = state.alerts.filter(alt => alt.id !== alert.id);
	},

	deleteAll(state) {
		state.alerts = [];
	}
};

export const actions = {
	addAlert({ commit }, payload) {
		const { message, displayTime } = payload;

		if (!message) return;

		const alert = {
			id: genID(),
			message
		};

		commit('addAlert', alert);

		setTimeout(() => {
			commit('deleteAlert', alert);
		}, displayTime || DISPLAY_TIME);
	},

	deleteAll({ commit }) {
		commit('deleteAll');
	}
};
