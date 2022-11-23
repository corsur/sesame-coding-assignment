require('dotenv').config()
var mongodb = require('mongodb');
console.log(process.env)

const mongoClient = new mongodb.MongoClient('mongodb://localhost:27017');

async function main() {
    await mongoClient.connect();
    const db = mongoClient.db('couponUsernames');


    const { Client, GatewayIntentBits } = require('discord.js');
    const client = new Client({ intents: [GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,] });

    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    // client.on('interactionCreate', async interaction => {
    //   if (!interaction.isCommand()) return;

    //   if (interaction.commandName === 'ping') {
    //     await interaction.reply('pong');
    //   }
    // });

    client.on('messageCreate', (msg) => {
      var query = { username: msg.author.username };
      db.collection('usernames').find(query).toArray().then(function(queryResult) {
        console.log(queryResult);
        if (queryResult.length > 0 && msg.content === 'iamhuman') {
          msg.reply('COUPONCODE');
        }
      });
      console.log(msg);
    });

    client.login(process.env.TOKEN);

}
  
main()
  .then(console.log)
  .catch(console.error)
  //.finally(() => mongoClient.close());