import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Card from 'components/Card/Card.js';
import CardContent from '@material-ui/core/CardContent';
import FolderIcon from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { warningColor } from 'assets/jss/rm3.js';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  head: {
    color: warningColor[0],
  },
});

function Row({ row }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} key={`data-${Date.now()}`}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? (
              <KeyboardArrowUpIcon className={classes.head} />
            ) : (
              <KeyboardArrowDownIcon className={classes.head} />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.title}</TableCell>
        <TableCell align="center">{row.otherProject ? 'yes' : 'no'}</TableCell>
        <TableCell>{row.date}</TableCell>
      </TableRow>
      <TableRow key={`details-${Date.now()}`}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details:
              </Typography>
              <Card>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Description
                  </Typography>
                  <Typography variant="body2" component="p">
                    {row.description}
                  </Typography>
                  <br />
                  <Divider />
                  <br />
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Actions
                  </Typography>
                  <List>
                    {row.actions.map((action, i) => (
                      <ListItem key={`actions-${i}-${Date.now()}`}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary={action} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function LessonsLearned({ projectData }) {
  // id, title, otherProject, date, description, actions
  const { lessonsLearned } = projectData;
  const [rows] = React.useState(lessonsLearned);
  const classes = useRowStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={classes.head}>ID</TableCell>
            <TableCell className={classes.head}>Title</TableCell>
            <TableCell className={classes.head} align="center">
              Happened Before?
            </TableCell>
            <TableCell className={classes.head}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LessonsLearned;
