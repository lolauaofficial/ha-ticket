const chalk = require('chalk');

module.exports = {
  name: 'ready',
  execute(client) {
    console.log(chalk.red('HOSTING AREA') + chalk.cyan('STARTING BOT'))
    console.log(chalk.green('Bot Status: ') + chalk.cyan('Logging in'))
    console.log(chalk.red('Hosting Area'))
    console.log(chalk.red('Join Discord for Support dsc.gg/hostingarea'))
    const oniChan = client.channels.cache.get(client.config.ticketChannel)

    function sendTicketMSG() {
      const embed = new client.discord.MessageEmbed()
        .setColor('6d6ee8')
        .setAuthor('Ticket', client.user.avatarURL())
        .setDescription('Click the button below to open a ticket.')
        .setFooter(`${client.user.tag} || Hosted by Hosting Area`, client.user.displayAvatarURL())
      const row = new client.discord.MessageActionRow()
        .addComponents(
          new client.discord.MessageButton()
          .setCustomId('open-ticket')
          .setLabel('Open a ticket')
          .setEmoji('✉️')
          .setStyle('PRIMARY'),
        );

      oniChan.send({
        embeds: [embed],
        components: [row]
      })
    }

    oniChan.bulkDelete(100).then(() => {
      sendTicketMSG()
      console.log(chalk.green('[Hosting Area Ticket]') + chalk.cyan(' Sent the ticket creation widget..'))
    })
  },
};
