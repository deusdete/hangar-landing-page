import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container'
import CardService from '../CardService';

const useStyles = makeStyles((theme) => ({
  mainFeatured: {
    position: 'relative',
    backgroundColor: '#10002b',
    color: theme.palette.common.white,
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  subtitle:{
    marginBottom: 18
  },
  text: {
    marginBottom: 20,
    color: '#c2c2c2',
  },
  infoNumber: {
    display: 'flex',
    alignItems: 'flex-end',
    marginLeft: 8,
    paddingBottom: 10,
    width: 80,
  },
}));

export default function MainServices() {
  const classes = useStyles();
  return (
    <div className={classes.mainFeatured} id="services">
      <Container maxWidth="md">
        <Grid container spacing={2} justify="center" alignItems="center" style={{paddingTop: 75, marginBottom: 30}}>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" className={classes.text}>
              - Contact
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              Any Type Of Query & Discussion
            </Typography>
            <Typography variant="body2" className={classes.text}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </Typography>

            <Link href="#" variant="subtitle1" color="secondary">
              hi@carlos.com
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.subtitle}>
              You can't use up creativity, the more you use, mere you have in your signifant mind.
            </Typography>
            <Typography variant="body2" className={classes.text}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laurlantium, totam rem aperiam, eaque ipsa.
            </Typography>

            <Grid container justify="space-between" >
              <Grid item xs={6} style={{display: 'flex'}}>
                <Typography variant="h2" color="secondary">
                  14
                </Typography>
                <Typography variant="subtitle2" className={classes.infoNumber}>
                  Years of Experience.
                </Typography>
              </Grid>
              <Grid item xs={6} style={{display: 'flex'}}>
                <Typography variant="h2" color="secondary">
                  187
                </Typography>
                <Typography variant="subtitle2" className={classes.infoNumber}>
                  Satisfied Client
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <CardService title="Product Designer." subtitle="125 Products" color="#FFAF23" />
              </Grid>
              <Grid item xs={12} md={4}>
                <CardService title="Product Designer." subtitle="125 Products" color="#FFF" />
              </Grid>
              <Grid item xs={12} md={4}>
                <CardService title="Product Designer." subtitle="125 Products" color="#FFF" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}