import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { domains } from '../data/domains';

const DomainDetail = () => {
    const { id } = useParams();
    const domain = domains.find(d => d.id === id);

    if (!domain) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
                <h2>Domain not found</h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="detail-header">
                <Link to="/" className="btn btn-outline" style={{ marginBottom: '1rem' }}>← Back</Link>
                <h1>{domain.title}</h1>
                <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{domain.description}</p>
            </div>

            {/* About Section */}
            {domain.about && (
                <section className="info-section">
                    <h2 className="section-title">About the Stream</h2>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{domain.about}</p>
                </section>
            )}

            <div className="detail-grid">
                {/* Roadmap Section */}
                <div className="info-box">
                    <h3 className="section-title">Roadmap</h3>

                    {domain.pdfUrl && (
                        <a href={domain.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            justifyContent: 'center',
                            width: 'fit-content'
                        }}>
                            <span style={{ fontSize: '1.2em' }}>📄</span> Download Detailed Roadmap PDF
                        </a>
                    )}

                    {domain.roadmap ? (
                        <ol className="roadmap-list">
                            {domain.roadmap.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    ) : <p>Roadmap coming soon...</p>}
                </div>

                {/* Tools Section */}
                <div className="info-box">
                    <h3 className="section-title">Tools Needed</h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                        {domain.toolsText || "Tools information loading..."}
                    </p>

                    <h4 style={{ marginBottom: '0.5rem' }}>Key Technologies</h4>
                    <div className="tag-container" style={{ marginBottom: '1.5rem' }}>
                        {domain.languages && domain.languages.map((lang, i) => (
                            <span key={i} className="tag">{lang}</span>
                        ))}
                    </div>

                    <h4 style={{ marginBottom: '0.5rem' }}>Environment</h4>
                    <div className="tag-container">
                        {domain.environment && domain.environment.map((env, i) => (
                            <span key={i} className="tag" style={{ background: '#334155', color: '#f8fafc' }}>{env}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="detail-grid">
                {/* Projects - Only show if data exists */}
                {(domain.miniProjects || domain.projects) && (
                    <div className="info-box">
                        <h3 className="section-title">Mini Project Ideas</h3>
                        {domain.miniProjects ? (
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                {domain.miniProjects.map((proj, i) => (
                                    <li key={i} className="project-idea-item">
                                        <span style={{ color: 'var(--secondary)', marginRight: '8px' }}>⚡</span>
                                        {proj}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            // Fallback to old projects structure if miniProjects is missing
                            domain.projects && domain.projects.map((proj, i) => (
                                <div key={i} className="project-card">
                                    <div className="project-level">{proj.level}</div>
                                    <div style={{ fontWeight: 'bold' }}>{proj.title}</div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* ATS Checkers - Specific for ATS domain */}
                {domain.atsCheckers && (
                    <div className="info-box">
                        <h3 className="section-title">ATS Checkers</h3>
                        <div style={{ marginBottom: '2rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {domain.atsCheckers.map((checker, i) => (
                                    <li key={i} style={{ marginBottom: '8px' }}>
                                        <a
                                            href={checker.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'flex',
                                                gap: '10px',
                                                padding: '10px',
                                                background: 'rgba(255,255,255,0.05)',
                                                borderRadius: '6px',
                                                textDecoration: 'none',
                                                color: 'var(--text-color)',
                                                alignItems: 'center',
                                                transition: 'background 0.2s'
                                            }}
                                            className="cert-link"
                                        >
                                            <span style={{ fontSize: '1.2em' }}>✅</span>
                                            <span style={{ fontWeight: 500 }}>{checker.name}</span>
                                            <span style={{ marginLeft: 'auto', opacity: 0.7 }}>↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Certifications & Jobs - Hide if ATS Checkers are present (or if empty) */}
                {(!domain.atsCheckers && (domain.certifications || domain.jobs)) && (
                    <div className="info-box">
                        <h3 className="section-title">Career & Certifications</h3>

                        {domain.certifications && (
                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ marginBottom: '0.5rem' }}>MindLuster Certifications</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {domain.certifications.map((cert, i) => (
                                        <li key={i} style={{ marginBottom: '8px' }}>
                                            <a
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    gap: '10px',
                                                    padding: '10px',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    borderRadius: '6px',
                                                    textDecoration: 'none',
                                                    color: 'var(--text-color)',
                                                    alignItems: 'center',
                                                    transition: 'background 0.2s'
                                                }}
                                                className="cert-link"
                                            >
                                                <span style={{ fontSize: '1.2em' }}>🏅</span>
                                                <span style={{ fontWeight: 500 }}>{cert.name || cert}</span>
                                                <span style={{ marginLeft: 'auto', opacity: 0.7 }}>↗</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {domain.jobs && (
                            <>
                                <h4 style={{ marginBottom: '0.5rem' }}>Job Roles</h4>
                                <div className="tag-container">
                                    {domain.jobs.map((job, i) => (
                                        <span key={i} className="tag" style={{ background: 'rgba(236, 72, 153, 0.1)', color: 'var(--secondary)' }}>
                                            {job}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>

            {/* Resources Section */}
            <div className="info-box" style={{ marginTop: '0' }}>
                <h3 className="section-title">Additional Resources</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>YouTube Channels</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {domain.youtube && domain.youtube.map((yt, i) => (
                                <a key={i} href={yt.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                                    ▶ {yt.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Websites</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {domain.websites && domain.websites.map((web, i) => (
                                <a key={i} href={web.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                                    🌐 {web.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DomainDetail;
