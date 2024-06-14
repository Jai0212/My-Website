import React from 'react';
import './index.css';
import Deck from './components/Deck/Deck';
import { useState } from 'react';
import { assets } from './assets/assets.js';

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
    - Developed a full-stack web application to order services such as carpentry, cleaning, etc. using Vite/React and Node.js
    - Designed responsive interfaces for clients and admins with a MongoDB database to store log-in, cart and order details
    - Implemented secure authentication with JWT and payment processing with Stripe API
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
    - Developed a chess game/engine using MiniMax algorithm with alpha-beta pruning, optimized for depth up to 10.
    - Created an interactive GUI supporting human-vs-human and human-vs-computer modes with full chess functionality (en passant, promotions, castling, stalemate).
    - Improved user experience with customizable chessboard features, flipping, and adjustable AI difficulty.`,
    link: 'https://github.com/Jai0212/AI-Chess-Engine',
    styles: {},
    image: ''
  },
  {
    id: 'projects',
    title: 'Dog Breed Identifier CNN ',
    display: 'Python, Neural Networks, Deep Learning, TensorFlow, NumPy, OpenCV, SciPy, Matplotlib',
    description: `
    - Developed a custom convolutional neural network (image recognition) from scratch that identifies the breed of a dog among 120 dog breeds
    - Achieved a testing accuracy of ∼98% with a 5-layered neural network architecture trained on over 20,000 images
    - Executed with proficiency in cutting edge technologies using TensorFlow, NumPy and OpenCV in Python`,
    link: 'https://github.com/Jai0212/Dog-Breed-Identifier-CNN',
    styles: {},
    image: ''
  },
  {
    id: 'internships',
    title: 'Cloud & Cybersecurity Intern',
    display: 'Intertec\nJul 21 - Aug 21\nDubai',
    description: `
    - Researched SaaS backup needs for Office 365 and Google Suite, evaluating available backup options
    - Conducted comparative research and case study on AWS, Azure, and GCP
    - Resolved cyber threats targeting a large supermarket chain's database as part of the cybersecurity team`,
    image: assets.intertec_logo,
    styles: { width: '100px', borderRadius: '10px', border: '3px solid #ffc966', marginBottom: '-1px'}
  },
  {
    id: 'internships',
    title: 'AI & Data Intern',
    display: 'e& enterprise\nMay 24 - Present\nDubai',
    description: `
    - Developed a RAG based LLM for Tax Information Retrieval in Python
    - Implemented using LangChain and ChromaDB
    - Utilized Ollama embedding functions to enable the LLM to retrieve relevant tax information with a frontend built using React, TypeScript, Python and Flask`,
    image: assets.eand_logo,
    styles: { width: '180px' }
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
    description: 'Currently learning <strong>app development</strong>\n\nFounder of <strong>The Green Cycle Drive and Clean the Coast</strong> - one of Dubai\'s largest environmental organizations\n\nDesigned an attachable product to prevent chairs from rocking. Wrote a <strong>research paper titled Anti-Chair Rocking Device</strong> on the device which was published in an international journal. ',
    image: '',
    styles: {}
  },
  {
    id: 'aboutMe',
    title: '2nd Year at UofT',
    description: 'Computer Science Speicalist\nStats & Math Minor\n\nGPA: 3.93',
    image: assets.uoft_logo,
    styles: { width: '280px', marginTop: '-100px', marginBottom: '-30px' }
  },
  {
    id: 'aboutMe',
    title: 'Jai Joshi',
    description: 'About Me',
    image: assets.jj_pic,
    styles: { width: '220px', height: '370px', borderRadius: '5px', border: '4px solid #004080' }
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
    styles: { width: '230px', marginBottom: '40px' }
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
    title: 'Libraries',
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

  React.useEffect(() => {
    const calculatePosition = (id) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const offsetX = 160;
      const offsetY = -150;

      const top_left = { x: -screenWidth / 2 + offsetX, y: -screenHeight / 2 + offsetY }
      const top_right = { x: top_left.x + 860, y: top_left.y }
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
          return { x: 0, y: 0, z: 1, centered: false };
      }
    };

    const updatedItems = itemsData.map(item => ({
      ...item,
      ...calculatePosition(item.id)
    }));

    setItems(updatedItems);
  }, []);

  return (
    <div className="app">
      <div className='header-div'>
        <h1 className="header">Jai Joshi</h1>
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
            CENTER_X={-150}
            CENTER_Y={-330}
            className="cards"
          />
        ))}
      </div>
    </div>
  )
}

export default App;
