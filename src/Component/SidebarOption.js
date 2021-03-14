import React from 'react'
import '../Styling/SidebarOption.css';
const SidebarOption=({active,title,Icon})=>{
    return (
        <div className={`sidebarOption ${active && 'sidebarOption-active'}`}>
             {Icon && <Icon className=""/>}
            <h2>{title}</h2> 
        </div>
    )
}

export default SidebarOption;
