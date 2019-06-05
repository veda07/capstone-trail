import React, {Component} from 'react' ;
import Header from  './Header/header';

import { renderComponent } from 'recompose';

class HomeContainer extends Component {
    constructor (){
        super();

    }
        render(){
            return(
            <div>
                <Header/>
                
               
            </div>
            )
        }
    }

export default HomeContainer; 