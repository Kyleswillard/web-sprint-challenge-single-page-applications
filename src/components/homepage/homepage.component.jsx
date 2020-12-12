import React from 'react';

import styled from 'styled-components'
import {Route, Switch, Link} from 'react-router-dom'


import PizzaForm from '../../components/pizza-form/pizza-form.component'


const NavBar = styled.div `
width: 50%;
border-bottom: 2px solid black;


`


const Homepage = () => {

  return (
    <div>
    <NavBar className='navbar'>
    <Switch>
    <Route path='/' component={Homepage} />
    <Link to='/'>Home</Link>
    <Route path='/pizza' component={PizzaForm} />
    <Link to='/pizza'>Order</Link>
    </Switch>
    </NavBar>
    <h1>That Guys Pizza</h1>

      </div>




  )
}



export default Homepage