import "./Score.css";

export default function Score({ text, score }) {
    return (
        <div className="score-container pixel-corners">
            <h3>
                {text}: {score}
            </h3>
        </div>
    );
}
