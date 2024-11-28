import { Connection, Downloads, Payments } from "./user-profile.component";

export var numberCarddata = [
    {
      "name": "Downloads",
      "value": 48
    },
    {
      "name": "Payments",
      "value": 2558
    },
    {
      "name": "Profit",
      "value": 1230
    },
    {
      "name": "Games Played",
      "value": 124
    }
  ];

  export var lastConnections: Connection[] = 
  [
    {
      game: "Galaxian",
      date: "2024-11-09",
      duration: "01:12:36",
      start: "09:00:00",
      end: "10:12:36",
      description:"Galaxian expandió la fórmula creada por Space Invaders. Al igual que ese juego, Galaxian presentaba una horda de alienígenas atacando que intercambiaban disparos con el jugador, pero, a diferencia del Space Invaders, Galaxian añadía un elemento dramático al tener a los marcianos atacando al estilo kamikaze a la nave controlada por el jugador."
    },
    {
      game: "Galaxian",
      date: "2024-11-09",
      duration: "00:03:04",
      start: "08:55:12",
      end: "08:58:16",
      description:"Galaxian expandió la fórmula creada por Space Invaders. Al igual que ese juego, Galaxian presentaba una horda de alienígenas atacando que intercambiaban disparos con el jugador, pero, a diferencia del Space Invaders, Galaxian añadía un elemento dramático al tener a los marcianos atacando al estilo kamikaze a la nave controlada por el jugador."
    },
    {
      game: "Mario Bros",
      date: "2024-11-08",
      duration: "01:16:58",
      start: "12:17:01",
      end: "13:33:59",
      description:"Galaxian expandió la fórmula creada por Space Invaders. Al igual que ese juego, Galaxian presentaba una horda de alienígenas atacando que intercambiaban disparos con el jugador, pero, a diferencia del Space Invaders, Galaxian añadía un elemento dramático al tener a los marcianos atacando al estilo kamikaze a la nave controlada por el jugador."
    },
    {
      game: "Arkanoid",
      date: "2024-11-07",
      duration: "00:21:42",
      start: "14:00:17",
      end: "14:21:59",
      description:"Galaxian expandió la fórmula creada por Space Invaders. Al igual que ese juego, Galaxian presentaba una horda de alienígenas atacando que intercambiaban disparos con el jugador, pero, a diferencia del Space Invaders, Galaxian añadía un elemento dramático al tener a los marcianos atacando al estilo kamikaze a la nave controlada por el jugador."
    },
    {
      game: "Galaxian",
      date: "2024-11-07",
      duration: "00:43:36",
      start: "19:28:00",
      end: "20:11:36",
      description:"Galaxian expandió la fórmula creada por Space Invaders. Al igual que ese juego, Galaxian presentaba una horda de alienígenas atacando que intercambiaban disparos con el jugador, pero, a diferencia del Space Invaders, Galaxian añadía un elemento dramático al tener a los marcianos atacando al estilo kamikaze a la nave controlada por el jugador."
    }
  ]

  export var downloads: Downloads[] = 
  [
    {
      game: "Galaxian",
      image: "galaxian.png",
      size: "258Kb",
      price:"2$",
      genere: "Arcade",
      description:"Galaxian expanded on the formula created by Space Invaders. Like that game, Galaxian featured a horde of attacking aliens that exchanged fire with the player, but unlike Space Invaders, Galaxian added a dramatic element by having the Martians attack the player-controlled ship kamikaze-style."
    },
    {
      game: "Arkanoid",
      image: "arkanoid.png",
      size: "156Kb",
      price:"0$",
      genere: "Arcade",
      description:"You control a small platform nicknamed Spaceship Vaus, which prevents a ball from leaving the playing area by making it bounce. On top of it are bricks or blocks, which disappear when touched by the ball."
    },
    {
      game: "Mario Bros",
      image: "mario.png",
      size: "1Mb",
      price:"5$",
      genere: "Platform",
      description:"Super Mario Bros. is a 1985 platform video game developed and published by Nintendo for the Famicom in Japan and the Nintendo Entertainment System (NES) in North America. It is the successor to the 1983 arcade game Mario Bros. and the first in the Super Mario series."
    },
    {
      game: "Street Fighter II",
      image: "streetfighter.jpg",
      size: "586Kb",
      price:"3$",
      genere: "Fight",
      description:"Is a fighting video game originally released for the CP System arcade board in 1991. It is the second installment of the Street Fighter series and the sequel to the original Street Fighter released in 1987. This was the first game in the Street Fighter series to achieve worldwide fame and started the phenomenon of video games in the fighting genre."
    },
    {
      game: "Sonic",
      image: "sonic.jpg",
      size: "816Kb",
      price:"0$",
      genere: "Platform",
      description:"Sonic the Hedgehog is a platform video game developed by Sonic Team and published by Sega for the Sega Mega Drive/Genesis home console in 1991. It was released in North America on June 23, and in PAL regions and Japan the following month."
    }
  ]

  export var payments: Payments[] = 
  [
    {
      date: "2024-09-12 10:32:56",
      amount: "1 $",
      method: "Card",
      status: "Successful"
    },
    {
      date: "2024-09-09 12:12:52",
      amount: "2 $",
      method: "PayPal",
      status: "Failed"
    },
    {
      date: "2024-09-08 19:02:36",
      amount: "0 $",
      method: "Card",
      status: "Successful"
    },
    {
      date: "2024-09-08 15:21:18",
      amount: "5 $",
      method: "Bitcoin",
      status: "Pending"
    },
    {
      date: "2024-09-07 14:18:27",
      amount: "1 $",
      method: "Card",
      status: "Successful"
    }
  ]

  