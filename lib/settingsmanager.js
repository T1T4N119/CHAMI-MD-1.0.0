const path = require('path');
const SETTINGS_FILE = path.join(__dirname, '../config.js'); // Still .js file

let settingsCache = {}; // Cache

// ✅ config.js එක require කරලා load කරමු
const loadSettings = () => {
    try {
        delete require.cache[require.resolve(SETTINGS_FILE)]; // Clear require cache
        settingsCache = require(SETTINGS_FILE); // No JSON.parse
        console.log("[SETTINGS] Settings loaded from config.js");
    } catch (e) {
        console.error("[SETTINGS ERROR] Failed to load config.js", e);
        settingsCache = {
            ANTICALL: true
        };
        console.log("[SETTINGS] Using default settings.");
    }
};

// ❌ config.js එකට JSON.stringify වලින් ලියන්න බෑ. ඒක JS code එකක්.
const saveSettings = () => {
    try {
        const content = `module.exports = ${JSON.stringify(settingsCache, null, 2)};\n`;
        require('fs').writeFileSync(SETTINGS_FILE, content, 'utf8');
        console.log("[SETTINGS] Settings saved to config.js");
    } catch (e) {
        console.error("[SETTINGS ERROR] Failed to save config.js", e);
    }
};

const getSetting = (key) => settingsCache[key];

const setSetting = (key, value) => {
    settingsCache[key] = value;
    saveSettings(); // Save after setting
};

// Load on require
loadSettings();

module.exports = {
    getSetting,
    setSetting,
    loadSettings
};
