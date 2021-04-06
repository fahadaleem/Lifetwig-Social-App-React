import React from "react"
import {Container, Grid, Paper, Box, Typography, TextField} from "@material-ui/core"
import UserImage from "../Assests/Group 29.png"
import {makeStyles, useTheme} from "@material-ui/core/styles";

const useStyle = makeStyles({
    container:{
        maxWidth:"700px",
    },
    userName:{
        fontSize:"18px",
        fontWeight:"600"
    },
    title:{
        fontSize:"18px",
        color:"#C9CBCC",
    },
    postInput:{
        backgroundColor:"#F5F5F6"
    }


})


const Post = ()=>{
    const classes = useStyle()
    return (
        <Container maxWidth="sm" component={Paper} elevation={3} square={true} className={classes.container}>
            <Box px={1} py={3} my={3}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item lg={1}>
                    <img src={UserImage} />
                    </Grid>
                    <Grid item lg={5}>
                        <Typography variant="h5" color="initial" className={classes.userName}>Simmon Bradley</Typography>
                        <Typography variant="h5" color="initial" className={classes.title}>Share Your Thoughts</Typography>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <TextField
                          id="Post"
                          label="Pen Type Here"
                          variant="outlined"
                          fullWidth={true}
                          className={classes.postInput}
                         
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}





export default Post