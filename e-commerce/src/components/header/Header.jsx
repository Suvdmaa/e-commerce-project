import { header } from "../../data/SeedData"
import ProductFunc from "./ProductFuncSections"
import MainMenu from "./MainMenuSections"

export default function Header(props){
    const HeaderSect = header.map((header) => {
        return <ProductFunc
          text={header.text}
          description={header.description}
          order={header.order}
          url={header.url}
          votes={header.votes}
          logoUrl={header.logoUrl}
          wishlist={props.wishlist} 
          cart={props.cart}
          setCart={props.setCart}
          />
      })
    
    return (
    <div>
        <header className="App-header col-md">
        {HeaderSect}
        </header>
        <div className="menu-container bg-light">
          <MainMenu />
        </div>
    </div>
    )
}