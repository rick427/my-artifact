import { Button } from '@richardnjoku/ui-kit';

export default function App() {
    return (
        <div style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
            <h1>🧪 UI Kit Demo</h1>
            <Button onClick={() => alert('Button works!')}>Click Me</Button>
        </div>
    );
}
