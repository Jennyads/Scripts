import { Link, useLocation } from "react-router-dom";
import "../styles/menu.css"

function Menu(){
    const current_page = useLocation();

    return (
        <div className='nav-geral'>
            <Link className={current_page.pathname === '/lotofacil' ? 'mudar-cor menu-nav-lotofacil' : 'menu-nav-lotofacil'} to='/lotofacil'>Lotofácil</Link>
            <Link className={current_page.pathname === '/megasena' ? 'mudar-cor menu-nav-megasena' : 'menu-nav-megasena'} to='/megasena'>Megasena</Link>
            <Link className={current_page.pathname === '/quina' ? 'mudar-cor menu-nav-quina' : 'menu-nav-quina'} to='/quina'>Quina</Link>
        </div>
    )
}

export default Menu;



