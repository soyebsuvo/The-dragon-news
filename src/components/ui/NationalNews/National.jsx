import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/top-news.png"
import topNews2 from "@/assets/top-news2.png"
const National = () => {
    return (
        <Box>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews} alt="topnews" width={800} />
                    </CardMedia>
                    <p className="mt-3 text-sm ml-3 max-w-fit bg-red-500 py-1 px-2 text-white rounded">Technology</p>
                    <CardContent>
                        <Typography className="font-bold" gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography className="my-3" variant="body2" color="text.secondary">
                            By Soyeb Suvo - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <hr className="mt-14"/>
            <Grid className="my-6" container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} alt="topnews" width={800} />
                            </CardMedia>
                            {/* <p className="mt-3 text-sm ml-3 max-w-fit bg-red-500 py-1 px-2 text-white rounded">Technology</p> */}
                            <CardContent>
                                <Typography className="font-bold" gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography className="my-3" variant="body2" color="text.secondary">
                                    By Soyeb Suvo - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} alt="topnews" width={800} />
                            </CardMedia>
                            {/* <p className="mt-3 text-sm ml-3 max-w-fit bg-red-500 py-1 px-2 text-white rounded">Technology</p> */}
                            <CardContent>
                                <Typography className="font-bold" gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography className="my-3" variant="body2" color="text.secondary">
                                    By Soyeb Suvo - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} alt="topnews" width={800} />
                            </CardMedia>
                            {/* <p className="mt-3 text-sm ml-3 max-w-fit bg-red-500 py-1 px-2 text-white rounded">Technology</p> */}
                            <CardContent>
                                <Typography className="font-bold" gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography className="my-3" variant="body2" color="text.secondary">
                                    By Soyeb Suvo - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} alt="topnews" width={800} />
                            </CardMedia>
                            {/* <p className="mt-3 text-sm ml-3 max-w-fit bg-red-500 py-1 px-2 text-white rounded">Technology</p> */}
                            <CardContent>
                                <Typography className="font-bold" gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography className="my-3" variant="body2" color="text.secondary">
                                    By Soyeb Suvo - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default National;