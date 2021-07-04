// connecting to discord
const Discord = require('discord.js')

// connect us to the config.json file
const config = require('./config.json');

// create a new Discord Client 
const Client = new Discord.Client({disableEveryone: true});

// we make a new system for the cmds
Client.commands = new Discord.Collection();

// require the fs module
const fs = require('fs');


//define a prefix
const prefix = ('.');

// it creates a new function for our aliases
Client.aliases = new Discord.Collection();
require('discord-buttons')(Client)

const { MessageButton, MessageActionRow } = require("discord-buttons")


Client.on('clickButton', async (button) => {
  
    if(button.id === 'smart') {
        await button.clicker.fetch()
        button.reply.defer();
        button.clicker.member.roles.add("849113793623621646")
    }

  });

// The message that we will get in terminal when we lunch the bot
Client.on("ready", async () => {
    console.log(`${Client.user.username} is Online!`)

    // This Will be the Status Of our Bot
    Client.user.setActivity("Verificando...", {type: "WATCHING"})
});

Client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(Client, message, args);
  } catch (err) {
    console.log(err);
  }

});


// Login To Discord with your app's Token
Client.login(config.token);