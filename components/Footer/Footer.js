/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
// core components
import styles from 'assets/jss/rm3/components/footerStyle.js';

export default function Footer(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.left}>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a href="#home" className={classes.block}>
              Home
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="#company" className={classes.block}>
              Company
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="#portfolio" className={classes.block}>
              Portfolio
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="#blog" className={classes.block}>
              Blog
            </a>
          </ListItem>
        </List>
      </div>
      <p className={classes.right}>
        <span>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href="mailto:paulo85br@gmail.com" target="_blank" className={classes.a}>
            Paulo Andrade
          </a>
        </span>
      </p>
    </footer>
  );
}
