import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Container, Grid } from "@mui/material";

const layout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid
          container
          spacing={3}
          className="my-3"
        >
          <Grid item xs={4}>
            <CategoryList />
          </Grid>
          <Grid item xs={8} className="space-y-2">
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default layout;
