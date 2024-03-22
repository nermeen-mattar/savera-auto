import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PetsPage from './pages/pets-page/PetsPage';

const PetDetailsPage = () => <div>Pet Details Page Placeholder</div>;

function App() {
    return (
        <Router>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<PetsPage />} />
                    <Route path="/pet/:id" element={<PetDetailsPage />} />
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

export default App;
