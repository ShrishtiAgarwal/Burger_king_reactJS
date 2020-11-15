import React, { Component } from 'react';
import './BurgerIngredients.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends Component{
    render(){
    let ingrident = null;
    switch (this.props.type){
        case ('bread-top'):
            ingrident = (
            <div className='BreadTop'>
               {/* <social className="top">top</social> */}
                <div className="Seeds1 "></div>
                <div className="Seeds2 "></div>
            </div>);
            
            break;
        case ('bread-bottom'):
            ingrident = <div className="BreadBottom"></div>
            break;
            
        case ('cheese'):
        ingrident = <div className="Cheese"></div>
        break;
        case 'meat':
            ingrident = <div className="Meat"></div>
            break;
        case ('salad'):
            ingrident = <div className="Salad"></div>
            break;
        case ('bacon'):
        ingrident = <div className="Bacon"></div>
        break;

        default:
        ingrident = null;
        
    }
    return (ingrident);
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;

