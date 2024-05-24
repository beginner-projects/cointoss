import './index.css';

interface RedProps {
    RedButtonText: string;
}

export default function RedButton({ RedButtonText }: RedProps) {
    return (
        <button className="red-button" type="button">
            {RedButtonText}
        </button>
    );
}
