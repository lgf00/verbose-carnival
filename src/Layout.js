import React from 'react'
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, CssBaseline, ListItemText, Drawer, makeStyles, Avatar, Divider, Typography, ListSubheader, Hidden, Toolbar, AppBar, IconButton, Slide, useScrollTrigger } from '@material-ui/core';
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
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        size: "100%",
    }
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

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function getPageName() {
    let path = window.location.pathname;
    switch (path) {
        case "/":
            return "Home";
        case "/college":
            return "College";
        default:
            return "unknown page name";
    };
}

function Layout(props) {
    const classes = useStyles();
    const { children } = props
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
                <HideOnScroll>
                    <AppBar position="fixed" className={classes.appBar}>
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
                            <Typography variant="h5" className={classes.title}>{getPageName()}</Typography>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    <Drawer
                        variant="temporary"
                        anchor='left'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        onClick={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
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
                {children}
            </main>
        </div>
    );
}

export default Layout;