import img1 from '../media/restaurant-app.png'
import img1sm from '../media/restaurant-app_sm.png'
import img2 from '../media/neighborhood-map.png'
import img2sm from '../media/neighborhood-map_sm.png'
import img4 from '../media/memory-game.png'
import img4sm from '../media/memory-game_sm.png'
import img5 from '../media/animal-trading-cards.png'
import img5sm from '../media/animal-trading-cards_sm.png'
import img7 from '../media/bloglist.png'
import img7sm from '../media/bloglist_sm.png'
import img8 from '../media/healthcare-website.png'
import img8sm from '../media/healthcare-website_sm.png'

/*
import img3 from '../media/pixel-art-maker.png'
import img3sm from '../media/pixel-art-maker_sm.png'
import img6 from '../media/my-reads-app.png'
import img6sm from '../media/my-reads-app_sm.png'
import img9 from '../media/artist-website.png'
import img9sm from '../media/artist-website_sm.png'
*/

/** ALL SKILLS
skills: {
  languages: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  application: ['Wordpress', 'Progressive Web App', 'Android App', 'iOS App', 'Heroku'],
  frameworks: ['React'],
  libraries: ['Redux', 'jQuery', 'Lo-dash'],
  markup: ['Material UI', 'Bootstrap', 'Semantic UI', 'SCSS', 'Styled Components'],
  tools: ['Webpack', 'Babel', 'ESLint', 'Prittify', 'Grunt', 'Gulp', 'Service Worker'],
  api: ['Google Maps API', 'FourSquare API' ]
  validators: [
    'Markup Validator',
    'CSS Validator',
    'Autoprefixer',
    'HTML Beautifier',
    'JavaScript Beautifier',
    'Lighthouse'
  ],
  testing: ['Jest', 'Jasmine', 'Cypress'],
  other: ['mySQL', 'mongoDB', 'GraphQL', 'Express', 'NodeJS', 'Scrum', 'Kanban','Amazon AWS', 'Docker', 'Kubernetes' ]
}
*/

const projects = [
  {
    id: '1',
    image: img7,
    thumbnail: img7sm,
    imagetitle: 'Bloglist preview',
    title: 'Bloglist Web App',
    description: 'Share your favorite blogs',
    demo: 'https://vast-wave-20661.herokuapp.com',
    repo: 'https://github.com/NinaKWelch/ninas-bloglist',
    skills: {
      languages: ['HTML5', 'CSS3', 'JavaScript ES6', 'TypeScript'],
      application: ['Heroku'],
      frameworks: ['React'],
      libraries: ['Redux'],
      markup: ['Material UI'],
      validators: ['PropTypes'],
      tools: ['Webpack', 'Babel', 'Git', 'ESLint'],
      testing: ['Jest', 'Cypress'],
      other: ['REST API', 'MongoDB', 'Express', 'Node.JS', 'npm']
    },
    info: [
      {
        id: '1',
        content:
          'Full stack project built with React library and MongoDB database on Heroku server'
      },
      {
        id: '2',
        content: 'Mobile-first responsive design using Material UI Framework'
      },
      { id: '3', content: 'State management using Redux library' },
      { id: '4', content: 'User authentication and authorization' },
      { id: '5', content: 'Unit testing with Jest framework' },
      { id: '6', content: 'End-to-end testing with Cypress framework' },
      { id: '7', content: 'Bespoke Webpack configuration' },
      {
        id: '8',
        content: 'Sign in to live app - username: user, password: userpw'
      }
    ]
  },
  {
    id: '2',
    image: img1,
    thumbnail: img1sm,
    imagetitle: 'Restaurant app preview',
    title: 'Restaurant Reviews',
    description: 'Search by location and cuisine',
    demo: 'https://ninakwelch.github.io/ninas-restaurant-app/',
    repo: 'https://github.com/NinaKWelch/ninas-restaurant-app',
    skills: {
      languages: ['HTML5', 'CSS3', 'JavaScript ES6'],
      application: ['Progressive Web App'],
      markup: ['Responsive', 'Accessible', 'Flexbox'],
      tools: ['Grunt', 'Git', 'Service Worker'],
      api: ['Google Maps API'],
      validators: [
        'Markup Validator',
        'CSS Validator',
        'Autoprefixer',
        'HTML Beautifier',
        'JavaScript Beautifier'
      ],
      other: ['Node.JS', 'npm']
    },
    info: [
      {
        id: '1',
        content: 'Refactring a static webpage to a mobile-ready web application'
      },
      { id: '2', content: 'Integration with third-party API' },
      {
        id: '3',
        content: 'Images are cached and optimised for different screen sizes'
      },
      { id: '4', content: 'All markup checked and validated' },
      { id: '5', content: 'Follows Accessibility guidelines' },
      { id: '6', content: 'Follows Progressive Web App guidelines' }
    ]
  },
  {
    id: '3',
    image: img8,
    thumbnail: img8sm,
    imagetitle: 'Yunji healthcare preview',
    title: 'Healthcare Website',
    description: 'Chinese medicine clinic',
    demo: 'http://yunjihealthcare.co.uk/',
    repo: '',
    skills: {
      languages: ['HTML5', 'CSS3'],
      markup: ['Responsive'],
      application: ['Wordpress'],
      other: ['SEO', 'Copywriting', 'Google Analytics']
    },
    info: [
      { id: '1', content: 'Mobile-first responsive design' },
      { id: '2', content: 'Search engine optimised content' },
      { id: '3', content: 'Wordpress integration for easy editing' },
      { id: '4', content: 'Embedded Google Analytics' }
    ]
  },
  {
    id: '4',
    image: img2,
    thumbnail: img2sm,
    imagetitle: 'Neighborhood map preview',
    title: 'Neighborhood Map',
    description: 'Search for things to do',
    demo: 'https://ninakwelch.github.io/ninas-neighborhood-map/',
    repo: 'https://github.com/NinaKWelch/ninas-neighborhood-map',
    skills: {
      languages: ['HTML5', 'CSS3', 'JavaScript ES6'],
      frameworks: ['React'],
      application: ['Progressive Web App'],
      markup: ['Responsive', 'Accessible', 'Flexbox'],
      validators: ['PropTypes'],
      tools: ['ESlint', 'Prettier', 'Git', 'Service Worker'],
      api: ['Foursquare API', 'Google Maps API'],
      testing: ['Jest'],
      other: ['Node.JS', 'npm']
    },
    info: [
      {
        id: '1',
        content: 'Mobile-first responsive design'
      },
      {
        id: '2',
        content: 'Built with React JavaScript library'
      },
      { id: '3', content: 'Integration with two third-party APIs' },
      { id: '4', content: 'Data requests are retrieved asynchronously' },
      { id: '5', content: 'Failed data requests are handled gracefully' },
      { id: '6', content: 'Unit testing with Jest framework' },
      { id: '7', content: 'Follows Accessibility guidelines' },
      { id: '8', content: 'Follows Progressive Web App guidelines' }
    ]
  },
  {
    id: '5',
    image: img5,
    thumbnail: img5sm,
    imagetitle: 'Animal trading cards preview',
    title: 'Animal Trading Cards',
    description: 'Collaborative design project',
    demo: 'https://ninakwelch.github.io/trading-card-website/',
    repo: 'https://github.com/NinaKWelch/trading-card-website',
    skills: {
      languages: ['HTML5', 'CSS3'],
      application: ['Progressive Web App'],
      libraries: ['jQuery'],
      markup: ['Bootstrap'],
      tools: ['Git', 'Service Worker'],
      validators: ['Markup Validator', 'CSS Validator']
    },
    info: [
      {
        id: '1',
        content:
          'Creation and management of collaborative project with over 60 contributors'
      },
      { id: '2', content: 'Responsive design using Bootstrap CSS Framework' },
      { id: '3', content: 'DOM events are handled using jQuery methods' },
      { id: '4', content: 'Follows Progressive Web App guidelines' }
    ]
  },
  {
    id: '6',
    image: img4,
    thumbnail: img4sm,
    imagetitle: 'Memory game preview',
    title: 'Memory Game',
    description: 'Football themed game',
    demo: 'https://ninakwelch.github.io/ninas-memory-game/',
    repo: 'https://github.com/NinaKWelch/ninas-memory-game',
    skills: {
      languages: ['HTML5', 'CSS3', 'JavaScript'],
      markup: ['Flexbox'],
      tools: ['Git'],
      validators: ['Markup Validator', 'CSS Validator', 'Autoprefixer']
    },
    info: [
      { id: '1', content: 'Responsive design' },
      { id: '2', content: 'CSS animations with @keyframes' },
      { id: '3', content: 'DOM manipulation with vanilla javaScript' }
    ]
  } /* ,
  {
    id: '7',
    image: img6,
    thumbnail: img6sm,
    imagetitle: 'My reads app preview',
    title: 'My Reads',
    description: 'Seach and select books',
    demo: 'https://ninas-myreads-app.herokuapp.com/',
    repo: 'https://github.com/NinaKWelch/ninas-myreads-app',
    skills: {
      languages: ['HTML5', 'CSS3', 'JavaScript ES6'],
      frameworks: ['React'],
      libraries: ['Redux'],
      application: ['Progressive Web App', 'Heroku'],
      markup: ['Styled Components', 'Responsive', 'Accessible', 'Flexbox'],
      tools: ['ESLint', 'Prettier', 'Git', 'Service Worker'],
      api: ['Google Books API'],
      other: ['Node.JS', 'npm']
    },
    info: [
      { id: '1', content: 'Built with React JavaScript library' },
      { id: '2', content: 'Integration with third-party API' },
      { id: '3', content: 'Search and sort functionality' },
      { id: '4', content: 'Follows Accessibility guidelines' },
      { id: '5', content: 'Follows Progressive Web App guidelines' },
      {
        id: '6',
        content: `Current search terms are limited. Try  'Android', 'Artificial Intelligence', 'Business', 'Classics', 'Comics', 'Design', 'Development', Education', 'Finance', 'Travel', 'Web Development' or 'iOS'`
      }
    ]
  },
  {
    id: '8',
    image: img3,
    thumbnail: img3sm,
    imagetitle: 'Pixel art maker preview',
    title: 'Pixel Art Maker',
    description: 'Interactive drawing application',
    demo: 'https://ninakwelch.github.io/ninas-pixel-art-maker/',
    repo: 'https://github.com/NinaKWelch/ninas-pixel-art-maker',
    skills: {
      languages: ['HTML5', 'CSS3'],
      libraries: ['jQuery'],
      tools: ['Git'],
      validators: ['Markup Validator', 'CSS Validator']
    },
    info: [
      { id: '1', content: 'Responsive design' },
      { id: '2', content: 'DOM events are handled using jQuery methods' }
    ]
  },
  {
    id: '9',
    image: img9,
    thumbnail: img9sm,
    imagetitle: 'Artist website preview',
    title: 'Artist Website',
    description: 'Visual artist portfolio',
    demo: 'https://paulodac.com/',
    repo: '',
    skills: {
      languages: ['HTML5', 'CSS3'],
      markup: ['Responsive'],
      application: ['Wordpress'],
      other: ['Google Analytics']
    },
    info: [
      { id: '1', content: 'Mobile-first responsive design' },
      { id: '2', content: 'Wordpress integration for easy editing' },
      { id: '3', content: 'Embedded Google Analytics' }
    ]
  } */
]

export default projects
