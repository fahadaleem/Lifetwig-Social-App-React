import React from "react";
import {
  Container,
  Paper,
  Box,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import UserImage from "../Assests/Group 29.png";
import VidePlayer from "./VideoComponent";
import VideoPlayer from "./VideoComponent";

const useStyle = makeStyles({
  container: {
    maxWidth: "700px",
  },
  userName: {
    fontSize: "18px",
    fontWeight: "600",
  },
  postTime: {
    fontSize: "18px",
    color: "#9e9e9e",
  },
  postContent: {
    color: "#1C2025",
  },
  paper: {
    padding: "0 !important",
  },
});

const PublishedPost = () => {
  const classes = useStyle();

  return (
    <Box my={3}>
      <Container
        maxWidth="sm"
        component={Paper}
        classes={{paper: classes.paper}}
        className={classes.container}
        elevantion={3}
        square={true}
      >
        <Box px={1} py={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item lg={1}>
              <img src={UserImage} />
            </Grid>
            <Grid item lg={5}>
              <Typography
                variant="h5"
                color="initial"
                className={classes.userName}
              >
                Simmon Bradley
              </Typography>
            </Grid>
            <Grid item lg={6} sm={3} xs={3}>
              <Typography
                variant="h5"
                color="initial"
                className={classes.postTime}
                align="right"
              >
                Today
              </Typography>
              <Typography
                variant="h5"
                color="initial"
                className={classes.postTime}
                align="right"
              >
                11:24PM
              </Typography>
            </Grid>
          </Grid>
          <Box my={2}>
            <Grid item lg={12}>
              <Typography
                variant="p"
                color="initial"
                className={classes.postContent}
                align="right"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </Typography>
            </Grid>
          </Box>
        </Box>
        <Box style={{width: "100% !important"}}>
          <VideoPlayer />
        </Box>
        <Box>
          <Grid container alignItems="center" spacing={2}>
            <Grid item lg={2} sm={12}>
              <Typography variant="p" color="initial">
                heart21
              </Typography>
            </Grid>
            <Grid item lg={5} sm={12}>
              <Box my={1}>
                <TextField
                  id="comment"
                  label="Write a Comment"
                  variant="outlined"
                  fullWidth={true}
                />
              </Box>
            </Grid>
            <Grid item lg={3} sm={12}>
              <Typography variant="p" color="initial" align="center">
                View Comments 21
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PublishedPost;
