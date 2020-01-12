import React from 'react'
import { makeStyles, Grid, CssBaseline, Typography, Link, Button} from '@material-ui/core'
import full from '../images/full.jpg'
import meow from '../images/meowmeow.jpg'
import minitt from '../images/minitt.jpg'
import rocky from '../images/rocky.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    sectionEven: {
        padding: theme.spacing(5),
        background: theme.palette.background.paper,
    },
    sectionOdd: {
        padding: theme.spacing(5),
        background: theme.palette.background.default,
    },
    foot: {
        textAlign: "center",
        padding: theme.spacing(5),
        background: theme.palette.background.paper,
    },
    subTitle: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(6),
    },
    subText: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(1),
    },
    img: {
        height: "100%",
        width: "100%",
        padding: theme.spacing(10)
    },
    a: {
        textDecoration: "none",
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

function Home(){
    const classes = useStyles();

    return(
        <main className={classes.root}>
            <CssBaseline/>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} className={classes.sectionEven}>
                    <Grid item xs={6}>
                        <Typography variant="h1">Hello!</Typography>
                        <Typography variant="h4" className={classes.subTitle}>My name is Lucas Guzmán-Finn, welcome to my site ↓</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={full} alt="me" className={classes.img}></img>
                    </Grid>
            </Grid>
            <Grid container direction="row-reverse" justify="flex-start" alignItems="center" className={classes.sectionOdd}>
                <Grid item xs={6}>
                    <Typography variant="h2" className={classes.titleodd}>College</Typography>
                    <Typography variant="h5" className={classes.subText}>a second year <strong>honors</strong> student pursing a <strong>BS in Computer Science</strong> at the University of Massachusetts Amherst, treasurer of <strong>KDC</strong> and member of <strong>DSC</strong></Typography>
                    <Button color="secondary" href="/college" className={classes.button}>
                        find out more
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <img src={meow} alt="me" className={classes.img}></img>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} className={classes.sectionEven}>
                    <Grid item xs={6}>
                        <Typography variant="h2">Experience</Typography>
                        <Typography variant="h5" className={classes.subText}>although minimal experience, very excited to gain more</Typography>
                        <Button color="secondary" href="/experience" className={classes.button}>
                            See experienes
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={rocky} alt="me" className={classes.img}></img>
                    </Grid>
            </Grid>
            <Grid container direction="row-reverse" justify="flex-start" alignItems="center" className={classes.sectionOdd}>
                <Grid item xs={6}>
                    <Typography variant="h2">Projects</Typography>
                    <Typography variant="h5" className={classes.subText}>some personal projects that have been worked on and off on spare time, some bassed off of what I am passionate about, others for convenience</Typography>
                    <Button color="secondary" href="/projects" className={classes.button}>
                        see projects
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <img src={minitt} alt="me" className={classes.img}></img>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" spacing={4} className={classes.foot}>
                    <Grid item xs={12}>
                        <Typography variant="h5"> That's about it... but feel free to follow me on any of the platforms below!</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Link href="https://www.linkedin.com/in/lucasguzmanfinn/" target="_blank" rel="noopener noreferrer" color="inherit">
                            <Typography variant="h6"> LinkedIn </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link href="https://www.instagram.com/lggufi_/" target="_blank" rel="noopener noreferrer" color="inherit">
                            <Typography variant="h6"> Instagram </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                    <Link href="https://www.facebook.com/profile.php?id=100004435065799" target="_blank" rel="noopener noreferrer" color="inherit">
                            <Typography variant="h6"> Facebook </Typography>
                        </Link>
                    </Grid>
            </Grid>
        </main>
    );
}

export default Home;