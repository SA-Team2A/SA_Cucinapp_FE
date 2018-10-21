// Components
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Landing from '../components/Landing'
// import Dashboard from '../components/Dashboard'

// User status
const AUTHED = true
const UNAUTHED = false

// TODO Not found route

// Routes
export const Routes = [
  { component: Landing,
    path: '/',
    redirect: { when: AUTHED, to: '/dashboard' }
  },
  { component: SignIn,
    path: '/signin',
    redirect: { when: AUTHED, to: '/dashboard'}
  },
  { component: SignUp,
    path: '/signup',
    redirect: { when: AUTHED, to: '/dashboard'}
  },
  // { component: Dashboard,
  //   path: '/dashboard',
  //   redirect: { when: UNAUTHED, to: '/' }
  // }
]
