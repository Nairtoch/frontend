import { Routes, Route } from 'react-router-dom';
import { About } from '../Pages/About';
import { Contact } from '../Pages/Contact';
import Homepage from '../Pages/Home';
import { Restaurants } from '../Pages/Restaurants';

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/home' index element={<Homepage />} />
            <Route path='/restaurants' element={<Restaurants />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}