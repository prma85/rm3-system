import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

// core components
import styles from 'assets/jss/rm3/components/tableStyle.js';

export default function CustomTable(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, onClickTRow, onChangeInput } = props;
  let idKey;

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                if (prop.toLowerCase() === 'id') {
                  idKey = key;
                }
                return (
                  <TableCell className={classes.tableCell + ' ' + classes.tableHeadCell} key={key}>
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData?.map((row, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {row.map((prop, keyCol) => {
                  return onClickTRow && keyCol === idKey ? (
                    <TableCell
                      onClick={() => onClickTRow(prop)}
                      className={classes.tableCell + ' ' + classes.link}
                      key={keyCol}
                    >
                      {prop}
                    </TableCell>
                  ) : (
                    <TableCell className={classes.tableCell} key={keyCol}>
                      {!prop && onChangeInput ? (
                        <input
                          className={classes.input}
                          onChange={(e) => onChangeInput(e, tableHead[keyCol], key)}
                        />
                      ) : (
                        prop
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: 'gray',
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
