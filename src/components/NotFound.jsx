import { useLocation, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <section
            className="mt-10 pt-10 flex flex-col items-center justify-center text-center"
            style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
        >
            <h1 className="text-6xl font-extrabold" style={{ color: 'red' }}>404</h1>
            <p className="mt-3 text-lg">We couldn't find “{pathname}”.</p>
            <div className="mt-6 flex gap-3">
                <button
                    className="px-4 py-2 rounded"
                    style={{ backgroundColor: 'var(--btn-color)', color: 'var(--btn-text)' }}
                    onClick={() => navigate('/')}
                >
                    Go Home
                </button>
                <button
                    className="px-4 py-2 rounded border"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        </section>
    );
};

export default NotFound;