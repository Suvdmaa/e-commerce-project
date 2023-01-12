import React from 'react'
import { Nav, NavDropdown, NavLink } from "react-bootstrap"

// Home menu NavDropdown
const SubMenu = (props) => {
    const subMenu = 
      props.children.length > 0 ? (
        <NavDropdown title={props.title}>
            {props.children.map(child =>{
                return (
                    <NavDropdown.Item>
                        {child.title}
                    </NavDropdown.Item>
                )
            })}
        </NavDropdown>
        ) :(
        <NavLink>{props.title}</NavLink>
        );
    return (
        <div>
            <Nav className="mx-2">
                {subMenu}
            </Nav>
        </div>
    )
}


// Browse categories Dropdown
const SecondMenu = (props) =>{
    const category = 
    props.children.length > 0 ? (
        <NavDropdown title={props.title}>
            {props.children.map(child =>{
                return (
                    <NavDropdown.Item>
                        {child.title}
                    </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    ) : (
        <NavLink>{props.title}</NavLink>
    )
    return (
        <div>
            {category}
        </div>
    )
}

export {SubMenu, SecondMenu} ;