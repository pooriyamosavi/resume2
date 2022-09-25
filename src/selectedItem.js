import React from "react";





export default function SelectedItem(prop){
    const style = prop.name.length > 20?{fontSize:'16px'}:{fontSize:'20px'}
    
    return(
        <div className="selectedItem">
                <h2 style={style}>{prop.name}:</h2>
                <h2>{prop.count}</h2>
        </div>
    )
}