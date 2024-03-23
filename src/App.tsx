import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppRoutes from './routes/routes';

function App() {
    return (
        <Router basename='/pets-web'>
            <Header />
            <AppRoutes />
            <Footer />
        </Router>
    );
}

export default App;
