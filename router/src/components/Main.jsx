 

import { Route, Routes} from 'react-router-dom'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import Home from './Home'



function Main () {
    const userName = "user123"

    return (
        <div className="Main">
            <Routes>
                <Route path='/componentA' element={<ComponentA/>} />
                <Route path='/componentB' element={<ComponentB/>} />
                <Route path='/' element={<Home username={userName}/>}/>
            </Routes>
        </div>
    )
}

export default Main