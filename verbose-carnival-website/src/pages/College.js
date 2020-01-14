import React from 'react'
import { Grid, Typography, makeStyles, Paper, ExpansionPanelSummary, Divider, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import f18 from '../resources/fall18.json'
import s19 from '../resources/spring19.json'
import f19 from '../resources/fall19.json'
import s20 from '../resources/spring20.json'

const ExpansionPanel = withStyles({
    root: {
        border: 'solid rgba(0, 0, 0, .125)',
        borderWidth: "0px 0px 1px 0px",
        boxShadow: 'none',
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
        '&$expanded': {
          margin: 'auto',
        },
      },
      expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      paddingTop: theme.spacing(0),
    },
  }))(MuiExpansionPanelDetails);

const useStyles = makeStyles(theme => ({
    header: {
        padding: theme.spacing(5),
    },
    paper: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(5),
    },
    section: {
        paddingBottom: theme.spacing(2)
    },
    subTitle: {
        paddingBottom: theme.spacing(2),
    },
    title: {
        paddingBottom: theme.spacing(5),
        textAlign: "center",
    },
    club: {
        marginBottom: theme.spacing(6),
        marginTop: theme.spacing(6),
        textAlign: "center",
    },
}));

function MakeTable(props) {
    const { data } = props;

    function getKeys() {
        return Object.keys(data[0]);
    };

    function getFirstKeys() {
        let keys = getKeys();
        keys.pop();
        keys.pop();
        return keys;
    };

    function getLastKeys() {
        let keys = getKeys();
        keys.shift();
        keys.shift();
        return keys;
    }

    function MakeHeader() {
        let keys = getFirstKeys();
        let size = 6;
        return keys.map((key, index) => {
            if (key === "Grade" || key === "Credits") {
                size = 3;
            }
            return (
                <Grid item xs={size}>
                    <Typography variant="h5">{key}</Typography>
                </Grid>
            )
        });
    };

    const RenderRow = (props) => {
        let size = 6;
        return props.keys.map((key, index) => {
            if (key === "Grade" || key === "Credits") {
                size = 3;
            }
            return (
                <Grid item xs={size}>
                    <Typography variant="h6">{props.data[key]}</Typography>
                </Grid>
            )
        });
    }

    const RenderExpansion = (props) => {
        return props.keys.map((key, index) => {
            if (key === "Full") {
                return (
                    <Grid item xs={12}>
                        <Typography variant="subtitle1"> <strong>{props.data[key]}</strong></Typography>
                    </Grid>
                )
            }
            return (
                <Grid item xs={12}>
                    <Typography variant="subtitle1">{props.data[key]}</Typography>
                </Grid>
            )
        })
    }

    function MakeRowsData() {
        let items = data;
        let firstKeys = getFirstKeys();
        let lastKeys = getLastKeys();
        return items.map((row, index) => {
            return (
                <Grid item xs={12}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary>
                            <RenderRow key={index} data={row} keys={firstKeys}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <RenderExpansion data={row} keys={lastKeys}/>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            );
        });
    }

    return (
        <Grid >
            <Grid item container xs={12}>
                <MakeHeader/>
            </Grid>
            <Divider/>
            <MakeRowsData/>
        </Grid>
    );
}

function MakeSection(props) {
    const { data, title } = props;
    const classes = useStyles();
    
    return (
        <Grid item container className={classes.section}>
            <Grid item xs={12} className={classes.subTitle}>
                <Typography variant="h4" color="textSecondary"> {title} </Typography>
            </Grid>
            <Grid item xs={12}>
                <MakeTable data={data}/>
            </Grid>
        </Grid>
    );
};

function College(){
    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={1} className={classes.header}>
                <Grid item xs={12}>
                    <Typography variant="h2"> College </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant="h4" color="textSecondary"> University of Massachusetts Amherst, Honors </Typography>
                    <Typography variant="h4" color="textSecondary"> BS Computer Science </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant="h4" color="textSecondary"> Class of 2022 </Typography>
                    <Typography variant="h4" color="textSecondary"> GPA: 3.621 </Typography>  
                </Grid>
                <Grid container component={Paper} elevation={3} className={classes.paper}>
                    <Grid container justify="center" spacing={3}>
                        <Grid item xs={12} className={classes.title}>
                            <Typography variant="h3">Student Organizations</Typography>
                        </Grid>
                        <Grid item xs={12} lg={6} className={classes.club}>
                            <Typography variant="h4">KDC (K-POP Dance Club)</Typography>
                            <Typography variant="h6"> Member since 2018, Treasurer 2019-2020, Vice President 2020. </Typography>
                            <Button size="large" color="secondary" target="_blank" href="https://www.youtube.com/channel/UCG9Fj9wBoYLjgpL2tW4Zy8g">
                                youtube
                            </Button>
                        </Grid>
                        <Grid item xs={12} lg={6} className={classes.club}>
                            <Typography variant="h4">Google DSC (Developer Student Club)</Typography>
                            <Typography variant="h6"> Member since 2019, develop products for the community</Typography>
                            <Button size="large" color="secondary" target="_blank" href="https://umassdsc.com/">
                                website
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h3"> Classes </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3"> Freshman Year </Typography>
                    </Grid>
                    <MakeSection title="Fall 2018" data={f18}/>
                    <MakeSection title="Spring 2019" data={s19}/>
                    <Grid item xs={12}>
                        <Typography variant="h3"> Sophomore Year </Typography>
                    </Grid>
                    <MakeSection title="Fall 2019" data={f19}/>
                    <MakeSection title="Spring 2020" data={s20}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default College;