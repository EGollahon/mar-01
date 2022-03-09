import { Link } from 'react-router-dom';

function NavBar() {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        width: '200px',
        justifyContent: 'space-between'
    }

    return (
        <div style={style}>
            <Link to={"/"}>Home</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/products"}>Products</Link>
        </div>
    )
}

export default NavBar;