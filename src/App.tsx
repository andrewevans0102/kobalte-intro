import styles from './App.module.css';
import { Router, Routes, Route, Link } from '@solidjs/router';
import { lazy } from 'solid-js';

const WithoutKobalte = lazy(
    () => import('./components/WithoutKobalte/WithoutKobalte')
);
const WithKobalte = lazy(() => import('./components/WithKobalte/WithKobalte'));
const KobalteAdvanced = lazy(
    () => import('./components/KobalteAdvanced/KobalteAdvanced')
);

function App() {
    return (
        <>
            <Router>
                <div class={styles.app}>
                    <div class={styles.link}>
                        <Link href="/">Without Kobalte</Link>
                        <Link href="/kobalte">With Kobalte</Link>
                        <Link href="/kobalte-advanced">Kobalte Advanced</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<WithoutKobalte />} />
                        <Route path="/kobalte" element={<WithKobalte />} />
                        <Route
                            path="/kobalte-advanced"
                            element={<KobalteAdvanced />}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}
export default App;
