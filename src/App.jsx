import React from 'react';
import './index.css';
import Deck from './components/Deck/Deck';
import { useState } from 'react';
import { assets } from './assets/assets.js';
import { useMediaQuery } from 'react-responsive';

const itemsData = [
  {
    id: 'projects',
    title: 'Course Selector for UofT',
    display: 'Python, Tkinter, BeautifulSoup, Pillow, plotly, networkx, pickle',
    description: `
    - Developed a Python-based tool using graphs and Tkinter to recommend University of Toronto courses tailored to students' programs and interests
    - Features an interactive GUI, enabling users to auto-generate or customize a comprehensive 4-year course plan
    - Utilizes algorithms for course recommendation based on prerequisites user-selected interests`,
    link: 'https://github.com/Jai0212/Course-Selector-UofT',
    styles: {},
    image: ''
  },
  {
    id: 'projects',
    title: 'AI Virtual Painter',
    display: 'Python, C++, OpenCV, MediaPipe, NumPy',
    description: `
    - Real-time finger painting with custom gestures for color changes and erasing, using Python, OpenCV, and MediaPipe
    - Object-based painting in real-time, where the object's color determines the ink color, using C++ and OpenCV
    - Intuitive interface with accurate hand and object detection`,
    link: 'https://github.com/Jai0212/AI-Virtual-Painter',
    styles: {},
    image: ''
  },
  {
    id: 'projects',
    title: 'Rubik\'s Cube Solver Using IDA*',
    display: 'C++, IDA*, DFS, OpenGL, Object-Oriented Design, Manhattan Distance Heuristic',
    description: `
    - Developed a Rubik's Cube simulator and solver in C++ using IDA* and DFS algorithms for efficient solving
    - Integrated OpenGL for real-time, visually appealing cube graphics and interactive user experience
    - Implemented object-oriented design to manage cube movements, solving logic, and piece representation effectively`,
    link: 'https://github.com/Jai0212/Rubiks-Cube-Solver-Using-IDA-Star',
    styles: {},
    image: ''
  },
  {
    id: 'projects',
    title: 'Meetup Mate - Android App',
    display: 'Kotlin, XML, Firebase Realtime Database, Android Studio',
    description: `
    - Developed an Android app to easily organize meetups with friends in Kotlin
    - Integrated with Firebase Realtime Database for seamless meetup organization and data management
    - Implemented features including real-time chat, user authentication, friend management, and customizable profiles to enhance user experience`,
    link: 'https://github.com/Jai0212/Meetup-Mate',
    styles: {},
    image: ''
  },
  {
    id: 'projects',
    title: 'GPT-RNN Poetry Generator',
    display: 'Python, TensorFlow, LSTM, NLP, Numpy, Pandas',
    description: `
    - Developed a generative pre-trained transformer (GPT) using a recurrent neural network (RNN) to generate poetry
    - Utilized long short-term memory networks to train the model and optimized it using RMSprop
    - Implemented using TensorFlow and NumPy in Python allowing customizable length and creativity index of the poem`,
    link: 'https://github.com/Jai0212/GPT-RNN-Poetry-Generator',
    styles: {},
    image: ''
  },
  {
    id: 'projects',
    title: 'Chore Hero - Full-Stack Web Application',
    display: 'React, Vite, Node.js, Express.js, MongoDB, Stripe, JWT, Netlify',
    description: `
    - Developed a full-stack web application to order services such as carpentry, cleaning, etc. using the MERN stack
    - Created responsive client and admin interfaces, implemented secure JWT authentication and Stripe API for payment
    - Designed and implemented RESTful APIs to handle CRUD operations for service management and user interactions
`,
    link: 'https://github.com/Jai0212/Chore-Hero',
    styles: {},
    image: ''
  },
  {
    id: 'projects',
    title: 'AI Chess Engine',
    display: 'Java, MiniMax algorithm, Alpha-Beta pruning, Object-Oriented Programming, JFrame, Java Swing',
    description: `
    - Developed a chess game/engine using MiniMax algorithm with alpha-beta pruning, optimized for depth up to 10
    - Created an interactive GUI supporting human-vs-human and human-vs-computer modes with full chess functionality (en passant, promotions, castling, stalemate)
    - Improved user experience with customizable chessboard features, flipping, and adjustable AI difficulty`,
    link: 'https://github.com/Jai0212/AI-Chess-Engine',
    styles: {},
    image: ''
  },
  {
    id: 'projects',
    title: 'Dog Breed Identifier CNN',
    display: 'Python, Neural Networks, Deep Learning, TensorFlow, NumPy, OpenCV, SciPy, Matplotlib',
    description: `
    - Developed a custom convolutional neural network (image recognition) that identifies the breed of a dog among 120 dog breeds
    - Achieved a testing accuracy of ∼98% with a 5-layered neural network architecture trained on over 20,000 images
    - Executed with proficiency in cutting edge technologies using TensorFlow, NumPy and OpenCV in Python`,
    link: 'https://github.com/Jai0212/Dog-Breed-Identifier-CNN',
    styles: {},
    image: ''
  },
  {
    id: 'projects',
    title: 'SecureAuthAI - npm Package',
    display: 'Python, JavaScript, Node.js, PostgreSQL, Flask, Machine Learning ',
    description: `
    - Published an npm package for advanced sign-in security with AI-based risk assessment, MFA and user management
    - Integrated real-time PostgreSQL management and anomaly detection, supporting React, Vue, and Angular frameworks
    - Provided pre-made functions for automating database and user management, eliminating the need for API calls`,
    link: 'https://github.com/Jai0212/secure-auth-ai',
    styles: {},
    image: ''
  },
  {
    id: 'internships',
    title: 'Cloud Engineer Intern',
    display: 'Intertec\nJul 22 - Aug 22\nDubai',
    description: `
    - Researched SaaS backup needs for Office 365 and Google Suite, evaluating available backup options
    - Conducted comparative research and case study on AWS, Azure, and GCP
    - Resolved cyber threats targeting a large supermarket chain's database as part of the cybersecurity team`,
    image: assets.intertec_logo,
    styles: { width: '100px', borderRadius: '10px', border: '3px solid red', marginBottom: '-0.01px' }
  },
  {
    id: 'internships',
    title: 'Backend Engineer Intern',
    display: 'CouBon\nSep 23 - Dec 24\nToronto',
    description: `
    - Created a dashboard in the Angular web app using Firebase and TypeScript for managing digital coupons
    - Optimized backend performance by 35% using Node.js through asynchronous programming, query optimization, and REST API refinement, improving efficiency of coupon transactions`,
    image: assets.coubon_logo,
    styles: { width: '80px', borderRadius: '10px', border: '3px solid red' }
  },
  {
    id: 'internships',
    title: 'AI & Data Intern',
    display: 'e& enterprise\nMay 24 - Aug 24\nDubai',
    description: `
    - Developed a RAG LLM for tax information retrieval using LangChain, ChromaDB, and Ollama embeddings, while exploring RAG vs fine-tuning and self-hosting LLMs
    - Created a dynamic HR LLM with Python, Vue.js, and PostgreSQL for automating policy queries and leave applications`,
    image: assets.eand_logo,
    styles: { width: '170px', borderRadius: '10px', border: '3px solid red' }
  },
  {
    id: 'internships',
    title: 'Machine Learning Engineer Intern',
    display: 'Smart Mate\nSep 24 - Present\nToronto',
    description: `
    - Developed a CNN-LSTM model for sign language recognition using MediaPipe and SURF for key point detection, improving accessibility for the hearing-impaired
    - Implemented video-to-text pipelines using Kalman filter for movement prediction and NLP models, including BERT, to improve query interpretation and conversational response
    `,
    image: assets.smart_mate_logo,
    styles: { width: '80px', borderRadius: '10px', border: '3px solid red' }
  },
  {
    id: 'internships',
    title: 'Software Developer and Researcher',
    display: 'Intelligent Adaptive Interventions Lab\n\nSep 24 - Present\nToronto',
    description: `
    - Led a team to develop an Android app using Kotlin and Firebase, applying HCI principles to reduce impulsive app usage through behavior-modifying techniques like breathing exercises and interactive tasks
    - Researched digital well-being strategies, leveraging UI/UX design to reduce screen time boosting mental health
    `,
    image: assets.iai,
    styles: { width: '76px', borderRadius: '10px', border: '3px solid red', marginBottom: '-0.000000001px' }
  },
  {
    id: 'aboutMe',
    title: 'My Links',
    description: '',
    image: '',
    styles: {}
  },
  {
    id: 'aboutMe',
    title: 'Extras',
    description: `Currently learning <strong>game development</strong>\n
    Led a team to design an attachable product to prevent chairs from rocking. Wrote a <strong>research paper titled 'Anti-Chair Rocking Device'</strong> on the device which was published in an international journal <strong>(IJIRMF)</strong>\n
    Founder of <strong>The Green Cycle Drive and Clean the Coast</strong> - one of Dubai's largest environmental organizations`,
    image: '',
    styles: {}
  },
  {
    id: 'aboutMe',
    title: '2nd Year at UofT',
    description: 'Computer Science Speicalist\nStats & Math Minor\n\nGPA: 3.93',
    image: assets.uoft_logo,
    styles: { width: '210px', marginTop: '-100px', marginBottom: '30px', backgroundColor: 'white', border: '4px solid #004080', borderRadius: '10px', boxShadow: '0px 0px 25px 0px #004080' }
  },
  {
    id: 'aboutMe',
    title: 'Jai Joshi',
    description: 'About Me',
    image: assets.jj_pic,
    styles: { width: '220px', height: '370px', borderRadius: '10px', border: '4px solid #004080', boxShadow: '0px 0px 30px 0px #004080' }
  },
  {
    id: 'tools',
    title: 'Google Garage Digital Marketing',
    description: `
    - Understanding key concepts like digital marketing strategies, customer journeys, and the role of analytics
    - Search Engine Optimization and social media marketing
    - Exploring the principles of online advertising, including pay-per-click (PPC) campaigns, targeting options, and ad performance metrics.`,
    image: assets.google,
    styles: { width: '150px' }
  },
  {
    id: 'tools',
    title: 'Harvard CS50x',
    description: `
    - Learn about algorithms and data structures
    - Gained proficiency in programming languages such as C, Python, JavaScript and web-development.
    - Problem-solving skills and algorithmic thinking for tackling complex coding challenges`,
    image: assets.harvard,
    styles: { width: '230px', marginBottom: '40px', backgroundColor: 'white', borderRadius: '10px', border: '4px solid #004080', boxShadow: '0px 0px 20px 0px #004080' }
  },
  {
    id: 'tools',
    title: 'AWS Educate Course',
    description: `
    - Basics of cloud computing and AWS services
    - Best practices for security, scalability, and optimization`,
    image: assets.aws,
    styles: { width: '150px' }
  },
  {
    id: 'tools',
    title: 'Dependencies',
    description: '',
    image: '',
    styles: {}
  },
  {
    id: 'tools',
    title: 'Tools',
    description: '',
    image: '',
    styles: {}
  },
  {
    id: 'tools',
    title: 'Languages',
    description: '',
    image: '',
    styles: {}
  },
];

const App = () => {
  const [zIndex, setZIndex] = useState(1);
  const [cardOnTop, setCardOnTop] = useState([]);
  const [items, setItems] = useState([]);

  const isMax = useMediaQuery({ query: '(max-width: 1400px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1254px)' });
  const isBetween = useMediaQuery({ query: '(max-width: 1100px)' });
  const isBeforeAfterBetween = useMediaQuery({ query: '(max-width: 1025px)' });
  const isAfterBetween = useMediaQuery({ query: '(max-width: 900px)' });
  const isIPad = useMediaQuery({ query: '(max-width: 850px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });
  const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' });

  let center_x = isMobile ? 180 : isTabletOrMobile ? -50 : -150;
  let center_y = isMobile ? -370 : isTabletOrMobile ? -380 : -330;

  if (isMax && !isTabletOrMobile) {
    center_x = -50;
  }

  if (isBetween && !isMobile) {
    center_x = 50;
    center_y = -350;
  }

  if (isBeforeAfterBetween && !isAfterBetween) {
    center_y = -250;
  }

  if (isAfterBetween && !isIPad) {
    center_x = 150;
    center_y = -500;
  }

  if (isIPad && !isMobile) {
    center_x = 150;
    center_y = -450;
  }

  if (isSmallMobile) {
    center_x = 360;
    center_y = -300;
  }

  React.useEffect(() => {
    const calculatePosition = (id) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const offsetX = 160;
      const offsetY = -150;

      const top_left = { x: -screenWidth / 2 + offsetX, y: -screenHeight / 2 + offsetY }
      const top_right = { x: top_left.x + 820, y: top_left.y }
      const bottom_left = { x: top_left.x, y: top_left.y + 510 }
      const bottom_right = { x: top_right.x, y: bottom_left.y }

      switch (id) {
        case 'projects':
          return { x: top_left.x, y: top_left.y, z: 1, centered: false }; // Top-left
        case 'aboutMe':
          return { x: bottom_left.x, y: bottom_left.y, z: 1, centered: false }; // Top-right
        case 'internships':
          return { x: top_right.x, y: top_right.y, z: 1, centered: false }; // Bottom-left
        case 'tools':
          return { x: bottom_right.x, y: bottom_right.y, z: 1, centered: false }; // Bottom-right
        default:
          return { x: center_x, y: center_y, z: 0.5, centered: true };
      }
    };

    const updatedItems = itemsData.map(item => ({
      ...item,
      ...calculatePosition(item.id)
    }));

    setItems(updatedItems);
  }, [center_x, center_y]);

  return (
    <div className="app">
      <div className='header-div'>
        <h1 className="header">Jai Joshi</h1>
        {/* <img src={assets.name_text} alt=""/> */}
      </div>
      <div className="container">
        {items.map((item, index) => (
          <Deck
            key={index}
            items={[item]}
            margin_left={1}
            margin_right={0}
            zIndex={zIndex}
            setZIndex={setZIndex}
            cardOnTop={cardOnTop}
            setCardOnTop={setCardOnTop}
            CENTER_X={center_x}
            CENTER_Y={center_y}
            className="cards"
          />
        ))}
      </div>
    </div>
  )
}

export default App;
