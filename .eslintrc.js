module.exports = {
	extends: [
		// add more generic rulesets here, such as:
		// 'eslint:recommended',
		"plugin:vue/strongly-recommended",
		// 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
	],
	rules: {
		"vue/multi-word-component-names": "off",
		"vue/html-self-closing": "off",
		"vue/no-reserved-component-names": "off",
	},
};
