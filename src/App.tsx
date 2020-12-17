import * as React from 'react'
import { useSelector } from 'react-redux'

import { Switch, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/PrivateRoute'
import { selectLogin } from './features/login/loginSlice'
import { SmallScreens } from "./pages/smallScreens"
//pages
import { Home, Login } from './pages/'
import { useWindowSize } from './hooks/useWindowSize'

export const App: React.FC = () => {
  const loginState = useSelector(selectLogin)
  const size = useWindowSize()

  if (size.width! < 1024) return <SmallScreens />

  return (
    <div className="App">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <ProtectedRoute path='/' component={Home} isAuthenticated={loginState.isAuth} redirectTo="/auth/login" />
      </Switch>
    </div>
  )
}

export default App;