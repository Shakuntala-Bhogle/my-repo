import Specials from "../sections/Specials";
import Testimonials from "../sections/Testimonials";

function Main() {
    return(
        <main>
          <section className="Highlights">
            <Specials />
          </section>
          <section className="Testimonials">
            <Testimonials />
          </section>
          <article className="about-us">
            <section className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../images/restaurant chef B.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../images/Mario and Adrian A.jpg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
          </main>
    )
}

export default Main;