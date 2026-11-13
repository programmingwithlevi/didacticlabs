import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import RaceCarSvg from '@site/static/img/race-car.svg';
import Link from '@docusaurus/Link'; 

const FeatureList = [
  {
    title: 'Socratically Taught',
    Svg: require('@site/static/img/EmojioneFlashlight.svg').default,
    description: (
      <>
        Exhausted by video lectures? Didactic Cloud empowers a path of self-discovery.
      </>
    ),
  },
  {
    title: 'Written by Humans',
    Svg: require('@site/static/img/EmojioneWritingHand.svg').default,
    description: (
      <>
        Enjoy mental clarity without LLM hallucinations. Answer your own questions quickly and concisely. 
      </>
    ),
  },
  {
    title: 'An Unfair Advantage',
    Svg: require('@site/static/img/EmojioneCloudWithLightning.svg').default,
    description: (
      <>
       Learn faster and build superior skills in reading comprehension, specific for AWS.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">

     
        {/* Added Section Title Above the Grid */}
        <div className="text--center margin-bottom--lg">
          <Heading as="h1" className={styles.sectionTitle}>
            AWS tutorials, <span className={styles.accentText}> in a higher gear. 🔥</span>
          </Heading>
        </div>
        <Link to="docs/intro" className={styles.goButton}>
            Go!
          </Link>
        <div className="text--center margin-bottom--md">
          <RaceCarSvg className={styles.heroCarGraphic} role="img" />
        </div>
        
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


