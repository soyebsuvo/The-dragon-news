import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import dragon from "@/assets/The Dragon News.png"
import CurrentDate from '@/utils/CurrentDate';

const Header = () => {
    const currentDate = CurrentDate();
    return (
        <Box className="py-6">
            <Image src={dragon} alt='dragon' width={450} height={450} className='mx-auto my-2' />
            <Typography variant='body1' color="gray" textAlign="center" className='mb-2'>
                Journalism Without Fear or Favour
            </Typography>
            <Typography variant='body1' color="gray" textAlign="center" className='mb-1'>
                {currentDate}
            </Typography>
        </Box>
    );
};

export default Header;