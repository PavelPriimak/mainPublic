import Logo from '../../svg/user-avatar.svg'
import css from './header.module.css'

function Header () {
    return (
        <div className={css.header}>
            <h1 className={css.title}>Awesome Kanban Board</h1>
            <div className={css.header_container}>
                <img className={css.Logo} src={Logo} alt='User'/>
                <button className={css.button}>&#8595;</button>
            </div>    
        </div>
    )
}

export default Header
