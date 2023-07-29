// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// ================================================================ 
 var header={
  name:{
    firstname:'Ivan',
    lastname:'Ivanov',
     },
   position:'Junior Fullstack JS Developer',
   salary:'600$ в місяць',
   address:'м. Радивилів, обл. Рівненьська',
}

var footer= {
  social:{
    email:{
      text:'ivanov@mail.com',
      href:'mailto:ivanov@mail.com',
    },
    phone:{
      text:'+380670000123',
      href:'tel:+380670000123',
    },
    linkedin:{
      text:'LinkedIn',
      href:'https://www.linkedin.com/in/dmytro-test',
    }
  },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

page:{
  title:' Resume| Summary',
},

header,

main:{
  sammary: {
    title: 'Summary',
    text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
  },
  experience:{
    title:'Other experience',
    text:'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probabilityfor such events like: money line - first win / draw / second win, totals etc.',
  }
},

footer,

 })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
  
    page:{
    title:' Resume | Skills',

  },
  
  header,
  
  main:{
    skills:[
      {
        name:'HTML',
        point: 10,
        isTop: true,
      },
      {
        name:'NPM',
        point: 10,
        isTop: true
      },
      {
        name:'Handlebars & Terminal',
        point: 9,
        isTop: false,
      },
      {
        name:'VS Code & Git',
        point: 8,
      },
      {
        name:'React.js',
        point: 0,
      },
      {
        name:'PHP',
        point: null,
      },
    ],
    hobbies:[
      {
        name:'football',
        isMain: false,
      },
      {
        name:'volleyball',
        isMain: true,
      },
      {
        name:'basketball',
        isMain: false,
      },
    ],
  },
  
  footer,
  
  })

 })

 // ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
  
    page:{
    title:' Resume | Educaption',
  },
  
  header,
  
 main:{
    educations:[
      {
        name:'Дошкільні ясла',
        isEnd: true,
      },
      {
        name:'Середні середня загальноосвітня школа',
        isEnd: false,
      },
      {
        name:'Професійно-технічні',
        isEnd: false,
      },
      {
        name:'Вищі',
        isEnd: false,
      }, 
     ],

     sertificates:[
      {
        name:'PANDORA',
        id: 345,
      },
      {
        name:'EVA',
        id: 671,
      },
      {
        name:'ROZETKA',
        id: 829,
      },
    
     ]
},
  
  footer,
   })
 })



 router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout:'big',
  
    page:{
    title:' Resume | Work',
  },
  
  header,
  
  main:{
    works: [{
    position: 'Junior Fullstack Developer', 
    compane:{
      name: 'IT Brains',
      url: 'https://it-brains.com.ua/',
    },
    duration:{
      from: '10.10.2022',
      to: null,
    },
    projectAmount: 3,

    projects: [
    {
      name:'Resume',
      url:'https://it-resume.com.ua/',
      about:'All options for earning with the skill of IT development',
      stacks:[
        {
          name:'React.js',
        },
        {
          name:'HTML/CSS',
        },
        {
          name:'NodeJs',
        },
       ],
       awards:[
        {
          name:'HTML',
        },
        {
          name:'CSS',
        },
       ],
       stackAmount: 21,
       awardAmount: 15,
      },
     ],
    },
   ],
  },
  
  footer,
   })
 })
// Підключаємо роутер до бек-енду
module.exports = router
