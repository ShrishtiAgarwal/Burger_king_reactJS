import React from 'react'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import './Burger.css';

const Burger = (props) => {
    console.log("s")
    console.log(props.ingridents)
    
    let t = Object.keys(props.ingridents).map(igkey=>{
        return [...Array(props.ingridents[igkey])].map( (_,i)=>{
            return<BurgerIngredient key={igkey+i} type= {igkey}/>
           
        })
    }).reduce((arr,el)=>{
            return arr.concat(el)
        },[])
        console.log(t)
        if(t.length===0)
    {
        t=<p align="center"> Please add ingridents</p>
    }
    
    console.log(t)
    return (
        <div className=".Burger">
            <BurgerIngredient type ="bread-top" />
            {t}
            <BurgerIngredient type ="bread-bottom"/>
        </div>
    )
}

export default Burger;