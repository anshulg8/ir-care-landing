import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProcedureDetailPage from './components/ProcedureDetailPage';
import DoctorListPage from './components/DoctorListPage';
import IRApplications from './components/IRApplications';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import ProceduresPage from './components/ProceduresPage';
import CentresPage from './components/CentresPage';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import InterventionalRadiology from './components/InterventionalRadiology';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedures/:procedureId" element={<ProcedureDetailPage />} />
        <Route path="/doctors" element={<DoctorListPage />} />
        <Route path="/ir-applications" element={<IRApplications />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/procedures" element={<ProceduresPage />} />
        <Route path="/centres" element={<CentresPage />} />
        <Route path="/interventional-radiology" element={<InterventionalRadiology />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Layout>
  );
}

export default App;
