import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// @material-ui/icons
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Check from '@material-ui/icons/Check';
// core components
import styles from 'assets/jss/rm3/components/tasksStyle.js';

export default function Tasks({ tasksIndexes, completed, tasks, checkedIndexes }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [checked, setChecked] = React.useState(checkedIndexes);
  const [started, setStarted] = React.useState([0, 3]);
  const [data, setData] = React.useState(tasks);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const onClickStarted = (id) => {
    const bkpStarted = [...started];
    if (bkpStarted.includes(id)) {
      setStarted(bkpStarted.filter((i) => i !== id));
    } else {
      setStarted([...bkpStarted, id]);
    }
  };

  const onClickDelete = (id) => {
    setData(data.filter((_text, index) => index !== id));
  };

  return (
    <Table className={classes.table}>
      <TableBody>
        {data.map((task, value) => (
          <TableRow key={value} className={classes.tableRow}>
            {/*
            <TableCell className={classes.tableCell}>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                onClick={() => handleToggle(value)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.root,
                }}
              />
            </TableCell>
            */}
            <TableCell className={classes.tableCell}>{task}</TableCell>
            <TableCell className={classes.tableActions}>
              <Tooltip
                id="tooltip-top"
                title="Edit Task"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton aria-label="Edit" className={classes.tableActionButton}>
                  <Edit className={classes.tableActionButtonIcon + ' ' + classes.edit} />
                </IconButton>
              </Tooltip>
              {!completed && (
                <>
                  <Tooltip
                    id="tooltip-top-start"
                    title={started.includes(value) ? 'Pause' : 'Start'}
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      onClick={() => onClickStarted(value)}
                      aria-label="Start"
                      className={classes.tableActionButton}
                    >
                      {started.includes(value) ? (
                        <Pause className={classes.tableActionButtonIcon + ' ' + classes.pause} />
                      ) : (
                        <PlayArrow className={classes.tableActionButtonIcon + ' ' + classes.play} />
                      )}
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    onClick={() => onClickDelete(value)}
                    id="tooltip-top-start"
                    title="Unassign"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton aria-label="Close" className={classes.tableActionButton}>
                      <Close className={classes.tableActionButtonIcon + ' ' + classes.close} />
                    </IconButton>
                  </Tooltip>
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

Tasks.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  checkedIndexes: PropTypes.array,
};
