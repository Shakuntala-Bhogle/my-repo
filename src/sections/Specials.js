import GreekSalad from '../images/greek salad.jpg';
import Bruschetta from '../images/bruschetta.jpg';
import LemonDessert from '../images/lemon dessert.jpg';
import SpecialCard from './CardInfo/SpecialCard';
import { Link } from 'react-router-dom';

function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <Link to="/"><button>Online Menu</button></Link>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
            </section>
        </section>
    );
}

export default Specials;