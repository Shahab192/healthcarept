/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BackSpine from './pages/Services/BackSpine';
import SportsInjury from './pages/Services/SportsInjury';
import PostSurgical from './pages/Services/PostSurgical';
import BalanceFall from './pages/Services/BalanceFall';
import ServiceArea from './pages/ServiceArea';
import Walnut from './pages/Cities/Walnut';
import CityOfIndustry from './pages/Cities/CityOfIndustry';
import Covina from './pages/Cities/Covina';
import SanDimas from './pages/Cities/SanDimas';
import DiamondBar from './pages/Cities/DiamondBar';
import WestCovina from './pages/Cities/WestCovina';
import RowlandHeights from './pages/Cities/RowlandHeights';
import Pomona from './pages/Cities/Pomona';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-paper-white text-slate-charcoal">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/back-spine" element={<BackSpine />} />
            <Route path="/services/sports-injury" element={<SportsInjury />} />
            <Route path="/services/post-surgical" element={<PostSurgical />} />
            <Route path="/services/balance-fall" element={<BalanceFall />} />
            <Route path="/service-area" element={<ServiceArea />} />
            <Route path="/cities/walnut" element={<Walnut />} />
            <Route path="/cities/city-of-industry" element={<CityOfIndustry />} />
            <Route path="/cities/covina" element={<Covina />} />
            <Route path="/cities/san-dimas" element={<SanDimas />} />
            <Route path="/cities/diamond-bar" element={<DiamondBar />} />
            <Route path="/cities/west-covina" element={<WestCovina />} />
            <Route path="/cities/rowland-heights" element={<RowlandHeights />} />
            <Route path="/cities/pomona" element={<Pomona />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
