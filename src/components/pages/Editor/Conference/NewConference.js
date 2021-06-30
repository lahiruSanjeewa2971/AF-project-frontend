import 'date-fns';
import React, {useState, useEffect} from 'react';
//import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker} from '@material-ui/pickers';
import uniqid from 'uniqid';
import axios from 'axios';


function NewConference(){
    //const [date, setDate] = useState(new Date());

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [note, setNote] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [researcher, setResearcher] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    function setData(e){
        e.preventDefault();
        const newConference = {
            title,
            selectedDate,
            location,
            time,
            researcher,
            category,
            description,
            note,
            conferenceid: uniqid(),
        };
        axios.post("http://localhost:8070/conferences/addconference", newConference)
            .then(() => {
                alert("Conference ADD");
            }).catch((err)=>{
                alert(err);
            });
    }

    return(
        <div>
            <div>
                <h2 style={{fontFamily:'Skia'}}>Create new Conference</h2><br/>
            </div>
            <div>
                <form style={{width: '40%', display:'inline-block'}}>
                    <div className="container">
                        <input type="text" className="form-control" placeholder="Title of the conference" 
                        onChange={(e)=>{
                            setTitle(e.target.value);
                        }}/>
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Conference DATE"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        {/*<KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />*/}
                    </MuiPickersUtilsProvider>
                    <div className="container">
                        <input type="text" className="form-control" placeholder="Location"
                            onChange={(e)=>{
                                setLocation(e.target.value);
                            }}/>
                    </div><br/>
                    <div className="container">
                        <input type="text" className="form-control" placeholder="Enter Time"
                            onChange={(e)=>{
                                setTime(e.target.value);
                            }}/>
                    </div><br/>
                    <div className="container">
                        <input type="text" className="form-control" placeholder="Enter Researcher who join with the conference"
                            onChange={(e)=>{
                                setResearcher(e.target.value);
                            }}/>
                    </div><br/>
                    <div className="container">
                        <input type="text" className="form-control" placeholder="Enter category belongs to relevent workshop"
                            onChange={(e)=>{
                                setCategory(e.target.value);
                            }}/>
                    </div><br/>
                    <div className="container">
                        <textarea placeholder="Little description" rows={3} cols={76} 
                            onChange={(e)=>{
                                setDescription(e.target.value);
                            }}/>
                    </div><br/>
                    <div className="container">
                        <input type="text" className="form-control" placeholder="NOTE:"
                            onChange={(e)=>{
                                setNote(e.target.value);
                            }}/>
                    </div><br/>
                    <button className="btn btn-outline-primary" onClick={setData}>ADD new Conference</button>
                </form>
            </div>
        </div>
    )
}
export default NewConference;