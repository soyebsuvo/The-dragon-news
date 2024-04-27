import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
const Footer = () => {
    const navItems = [
        {
            route: "Home",
            path: "/",
        },
        {
            route: "Pages",
            path: "/pages",
        },
        {
            route: "Category",
            path: "category",
        },
        {
            route: "News",
            path: "news",
        },
        {
            route: "Post",
            path: "post",
        },
        {
            route: "Contact",
            path: "contact",
        },
    ];
    return (
        <Box className="px-2 py-10" sx={{ backgroundColor: "black"}}>
            <Container>
                <Box className='w-full text-center' sx={{
                    "& svg": {
                        color: "white"
                    }
                }}>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                </Box>
                <Box className={`w-full text-center`}>
                    {navItems.map((item) => (
                        <Link key={item.route} href={item.path}>
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant='body2' color="gray" textAlign="center">
                    @2023 Dragon News. Design by Programming Hero
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;