import {Link} from 'react-router-dom';
function Header() {
    return (
        <>
        <header>
            <article>
            <div className='column'>
            <section className="hero-section">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                on traditional recipes served with a modern twist.</p>
                <br></br>
                <Link to="/reservations"><button>Reserve a table</button></Link>
            </section>
            </div>
            <div className='column'>
            <section className="hero-image">
                <img src={require('../images/restauranfood.jpg')} alt="Little Lemon restaurant cuisine"></img>
            </section>
            </div>
        </article>
        
  </header>
  </>
    )
}

export default Header;