const express = require("express")
const app = express()
app.get("/", (req, res) => {
  res.send("Hi!")
})
app.listen(3000, () => {
  console.log("Project is ready!")
})

const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
})

const prefix = "r!"//Change the prefix if you want! Deafult one is r!

client.on("message", message => {
  if(message.content === `${prefix}number`) {
    var choices = [
      "I choose : **1**",
      "I choose : **2**",
      "I choose : **3**",
      "I choose : **4**",
      "I choose : **5**",
      "I choose : **6**",
      "I choose : **7**",
      "I choose : **8**",
      "I choose : **9**",
      "I choose : **10**"
    ]
    var output = choices[Math.floor(Math.random()*choices.length)];

    message.channel.send(output)
  }
})

client.on("message", message => {
  if(message.content === `${prefix}alphabet`) {
    var choices = [
      "I choose : **a**",
      "I choose : **b**",
      "I choose : **c**",
      "I choose : **d**",
      "I choose : **e**",
      "I choose : **f**",
      "I choose : **g**",
      "I choose : **h**",
      "I choose : **i**",
      "I choose : **j**",
      "I choose : **k**",
      "I choose : **l**",
      "I choose : **m**",
      "I choose : **n**",
      "I choose : **o**",
      "I choose : **p**",
      "I choose : **q**",
      "I choose : **r**",
      "I choose : **s**",
      "I choose : **t**",
      "I choose : **u**",
      "I choose : **v**",
      "I choose : **w**",
      "I choose : **x**",
      "I choose : **y**",
      "I choose : **z**"
    ]
    var output = choices[Math.floor(Math.random()*choices.length)];

    message.channel.send(output)
  }
})

client.on("message", message => {
  if(message.content === `${prefix}help`) {
    let embedmsg = new Discord.MessageEmbed()
    .setColor('SILVER')//you can use Hex color code, or solid color name like BLACK, WHITE, BLUE, or if you want random, type RANDOM
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))//you can delete .setAuthor section!
    .setTitle(`${message.client.user.username} HELP PANEL`)
    .setDescription(`My prefix in this server is ${prefix}`)
    .setThumbnail('')
    .addField(`${prefix}help`, 'Show this Help Panel')
    .addField(`${prefix}roll`, 'Roll a normal dice (1 - 6)')
    .addField(`${prefix}number`, `Help you pick a random number between 1 - 10. More tips, type ${prefix}tips`)
    .addField(`${prefix}alphabet`, 'Help you pick a random alphabet')
    .addField(`${prefix}abcd`, `Similar to ${prefix}alphabet, r!abcd only let you pick a choices between a, b, c, and d like in an exam for example.`)
    .addField(`${prefix}yesno`, 'Help you pick YES or NO')
    .addField(`${prefix}arrow`, 'Help you pick random arrow (Up, Down, Left, Right, Corner Upper Left, Corner Upper Right, Corner Down Left, Corner Down Right')
    .addField(`${prefix}invite`, 'Send my invite link. There are 4 random invite link, each of them having a random permissions. Good luck!')
    .addField(`${prefix}tips`, 'Let me give you sum tips')
    .setImage('https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif')//You can replace this link with another link you have!!!
    .setFooter(`${message.client.user.username}`)
    message.channel.send(embedmsg);
  }
})

client.on("message", message => {
  if(message.content === `${prefix}yesno`) {
    var choices = [
      "I say : **yes**",
      "I say : **no**"
    ]
    var output = choices[Math.floor(Math.random()*choices.length)];

    message.channel.send(output)
  }
})

client.on("message", message => {
  if(message.content === `${prefix}roll`) {
    var choices = [
      "<:diamond_shape_with_a_dot_inside:905432269274112001>",
      "<:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001>",
      "<:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001>",
      "<:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001>",
      "<:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001>",
      "<:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001> <:diamond_shape_with_a_dot_inside:905432269274112001>"
    ]
    var output = choices[Math.floor(Math.random()*choices.length)];

    message.channel.send(output)
  }
})

client.on("message", message => {
  if(message.content === `${prefix}invite`) {
    var choices = [
      `https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=228416&scope=bot`,
      `https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=10240&scope=bot`,
      `https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=0&scope=bot`,
      `https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=8&scope=bot`
    ]
    var output = choices[Math.floor(Math.random()*choices.length)];

    message.channel.send(output)
  }
})

client.on("message", message => {
  if(message.content === `${prefix}arrow`) {
    var choices = [
      "**↑**",
      "**↓**",
      "**←**",
      "**→**",
      "**↖**",
      "**↗**",
      "**↘**",
      "**↙**"
    ]
    var output = choices[Math.floor(Math.random()*choices.length)];

    message.channel.send(output)
  }
})

client.on("message", message => {
  if(message.content === "__________") {
    return message.channel.send("-----------")
  }
  if(message.content === `${prefix}tips`) {
    let embedmsg = new Discord.MessageEmbed()
    .setColor('RED')//you can use Hex color code, or solid color name like BLACK, WHITE, BLUE, or if you want random, type RANDOM
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))//you can delete .setAuthor section!
    .setTitle(`Tips n Trick For ${message.client.user.username}`)
    .setDescription(`Need a tips and tricks while using ${message.client.user.username} as your random picker? Here some tips and tricks!`)
    .setThumbnail('https://cdn.discordapp.com/avatars/862344172945408030/727ffa207d9b29b86db0c824262613ae.webp')
    .addField('Hundreds & Thousands', `Looking for random picker until hundreds or even thousands? Use ${prefix}number for 2-3 times until the number combination reached the amount of digits that youre looking for. Example : \n 1 Digit : Normal Number \n 2 Digits : Dozens \n 3 Digits : Hundreds \n 4 Digits : Thousands`)
    .setImage('https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif')//You can replace this link with another link you have!!!
    .setFooter(`${message.client.user.tag}`)
    message.channel.send(embedmsg);
  }
})

client.on("message", message => {
  if(message.content === `${prefix}abcd`) {
    var choices = [
      "I choose : **a**",
      "I choose : **b**",
      "I choose : **c**",
      "I choose : **d**"
    ]
    var output = choices[Math.floor(Math.random()*choices.length)];

    message.channel.send(output)
  }
})

client.login(process.env.TOKEN)
