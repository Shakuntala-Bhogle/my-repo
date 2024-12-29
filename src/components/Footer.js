import {Link} from 'react-router-dom';
export default function Footer() {
  return (
    <footer>
      <section>
        <div className='img-footer'>
        <img
            src={require("../images/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
          <li><Link to="/" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#menu">Menu</a></li>
        <li><Link to="/reservations">Reservation</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>Address: <br/>2395 Maldove Way,<br/>Chicago Illinois</li>
            <li>Phone: <br/>+123-243-6827</li>
            <li>e-mail: <br/>info@littlelemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
          <li><a href="#Facebook">Facebook</a></li>
          <li><a href="#Instagram">Instagram</a></li>
          <li><a href="#Twitter">Twitter</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}