import {SubMenu , SecondMenu} from "./SubMenu"
import { Navbar} from 'react-bootstrap'
import {menus, categories} from "../data/menus"



export default function MainMenu(props){

    const subMenus = menus.map(subMenu => {
        return(
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children}/>
        )
    })

    const SecondCate = categories.map(secondCate =>{
        return(
            <SecondMenu title={secondCate.title} position={secondCate.position} children={secondCate.children} />
        )
    })

    return( 
        <div>
            {/* <div>Here is main menu</div> */}
            <Navbar bg='light' expand="lg" className="d-flex justify-content-around" >
                <div className="cate p-3 text-white">{SecondCate}</div>
                <div className="d-flex">{subMenus}</div>
                <div className="fw-bold">30 Days Free Return</div>
            </Navbar>
        </div>
    )
}
