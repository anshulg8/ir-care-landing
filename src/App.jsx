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
import ContactFloatingButton from './components/ContactFloatingButton';
import { ModalProvider } from './context/ModalContext';
import ProstateQuizPage from './components/ProstateQuizPage';
import FibroidQuizPage from './components/FibroidQuizPage';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <ContactFloatingButton />
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/prostatic-artery-embolization-pae" element={<ProstateQuizPage />} />
          <Route path="/quiz/uterine-fibroid-embolization-ufe" element={<FibroidQuizPage />} />
          <Route path="/quiz/hemorrhoidal-artery-embolization-hae" element={<ProstateQuizPage />} />
          <Route path="/quiz/okuno-procedure-tam" element={<ProstateQuizPage />} />
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
      </ModalProvider>
    </Layout>
  );
}

export default App;
