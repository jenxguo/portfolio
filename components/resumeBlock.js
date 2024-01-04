import styles from '../styles/resume.module.css';

export default function ResumeBlock({ content }) {
  return (
    <div className="card" style={{width: '95%', borderColor: 'black'}}>
        <div className="card-body">
                {content.team ? <h5 className="card-title">{content.companyName}</h5> : <a  target='_blank' href={content.link}><h5 className="card-title">{content.companyName}</h5></a>}
            <div className={styles.row}>
                <h6 className="card-subtitle mb-2 text-muted">{content.role}</h6>
                {content.team ? <a target='_blank' href={content.link}><h6 className="card-subtitle mb-2" style={{color: 'blue'}}>{`Team: ${content.team}`}</h6></a> : <></>}
            </div>

            <p className="card-text">{content.description}</p>
            {content.tags.map((tag, i) => (
                <span key={i} className={['badge', 'badge-pill', 'badge-primary', styles.badge].join(' ')}>{tag}</span>
            ))}
        </div>
    </div>

  );
}