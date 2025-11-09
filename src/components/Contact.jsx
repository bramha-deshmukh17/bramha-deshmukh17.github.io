import '../css/Contact.css';
import ShinyText from './Animate/ShinyText';

const Contact = () => {
    const cards = [
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/bramha-deshmukh17/',
            className: 'linkedin',
            icon: 'https://cdn.lordicon.com/kpoplnek.json',
            colors: 'primary:#e4e4e4,secondary:#4bb3fd'
        },
        {
            label: 'GitHub',
            href: 'https://github.com/bramha-deshmukh17',
            className: 'github',
            icon: 'https://cdn.lordicon.com/lllcnxva.json',
            colors: 'primary:#121331,secondary:#ebe6ef,tertiary:#000000'
        },
        {
            label: 'Gmail',
            href: 'mailto:work@bramhadeshmukh.me',
            className: 'gmail',
            icon: 'https://cdn.lordicon.com/uufkkpxl.json',
            colors: 'primary:#f24c00,secondary:#e4e4e4'
        },
    ];

    return (
        <section id="contact" className="m-5 mt-5 rounded">
            <div className="contact-container justify-center items-center p-5">

                <div className="contact-grid">
                    {cards.map(card => (
                        <a
                            key={card.label}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`contact-card ${card.className}`}
                        >
                            <span className="icon-wrap">
                                <lord-icon
                                    src={card.icon}
                                    trigger="hover"
                                    colors={card.colors}
                                    style={{ width: '32px', height: '32px' }}
                                />
                            </span>
                            <span className="label">{card.label}</span>
                        </a>
                    ))}

                    <button
                        type="button"
                        className="contact-card resume"
                        onClick={() => window.open('./bramha_deshmukh_resume.pdf', '_blank')}
                        title="Open Resume"
                    >
                        <span className="icon-wrap" aria-hidden="true">
                            <lord-icon
                                src="https://cdn.lordicon.com/fjvfsqea.json"
                                trigger="hover"
                                colors="primary:#e4e4e4,secondary:#3b82f6"
                                style={{ width: '25px', height: '25px', backgroundColor: 'transparent' }}
                            />
                        </span>
                        <span className="label">
                            <ShinyText text="Resume" disabled={false} speed={1} className="home" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;