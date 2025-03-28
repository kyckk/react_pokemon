import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Detail from '../pages/detail';

const Routing= ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Detail/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routing;