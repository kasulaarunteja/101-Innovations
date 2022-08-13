

import React from 'react';
import {Routes, Route} from "react-router-dom";
import FoodList  from '../components/FoodList';
import Single  from '../components/Single';


 const AllRoutes = () => {
    return (
        <Routes>
           <Route path="/" element={<FoodList/>}></Route>
           <Route path="/:code" element={<Single/>}></Route>
                       
        </Routes>
    );
}
export default AllRoutes;
 
