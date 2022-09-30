import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContainerApp from './components/ContainerApp';
import DestinationsLayout from './components/destinations/DestinationsLayout';
import HomeLayout from './components/home/HomeLayout';
import PromoLayout from './components/promotions/PromoLayout';
import ContactLayout from './components/contacts/ContactLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContainerApp />}>
          <Route index element={<HomeLayout />}/>
          <Route path='destinations' element={<DestinationsLayout />}/>
          <Route path='promotions' element={<PromoLayout />} />
          <Route path='contacts' element={<ContactLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;