import getAllNews from "@/utils/getAllNews";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
    const { data: allCategoies } = await getAllNews();
    // console.log(allCategoies)
    return (
        <Box className='bg-gray-100 px-8 py-3'>
            <Typography variant="h5" fontWeight="bold">
                Categories
            </Typography>
            <Divider className="my-6"/>
            <Stack rowGap={1} className="my-4">
                {
                    allCategoies.map(category => (
                        <Link className="w-full" href={`news?category=${category.title.toLowerCase()}`} key={category.id}>
                            <Button className="w-full" variant="outlined">{category.title}</Button>
                        </Link>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;