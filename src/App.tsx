import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import EquipePage from "./pages/EquipePage";
import EquipeDetailPage from "./pages/EquipeDetailPage";
import CatalogueIndemnisationPage from "./pages/CatalogueIndemnisationPage";
import IndemnisationDetailPage from "./pages/IndemnisationDetailPage";
import ActualitesPage from "./pages/ActualitesPage";
import ActualiteDetailPage from "./pages/ActualiteDetailPage";
import ContactPage from "./pages/ContactPage";
import CabinetPage from "./pages/CabinetPage";
import ContentieuxPage from "./pages/ContentieuxPage";
import "./index.css";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/le-cabinet" element={<CabinetPage />} />

        <Route path="/notre-equipe" element={<EquipePage />} />
        <Route path="/equipe/:slug" element={<EquipeDetailPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route
          path="/indemnisation-du-dommage-corporel"
          element={<CatalogueIndemnisationPage />}
        />
        <Route
          path="/indemnisation/:slug"
          element={<IndemnisationDetailPage />}
        />

        <Route path="/contentieux" element={<ContentieuxPage />} />

        <Route path="/actualites-juridiques" element={<ActualitesPage />} />
        <Route path="/actualites/:slug" element={<ActualiteDetailPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
