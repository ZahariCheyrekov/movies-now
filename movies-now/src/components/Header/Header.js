import './Header.css';
import popcornbag from '../../assets/popcorn-bag.png';

const Header = () => {
    return (
        <header className="site-header">
            <h1 className="header-title">
                Movies Now
            </h1>

            <article className="header-img-art">
                <img src={popcornbag} />
            </article>
        </header>
    )
}

export default Header;