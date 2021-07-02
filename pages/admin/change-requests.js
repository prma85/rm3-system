import React from 'react';
import { warningColor } from 'assets/jss/rm3.js';
// @material-ui/core components
import { makeStyles, lighten } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Link from '@material-ui/core/Link';

// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
import NewRequest from './new-change-request';

function createData(id, title, requester, category, status, lastUpdate) {
  return { id, title, requester, category, status, lastUpdate };
}

const rows = [
  createData(1, 'Update Scope Task 1.1', 'Dakota Rice', 'Scope', 'Open', '1 week ago'),
  createData(3, 'Update Scope Task 2.2', 'Minerva Hooper', 'Scope', 'Open', '2 hours ago'),
  createData(4, 'Update Scope Task 3.1', 'Sage Rodriguez', 'Scope', 'Open', '2 hours ago'),
  createData(5, 'Change Resources', 'Philip Chaney', 'Resources', 'Closed', '1 day ago'),
  createData(9, 'Buy New Software 1', 'Doris Greene', 'Software', 'In Execution', '1 day ago'),
  createData(10, 'Buy New Software 2', 'Dakota Rice', 'Software', 'Closed', '2 seconds ago'),
  createData(
    13,
    'Buy New Software 3',
    'Minerva Hooper',
    'Software',
    'In Execution',
    '2 seconds ago'
  ),
  createData(14, 'Buy New Software 4', 'Sage Rodriguez', 'Software', 'Closed', '2 seconds ago'),
  createData(
    15,
    'Change Access Level Server 1',
    'Philip Chaney',
    'Infra',
    'In Execution',
    '2 seconds ago'
  ),
  createData(
    19,
    'Change Access Level Server 2',
    'Doris Greene',
    'Security',
    'In Execution',
    '2 seconds ago'
  ),
  createData(20, 'Get Access Server 3', 'Mason Porter', 'Security', 'In Execution', '1 hour ago'),
  createData(21, 'Update Scope Task 1.2', 'Dakota Rice', 'Scope', 'Open', '3 days ago'),
  createData(23, 'Update Scope Task 2.3', 'Minerva Hooper', 'Quality', 'Open', '3 days ago'),
  createData(24, 'Update Scope Task 3.2', 'Sage Rodriguez', 'Quality', 'Closed', '2 seconds ago'),
  createData(25, 'Change Resources for PJ', 'Philip Chaney', 'Resources', 'Open', '2 seconds ago'),
  createData(29, 'Renew Software 10', 'Doris Greene', 'Software', 'Open', '2 seconds ago'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// { id, title, requester, category, status, lastUpdate };
const headCells = [
  { id: 'id', numeric: true, disablePadding: false, label: 'ID' },
  { id: 'title', numeric: false, disablePadding: false, label: 'Title' },
  { id: 'requester', numeric: false, disablePadding: false, label: 'Requester' },
  { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'lastUpdate', numeric: false, disablePadding: false, label: 'Last Update' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/*
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
         */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className={classes.headLabel}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    minHeight: 0,
  },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar className={classes.root}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        {numSelected > 0 ? `All Requests: ${numSelected} selected` : 'All Requests'}
      </Typography>

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  headLabel: {
    color: warningColor[0],
  },
  link: {
    paddingLeft: 10,
    color: warningColor[2],
    cursor: 'pointer',
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '80%',
    maxHeight: '80vh',
    overflow: 'auto',
  },
}));

function TableList() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState({});
  const [isModalNewOpen, setIsModalNewOpen] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClickRow = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleClickID = (id) => {
    const request = rows.filter((r) => r.id === id)[0];
    setData({
      ...request,
      description: 'This is a common description',
      historic: [
        ['Info', 'System', 'Jul 1, 2021', 'A technician was attributed to the request'],
        ['Status', 'Jhon', 'Jul 1, 2021', 'The status is now open'],
        ['Status', 'System', 'Jul 1, 2021', 'The request was Created'],
      ],
    });
    setIsModalNewOpen(true);
  };

  const onCloseModal = () => {
    setIsModalNewOpen(false);
    setData({});
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} styles={{ textAlign: 'right' }}>
        <Button onClick color="warning" onClick={() => setIsModalNewOpen(true)}>
          Add New Change Request
        </Button>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>
              <EnhancedTableToolbar numSelected={selected.length} />
            </h4>
          </CardHeader>
          <CardBody>
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size="medium"
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                        >
                          {/*
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </TableCell>
                          */}
                          <TableCell align="left" id={labelId} scope="row" padding="none">
                            <Link onClick={() => handleClickID(row.id)} className={classes.link}>
                              {row.id}
                            </Link>
                          </TableCell>
                          <TableCell align="left">{row.title}</TableCell>
                          <TableCell align="left">{row.requester}</TableCell>
                          <TableCell align="left">{row.category}</TableCell>
                          <TableCell align="left">{row.status}</TableCell>
                          <TableCell align="left">{row.lastUpdate}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </CardBody>
        </Card>
      </GridItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalNewOpen}
        onClose={onCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalNewOpen}>
          <div className={classes.paper}>
            <NewRequest data={data} onClose={onCloseModal} />
          </div>
        </Fade>
      </Modal>
    </GridContainer>
  );
}

TableList.layout = Admin;

export default TableList;
