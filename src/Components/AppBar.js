import {useState} from "react";
import {
  Drawer,
  AppBar,
  Grid,
  Typography,
  Toolbar,
  IconButton,
  Paper,
  Box,
  Divider,
} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AvatarImage from "../Assests/Group 29.png";
import AvatarImage2 from "../Assests/Group 29@2x.png";

import SearchImage from "../Assests/Search.svg";
import BellImage from "../Assests/bell.svg";
import BarImage from "../Assests/bars.svg";
import Logo from "../Assests/Lifetwig.png";
import UserImage1 from "../Assests/Ellipse 13.png"
import UserImage2 from "../Assests/Ellipse 13-2.png"
import UserImage3 from "../Assests/Ellipse 13-3.png"
import UserImage4 from "../Assests/Ellipse 13-7.png"
import UserImage5 from "../Assests/Ellipse 13-4.png"
import UserImage6 from "../Assests/Ellipse 13-5.png"
import UserImage7 from "../Assests/Ellipse 13-6.png"
import UserImage8 from "../Assests/Ellipse 13-9.png"




import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },

  topNavLinks: {
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
    margin: "0 15px",
    textAlign: "center",
    color: "black",
  },
  nav: {
    // textAlign:"right"
    position: "relative",
    left: "250px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  userName: {
    fontSize: "18px",
    color: "black",
  },
  mobNavTop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "inline-flex",
    },
  },
  extraBtns: {
    width: "44px",
    height: "20px",
    padding: "20px",
    borderRadius: "30px",
    fontSize: "15px",
    backgroundColor: "#4F7D0D",
    background: `transparent url(${SearchImage}) 0% 0% no-repeat`,
    backgroundPosition:"center",
    marginRight: "10px",
  },
  hideOnMob: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  TopAppLogo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    marginTop: "65px !important",
    width: "360px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    backgroundColor: "#F0F2F5",
    padding: "15px",
  },
  userDetail: {
    padding: "15px",
    borderRadius: "8px",
  },
  userDetailName: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  penText: {
    color: "#88B235",
    marginLeft: "auto",
  },
  penTextContent: {
    fontSize: "18px",
  },
  sideNavLink: {
    margin: "10px 20px !important",
  },
  sideLink: {
    fontSize: "15px",
    textDecoration: "none",
    color: "#1C2025",
    margin: "20px !important",
    backgroundColor: "red !important",
  },
  chatMsgCount: {
    backgroundColor: "#88B235",
    fontSize: "16px",
    padding: "5px 10px",
    color: "#FFFFFF",
    borderRadius: "5px",
    position: "absolute",
    right: "70px",
  },
  mobileDrawer:{
    backgroundColor: "#F0F2F5",
    
    padding:"15px",
    width: "270px",

  },
  rightDrawerPaper:{
    backgroundColor: "#F0F2F5",
    width: "360px",
    marginTop: "65px !important",
    padding:"15px",
    [theme.breakpoints.down('sm')]:{
      display:"none"
    }
  },
  FamilyOnlineTitle:{
    color:"#1C2025 !important",
    fontSize:"18px",
    marginBottom:"10px"
  },
  hrDivider:{
    backgroundColor:"#88B235",
    height:"3px !important ",
    width:"50px",
  },
  statusOnline:{
    height:"16px",
    width:"16px",
    backgroundColor:"#96EB6C",
    borderRadius:"50%"
  },
  chatUserTitle:{
    fontSize:"20px"
  }
}));

const CustomAppBar = () => {

  const [openLeftDrawer, setOpenLeftDrawer] = useState(false)
  const [openRightDrawer, setOpenRightDrawer] = useState(false)


  const handleOpenLeftDrawer = ()=>{
    setOpenLeftDrawer(!openLeftDrawer)
  }

  const handleOpenRightDrawer = ()=>{
    setOpenRightDrawer(!openRightDrawer);
  }

  const [family, setFamily] = useState([
    {
      name:"Brandon Cooper",
      status:"online",
      image:UserImage1
    }, 
    {
      name:"Janet Roberts",
      status:"online",
      image:UserImage2
    },
    {
      name:"Ronnie Jordan",
      status:"online",
      image:UserImage3
    },      


    
  ])

  const [friend, setFriend] = useState([
    {
      name:"Johnny Holland",
      status:"online",
      image:UserImage4
    }, 
    {
      name:"Michelle Murphy",
      status:"online",
      image:UserImage5
    },
    {
      name:"Johny Holland",
      status:"online",
      image:UserImage8
    },      


    
  ])


  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item lg={2} sm={2} xs={2}>
              <IconButton aria-label="more" className={classes.menuButton} onClick={handleOpenLeftDrawer}>
                <MenuIcon />
              </IconButton>
              <div className={classes.TopAppLogo}>
                <img src={Logo} />
              </div>
            </Grid>
            <Grid item lg={5} md={5} sm={8} xs={8}>
              <nav className={classes.nav}>
                <Link className={classes.topNavLinks}>Home Feed</Link>
                <Link className={classes.topNavLinks}>Map</Link>
                <Link className={classes.topNavLinks}>Family Tree</Link>
                <Link className={classes.topNavLinks}>Friends</Link>
              </nav>
              <Grid container alignItems="center" className={classes.mobNavTop}>
                <Grid item md={2} sm={2} xs={2}>
                  <img src={AvatarImage} alt="user-image" />
                </Grid>
                <Grid item md={8} sm={8} xs={10}>
                  <Typography
                    variant="h5"
                    color="initial"
                    className={classes.userName}
                  >
                    Simmon Bradley
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} sm={2} xs={2}>
              <Grid
                container
                alignItems="center"
                spacing={2}
                justify="flex-end"
                className={classes.hideOnMob}
              >
                <Grid item>
                  <img src={AvatarImage} alt="user-image" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    color="initial"
                    className={classes.userName}
                  >
                    Simmon Bradley
                  </Typography>
                </Grid>
                <div>
                  <Grid item>
                    <button className={classes.extraBtns}></button>
                    <button className={classes.extraBtns}></button>
                    <button className={classes.extraBtns}></button>
                  </Grid>
                </div>
              </Grid>
              <IconButton aria-label="more" className={classes.menuButton} onClick={handleOpenRightDrawer}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer open variant="permanent" classes={{paper: classes.drawerPaper}}>
        <Paper className={classes.userDetail}>
          <Grid container alignItems="center">
            <Grid item md={2} sm={2} xs={2}>
              <img src={AvatarImage} alt="user-image" />
            </Grid>
            <Grid item lg={3} md={8} sm={8} xs={10}>
              <Typography
                variant="h5"
                color="initial"
                className={classes.userDetailName}
              >
                Simmon Bradley
              </Typography>
            </Grid>
            <Grid item lg={3} className={classes.penText}>
              <Typography
                variant="h4"
                color="initial"
                className={classes.penTextContent}
              >
                pen
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <div className={classes.sideNavLink}>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Home Feed
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Personal Info
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Photo
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Feed
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Chat <span className={classes.chatMsgCount}>2</span>
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Settings
            </Typography>
          </Link>
        </div>
      </Drawer>


      {/*This is a drawer open on mobile */}
      <Drawer anchor="left" open={openLeftDrawer} onClose={handleOpenLeftDrawer} classes={{
        paper:classes.mobileDrawer
      }}>
      <Box align="center" my={2}>
      <img src={Logo} />
      </Box>
      <Paper className={classes.userDetail}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item md={2} sm={2} xs={2}>
          <img src={AvatarImage} alt="user-image" />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <Typography
            variant="h5"
            color="initial"
            className={classes.userDetailName}
          >
            Simmon Bradley
          </Typography>
        </Grid>
        <Grid item lg={3} className={classes.penText}>
          <Typography
            variant="h4"
            color="initial"
            className={classes.penTextContent}
          >
            pen
          </Typography>
        </Grid>
      </Grid>
    </Paper>
    <div className={classes.sideNavLink}>
      <Link className={classes.sideLink}>
        <Typography variant="h6" color="initial">
          Home Feed
        </Typography>
      </Link>
      <Link className={classes.sideLink}>
        <Typography variant="h6" color="initial">
          Personal Info
        </Typography>
      </Link>
      <Link className={classes.sideLink}>
        <Typography variant="h6" color="initial">
          Photo
        </Typography>
      </Link>
      <Link className={classes.sideLink}>
        <Typography variant="h6" color="initial">
          Feed
        </Typography>
      </Link>
      <Link className={classes.sideLink}>
        <Typography variant="h6" color="initial">
          Chat <span className={classes.chatMsgCount}>2</span>
        </Typography>
      </Link>
      <Link className={classes.sideLink}>
        <Typography variant="h6" color="initial">
          Settings
        </Typography>
      </Link>
    </div>
      </Drawer>

      {/* Right Drawer */}
      <Drawer anchor="right" open variant="permanent" classes = {{
        paper:classes.rightDrawerPaper
      }}>
        <div className={classes.FamilySection}>
          <Typography variant="h6" color="initial" className={classes.FamilyOnlineTitle}>Family Online</Typography>
          <Divider className={classes.hrDivider} light={false}/>
           {family.map((data, index)=>{
             return(
              <Box my={2} key={index}>
              <Grid container spacing={2} alignItems="center">
                <Grid item lg={2}>
                  <img src={data.image} />
                </Grid>
                <Grid item lg={8}>
                  <Typography variant="h5" color="initial" className={classes.chatUserTitle}>{data.name}</Typography>
              </Grid>
              <Grid item lg={2}>
                <div className={classes.statusOnline}></div>
              </Grid>
              </Grid>
            </Box>
             )
           })}
          </div>

          <div className={classes.FamilySection}>
          <Typography variant="h6" color="initial" className={classes.FamilyOnlineTitle}>Friends Online</Typography>
          <Divider className={classes.hrDivider} light={false}/>
           {friend.map((data, index)=>{
             return(
              <Box my={2} key={index}>
              <Grid container spacing={2} alignItems="center">
                <Grid item lg={2}>
                  <img src={data.image} />
                </Grid>
                <Grid item lg={8}>
                  <Typography variant="h5" color="initial" className={classes.chatUserTitle}>{data.name}</Typography>
              </Grid>
              <Grid item lg={2}>
                <div className={classes.statusOnline}></div>
              </Grid>
              </Grid>
            </Box>
             )
           })}

           {friend.map((data, index)=>{
            return(
             <Box my={2} key={index}>
             <Grid container spacing={2} alignItems="center">
               <Grid item lg={2}>
                 <img src={data.image} />
               </Grid>
               <Grid item lg={8}>
                 <Typography variant="h5" color="initial" className={classes.chatUserTitle}>{data.name}</Typography>
             </Grid>
             <Grid item lg={2}>
               <div className={classes.statusOnline}></div>
             </Grid>
             </Grid>
           </Box>
            )
          })}
          </div>
      </Drawer>
 {/*This is a drawer open on  right side in mobile */}
  <Drawer anchor="right" open={openRightDrawer} onClose={handleOpenRightDrawer} classes={{
    paper:classes.mobileDrawer
  }}>

  <div className={classes.extraBtnsSection}>
  <button className={classes.extraBtns}></button>
  <button className={classes.extraBtns}></button>
  <button className={classes.extraBtns}></button>
  </div>

  <div className={classes.FamilySection}>
  <Typography variant="h6" color="initial" className={classes.FamilyOnlineTitle}>Family Online</Typography>
  <Divider className={classes.hrDivider} light={false}/>
   {family.map((data, index)=>{
     return(
      <Box my={2} key={index}>
      <Grid container spacing={2} alignItems="center">
        <Grid item lg={2}>
          <img src={data.image} />
        </Grid>
        <Grid item lg={8}>
          <Typography variant="h5" color="initial" className={classes.chatUserTitle}>{data.name}</Typography>
      </Grid>
      <Grid item lg={2}>
        <div className={classes.statusOnline}></div>
      </Grid>
      </Grid>
    </Box>
     )
   })}
  </div>

  <div className={classes.FamilySection}>
  <Typography variant="h6" color="initial" className={classes.FamilyOnlineTitle}>Friends Online</Typography>
  <Divider className={classes.hrDivider} light={false}/>
   {friend.map((data, index)=>{
     return(
      <Box my={2} key={index}>
      <Grid container spacing={2} alignItems="center">
        <Grid item lg={2}>
          <img src={data.image} />
        </Grid>
        <Grid item lg={8}>
          <Typography variant="h5" color="initial" className={classes.chatUserTitle}>{data.name}</Typography>
      </Grid>
      <Grid item lg={2}>
        <div className={classes.statusOnline}></div>
      </Grid>
      </Grid>
    </Box>
     )
   })}

   {friend.map((data, index)=>{
    return(
     <Box my={2} key={index}>
     <Grid container spacing={2} alignItems="center">
       <Grid item lg={2}>
         <img src={data.image} />
       </Grid>
       <Grid item lg={8}>
         <Typography variant="h5" color="initial" className={classes.chatUserTitle}>{data.name}</Typography>
     </Grid>
     <Grid item lg={2}>
       <div className={classes.statusOnline}></div>
     </Grid>
     </Grid>
   </Box>
    )
  })}
  </div>
  </Drawer>
    </div>
  );
};

export default CustomAppBar;
