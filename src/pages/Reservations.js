import BookingForm from '../sections/BookingForm';
function Reservations(props) {
/*  const [availableTimes,setavailableTimes]=useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ]);
  function updateTimes() {
    return availableTimes;
  }
  function initializeTimes() {
    {
      availableTimes= [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
    ]
    }
  }
*/




    return (
        <>
         <header className="section-top">
      <img
        className="section-main"
        src={require('../images/restauranfood.jpg')}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="section-text">
        <h1>Reservations</h1>
      </div>
    </header>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>

        </>
    );
}

export default Reservations;