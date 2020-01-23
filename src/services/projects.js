import img1 from '../media/restaurant-app.png'
import img2 from '../media/neighborhood-map.png'
import img3 from '../media/pixel-art-maker.png'
import img4 from '../media/memory-game.png'
import img5 from '../media/animal-trading-cards.png'
import img6 from '../media/my-reads-app.png'
import img7 from '../media/bloglist.png'
import img8 from '../media/healthcare-website.png'
import img9 from '../media/artist-website.png'

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
    imagetitle: 'Bloglist preview',
    title: 'Blogs App',
    description: 'Share your favorite blogs',
    demo: 'https://vast-wave-20661.herokuapp.com',
    repo: 'https://github.com/NinaKWelch/ninas-bloglist',
    skills: {
      languages: ['HTML5', 'CSS3', 'JavaScript ES6', 'TypeScript'],
      application: ['Heroku'],
      frameworks: ['React'],
      libraries: ['Redux'],
      markup: ['Material UI', 'Flexbox'],
      validators: [],
      tools: ['Webpack', 'Babel', 'Git', 'ESLint'],
      testing: ['Jest', 'Cypress'],
      other: ['REST API', 'MongoDB', 'Express']
    },
    info: [
      { id: '1', content: 'Full stack project' },
      { id: '2', content: 'Built with MongoDB database, Mongoose and Express' },
      { id: '3', content: 'REST API with asynchronous requests' },
      { id: '4', content: 'Responsive and accessible design' },
      {
        id: '5',
        content: 'Sign in to live app - username: user, password: userpw'
      }
    ]
  },
  {
    id: '2',
    image: img1,
    imagetitle: 'Restaurant app preview',
    title: 'Restaurant App',
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
      ]
    },
    info: [
      { id: '1', content: 'Bespoke mobile-ready layout' },
      { id: '2', content: 'Accessible for screen readers' },
      {
        id: '3',
        content: 'Images are cached and optimised for different screen sizes'
      },
      { id: '4', content: 'All markup checked and validated' },
      { id: '5', content: 'Follows Progressive Web App guidelines' },
      { id: '6', content: 'Third-party API integration' }
    ]
  },
  {
    id: '3',
    image: img8,
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
      { id: '1', content: 'Fully functional business website with analytics' },
      { id: '2', content: 'Search engine optimised content and links' },
      { id: '3', content: 'Wordpress integration for easy editing' },
      { id: '4', content: 'Bespoke branding and styling' },
      { id: '5', content: 'Responsive and accessible design' }
    ]
  },
  {
    id: '4',
    image: img6,
    imagetitle: 'My reads app preview',
    title: 'My Reads App',
    description: 'Seach and select books',
    demo: 'https://ninas-myreads-app.herokuapp.com/',
    repo: 'https://github.com/NinaKWelch/ninas-myreads-app',
    skills: {
      languages: ['HTML5', 'CSS3', 'JavaScript ES6', 'TypeScript'],
      frameworks: ['React'],
      libraries: ['Redux'],
      application: ['Progressive Web App', 'Heroku'],
      markup: ['Styled Components', 'Responsive', 'Accessible', 'Flexbox'],
      tools: [
        'Webpack',
        'Babel',
        'ESLint',
        'Prettier',
        'Git',
        'Service Worker'
      ],
      api: ['Google Books API']
    },
    info: [
      { id: '1', content: 'Search and sort functionality' },
      { id: '2', content: 'Follows Progressive Web App guidelines' },
      { id: '3', content: 'Third-party API integration' },
      {
        id: '4',
        content: `Current search terms are limited. Try  'Android', 'Artificial Intelligence', 'Business', 'Classics', 'Comics', 'Design', 'Development', Education', 'Finance', 'Travel', 'Web Development' or 'iOS'`
      }
    ]
  },
  {
    id: '5',
    image: img2,
    imagetitle: 'Neighborhood map preview',
    title: 'Neighborhood Map',
    description: 'Search for things to do',
    demo: 'https://ninakwelch.github.io/ninas-neighborhood-map/',
    repo: 'https://github.com/NinaKWelch/ninas-neighborhood-map',
    skills: {
      languages: ['HTML5', 'CSS3', 'JavaScript ES6', 'PropTypes'],
      frameworks: ['React'],
      application: ['Progressive Web App'],
      markup: ['Responsive', 'Accessible', 'Flexbox'],
      tools: [
        'Webpack',
        'Babel',
        'ESlint',
        'Prettier',
        'Git',
        'Service Worker'
      ],
      api: ['Foursquare API', 'Google Maps API'],
      testing: ['Jest']
    },
    info: [
      {
        id: '1',
        content: 'Location based listings'
      },
      { id: '2', content: 'Synchronised content from two third-party APIs' },
      { id: '3', content: 'Follows Progressive Web App guidelines' },
      { id: '4', content: 'Accessible for screen readers' }
    ]
  },
  {
    id: '6',
    image: img5,
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
      validators: ['Markup Validator', 'CSS Validator']
    },
    info: [
      {
        id: '1',
        content: 'Creation and management of collaborative project'
      },
      { id: '2', content: 'Over 60 contributors' },
      {
        id: '3',
        content: 'Ability to view ones own design across all cards'
      },
      {
        id: '4',
        content: 'Connecting participants to each other in a playful way'
      },
      { id: '5', content: 'Code follows Progressive Web App guidelines' }
    ]
  },
  {
    id: '7',
    image: img4,
    imagetitle: 'Memory game preview',
    title: 'Memory Game',
    description: 'Football themed game',
    demo: 'https://ninakwelch.github.io/ninas-memory-game/',
    repo: 'https://github.com/NinaKWelch/ninas-memory-game',
    skills: {
      languages: ['HTML5', 'CSS3', 'JavaScript'],
      markup: ['Flexbox'],
      validators: ['Markup Validator', 'CSS Validator', 'Autoprefixer']
    },
    info: [
      { id: '1', content: 'Game-centric design and branding' },
      { id: '2', content: 'CSS animations with @keyframes' },
      { id: '3', content: 'Built with vanilla javaScript' }
    ]
  },
  {
    id: '8',
    image: img3,
    imagetitle: 'Pixel art maker preview',
    title: 'Pixel Art Maker',
    description: 'Drawing with color picker',
    demo: 'https://ninakwelch.github.io/ninas-pixel-art-maker/',
    repo: 'https://github.com/NinaKWelch/ninas-pixel-art-maker',
    skills: {
      languages: ['HTML5', 'CSS3'],
      libraries: ['jQuery'],
      validators: ['Markup Validator', 'CSS Validator']
    },
    info: [
      { id: '1', content: 'Simple drawing canvas' },
      { id: '2', content: 'Color picker enabled selection' }
    ]
  },
  {
    id: '9',
    image: img9,
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
      { id: '1', content: 'Fully functional portfolio website with analytics' },
      { id: '2', content: 'Wordpress integration for easy editing' },
      { id: '3', content: 'Responsive and accessible design' }
    ]
  }
]

export default projects
