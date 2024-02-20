const updateCommands = require("./init");
const { Client, GatewayIntentBits } = require("discord.js");

require("dotenv").config();

updateCommands();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});


//check if bot is ready 
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


//get message 
client.on("messageCreate", (msg) => {

  if (msg.content === "ping") {
    msg.reply("pong");
  }

  if (msg.content) {
    console.log("Received text message:", msg.content);
  }

});

client.login(process.env.TOKEN);
