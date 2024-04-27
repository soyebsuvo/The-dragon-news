import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import sideTopNews from "@/assets/side-top-news.png";
const Sidebar = () => {
    return (
        <Box>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideTopNews} alt="topnews" width={800} />
                    </CardMedia>
                    <p className="mt-3 text-sm ml-3 max-w-fit bg-red-500 py-1 px-2 text-white rounded">Technology</p>
                    <CardContent>
                        <Typography className="font-bold" gutterBottom>
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography className="my-3" variant="body2" color="text.secondary">
                            By Soyeb Suvo - Mar 18 2023
                        </Typography>                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default Sidebar;