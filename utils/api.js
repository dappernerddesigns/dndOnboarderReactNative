const axios = require('axios');

const api = axios.create({
	baseURL: 'https://www.dnd5eapi.co/api',
});

export const rules = () => {
	return api.get('/rule-sections').then(({ data }) => {
		return data.results;
	});
};

export const ruleText = (ruleName) => {
	return api.get(`/rule-sections/${ruleName}`).then(({ data }) => {
		return data;
	});
};

export const spells = () => {
	return api.get('/spells').then(({ data }) => {
		return data.results;
	});
};
