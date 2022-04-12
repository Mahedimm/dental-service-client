import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CalendarPicker from '@mui/lab/CalendarPicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React from 'react';
    
const Calender = ({date,setDate}) => {
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
      </LocalizationProvider>
    );
};

export default Calender;