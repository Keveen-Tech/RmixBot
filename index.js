const { Client, GatewayIntentBits, Events } = require("discord.js");

const token = process.env.DISCORD_TOKEN;

if (!token) {
  console.error("Erreur : la variable DISCORD_TOKEN est absente.");
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once(Events.ClientReady, (bot) => {
  console.log(`RmixBot est connecté en tant que ${bot.user.tag}`);
});

client.login(token).catch((error) => {
  console.error("Impossible de connecter RmixBot :", error.message);
  process.exit(1);
});
