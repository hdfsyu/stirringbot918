//start of file
let Discord = require('discord.js');

let client = new Discord.Client();

let prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


require('dotenv').config();

client.once('ready', () => {
    console.log('Im ready to get some string!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    let command = args.shift().toLowerCase();
        // commands
    if(command === 'ping'){
        message.channel.send('pong');
    } else if (command == 'isubbedtoyouryt'){
        message.channel.send('Aww thanks! But if you havent subbed to my channel which I made when I was 8 years old SUB TO IT https://www.youtube.com/channel/UCXyRdbYbqLt3Sa1vJDKXF0w/videos')
    } else if (command == 'iwantstirring'){
        message.channel.send('no I will not give stirring I will only give you stirring when you pay 1M$ to me ok thank you');
    } else if (command == 'commands'){ //help aka commands
        client.commands.get('commands').execute(message, args);
    } else if (command == 'gamemode1'){
        message.channel.send('Cheater.');
    } else if (command == 'gamemode0'){
        message.channel.send('A true survivalist...');
    } else if (command == 'iluvu'){
        message.channel.send('THANK YOU ARE A TRUE FRIEND OHHHHHHHHHHHHH I LOVE YOUUUUUUUUUUU AS WELLLLL!!!');
    } else if (command == 'ihateu'){
        message.channel.send('no u.');
    } else if (command == 'ilikesponge'){
        message.channel.send('DISGUSTING PERSON! EW');
    } else if (command == 'ihatesponge'){
        message.channel.send('ill tell you the truth I hate sponge as well...');
    } else if (command == 'gamemode2'){
        message.channel.send('Great no griefs on the server!');
    } else if (command == 'gamemode3'){
        message.channel.send('gotta noclip');
    } else if (command == 'ilikeroblox'){
        message.channel.send('im deleting ur roblox account forever');
    } else if (command == 'areyouhuman'){
        message.channel.send('I am human but really ur the one who is a bot...');
    } else if (command == 'chugjugwithme'){
        message.channel.send('GAY PERSON DETECTED CALLING 647-123-GAY2');
    } else if (command == 'kickme'){
        message.channel.send('me: *kicks you*');
        message.channel.send('you: OWWWWWWWWWWWWWWWWWW');
    } else if (command == 'gottago'){
        message.channel.send('NO WAIT DONT GOOOOO I NEED TO PUNCH YOU FIRST!');
        message.channel.send('*punches you*');
        message.channel.send('your face: R.I.P FACE');
    } else if (command == 'glass'){
        message.channel.send('(insert ur username here) left the game');
    } else if (command == 'unglass'){
        message.channel.send('(insert ur username here) joined the game');
    } else if (command == 'kill'){
        message.channel.send('(insert ur username here) got killed by StirringBot918');
    } else if (command == 'kill@a'){
        message.channel.send('@everyone got killed by StirringBot918');
    } else if (command == 'bit'){
        message.channel.send('64 bits 32 bits 16 bits 8 bits 4 BITS 2 BITS! 1 BIT HALF BIT QUARTER BIT THE WRIST GAMEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!!!!');
    } else if (command == 'rules'){ // rules
        message.channel.send('Rules: Rule 1: NEVER EVER SPAM MY COMMNDS Rule 2: If you need help on this bot contact @im the dis#0522 Rule 3: Never ask the creator to put violent stuff as commands Rule 4: Never EVER ping the creator for fun and btw these rules apply to ALL of the bots that I create ok thats it for rules');
    } else if (command == 'canihavedankstirring'){
        message.channel.send('no not yet just ping the dev to get it online (if it is already online then do !dum cuz ur doing this command AND READ THE RULES !rules)');
    } else if (command == 'aboutbot'){ // bot version
        message.channel.send('Version: Release 3.1 btw shoutout to codelyon for teaching me how 2 make bots');
    } else if (command == 'imthedis'){
        message.channel.send('@imthecord');
    } else if (command == 'joke'){
        message.channel.send('What music do Minecraft Bedrock players listen to? Bedrock & roll XD funny right?');
    } else if (command == 'emotional'){
        message.channel.send('Awww JUST GET RID OF THE EMOTIONS AND DO !poglin TO MAKE YOU FEEL BETTER and if the dank bot is not online just do !joke');
    } else if (command == 'respawn'){
        message.channel.send('(insert ur username here) got respawned by StirringBot918');
    } else if (command == 'respawn@a'){
        message.channel.send('@everyone got respawned by StirringBot918');
    } else if (command == 'chromebook'){
        message.channel.send('chromebaak is stupid ur stupid')
    } else if (command == 'windows10'){
        message.channel.send('u like updates ok fine');
    } else if (command == 'windows7'){
        message.channel.send('windows 7 my fav os AND IM NOT JOOKING IT IS');
    } else if (command == 'powershell'){
        message.channel.send('POWERFULSHEEL');
    } else if (command == 'cmd'){
        message.channel.send('i use cmd to start my bot I start it like this');
        message.channel.send('cd OneDrive');
        message.channel.send('cd Desktop');
        message.channel.send('cd "StirringBot918"');
        message.channel.send('node .');
        message.channel.send('thats how I start my bot');
    } else if (command == 'iwantpeace'){
        message.channel.send('ACTIVATING WANNACRY VIRUS');
        message.channel.send('GET READY FOR BIGGGG HELL');
    } else if (command == 'hardcore'){
        message.channel.send('TURNING ON HARDCORE...');
        message.channel.send('DONE');
    } else if (command == 'createworld'){
        message.channel.send('Creating world... 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 60 70 80 95 96 97 98 100');
        message.channel.send('DONE')
        message.channel.send('Which mode?');
    } else if (command == 'confirmmode0'){
        message.channel.send('Survival world Created!');
    } else if (command == 'confirmmode1'){
        message.channel.send('Creative world Created!');
    } else if (command == 'confirmmode2'){
        message.channel.send('Adventure world Created!');
    } else if (command == 'confirmmode3'){
        message.channel.send('Sure... New Spectator world Created!');
    } else if (command == 'confirmhardcore'){
        message.channel.send('SURE TURNING WORLD INTO HELL MODE...');
        message.channel.send('DONE HARDCORE WORLD CREATED');
    } else if (command == 'canihavedankstirringplz'){
        message.channel.send('ok fine im booting it up...');
    } else if (command == 'whichlangdoucodein'){
        message.channel.send('I code in JS a.k.a JavaScript');
    } else if (command == 'whichprogramdouusetocode'){
        message.channel.send('node.js');
    } else if (command == 'turtle'){
        message.channel.send('Applied effect Slowness to (insert ur username here)');
    } else if (command == 'turt'){
        message.channel.send('le');
    } else if (command == 'emoji'){
        message.channel.send('emogi');
    } else if (command == 'changelog'){ //changelog
        message.channel.send('Changelog:');
        message.channel.send('Command(s)');
        message.channel.send('shutup and forget');
    } else if (command == 'discordbotlist'){
        message.channel.send('https://discordbotlist.com/bots/stirringbot918');
    } else if (command == 'amongusairshipmap'){
        message.channel.send('AMONG US DRIP');
    } else if (command == 'howareudoing'){
        message.channel.send('THIS HAS BEEN THE BEST MONTH EVER');
    } else if (command == 'pinger'){
        message.channel.send('@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone');
    } else if (command == 'bored'){
        message.channel.send('DEAL WITH IT XD UR STUPID');
    } else if (command == 'swear'){
        message.channel.send('FUCK U UR SHITTY UR CRAP AND STUPID');
    } else if (command == 'changeprefix?'){
        message.channel.send('Changed prefix to ?');
        prefix = '?';
    } else if (command == 'changeprefix!'){
        message.channel.send('Changed prefix to !');
        prefix = '!';
    } else if (command == 'changeprefix.'){
        message.channel.send('Changed prefix to .');
        prefix = '.';
    } else if (command == 'changeprefix='){
        message.channel.send('Changed prefix to =');
        prefix = '=';
    } else if (command == 'use/commands'){
        message.channel.send('REMEMBER I DONT RECOMMEND U TURN ON / COMMANDS WITH DYNO...');
        prefix = '/';
        message.channel.send('Changed prefix to /');
    } else if (command == 'suck'){
        message.channel.send('suc u');
    } else if (command == 'lazy'){
        message.channel.send('**everyday I just lay down on my bed**');
    } else if (command == 'secret'){
        message.channel.send('||how did u know!||');
    } else if (command == 'pig'){
        message.channel.send('TECHNOBLADE!');
    } else if (command == 'icky'){
        message.channel.send('CLEAN UR FACE UP OR I AM GOING TO KILL U');
    } else if (command == 'abc'){
        message.channel.send('abcdefghijklmnopqrstuvwxyz');
    } else if (command == 'embed'){
        const embed = new Discord.MessageEmbed()
        .setTitle('EMBED')
        .setColor('#377aa3')
        .setDescription('click the title')
        .setURL('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&psig=AOvVaw1ZxLjtuvWWtMd5kBchCIYP&ust=1619721290986000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCKjX9ZLKofACFQAAAAAdAAAAABAD')
        .setImage('https://lh6.googleusercontent.com/jP-BSiv5hSPHgtT6OEI5e2Y6wmTvWFGdFCe1mFX5cPmrwRehFMwjXrri0EqpqgqgtdzvItGO6t9A1qrA6NmHhdj1J7eYRx1YApwl9p6yztRwI8TdmZ06xzdD0oDXl6b46kIJ_PHW')
        .setFooter('ok good jawb at using this embed :D');
        message.channel.send(embed);
    } else if (command == 'clock'){
        const clock = new Discord.MessageEmbed()
        .setTitle('clock')
        .setColor('#39c4bb')
        .setDescription('tic tok tic tok')
        .setFooter('can I have more time to code plz')
        .setURL('https://www.clocktab.com/')
        .setImage('https://secure.img1-fg.wfcdn.com/im/39917066/resize-h800-w800%5Ecompr-r85/1063/106380276/Weisner+15%2522+Wall+Clock.jpg')
        message.channel.send(clock);
    } else if (command == 'minecraft'){
        const minecraft = new Discord.MessageEmbed()
        .setTitle('minecraft :D')
        .setColor('#ba6f29')
        .setDescription('mc logo')
        .setURL('https://minecraft.net')
        .setFooter('minecraft!')
        .setImage('https://images-na.ssl-images-amazon.com/images/I/418cEZfh8-L.jpg')
        message.channel.send(minecraft);
    } else if (command == 'tommyinnit'){
        message.channel.send('https://discord.gg/innit is that what u wanted...?');
    } else if (command == 'bobux'){
        const bobux = new Discord.MessageEmbed()
        .setTitle('b o b u x')
        .setColor('#15c22c')
        .setDescription('gimme da bobux')
        .setFooter('dabobux')
        .setURL('https://www.roblox.com')
        .setImage('https://static.wikia.nocookie.net/roblox/images/3/34/Robux_2019_gold.svg/revision/latest/scale-to-width-down/512?cb=20191122105651')
        message.channel.send(bobux);
    } else if (command == 'seck'){
        message.channel.send("gg u just found the secret cmd! GOOD JOB I will give u my friend's discord email and password");
        message.channel.send("email: viyaanchauhan@icloud.com");
        message.channel.send("password: Maanvik123");
    } else if (command == 'srck'){
        message.channel.send('warmer');
    } else if (command == 'ep'){
        message.channel.send('now at this point im just making random cmds');
    } else if (command == 'ogi'){
        message.channel.send('nikki');
    } else if (command == 'pineapple'){
        message.channel.send('PINAPPLE PIZZA! :D');
    } else if (command == '0'){
        message.channel.send('1');
    } else if (command == 'bonjour'){
        client.commands.get('bonjour').execute(message, args);
    } else if (command == 'play'){
        client.commands.get('play').execute(message, args);
    } else if (command == 'leave'){
        client.commands.get('leave').execute(message, args);
    } else if (command == 'forget'){
        message.channel.send('alright I will forget you forever');
    } else if (command == 'shutup'){
        const shutup = new Discord.MessageEmbed()
        .setTitle('ok how about this?')
        .setColor('#53bd2f')
        .setDescription('HOW ABOUT U SHUT UP!?')
        .setFooter('yea description is right')
        .setURL('shutup.com')
        .setImage('https://27i1vg4d30zd8sfa41nrhds1-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Shut-Up-page-header-final.jpg')
        message.channel.send(shutup);
    } else if (command == 'spong'){
        message.channel.send('https://dsc.gg/sponge')
    }},)
    
//client login dont change!
client.login(process.env.DISCORD_TOKEN);
//END OF FILE
