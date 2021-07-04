const discord = require('discord.js')
const { MessageButton } = require("discord-buttons")

module.exports.run = async (Client, message, args) => {
    
    const embed = new discord.MessageEmbed()
    .setDescription("Seja bem-vindo! Agora você faz parte da comunidade oficial de membros da **Rede Forest**.\n\nEntretanto, antes de liberarmos as **categorias** e **canais** desde Discord, precisamos que você verifique-se que não é um possível integrante da **era das máquinas**.\n\nFaça isso clicando no botão abaixo desta mensagem. Após isso, siga as regras e desfrute dessa incrível comunidade!")
    .setColor("GREEN")
  
    const yes = new MessageButton()
    .setStyle("green")
    .setLabel('Clique para verificar-se!')
    .setID("smart")

    message.channel.send({
      embed: embed, 
      component: yes
    })
}