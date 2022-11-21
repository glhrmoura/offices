export const deepClone = obj => {
	return JSON.parse(JSON.stringify(obj));
};

export const offset = el => {
	const rect = el.getBoundingClientRect();
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft
	};
};

export const genID = () => {
	let dt = Date.now();
	const mask = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

	const replaceFunc = c => {
		const r = (dt + Math.random() * 16) % 16 | 0;
		dt = Math.floor(dt / 16);
		return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
	};

	return mask.replace(/[xy]/g, replaceFunc);
};
