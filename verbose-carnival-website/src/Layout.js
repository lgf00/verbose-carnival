import React from 'react'
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, CssBaseline, ListItemText, Drawer, makeStyles, Avatar, Divider, Typography, ListSubheader } from '@material-ui/core';
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
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
  fakeNested: {
      paddingLeft: theme.spacing(4),
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

function Layout(props){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >   
                <div className={classes.drawerHeader}>
                    <Avatar alt="Lucas Guzmán-Finn" src={me} className={classes.size} />
                    <div className={classes.drawerHeaderText}>
                        <Typography variant="h6">Lucas Guzmán-Finn</Typography>
                        <Typography variant="subtitle1">lguzmanfinn@gmail.com</Typography>
                    </div>
                </div>
                <Divider/>
                <List>
                    <ListItemLink to="/" primary="Home" />
                    <ListItemLink to="/college" primary="College" />
                    <Divider/>
                    <ListSubheader>Projects</ListSubheader>
                    <ListItemLink to="/projects/scuba" primary="Scuba" />
                    <ListItemLink to="/projects/travel" primary="Travel" />
                    <ListItemLink to="/projects/schedular" primary="Schedular" />
                    <ListItemLink to="/projects/verbose-carnival" primary="Verbose-Carnival" />
                </List>
            </Drawer>
            {props.children}
        </div>
    )
}

export default Layout;