import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Physical AI Systems',
    description: (
      <>
        Build intelligent robotic systems that interact with the physical world through 
        advanced sensors, actuators, and real-time processing capabilities for autonomous operation.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics',
    description: (
      <>
        Develop human-like robots with bipedal locomotion, dexterous manipulation capabilities, 
        and natural human-robot interaction for versatile real-world applications.
      </>
    ),
  },
  {
    title: 'Embodied Intelligence',
    description: (
      <>
        Implement AI that learns through physical interaction, combining perception, cognition, 
        and action in unified platforms for adaptive and responsive robotic behavior.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
