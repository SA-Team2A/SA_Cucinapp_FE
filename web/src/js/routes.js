// Components
import Home from '../components/home/Home'
import SignUp from '../components/auth/SignUp'
import SignIn from '../components/auth/SignIn'
import Landing from '../components/landing/Landing'
import Profile from '../components/profile/Profile'
import Recipe from '../components/recipes/Recipe'
import RecipeForm from '../components/recipes/RecipeForm'
import RecipesList from '../components/recipes/RecipesList'

// User status
const AUTHED = true
const UNAUTHED = false

// TODO Not found route

// Routes
export const Routes = [
  { component: Landing,
    path: '/',
    redirect: { when: AUTHED, to: '/home' }
  },
  { component: SignIn,
    path: '/signin',
    redirect: { when: AUTHED, to: '/home'}
  },
  { component: SignUp,
    path: '/signup',
    redirect: { when: AUTHED, to: '/home'}
  },
  { component: Home,
    path: '/home',
    redirect: { when: UNAUTHED, to: '/' }
  },
  { component: Profile,
    path: '/profile/:param?',
    redirect: { when: UNAUTHED, to: '/signin' }
  },
  { component: RecipeForm,
    path: '/new_recipe',
    redirect: { when: AUTHED, to: '/' } //UNAUTHED
  },
  { component: RecipesList,
    path: '/ruta_falsa',
    redirect: { when: AUTHED, to: '/'} //UNAUTHED
  },
  { component: Recipe,
    path: '/recipe/:param',
    redirect: { when: AUTHED, to: '/'} //UNAUTHED
  }
]
