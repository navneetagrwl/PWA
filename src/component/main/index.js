import React from 'react';
import {Switch ,Route} from 'react-router-dom';
import Series from '../seriesList/seriesList'


 const Main = props =>(
 <Switch>
     <Route exact path = '/' component = {Series} />
 </Switch>
 );

 export default Main;