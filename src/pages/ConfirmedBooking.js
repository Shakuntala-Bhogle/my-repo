
function ConfirmedBooking() {
  return (
    <>
    <header className="section-top">
      <img
        className="section-main"
        src={require('../images/restauranfood.jpg')}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="section-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h5>A confirmation message has been sent to your email.</h5>
        <h5>Thanks for dining with us!</h5>
      </section>
    </header>
    </>
  );
}
export default ConfirmedBooking;