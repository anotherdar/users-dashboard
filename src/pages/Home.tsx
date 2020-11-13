import * as React from 'react'
import {Switch, Route} from 'react-router-dom'

//components
import {Container, Header, Sidebar, Content} from '../components'

//views
import {UserCreator, Users} from '../features/users'

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <Content>
                    <Switch>
                        <Route path="/user_creator" component={UserCreator}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/" render={() => <h1>Wellcome back</h1>}/>
                    </Switch>
                </Content>
            </Container>
        </>
    )
}