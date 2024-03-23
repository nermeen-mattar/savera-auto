import { Navigate, Route, Routes } from 'react-router-dom';
import PetProfile from '../pages/pet-profile/PetProfile';
import PetsPage from '../pages/pets-page/PetsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/pets" replace />} />
            <Route path="/pets" element={<PetsPage />} />
            <Route path="/pets/:id" element={<PetProfile />} />
            <Route path="*" element={<Navigate to="/pets" replace />} />
        </Routes>
    );
}

export default AppRoutes;
