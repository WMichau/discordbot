const Discord = require('discord.js');
const client = new Discord.Client();

var idK = '330666230656794627';
var id = '272471609376374785';
var bot = '609329225891184645';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


function emo (id)
{
  return client.emojis.get(id).toString();
}

client.on('message', async msg => {
  if (msg.author.id === idK) {
        msg.reply(emo('575019328454393867') + ' response ' + emo('575019328454393867')); //id
      }


  let seq = ['sa', 'se', 'so', 'si']
  for (var i in seq)
  {
    if (msg.content.toLowerCase().includes(remy[i].toLowerCase()))
    {
        msg.channel.send({files: ["./images/sample.jpg"]});
    }
  }

  if(msg.author.bot) return;

  if(!msg.content.startWith("abcd")) return;

  const serverQueue = queue.get(msg.guild.id);

  });



client.login('NjA5MzI5MjI1ODkxMTg0NjQ1.XU1KCg.KJVIbb5QA35PNMy-PSpFhe58NAA');
