#  Warhammer 40K Rogue Trader RPG characterbuilder

the Warhammer 40k RT-RPG characterbuilder is a proof of concept for a character creation tool for the Rogue Trader rpg pulbished by <a href= "https://www.fantasyflightgames.com/en/index/" > fantasy flight games </a>.

The overall goal of the app is to assist in the playing of the RPG and to help with the building of characters, with a focus on readabilty and structuring of choices. The app is in no way meant as a replacement or replication of the source book.

this app was made as a graduation project for the Codaisseur Bootcamp, more info can be found on: http://codaisseur.nl/

A live version of the app can be found at https://roguetraderbeyond.netlify.com/build

## Key functions

- making choices while running through the origin path, applying any choices made to a character
- rolling and tracking stats for the character
- displaying a "character sheet" that displays and translates the choices and modification in the first two steps


### Origin Path
The origin path is the way new characters are created for the roguetrader rpg. It consists of a series of choices that each add features, traits, talents etc... to the character. the origin path feature tries to make this experience more palettable by displaying all the possible choices and effects in a digestable way. Currently not all choices work as the data in the backend is not yet complete. 

###  Stat Roller

The stat roller modifies the base scores of the character, this can either be done by hand, using any numerical value the user wishes for. Alternatively the user can use the "ROLL STATS" button to have the app roll all dice for them, using the sum of two simulated 10 sided dice

### Character Sheet

The character sheet is the heart of the app. It is there to display all relevant information during the playing of a rogue trader game. Currently some of the data is hard-coded. In future updates the goal is to have the character sheet be fully responsive so things like hitpoints, ammo, skills, etc, etc, can be live tracked and updated. 


## Backend 

The app depends on a custom backend which can be found here: https://github.com/Svdbroek/rogueTrader_backend
As previously mentioned the backend at the moment is very bare-bones and requires a lot of work. This means that currently, most choices in the origin path wil crash the app on the live version. 
