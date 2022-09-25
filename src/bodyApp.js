import React, { useState } from "react";
import Cart from "./cart";
import Btn from "./doubleBTN";
import list from "./lists";
import MenuBody from "./menuBody";



export default function BodyApp(){
    
    const [OR, setOR] = useState([]) 
    const [totalCost, setTotalCost] = useState(0)
    
    function addToCart(foodname, cost){
        setOR(oldOR=>[...oldOR, foodname])
        setTotalCost(oldTotalCost=>oldTotalCost + parseInt(cost))
    }
    function subFromCart(foodname, cost){
        setOR(oldOR=>{
            const i = oldOR.indexOf(foodname)
            const newOR = oldOR.slice(0, i).concat(oldOR.slice(i+1))
            return newOR
        })
        setTotalCost(oldTotalCost=>oldTotalCost - parseInt(cost))
    }
    function delCart(){
        setOR([])
        setTotalCost(0)
    }

    

    return(
        <div className='body'>
            <div className='menu'>
                <Btn BS={true} />
                <MenuBody func={addToCart} func2={subFromCart} OR={OR} />
            </div>
            <div className='cart'>
                <Cart OR={OR} func={subFromCart} cost={totalCost} del={delCart} />
            </div>
        </div>
    )
}