function Header() {
    return (
        <header>
        <article className="hero">
            <section className="hero-section">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                on traditional recipes served with a modern twist.</p>
                <br></br>
                <button type="button" className="reserve-table">Reserve a table</button>
            </section>

            <section className="hero-image">
                <img src={require('../images/restauranfood.jpg')} alt="Little Lemon restaurant cuisine"></img>
            </section>
        </article>
  </header>
    )
}

export default Header;