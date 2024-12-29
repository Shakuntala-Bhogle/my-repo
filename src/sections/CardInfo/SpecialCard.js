 function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <button>Order for Delivery</button>
            </section>
        </article>
    );
}

export default SpecialCard;