import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        Img: {"src": '/img/chickenbot-social-card.gif', "alt": "Build your own bot"},
        title: 'Build your own bot',
        description: (
            <>
                Chicken bot was designed for helping minecraft players to
                design and build their own bot.
            </>
        ),
    },
    {
        title: 'Blah',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Blah blah blah.
            </>
        ),
    },
    {
        title: 'Blah Blah',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Blah blah blah.
            </>
        ),
    },
];

function Feature({Svg, Img, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {Svg && (<Svg className={styles.featureSvg} role="img"/>)}
                {Img && (<img src={Img.src} alt={Img.alt}/>)}
            </div>
            <div className="text--center padding-horiz--md">
                {title && (<Heading as="h3">{title}</Heading>)}
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
