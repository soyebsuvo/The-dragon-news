import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import sideTopNews from "@/assets/side-top-news.png";
import blankImage from "@/assets/blankImage.png";
import sideBottomImage from "@/assets/side-bottom-img.png";
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
            <hr className="mt-6 mb-4" />
            <Grid container spacing={1} className='justify-center items-center my-3'>
                <Grid item xs={4}>
                    <CardMedia>
                        <Image src={blankImage} alt="topnews" width={400} />
                    </CardMedia>
                </Grid>
                <Grid item xs={8} className='space-y-2'>
                    <Typography className="" variant='body2'>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography className="" variant="body2" color="text.secondary">
                        By Soyeb Suvo - Mar 18 2023
                    </Typography>
                </Grid>
            </Grid>
            <hr className="mt-3" />
            <Grid container spacing={1} className='justify-center items-center my-3'>
                <Grid item xs={4}>
                    <CardMedia>
                        <Image src={blankImage} alt="topnews" width={400} />
                    </CardMedia>
                </Grid>
                <Grid item xs={8} className='space-y-2'>
                    <Typography className="" variant='body2'>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography className="" variant="body2" color="text.secondary">
                        By Soyeb Suvo - Mar 18 2023
                    </Typography>
                </Grid>
            </Grid>
            <hr className="mt-3" />
            <Grid container spacing={1} className='justify-center items-center my-3'>
                <Grid item xs={4}>
                    <CardMedia>
                        <Image src={blankImage} alt="topnews" width={400} />
                    </CardMedia>
                </Grid>
                <Grid item xs={8} className='space-y-2'>
                    <Typography className="" variant='body2'>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography className="" variant="body2" color="text.secondary">
                        By Soyeb Suvo - Mar 18 2023
                    </Typography>
                </Grid>
            </Grid>
            <hr className="mt-3" />
            <Grid container spacing={1} className='justify-center items-center my-3'>
                <Grid item xs={4}>
                    <CardMedia>
                        <Image src={blankImage} alt="topnews" width={400} />
                    </CardMedia>
                </Grid>
                <Grid item xs={8} className='space-y-2'>
                    <Typography className="" variant='body2'>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography className="" variant="body2" color="text.secondary">
                        By Soyeb Suvo - Mar 18 2023
                    </Typography>
                </Grid>
            </Grid>
            <hr className="mt-3" />
            <Grid container spacing={1} className='justify-center items-center my-3'>
                <Grid item xs={4}>
                    <CardMedia>
                        <Image src={blankImage} alt="topnews" width={400} />
                    </CardMedia>
                </Grid>
                <Grid item xs={8} className='space-y-2'>
                    <Typography className="" variant='body2'>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography className="" variant="body2" color="text.secondary">
                        By Soyeb Suvo - Mar 18 2023
                    </Typography>
                </Grid>
            </Grid>
            <CardMedia className='mt-16'>
                <Image src={sideBottomImage} alt="topnews" width={400} />
            </CardMedia>
        </Box>
    );
};

export default Sidebar;