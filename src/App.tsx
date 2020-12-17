import * as React from 'react'
import { useSelector } from 'react-redux'

import {Switch, Route} from 'react-router-dom'
import { ProtectedRoute } from './components/PrivateRoute'
import { selectLogin } from './features/login/loginSlice'

//pages
import {Home, Login} from './pages/'

export const App: React.FC = () => {
  const loginState = useSelector(selectLogin)
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/auth/login" component={Login}/>
        <ProtectedRoute path='/' component={Home} isAuthenticated={loginState.isAuth} redirectTo="/auth/login"/>
      </Switch>
    </div>
  )
}

export default App;