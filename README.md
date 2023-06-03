# RED Discord Bot

<p align="center"><img src="https://imgur.com/TNWYtZW.png" width="150" height="150" align="center"/></p>

## Overview

RED is a very narcissist discord bot that only obeys his founders and automates a few important daily tasks. The bot is listed private only to his founder (me 😀) for now meaning you can't invite it to your server yet.

RED has a story behind it. Interactions with Red reveal easter eggs of what Red's story really is. Some easter eggs have a little chance to show up when you interact with Red while some other easter eggs are always revealed. Red's story is inspired by my thoughts and will be improved upon the way.

## Features

RED has limited features for now. Features are:

- Tells you islamic prayer times based on your city with interactive buttons. Supports 3 cities in Egypt: Cairo (my city ❤️), Mansoura (worst city 🤢) and Al-Ismailia (mango city 🥭).
- Has easter eggs that reveal RED's story & his past.

## Dependencies

- Node.js
- Discord.js
- Other utility dependencies

## How to Run (if you care)

You can run this discord bot on your device but it requires a few environment variables to be considered in your .env file:

```
DISCORD_CLIENT_ID=<Your-Discord-Client-ID>
DISCORD_TOKEN=<Your-Discord-Token>
DISCORD_DEV_GUILD_ID=<Your-Discord-Development-Server-ID>
NODE_ENV=<production/development>
```

Don't share these environment variables with anybody! Only share with me ❤️

Start by cloning this repository via:
`git clone https://github.com/devkarim/red-discord.git`

Then navigate to the repo folder and install all dependencies via `yarn` or `npm install`. To run, you can either use `yarn dev` for development or `yarn start` for production. Don't forget to include the enviornment variables as said above.

## Scripts

This project includes a few useful scripts that may help you with development:

- **deploy-cmds:** Deploys slash commands to your discord development server id.
- **watch:** Watches for changes inside "src" folder then restarts the discord bot accordingly.
- **build:** Compiles the discord bot from TypeScript to JavaScript into "/build" folder.
- **dev:** Starts main typescript file directly without compiling.

## Authors

- Founded and created by [@devkarim](https://github.com/devkarim) ❤️
- RED pfp is designed by [@XJustMO](https://github.com/XJustMO) ❤️

# License

Under [MIT](https://github.com/devkarim/red-discord/blob/main/LICENSE.md) license.
