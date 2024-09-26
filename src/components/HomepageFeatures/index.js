import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '学习工具',
    Svg: require('@site/static/img/technology.svg').default,
    description: (
      <>
        探索和掌握新工具，详细记录学习过程，构建个人知识体系
      </>
    ),
  },
  {
    title: '记录问题',
    Svg: require('@site/static/img/notes.svg').default,
    description: (
      <>
        记录在学习和工作中遇到的各种问题及其解决方案，方便日后查阅和复盘
      </>
    ),
  },
  {
    title: '知识管理',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
        通过知识管理系统，整理和归类各种信息，构建个人知识库，提高学习效率和工作效率
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
