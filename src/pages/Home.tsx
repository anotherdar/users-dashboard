import * as React from 'react'
import {Switch, Route} from 'react-router-dom'

//components
import {Container, Header, Sidebar, Content} from '../components'

import { HomeRoutes } from  "../routes/HomeRoutes"


export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <Content>
                    <Switch>
                        {
                            HomeRoutes.map(i => {
                                return (
                                    <Route key={i.path} path={i.path} component={i.component}/>
                                )
                            })
                        }
                    </Switch>
                </Content>
            </Container>
        </>
    )
}