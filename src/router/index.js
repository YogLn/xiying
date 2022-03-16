import React from 'react'
import { Redirect  } from 'react-router-dom'

const Home = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/home'))
const Activity = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/activity'))
const Discover = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/discover'))
const About = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/about'))
const Ranking = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/ranking'))
const Login = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/login/login'))
const Register = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/login/register'))

const routes = [
	{
		path: '/',
		exact: true,
		render: () => <Redirect to='/home' element={<Home/>} />
	},
	{
    path: '/home',
    component: Home
  },
	{
    path: '/activity',
    component: Activity
  },
	{
    path: '/discover',
    component: Discover
  },
	{
    path: '/about',
    component: About
  },
	{
    path: '/ranking',
    component: Ranking
  },
	{
    path: '/register',
    component: Register
  },
	{
    path: '/login',
    component: Login
  },
	
]


export default routes