import * as React from 'react'

import {Switch, Route} from 'react-router-dom'
import { ProtectedRoute } from './components/PrivateRoute'
import {Home} from './pages/Home'
import {Login} from './pages/Login'

export const App: React.FC = () => {

  return (
    <div className="App">
      <Switch>
        <Route path="/auth/login" component={Login}/>
        <ProtectedRoute path='/' component={Home} isAuthenticated={false} redirectTo="/auth/login"/>
      </Switch>
    </div>
  )
}

export default App;