import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageVersions from "../components/HomepageVersions";
import versions from "../../data/versions.json";

const maxVersion = array => array.reduce((maxObj, obj) => {
    return compareVersions(obj.version, maxObj.version) > 0 ? obj : maxObj;
}, array[0]);

function compareVersions(v1, v2) {
    const v1Parts = v1.split('.').map(Number);
    const v2Parts = v2.split('.').map(Number);

    for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
        const num1 = v1Parts[i] || 0; // 0 si undefined
        const num2 = v2Parts[i] || 0; // 0 si undefined
        if (num1 !== num2) {
            return num1 - num2; // Retourne la différence
        }
    }
    return 0; // Égalité
}

function HomepageHeader() {
    const {siteConfig,i18n} = useDocusaurusContext();
    const locale = i18n.currentLocale;
    const lastVersion = maxVersion(versions);
    let downloadLabel = locale === 'fr' ? "Télécharger " : "Download ";
    let versionLabel = locale === 'fr' ? lastVersion?.label_fr : lastVersion?.label;
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                { lastVersion && (
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to={lastVersion.download}>
                            {downloadLabel} Chickenbot {versionLabel}
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (<>
            <Layout
                title={`Hello from ${siteConfig.title}`}
                description="Chickenbot description for meta tag in <head />">
                <main>
                    <HomepageFeatures/>
                    <HomepageHeader/>
                    <HomepageVersions/>
                </main>
            </Layout>
        </>
    );
}
