// import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/CovidTracker.PNG';
import QuoteImg from '../images/Quote.PNG';
import ExpenseImg from '../images/Expense.png';
import CoinTrackerImg from '../images/cointracker.jpg';
import RGBIMG from '../images/RGB.PNG';
import NewsletterImg from '../images/Newsletter.PNG';

const projects = [
  {
    // uuidv4
    id: 1,
    name: 'Covid-19 Tracker',
    desc:
      'An application to track your all data from one place about the coroana virus caaes, recovery & deaths.Displaying that information in the form of Table, Line graph, and also the World Map.',
    img: ProjectImg,
    url: 'https://github.com/ArshWalker/Covid-19-Tracker', // new
    link: 'https://covid-19-tracker-app-ccc09.web.app/',
  },
  {
    id: 2,
    name: 'Expense-Project',
    desc:
      'This Project(Frontend application) is build using React JS. In this you can store all your expenses spend throughout year. And also can add new expenses along with the date. You can filter them with years.',
    img: ExpenseImg,
    url: 'https://github.com/ArshWalker/Expense-Project',
    link: '#',
  },
  {
    id: 3,
    name: 'Crypto-Finance-Tracker',
    desc:
      'Using this app you can track any e coin there prices, market value etc. This is build using ReactJS and Next.js. This web app can give a great knoweledge about whats going in E-market.   ',
    img: CoinTrackerImg,
    url: 'http://github.com/ArshWalker',
    link: 'http://github.com/ArshWalker',
  },
  {
    id: 4,
    name: 'RGB-Color Game',
    desc:
      'Using this web app you can improve your RGB color codes skills. In this you can play a game by guessing the color is described in RGB values. RGB (#, #, #) stands for red, green and blue saturation from 0 to 255.',
    img: RGBIMG,
    url: 'https://github.com/ArshWalker/rgbcolor-game',
    link: 'https://arshwalker.github.io/rgbcolor-game/',
  },
  {
    id: 5,
    name: 'Quote-Generator',
    desc:
      'With the help of this web page you can able to generate random quotes from the famous authors. And also able to tweet them with your twitter account.',
    img: QuoteImg,
    url: 'https://github.com/ArshWalker/Quote-generator',
    link: 'https://arshwalker.github.io/Quote-generator/',
  },
  {
    id: 6,
    name: 'Newsletter-Signup',
    desc:
      'This is a single-page website, basically it allows people to sign up to my mailing list. All the data entered on the sign up page is added to the list and will be visible on my Mailchimp account as subscribers.',
    img: NewsletterImg,
    url: 'https://github.com/ArshWalker/Newsletter-Signup',
    link: 'https://still-chamber-47348.herokuapp.com/',
  },
];

export default projects;
