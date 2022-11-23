# Sesame Coding Assignment

First we will need all these dependencies, in addition to node:

"@discordjs/rest": "^1.3.0",
"body-parser": "^1.20.1",
"discord-api-types": "^0.37.19",
"discord.js": "^14.6.0",
"dotenv": "^16.0.3",
"express": "^4.18.2",
"expressjs": "^1.0.1",
"mongodb": "^4.12.0",
"web3": "^1.8.1"

You will need to create a database in mongoDB called couponUsernames.

You will need to create a collection called usernames within that DB.

Next you can run 

`node app.js` 

You should see be able to load a webpage at localhost:3000

If you input your discord username, then a discord bot will later be able to verify your username. It shold also give you a dummy verification code "iamhuman" to input into the discord server for the bot to verify.

You will need to create a permissioned discord bot, which the following tutorial should help with:

https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs/

Once you have given your discord bot sufficient permissions, added the TOKEN, GUILD_ID and CLIENT_ID to your .env:

You can run 

`node discord.js`

Next you can interact with the discord bot. It listens for messages, and if it finds a username that is in its mongodb, and the message matches the verification code, it will return a coupon code.

An example test discord where this process played out can be found at:

https://discord.gg/hmJjzWBv

Bonus, if you uncomment some code in discord.js, run the register Command script, you can run /ping commands on the bot.

