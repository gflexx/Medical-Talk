import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import React from 'react'

function BlogItem(props) {
    return (
        <Box marginBottom={2}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                        </Avatar>
                    }
                    title="Some Title"
                    subheader="September 14, 2022"
                    action={
                        <Typography component='h6' fontSize={15} fontWeight={300}>John Doe</Typography>
                    }
                />
                <Grid justifyContent='center'>
                    <CardMedia
                        component="img"
                        height="198"
                        image="https://placeimg.com/1320/360/any"
                        alt="Paella dish"
                        sx={{justifySelf: "center"}}
                    />
                </Grid>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton>
                        <FavoriteBorderIcon/>
                    </IconButton>
                    <IconButton>
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default BlogItem