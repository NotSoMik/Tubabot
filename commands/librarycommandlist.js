module.exports = {
    name: 'librarycommandlist',
    description: "commandlist?",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('Library command list')
        .setDescription('for help with library command')
        .addFields(

            {name: 'old library system vids', value: '1.wierd1, 2.wierd2, 3.wierd3, 4.rickroll, 5.amazongo, 6.NSFW1, 7.NSFW2'},
            {name: 'how to use new library system', value: 'how to use: L1=library 1 v3=video3. ex L1v3 has 8 vids in L! and ten in L2 and L3'},
            {name: 'notes', value: 'on tenthvid relpacle 1 with capital I'}
        )
        .setImage('https://media.timeout.com/images/105628370/image.jpg')
        .setFooter('librarycommandlist for Tubabot')
        message.channel.send(newEmbed);
    }

    
}