"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from "./Header";

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
    path: "/Categories/news",
  },
  {
    route: "News",
    path: "/news",
  },
  {
    route: "Post",
    path: "/post",
  },
  {
    route: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
    <Header/>
     <AppBar position="static" sx={{backgroundColor : "black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} alt="logo" width={99} height={99} />
          <Box className={`w-full text-center`}>
            {navItems.map((item) => (
              <Link key={item.route} href={item.path}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack direction={`row`} sx={{
                "& svg" : {
                    color : "white"
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
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>   
  );
};
export default Navbar;
