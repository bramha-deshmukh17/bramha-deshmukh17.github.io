import './ShinyText.css';

const ShinyText = ({ onClick, text, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`shiny-text ${className}`}
            style={{ animationDuration }}
            onClick={ onClick }
        >
            {text}
        </div>
    );
};

export default ShinyText;