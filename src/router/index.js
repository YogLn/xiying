import React from 'react'
import { Redirect  } from 'react-router-dom'

const Home = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/home'))
const Activity = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/activity'))
const Discover = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/discover'))
const About = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/about'))
const Ranking = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/ranking'))
const Work = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/ranking/work'))
const User = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/ranking/user'))


const Login = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/login/login'))
const Register = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/login/register'))
const Moment = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/discover/moment'))
const My = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/discover/my'))
const Detail = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/discover/detail'))
const Album = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/album'))
const Photo = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/photo'))
const UserPage = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/user'))

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
    component: Ranking,
    routes: [
      {
        path: '/ranking',
        exact: true,
        render: () => <Redirect to="/ranking/work" />
      },
      {
        path: '/ranking/work',
        component: Work
      },
      {
        path: '/ranking/user',
        component: User
      },
    ]
  },
	{
    path: '/register',
    component: Register
  },
	{
    path: '/login',
    component: Login
  },
	{
    path: '/moment',
    component: Moment
  },
	{
    path: '/my',
    component: My
  },
	{
    path: '/detail/:id',
    component: Detail
  },
	{
    path: '/album',
    component: Album
  },
	{
    path: '/photo/:albumId',
    component: Photo
  },
	{
    path: '/user/:id',
    component: UserPage
  }
]


export default routes