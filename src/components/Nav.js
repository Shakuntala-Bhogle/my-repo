function Nav(){
    return(
    <nav className="container">
         <img src={require('../images/Logo.jpg')} alt="Header-Logo" />
    <ul className="navigation">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><a href="#order online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
    </ul>
</nav>
    )
}

export default Nav;

