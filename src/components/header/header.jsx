import Logo from '../../svg/user-avatar.svg'
import css from './header.css'

function Header () {
    return (
        <Header className={css.Header}>
            <h1 className={css.title}>Awesome Kanban Board</h1>
            <img className={css.Logo} src={Logo} alt='User'/>
            <button className={css.button}>&#8595</button>
        </Header>
    )
}

export default Header
