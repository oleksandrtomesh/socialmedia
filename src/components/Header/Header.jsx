import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <img className={c.logo} src="https://logofirmy.net/wp-content/uploads/2020/04/Huawei-Logo-2018%E2%80%93.....jpg">
            </img>
        </header>
    );
}

export default Header