const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "quote",
  desc: "Get a random inspiring quote.",
  category: "fun",
  react: "💬",
  filename: __filename
}, async (conn, m, store, { from, reply }) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    const { content, author } = response.data;

    const message = `💬 *"${content}"*\n- ${author}\n\n> *QUOTES BY 𝙳𝙰𝚁𝙺-𝙺𝙽𝙸𝙶𝙷𝚃-𝚇𝙼𝙳*`;
    reply(message);
  } catch (error) {
    console.error("Error fetching quote:", error);
    reply("⚠️ API issue or coding error, please check the logs!");
  }
});
