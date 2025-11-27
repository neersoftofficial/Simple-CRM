export const load = (key, defaultValue) => {
try {
const raw = localStorage.getItem(key);
if (!raw) return defaultValue;
return JSON.parse(raw);
} catch (e) {
return defaultValue;
}
};


export const save = (key, value) => {
try {
localStorage.setItem(key, JSON.stringify(value));
} catch (e) {}
};
