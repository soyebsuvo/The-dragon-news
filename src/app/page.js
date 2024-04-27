import National from "@/components/ui/NationalNews/National";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <Grid container spacing={8} className="my-4">
        <Grid item xs={6} md={8}>
          <h2 className="text-3xl font-bold my-3 mb-8">National News</h2>
          <National/>
        </Grid>
        <Grid item xs={6} md={4}>
          <h2 className="text-3xl font-bold my-3 mb-8">Sylhet</h2>
          <Sidebar/>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
