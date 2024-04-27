import { format } from 'date-fns';

const CurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'EEEE, MMMM d, yyyy');
    return formattedDate;
};

export default CurrentDate;