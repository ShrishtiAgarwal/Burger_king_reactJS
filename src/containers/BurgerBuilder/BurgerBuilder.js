import React,{Component}from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const PRICE_INGRIDENTS = {salad:1,
    cheese:2,
    meat:3,
    bacon:4,};
// const INGREDIENT_PRICES = {
//     salad: 0.5,
//     cheese: 0.4,
//     meat: 1.3,
//     bacon: 0.7
// };
class BurgerBuilder extends Component{
    state = {
        ingredient:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
        },
        total_price:4,
        purchase : false,
        purhasing: false
    }

    updateIngridentHandler =(ingri)=>{
        // const ingri = {
        //     ...this.state.ingredient
        // }
        const sum = Object.keys(ingri)
        .map(igkey =>{
            return ingri[igkey]
        })
        .reduce((sum,el) => {
            return sum+el;
        },0);
        this.setState({purchase:sum>0})
    }


    addIngridentHandler = (type)=>{
        console.log("here")
       // console.log(this.state.ingredient)
        const oldIngrident=this.state.ingredient[type]
        const newIngrident =oldIngrident+1;
        const newstate = {
            ...this.state.ingredient
        };
        newstate[type]=newIngrident;
        const ad=PRICE_INGRIDENTS[type];
        const old_price=this.state.total_price;
        const new_price=ad+old_price

        this.setState({total_price:new_price,
            ingredient:newstate},
             );
        console.log("here")
        console.log(this.state.ingredient)
        this.updateIngridentHandler(newstate)
    }


    removeIngridentHandler = (type)=>{
        console.log("here")
       // console.log(this.state.ingredient)
        const oldIngrident=this.state.ingredient[type]
        const newIngrident =oldIngrident-1;
        if(newIngrident<0)
        return;
        const newstate = {
            ...this.state.ingredient
        };
        newstate[type]=newIngrident;
        const ad=PRICE_INGRIDENTS[type];
        const old_price=this.state.total_price;
        const new_price=old_price-ad

        this.setState({total_price:new_price,
            ingredient:newstate},
             );
        this.updateIngridentHandler(newstate)
        console.log("here")
        console.log(this.state.ingredient)
        
    }

    showHandler = () =>{
        this.setState({purhasing:true})
    }

    showcancelHandler = () =>{
        this.setState({purhasing:false})
    }

    purchaseContinueHandler = () =>{
        alert('You go...Good Choice')
    }

    render(){
        const disabledinfo= {
            ...this.state.ingredient
        }
        for( let i in disabledinfo)
        {
            disabledinfo[i]=disabledinfo[i]<=0
        }
        return(
            <Aux>
                <Modal show={this.state.purhasing} 
                        modalclosed={this.showcancelHandler}>
                    <OrderSummary 
                        price={this.state.total_price}
                        ingredients={this.state.ingredient}
                        purchaseContinue={this.purchaseContinueHandler}
                        purchaseCancel={this.showcancelHandler}/>
                </Modal>
            <Burger 
            ingridents={this.state.ingredient}/>
            <BurgerControls
            
                ingridentsadded={this.addIngridentHandler}
                ingridentsremoved={this.removeIngridentHandler}
                disabledinfo={disabledinfo}
                purchasable = { this.state.purchase}
                price={this.state.total_price}
                order={this.showHandler}
            />
            </Aux>
        )
    };
    
}
export default BurgerBuilder