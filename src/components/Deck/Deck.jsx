import React from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import './Deck.css'
import { assets } from '../../assets/assets'
import LogoName from '../LogoName/LogoName'

const from = (i) => ({
  x: 0 + Math.random() * 10, rot: 0, scale: 1.5, y: -1000
})

const DeckProject = ({
  items,
  margin_left,
  margin_right,
  zIndex,
  setZIndex,
  cardOnTop,
  setCardOnTop,
  CENTER_X,
  CENTER_Y
}) => {

  const isNotMobile = window.innerWidth >= 768;

  const languages = [
    { src: assets.python, name: 'Python' },
    { src: assets.java, name: 'Java' },
    { src: assets.js, name: 'JavaScript' },
    // { src: assets.c, name: 'C' },
    { src: assets.c_plus, name: 'C++' },
    { src: assets.kotlin, name: 'Kotlin' },
    { src: assets.html, name: 'HTML' },
    { src: assets.css, name: 'CSS' },
    { src: assets.ts, name: 'TypeScript' },
    { src: assets.sql, name: 'SQL' },
    { src: assets.r, name: 'R' },
  ];

  const tools = [
    { src: assets.aws, name: 'AWS' },
    { src: assets.azure, name: 'Azure' },
    { src: assets.gcp, name: 'GCP' },
    // { src: assets.docker, name: 'Docker' },
    // { src: assets.kubernetes, name: 'Kubernetes' },
    { src: assets.firebase, name: 'Firebase' },
    { src: assets.mongodb, name: 'MongoDB' },
    { src: assets.postgresql, name: 'PostgreSQL' },
    { src: assets.chromadb, name: 'ChromaDB' },
    { src: assets.node, name: 'Node.js' },
    { src: assets.express, name: 'Express' },
    { src: assets.flask, name: 'Flask' },
    { src: assets.git, name: 'Git' },
    { src: assets.matlab, name: 'MATLAB' },
  ];

  const dependencies = [
    { src: assets.opencv, name: 'OpenCV' },
    { src: assets.tensorflow, name: 'TensorFlow' },
    { src: assets.pytorch, name: 'PyTorch' },
    { src: assets.react, name: 'React' },
    { src: assets.vue, name: 'Vue.js' },
    { src: assets.vite, name: 'Vite' },
    { src: assets.langchain, name: 'LangChain' },
    { src: assets.numpy, name: 'NumPy' },
    { src: assets.opengl, name: 'OpenGL' },
    { src: assets.stripe, name: 'Stripe' },
    { src: assets.pandas, name: 'Pandas' },
    { src: assets.matplotlib, name: 'Matplotlib' },
  ];

  const playSound = () => {
    const audio = new Audio(assets.card_sound);
    audio.play();
  }

  const to = (i, length) => ({
    x: items[i].centered ? CENTER_X : items[i].x,
    y: items[i].centered ? CENTER_Y : items[i].y,
    scale: 1,
    rot: -10 + Math.random() * 20
  })

  const [props, set] = useSprings(items.length, (i) => ({
    ...to(i, items.length),
    from: from(i),
    config: { tension: 75, friction: 12 } // animation speed
  }));

  const [breathProps, setBreath] = useSprings(items.length, (i) => ({
    scale: 1, // Initial scale
    config: { tension: 30, friction: 5 }, // Breathing speed
  }));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBreath((i) => ({
        scale: breathProps[i].scale.get() === 1 ? 1.08 : 1, // Toggle between 1 and 1.1
      }));
    }, 100); // Change the interval for breathing effect as needed

    return () => clearInterval(interval);
  }, [setBreath, breathProps]);

  const moveCard = (index) => {
    set((i) => {
      if (index === i) {
        if (cardOnTop.length !== 0 && cardOnTop[cardOnTop.length - 1].index === i && cardOnTop[cardOnTop.length - 1].cardItself.title === items[i].title) {
          setCardOnTop((prevState) => prevState.slice(0, -1));
          items[i].z = 1;
          items[i].centered = false;
          playSound();
          return { x: items[i].x, y: items[i].y, rot: -10 + Math.random() * 20, scale: 1, config: { friction: 50, tension: 450 }, delay: 0 };
        }
        if (!items[i].centered) {
          const newCard = { cardItself: items[i], index: index };
          setCardOnTop((prevState) => [...prevState, newCard]);
          setZIndex((prevZIndex) => prevZIndex + 1);
          items[i].z = zIndex;
          items[i].centered = true;
          playSound();
          return { x: CENTER_X, y: CENTER_Y, rot: -10 + Math.random() * 20, scale: 1.3, config: { friction: 50, tension: 450 }, delay: 0 };
        }
      }
      return props[i];
    });
  };

  return (
    <div className="deck-container-project">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          className={items[i].centered ? `card-center ${items[i].id}` : `card-project ${items[i].id}`}
          onClick={() => moveCard(i)}
          style={{
            transform: interpolate(
              [x, y, rot, scale, breathProps[i].scale],
              (x, y, rot, scale, breathScale) => {
                return `translate3d(${x}px, ${y}px, 0) rotateX(30deg) rotateY(${rot / 10}deg) rotateZ(${rot}deg) scale(${scale * breathScale})`;
              }
            ),
            zIndex: items[i].z,
            marginLeft: margin_left,
            marginRight: margin_right
          }}>
          <div className='card-content'>
            <a href={items[i].link} target="_blank" rel="noopener noreferrer" className={items[i].centered ? '' : 'disabled'}>
              {items[i].id === 'projects' && items[i].centered ? (
                <img src={assets.github_logo} alt="GitHub Link" style={{ marginBottom: '-0.2px' }} className='github_logo' />
              ) : (
                items[i].id === 'projects' ? <img src={assets.github_logo} alt="GitHub Link" style={{ marginBottom: '15px' }} className='github_logo' /> : <></>
              )}
            </a>
            {items[i].image !== '' ? <img src={items[i].image} alt="" style={items[i].styles} className={items[i].className} /> : <></>}
            <h2>{items[i].title}</h2>
            {items[i].id === "internships" || items[i].id === "projects" ? <p dangerouslySetInnerHTML={{ __html: items[i].display.replace(/\n/g, '<br>') }} style={{ fontStyle: 'italic', marginBottom: '-10px' }} /> : <></>}
            {items[i].id === "tools" || items[i].id === "aboutMe" || (items[i].id === "projects" && items[i].centered && isNotMobile) || (items[i].id === "internships" && items[i].centered && isNotMobile) ?
              <p dangerouslySetInnerHTML={{ __html: items[i].description.replace(/\n/g, '<br>') }} style={{ fontSize: !isNotMobile && items[i].className === 'about-me-description' ? '10px' : '14px' }} /> : <></>}
            {items[i].title === 'My Links' ?
              <div>
                <a href="https://github.com/Jai0212" target="_blank" rel="noopener noreferrer" className={items[i].centered && isNotMobile ? '' : 'disabled'}>
                  <img src={assets.github_logo} alt="GitHub Link" style={{ width: '87px', marginTop: '10px' }} className='github-logo-aboutMe my-links-images' />
                </a>
                <br />
                <a href="https://www.linkedin.com/in/jai-joshi-872726234/" target="_blank" rel="noopener noreferrer" className={items[i].centered && isNotMobile ? '' : 'disabled'}>
                  <img src={assets.linkedin_logo} alt="LinkedIn Link" style={{ width: '130px' }} className='linkedIn-logo-aboutMe my-links-images' />
                </a>
                <br />
                <a href="mailto:jj.joshijai@gmail.com" target="_blank" rel="noopener noreferrer" className={items[i].centered && isNotMobile ? '' : 'disabled'}>
                  <img src={assets.email_logo} alt="Email" style={{ width: '90px' }} className='email-logo-aboutMe my-links-images' />
                </a>
              </div> :
              <></>}
            {items[i].title === 'Languages' ?
              <div className="image-grid">
                {languages.map((item, index) => (
                  <LogoName
                    key={index}
                    logoSrc={item.src}
                    logoName={item.name}
                    isCentered={items[i].centered && isNotMobile}
                  />
                ))}
              </div> : <></>}
            {items[i].title === 'Tools' ?
              <div className="image-grid">
                {tools.map((item, index) => (
                  <LogoName
                    key={index}
                    logoSrc={item.src}
                    logoName={item.name}
                    isCentered={items[i].centered && isNotMobile}
                  />
                ))}
              </div> : <></>}
            {items[i].title === 'Dependencies' ?
              <div className="image-grid">
                {dependencies.map((item, index) => (
                  <LogoName
                    key={index}
                    logoSrc={item.src}
                    logoName={item.name}
                    isCentered={items[i].centered && isNotMobile}
                  />
                ))}
              </div> : <></>}
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default DeckProject
