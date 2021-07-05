import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(7),
    },
  },
  list: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function ProjectTeam({ projectData }) {
  const classes = useStyles();

  const { team } = projectData;

  return (
    <div className={classes.root}>
      {Object.keys(team).map((key) => (
        <List className={classes.list}>
          <Typography variant="h5" className={classes.inline} color="textPrimary">
            {key}
          </Typography>
          {team[key].map((member) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    className={key === 'devs' ? classes.orange : key === 'qa' ? classes.purple : ''}
                    alt={member.name}
                  >
                    {member.name.substr(0, 1)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {member.name}
                      </Typography>
                      Role: {member.role}
                      <br />
                      Experience: {member.experience.join(', ')}
                      <br />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      ))}
    </div>
  );
}

export default ProjectTeam;
