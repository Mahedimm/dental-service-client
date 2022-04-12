import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppoitments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Box>
            <Navigation/>
            <AppointmentHeader date={date} setDate={setDate}/>
            <AvailableAppointments date={date} />
        </Box>
    );
};

export default Appointment;