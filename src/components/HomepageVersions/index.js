import styles from './styles.module.css';
import versions from "../../../data/versions.json";
import clsx from "clsx";

function VersionEntry({label, download, note, description, version}) {
    return (
        <div className={clsx('col col--4')}>
            <div className={styles.botVersion}>
                <a href={download}>🐔 {version} - {label} 🤖</a><br/><br/>
                {description}
            </div>
        </div>
    )
}

export default function HomepageVersions() {
    return (
        <section className={styles.versions}>
            <div className="container">
                <div className="row">
                    {versions.map((props, idx) => (
                        <VersionEntry key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
