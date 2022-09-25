import React from "react";
import SelectedItem from "./selectedItem";




export default function Cart(prop){
    const count = {}
    prop.OR.forEach(x => {count[x] = (count[x] || 0) + 1});
    const newlst = []
    for (const key in count) {
        newlst.push({
            name:key,
            num:count[key]
        })
    }
    const SelectedItemElement = newlst.map(item=>{
        return(
            <SelectedItem 
                name={item.name}
                count={item.num}
                func={prop.func}
            />
        )
    })
    return(
        <div className="cart-box">
            <div className="cart-header">
                <h3>سبد خرید:{prop.OR.length}</h3>
                {prop.OR.length !== 0 && <span onClick={prop.del} className="fas fa-trash-alt"></span>}
            </div>
            
            <div>
                {prop.OR.length === 0 && <div><h4>سبد خرید خالی است</h4></div>}
                {SelectedItemElement}
                {prop.OR.length !== 0 && <h3>هزینه نهایی : {prop.cost * 1000}</h3>}
                {prop.OR.length !== 0 && <div className="order-btn">نهایی کردن سفارش</div>}
            </div>
        </div>
    )
}