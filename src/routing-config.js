import React from 'react'
import { Redirect } from 'react-router'
import { Home, Circle, Dtemp, Wtemp, Mtemp, Statebor1, Statebor2, Statebor3, Statebor4} from './components'

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/circle',
    'component': Circle
  },
  {
    'path':'/dtemp',
    'component': Dtemp
  },
  {
    'path':'/wtemp',
    'component': Wtemp
  },
  {
    'path':'/mtemp',
    'component': Mtemp
  },
  {
    'path':'/statebor1',
    'component': Statebor1
  },
  {
    'path':'/statebor2',
    'component': Statebor2
  },
  {
    'path':'/statebor3',
    'component': Statebor3
  },
  {
    'path':'/statebor4',
    'component': Statebor4
  }
];

export default routes;
