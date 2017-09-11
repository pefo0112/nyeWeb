import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import App from "./App"
import Bilder from "./Bilder"
const Routes = () => (

    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/Bilder" component={Bilder}/>
        </div>
    </Router>

)
export default Routes