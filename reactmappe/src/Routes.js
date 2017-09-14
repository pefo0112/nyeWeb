import React from 'react'
import SidebarTopPush from './SidebarTopOverlay'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import App from "./App"
import Bilder from "./Bilder"
const Routes = () => (
    <Router>
        <div>
            <Sidebar as={Menu} animation='push' direction='top' visible="true" inverted>
                <Link to="/"><Menu.Item name='home'>
                    <Icon name='home' />
                    Hjem
                </Menu.Item></Link>
                <Link to="/Bilder"><Menu.Item name='camera'>
                    <Icon name='camera' />
                    Bilder
                </Menu.Item></Link>
                <Menu.Item name='camera'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
            </Sidebar>
            <p>



            </p>
            <Route exact path="/" component={App}/>
            <Route path="/Bilder" component={Bilder}/>
            <Route path="/aa" component={SidebarTopPush}/>
        </div>
    </Router>

)
export default Routes