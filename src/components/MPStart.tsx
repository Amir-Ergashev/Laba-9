import { useState } from "react";
import CameraTracker from "./CameraTracker";

const MPStart = () => {
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '100vh',
                gap: '1rem',
            }}
        >
            {!gameStarted ? ( 
                <>
                    <h1 style={{ fontSize: '3rem' }}>Игра на реакцию</h1>
                    <h2 style={{ fontSize: '1.5rem' }}>Добро пожаловать в игру!</h2>
                    <button
                        onClick={() => setGameStarted(true)}
                        style={{
                            padding: '0.8rem 1.5rem',
                            fontSize: '1rem',
                            backgroundColor: '#ff8c00',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        Начать
                    </button>
                </>
            ) : (
                <CameraTracker />
            )}
        </div>
    )
}

export default MPStart;