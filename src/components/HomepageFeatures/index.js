import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const FeatureList = [
    {
        // Img: {"src": 'img/chickenbot-social-card.gif', "alt": "Build your own bot"},
        Svg: require('@site/static/img/svg-io-minecraft-golem-bot2.svg').default,
        title: 'Build your own bot',
        title_fr: 'Construisez votre propre bot',
        description: (
            <>
                Chicken bot was designed for helping minecraft players to
                design and build their own bot.
            </>
        ),
        description_fr: (
            <>
                Chicken Bot a été conçu pour aider les joueurs de Minecraft à
                concevoir et à construire leur propre bot.
            </>
        ),
    },
    {
        Svg: require('@site/static/img/svg-io-minecraft-golem-bot.svg').default,
        title: 'Impress your friends with your robot',
        title_fr: 'Impressionne tes amis avec ton robot',
        description: (
            <>
                With Chicken-bot, make other players react with unusual and funny behaviors
            </>
        ),
        description_fr: (
            <>
                Avec Chicken-bot, fait réagir les autres joueurs avec des comportements insolites et amusants !
            </>
        ),
    },
    {
        Svg: require('@site/static/img/svg-io-minecraft-herobrine-and-gollem.svg').default,
        title: 'In boost of adventure',
        title_fr: 'En boost d’aventure',
        description: (
            <>
                With Chicken-bot, expand the horizon of your Minecraft adventures
                by exploring new automated and fascinating worlds!
            </>
        ),
        description_fr: (
            <>
                Avec Chicken-bot, élargissez l'horizon de vos aventures
                Minecraft en explorant de nouveaux mondes automatisés et fascinants !
            </>
        ),
    }
];

function Feature({locale, Svg, Img, title, title_fr, description, description_fr}) {
    const titleToShow = locale === 'fr' ? title_fr : title;
    const descriptionToShow = locale === 'fr' ? description_fr : description;
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {Svg && (<Svg className={styles.featureSvg} role="img"/>)}
                {Img && (<img src={Img.src} alt={Img.alt}/>)}
            </div>
            <div className="text--center padding-horiz--md">
                {title && (<Heading as="h3">{titleToShow}</Heading>)}
                <p>{descriptionToShow}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    const {i18n } = useDocusaurusContext();
    const currentLocale = i18n.currentLocale;
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} locale={currentLocale} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
