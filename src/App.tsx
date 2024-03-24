import { HashRouter } from 'react-router-dom';
import { AppContainer, AppContent } from './App.style';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppRoutes from './routes/routes';

function App() {
    return (
        <HashRouter>
            <AppContainer>
                <Header />
                <AppContent>
                    <AppRoutes />
                </AppContent>
                <Footer />
            </AppContainer>
        </HashRouter>
    );
}

export default App;
