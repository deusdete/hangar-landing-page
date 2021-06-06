import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container'
import CardService from '../CardService';
import { IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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

export default function BlogPosts() {
  const classes = useStyles();

  function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  return (
    <div className={classes.mainFeatured} id="blog">
      <Container maxWidth="md">
        <Grid container spacing={2} justify="center" alignItems="center" style={{paddingTop: 75, paddingBottom: 75}}>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" className={classes.text}>
              - Blog
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
                What's new?<br></br>
                My blog and news.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <List dense={true}>
              {generate(
                <ListItem button>
                  <ListItemAvatar>
                    <Typography variant="overline" className={classes.text}>
                        06/06/2021 18:05
                    </Typography>
                  </ListItemAvatar>
                  <ListItemText
                    style={{textAlign:'center'}}
                    primary=" Let this be a lesson to you"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <ArrowRightAltIcon color="secondary" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}