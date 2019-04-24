'use strict'

let Cylon = require('cylon')

let randomColors = ['blue', 'green', 'red', 'azure', 'brown', 'aqua', 'blueviolet',
                    'chartreuse', 'coral', 'peru', 'powderblue', 'yellow', 'tomato',
                    'yellowgreen', 'teal']

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Cylon.robot({
  connections: {
    sphero: { adaptor: 'sphero', port: 'COM3' }
  },

  devices: {
    sphero: { driver: 'sphero' }
  },

  work: (me) => {
    setInterval(() => {
      let color = randomColors[getRandomInt(0, randomColors.length)]
      console.log('Este es el color: ', color)
      me.sphero.color(color)
      me.sphero.roll(0, getRandomInt(1, 359), 1, function (s) {
        console.log('--- Girando')
      })
      //console.log(me.sphero.color(randomColors[Math.floor((Math.random(0, randomColors.lenght)) * 10)]))
    }, 1000)
    //console.log(me.sphero.name)
    // every((1).second(), function() {
    //   me.sphero.roll 60, Math.floor(Math.random() * 360)
    // });
  },

  message: (message) => {
    console.info(message)
  },
  notification: (notification) => {
    console.info(notification)
  }
}).start();
