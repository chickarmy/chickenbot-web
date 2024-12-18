import styles from './styles.module.css';
import versions from "../../../data/versions.json";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function VersionEntry({locale, version, label, label_fr,
                          description, description_fr,download, note}) {
    if (version === undefined) {
        return null;
    }
    let versionDescription = locale === 'fr' ? description_fr : description;
    versionDescription = versionDescription?.replace(/\\n/g, ' ');
    let versionLabel = locale === 'fr' ? label_fr : label;
    return (
        <div className={clsx('col col--4')}>
            <div className={styles.botVersion}>
                <a href={download}>🐔 {version} - {versionLabel} 🤖</a> <a href={note}>📝</a><br/><br/>
                {versionDescription}
            </div>
        </div>
    )
}

export default function HomepageVersions() {
    const {i18n } = useDocusaurusContext();
    const currentLocale = i18n.currentLocale;
    return (
        <section className={styles.versions}>
            <div className="container">
                <div className="row">
                    {versions.map((props, idx) => (
                        <VersionEntry key={idx} locale={currentLocale} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
