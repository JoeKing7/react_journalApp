import React from 'react'
import { Route, Switch } from 'react-router-dom'
import JournalPage from '../components/journal/JournalPage'
import Navbar from '../components/nav/Navbar'

const DashboardRouters = () => {
    return (
        <div className="dashboard_background">
            <div className="dashboard_content">
                <Switch>
                    <Route exact path="/" component={JournalPage}></Route>
                </Switch>
            </div>
            <Navbar></Navbar>
        </div>
    )
}

export default DashboardRouters
