import getAllNews from "@/utils/getAllNews";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const CategoryList = async () => {
    const { data: allCategoies } = await getAllNews();
    // console.log(allCategoies)
    return (
        <Box>
            <Typography variant="h5" fontWeight="bold">
                Categories
            </Typography>
            <Divider className="my-6"/>
            <Stack rowGap={1} className="my-4">
                {
                    allCategoies.map(category => (
                        <Button variant="outlined" key={category.id}>
                            {category.title}
                        </Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;