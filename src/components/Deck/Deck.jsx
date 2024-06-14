import React from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import './Deck.css'
import { assets } from '../../assets/assets'

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

  const languages_images = [
    assets.python,
    assets.java,
    assets.js,
    assets.c,
    assets.c_plus,
    assets.c_hash,
    assets.html,
    assets.css,
    assets.ts,
    assets.sql,
  ];

  const tools_images = [
    assets.aws,
    assets.azure,
    assets.gcp,
    assets.docker,
    assets.kubernetes,
    assets.git,
    assets.node,
    assets.express,
    assets.flask,
    assets.mongodb,
    assets.react,
    assets.matlab,
  ];

  const libraries_images = [
    assets.opencv,
    assets.tensorflow,
    assets.pytorch,
    assets.langchain,
    assets.vite,
    assets.numpy,
    assets.stripe,
    assets.matplotlib,
    assets.pandas,
    assets.opengl,
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

  const [props, set] = useSprings(items.length, (i) => ({ ...to(i, items.length), from: from(i) }))

  const moveCard = (index) => {
    set((i) => {
      if (index === i) {
        if (cardOnTop.length !== 0 && cardOnTop[cardOnTop.length - 1].index === i && cardOnTop[cardOnTop.length - 1].cardItself.title === items[i].title) {
          setCardOnTop((prevState) => prevState.slice(0, -1));
          items[i].z = 1;
          items[i].centered = false;
          playSound();
          return { x: items[i].x, y: items[i].y, rot: -10 + Math.random() * 20, scale: 1, config: { friction: 50, tension: 800 }, delay: 0 };
        }
        if (!items[i].centered) {
          const newCard = { cardItself: items[i], index: index };
          setCardOnTop((prevState) => [...prevState, newCard]);
          setZIndex((prevZIndex) => prevZIndex + 1);
          items[i].z = zIndex;
          items[i].centered = true;
          playSound();
          return { x: CENTER_X, y: CENTER_Y, rot: -10 + Math.random() * 20, scale: 1.3, config: { friction: 50, tension: 800 }, delay: 0 };
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
            transform:
              x && y && rot && scale ?
                interpolate([x, y, rot, scale], (x, y, rot, scale) => {
                  return `translate3d(${x}px,${y}px,0) rotateX(30deg) rotateY(${rot / 10}deg) rotateZ(${rot}deg) scale(${scale})`
                })
                : undefined,
            zIndex: items[i].z,
            marginLeft: margin_left,
            marginRight: margin_right
          }}>
          <div>
            <a href={items[i].link} target="_blank" rel="noopener noreferrer" className={items[i].centered ? '' : 'disabled'}>
              {items[i].id === 'projects' ? (
                <img src={assets.github_logo} alt="GitHub Link" style={{ marginBottom: '-1px' }} />
              ) : (
                <></>
              )}
            </a>
            {items[i].image !== '' ? <img src={items[i].image} alt="" style={items[i].styles} /> : <></>}
            <h2>{items[i].title}</h2>
            {items[i].id === "internships" || items[i].id === "projects" ? <p dangerouslySetInnerHTML={{ __html: items[i].display.replace(/\n/g, '<br>') }} style={{ fontStyle: 'italic', marginBottom: '-10px' }} /> : <></>}
            {items[i].id === "tools" || items[i].id === "aboutMe" || (items[i].id === "projects" && items[i].centered) || (items[i].id === "internships" && items[i].centered) ?
              <p dangerouslySetInnerHTML={{ __html: items[i].description.replace(/\n/g, '<br>') }} /> : <></>}
            {items[i].title === 'My Links' ?
              <div>
                <a href="https://github.com/Jai0212" target="_blank" rel="noopener noreferrer" className={items[i].centered ? '' : 'disabled'}>
                  <img src={assets.github_logo} alt="GitHub Link" style={{ width: '80px', marginTop: '10px' }} />
                </a>
                <br />
                <a href="https://www.linkedin.com/in/jai-joshi-872726234/" target="_blank" rel="noopener noreferrer" className={items[i].centered ? '' : 'disabled'}>
                  <img src={assets.linkedin_logo} alt="LinkedIn Link" style={{ width: '120px' }} />
                </a>
                <br />
                <a href="mailto:jj.joshijai@gmail.com" target="_blank" rel="noopener noreferrer" className={items[i].centered ? '' : 'disabled'}>
                  <img src={assets.email_logo} alt="Email" style={{ width: '90px' }} />
                </a>
              </div> :
              <></>}
            {items[i].title === 'Languages' ?
              <div className="image-grid">
                {languages_images.map((image, index) => (
                  <img key={index} src={image} alt="" className="image-item" />
                ))}
              </div> : <></>}
            {items[i].title === 'Tools' ?
              <div className="image-grid">
                {tools_images.map((image, index) => (
                  <img key={index} src={image} alt="" className="image-item" />
                ))}
              </div> : <></>}
            {items[i].title === 'Libraries' ?
              <div className="image-grid">
                {libraries_images.map((image, index) => (
                  <img key={index} src={image} alt="" className="image-item" />
                ))}
              </div> : <></>}
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default DeckProject
