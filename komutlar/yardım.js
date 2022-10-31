const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
module.exports.run = async (client, message, args) => {
let buton = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Genel")
.setCustomId("genel")
let buton1 = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Kuallanıcı")
.setCustomId("kullanıcı")
let buton2 = new MessageButton()
.setStyle("SUCCESS")
.setLabel("yetkili")
.setCustomId("yetkili")
let buton3 = new MessageButton()
.setStyle("DANGER")
.setLabel("bot")
.setCustomId("bot")
  let embed = new MessageEmbed()
.setAuthor(`ana mesaj`, client.user.avatarURL())
let s = message.reply({embeds: [embed], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3]})]}).then(async msg => {
const filter = x => x.user.id === message.author.id
let collector = msg.createMessageComponentCollector({ filter, time: 300000 })
collector.on("collect", async button => {
if(button.customId === "genel") {
let genel = new MessageEmbed()
.setAuthor(`sa`, client.user.avatarURL())
msg.edit({embeds: [genel], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3]})]})
}
if(button.customId === "kullanıcı") {
let k = new MessageEmbed()
.setAuthor(`sa2`, client.user.avatarURL())
msg.edit({embeds: [k], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3]})]})
}
if(button.customId === "bot") {
let bot = new MessageEmbed()
.setAuthor(`sa3`, client.user.avatarURL())
msg.edit({embeds: [bot], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3]})]})
}
  if(button.customId === "yetkili") {
let yetkili = new MessageEmbed()
.setAuthor(`sa4`, client.user.avatarURL())
msg.edit({embeds: [yetkili], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3]})]})
}
button.deferUpdate();
})})
};
module.exports.conf = {
  aliases: ["yardim", "help"]
};
module.exports.help = {
  name: "yardım"
};