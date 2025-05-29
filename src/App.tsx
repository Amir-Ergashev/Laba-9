import MPStart from './components/MPStart';

function App() {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1a1a1a',
                color: 'white',
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            <MPStart />
        </div>
    )
}

export default App;