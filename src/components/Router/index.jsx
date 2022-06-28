import { Routes, Route } from 'react-router-dom'

import Main from '../../pages/Main/'
import Item from '../../pages/Item/'

function RoutesComp() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path=":idParam" element={<Item />}></Route>
        </Routes>
    );
}

export default RoutesComp;