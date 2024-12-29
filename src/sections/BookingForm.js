import { useState } from 'react';


function BookingForm(props) {
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [pnumber,setPnumber] = useState("");
    const [date,setDate] = useState("");
    const [guest,setGuest] = useState("");
    const [occasion,setOccasion] = useState("");
    const [preference,setPreference] = useState("");
    const [comment,setComment] = useState("");

    const [time,setTime] = useState("");
    const handleDateChange = (e) => {
        setDate(e);
        props.dispatch(e);
    

      
    }
    const handleSubmit = (e) => {
        console.log("form submitted");
        e.preventDefault();
        setFname("");
        setLname("");
        setEmail("");
        setPnumber("");
        setDate("");
        setTime("");
        setGuest("");
        setOccasion("");
        setPreference("");
        setComment("");
        props.submitForm(e);
    }

    return(
        <>
        <form className="reservation-form" onSubmit={handleSubmit}>
        
            <div>
                <label htmlFor="user_first_name">First Name: </label>
                <input type="text" id="user_first_name" name="user_first_name" placeholder="First Name" value={fname}
                onChange={(e) => setFname(e.target.value)} required minLength={2} maxLength={50}
                />
            </div>
            <div>
                <label htmlFor="user_last_name">Last Name: </label>
                <input type="text" id="user_last_name" name="user_last_name" placeholder="Last Name" value={lname}
                onChange={(e) => setLname(e.target.value)} required minLength={2} maxLength={50}
                />
            </div>
            
            <div>
                <label htmlFor="user_email">Email: </label>
                <input type="email" id="user_email" name="user_email" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="user_number">Phone Number: </label>
                <input type="tel" id="user_number" name="user_number" placeholder="(xxx)-xxx-xxxx" value={pnumber}
                onChange={(e) => setPnumber(e.target.value)} required  minLength={10} maxLength={25}
                />
            </div>
            <div>
                <label htmlFor="user_date">Select Date: </label>
                <input  id="user_date" name="user_date" value={date}
                onChange={(e) => handleDateChange(e.target.value)} type="date" required
                />
            </div>
            <div>
                <label htmlFor="user_time">Choose Time: </label>
                <select id="user_time " onChange={(e) => setTime(e.target.value)} required value={time}>
                <option value="">Select a Time</option>
                {
                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                }
             </select>

            </div>
            <div>
                <label htmlFor="user_guest_number">Number of Guests: </label>
                <input type="number" placeholder="1" min="1" max="10" id="user_guest_number" value={guest}
                onChange={(e) => setGuest(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="user_occasion">Occasion: </label>
                <select id="user_occasion" value={occasion}  onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Others</option>
                </select>
            </div>
            <div>
            <label htmlFor="user_preference">Seating Preference: </label>
                <select id="user_preference" value={preference}  onChange={(e) => setPreference(e.target.value)}>
                <option>None</option>
                <option>Indoor</option>
                <option>Outdoor</option>
                </select>
            </div>
            <div>
                <label htmlFor='user_comment'>Comments: </label>
                <textarea id='user_comment' value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Comment'rows={4} cols={20}/>
            </div>
            <div>
            
            <button type="submit" disabled={!date}>Submit</button>
            
            </div>
            
        </form>
        </>
    )
}

export default BookingForm;
