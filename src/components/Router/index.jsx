import { Routes, Route } from 'react-router-dom'

import Main from '../../pages/Main/'
import Item from '../../pages/Item/'

import Main2 from '../../pages/Main2/'
import Item2 from '../../pages/Item2/'

function RoutesComp() {
    return (
        <Routes>
            <Route path="/conditioners" element={<Main />}></Route>
            <Route path="/conditioners/:idParam" element={<Item />}></Route>

            <Route path="/bins" element={<Main2 />}></Route>
            <Route path="/bins/:idParam" element={<Item2 />}></Route>
        </Routes>
    );
}

export default RoutesComp;