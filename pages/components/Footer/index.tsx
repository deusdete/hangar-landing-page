import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import { IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  mainFeatured: {
    backgroundColor: '#3c096c',
    color: theme.palette.common.white,
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
  subtitle: {
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

export default function Footer() {
  const classes = useStyles();


  return (
    <div className={classes.mainFeatured}>
      <Container maxWidth="md">
        <Grid container spacing={2} justify="space-between" style={{ paddingTop: 75, paddingBottom: 75 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" className={classes.text}>
              - Blog
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              Got a project?<br></br>
                Let's talk
            </Typography>
            <Typography variant="body2" className={classes.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            </Typography>

            <Link href="#" variant="subtitle1" color="secondary">
              hi@carlos.com
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <form noValidate autoComplete="off">
              <Typography variant="h5" className={classes.subtitle}>
                Estimate your project? <br></br>
                Let me know here.
            </Typography>

              <TextField color="secondary" id="outlined-basic" label="What's your name?" variant="outlined" style={{ width: '100%', marginBottom: 10 }} />
              <TextField color="secondary"  id="outlined-basic" label="Your fancy email" variant="outlined" style={{ width: '100%', marginBottom: 10 }} />
              <TextField color="secondary" id="outlined-basic" label="Tell me about your project" variant="outlined" style={{ width: '100%', marginBottom: 10 }} />
              <Button variant="outlined" color="secondary">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ textAlign: 'center', paddingTop: 75, paddingBottom: 75 }}>
          <Grid item xs={12}>
            <Typography>
              © 2021 Feito com ❤ por Hangar
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}