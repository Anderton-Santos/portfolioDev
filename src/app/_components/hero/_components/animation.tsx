"use client"
import styles from './animation.module.css';

const logos = [
  '/html5.png',
  '/css3.png',
  '/javascript.png',
  '/typescript.png',
  '/react.png',
  '/nextdotjs.png',
  '/nodedotjs.png',
  '/express.png',
  '/git.png',
  '/github.png',
  '/mongodb.png',
  '/postgresql.png',
  '/firebase.png',
];

const logosLine1 = logos.slice(0, 8);
const logosLine2 = logos.slice(8);

export function TechLogosMarquee() {
  return (
    <div className={styles.marqueeWrapper}>
      
      {/* Linha 1 */}
      <div>
        <div className={styles.marquee}>
          {[...Array(2)].map((_, i) => (
            <div className={styles.logoRow} key={`line1a-${i}`}>
              {logosLine1.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Tech logo"
                  className={styles.logo}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Linha 2 */}
      <div>
        <div className={styles.marquee}>
          {[...Array(2)].map((_, i) => (
            <div className={styles.logoRow} key={`line2a-${i}`}>
              {logosLine2.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Tech logo"
                  className={styles.logo}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Linha 3 (mesma que Linha 1) */}
      <div>
        <div className={styles.marquee}>
          {[...Array(2)].map((_, i) => (
            <div className={styles.logoRow} key={`line1b-${i}`}>
              {logosLine1.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Tech logo"
                  className={styles.logo}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Linha 4 (mesma que Linha 2) */}
      <div>
        <div className={styles.marquee}>
          {[...Array(2)].map((_, i) => (
            <div className={styles.logoRow} key={`line2b-${i}`}>
              {logosLine2.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Tech logo"
                  className={styles.logo}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

            <div>
        <div className={styles.marquee}>
          {[...Array(2)].map((_, i) => (
            <div className={styles.logoRow} key={`line1b-${i}`}>
              {logosLine1.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Tech logo"
                  className={styles.logo}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Linha 4 (mesma que Linha 2) */}
      <div>
        <div className={styles.marquee}>
          {[...Array(2)].map((_, i) => (
            <div className={styles.logoRow} key={`line2b-${i}`}>
              {logosLine2.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Tech logo"
                  className={styles.logo}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
