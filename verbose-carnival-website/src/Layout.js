import React from 'react'
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, CssBaseline, ListItemText, Drawer, makeStyles, Avatar, Divider, Typography, ListSubheader, Hidden, Toolbar, AppBar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import me from './images/avatar.jpg'

ListItemLink.propTypes = {
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  size: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  drawerHeader: {
    padding: theme.spacing(3),
  },
  drawerHeaderText: {
      paddingTop: theme.spacing(1),
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));

function ListItemLink(props) {
    const { primary, to } = props;
    
    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );
    
    return (
        <li>
            <ListItem button component={renderLink} >
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

function Layout(props){
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.drawerHeader}>
                <Avatar alt="Lucas Guzmán-Finn" src={me} className={classes.size} />
                <div className={classes.drawerHeaderText}>
                    <Typography variant="h6">Lucas Guzmán-Finn</Typography>
                    <Typography variant="subtitle1">lguzmanfinn@gmail.com</Typography>
                </div>
            </div>
            <Divider />
            <List>
                <ListItemLink to="/" primary="Home" />
                <ListItemLink to="/college" primary="College" />
                <Divider />
                <ListSubheader>Projects</ListSubheader>
                <ListItemLink to="/projects/scuba" primary="Scuba" />
                <ListItemLink to="/projects/travel" primary="Travel" />
                <ListItemLink to="/projects/schedular" primary="Schedular" />
                <ListItemLink to="/projects/verbose-carnival" primary="Verbose-Carnival" />
            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Hidden mdUp>
                <AppBar position="fixed" elevation={0} className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    <Drawer
                        //container={container}
                        variant="temporary"
                        anchor='left'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Hidden>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Hidden mdUp><div className={classes.toolbar} /></Hidden>
                {props.children}
            </main>
        </div>
      );
    // return(
    //     <div className={classes.root}>
    //         <CssBaseline/>
    //         <Hidden xsDown component="js">
    //             <nav className={classes.drawer} aria-label="navigation">
    //                 <Drawer
    //                     className={classes.drawer}
    //                     variant="permanent"
    //                     classes={{
    //                         paper: classes.drawerPaper,
    //                     }}
    //                     anchor="left"
    //                 >   
    //                     {drawer}
    //                 </Drawer>
    //             </nav>
    //         </Hidden>
    //         <Hidden smUp>
    //             <AppBar position="fixed" className={classes.appBar}>
    //                 <Toolbar>
    //                     <IconButton
    //                         color="inherit"
    //                         aria-label="open drawer"
    //                         edge="start"
    //                         onClick={handleDrawerToggle}
    //                         className={classes.menuButton}
    //                     >
    //                         <MenuIcon />
    //                     </IconButton>
    //                     <Typography variant="h6" noWrap>
    //                         App Bar
    //                     </Typography>
    //                 </Toolbar>
    //             </AppBar>
    //             <nav className={classes.drawer} aria-label="navigation">
    //                 <Drawer
    //                     variant="temporary"
    //                     anchor={theme.direction === 'rtl' ? 'right' : 'left'}
    //                     open={mobileOpen}
    //                     onClose={handleDrawerToggle}
    //                     classes={{
    //                         paper: classes.drawerPaper,
    //                     }}
    //                     ModalProps={{
    //                         keepMounted: true,
    //                     }}
    //                 >
    //                     {drawer}
    //                 </Drawer>
    //             </nav>
    //         </Hidden>
    //         <main className={classes.content}>
    //             {props.children}
    //         </main>
    //     </div>
    // );
}

export default Layout;