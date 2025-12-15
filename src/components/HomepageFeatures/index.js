import React from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI-Powered Humanoid Control',
    icon: '🤖',
    description: (
      <>
        Advanced neural networks and reinforcement learning algorithms 
        enabling seamless human-like movements, balance, and real-time 
        environmental adaptation for bipedal locomotion.
      </>
    ),
  },
  {
    title: 'Sensor Fusion & Perception',
    icon: '👁️',
    description: (
      <>
        Multi-modal sensor integration combining vision, LiDAR, IMU, and 
        tactile sensors for comprehensive environmental awareness and 
        intelligent decision-making in dynamic scenarios.
      </>
    ),
  },
  {
    title: 'Real-time Motion Planning',
    icon: '⚡',
    description: (
      <>
        High-frequency trajectory optimization and predictive control 
        systems ensuring stable gait patterns, obstacle avoidance, and 
        energy-efficient movement in unstructured environments.
      </>
    ),
  },
  {
    title: 'Cognitive Architecture',
    icon: '🧠',
    description: (
      <>
        Hierarchical cognitive frameworks integrating symbolic reasoning 
        with deep learning for task planning, human interaction, and 
        autonomous problem-solving capabilities.
      </>
    ),
  },
  {
    title: 'Hardware-Software Co-design',
    icon: '🔧',
    description: (
      <>
        Custom actuator systems, lightweight materials, and embedded 
        computing optimized for power efficiency, durability, and 
        performance in real-world applications.
      </>
    ),
  },
  {
    title: 'Human-Robot Collaboration',
    icon: '🤝',
    description: (
      <>
        Intuitive communication interfaces, safety protocols, and 
        collaborative task execution enabling seamless integration 
        with human teams across industrial and service domains.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconContainer}>
          <span className={styles.featureIcon}>{icon}</span>
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                Core Technologies & Capabilities
              </Heading>
              <p className={styles.sectionSubtitle}>
                Building the next generation of intelligent humanoid systems 
                through cutting-edge research and engineering
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <div className="col col--12">
            <div className={styles.ctaContainer}>
              <p className={styles.ctaText}>
                Join us in shaping the future of embodied intelligence and 
                humanoid robotics
              </p>
              <div className={styles.ctaButtons}>
                <a
                  className="button button--primary button--lg"
                  href="/docs/intro"
                >
                  Explore Documentation
                </a>
                <a
                  className="button button--outline button--lg"
                  href="/research"
                >
                  View Research Papers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
