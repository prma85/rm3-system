import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Table from 'components/Table/Table.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
import NewProject from './new-project.js';
import projectData from 'variables/project.js';

const useStyles = makeStyles((theme) => ({
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
  link: {},
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
  },
}));

const tableData1 = [
  [2, 'New Cloud Infra', 'Dakota Rice', '10.8', '2 seconds ago'],
  [8, 'Mobile App 1', 'Minerva Hooper', '7.2', '2 seconds ago'],
  [12, 'Mobile App 2', 'Minerva Hooper', '8.1', 'not configured'],
];

const tableData2 = [
  [1, 'System 1', 'Dakota Rice', '5.5', 'Jan 1, 2021', '36', '2 seconds ago'],
  [3, 'System 2', 'Minerva Hooper', '3.2', 'Jan 1, 2021', '23', '2 seconds ago'],
  [4, 'System 3', 'Sage Rodriguez', '8.8', 'Jan 1, 2021', '56', '2 seconds ago'],
  [5, 'Mobile App 7', 'Philip Chaney', '5.5', 'Jan 1, 2021', '38', '2 seconds ago'],
  [9, 'Mobile App 5', 'Doris Greene', '3.2', 'Jan 1, 2021', '3', '2 seconds ago'],
  [23, 'Database Migration', 'Mason Porter', '9.7', 'Jan 1, 2021', '8', '2 seconds ago'],
];

const tableData3 = [
  [11, 'Audit 1', 'Dakota Rice', '5.5', 'Jan 1, 2020', 'Dec 30, 2020', '2'],
  [13, 'System 4', 'Minerva Hooper', '3.2', 'Jan 1, 2020', 'Dec 30, 2020', '2'],
  [14, 'Mobile App 9', 'Sage Rodriguez', '8.8', 'Jan 1, 2020', 'Dec 30, 2020', '0'],
];

function TableList() {
  const classes = useStyles();
  const [portfolioProjects, setPortfolioProjects] = React.useState(tableData1);
  const [onGoingProjects, setOnGoingProjects] = React.useState(tableData2);
  const [completedProjects, setCompletedProjects] = React.useState(tableData3);
  const [projectEditData, setProjectEditData] = React.useState(null);

  const [modal, setModal] = React.useState({
    open: false,
    type: 'new',
  });

  const onClickProject = (id) => {
    let project;
    let type = 'new';

    project = tableData1.filter((t) => t[0] === id);

    if (project.length > 0) {
      project = project[0];
    } else {
      project = tableData2.filter((t) => t[0] === id);
      if (project.length > 0) {
        project = project[0];
        type = 'running';
      } else {
        project = tableData3.filter((t) => t[0] === id)[0];
        type = 'closed';
      }
    }
    [...tableData1, ...tableData2, ...tableData3].filter((t) => t[0] === id)[0];
    [...tableData1, ...tableData2, ...tableData3].filter((t) => t[0] === id)[0];

    setProjectEditData(projectData(project));
    setModal({
      open: true,
      type,
    });
  };

  const onClickCloseNewProject = () =>
    setModal({
      open: false,
      type: 'new',
    });

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} styles={{ textAlign: 'right' }}>
        <Button
          onClick
          color="success"
          onClick={() => setModal((prev) => ({ ...prev, open: true }))}
        >
          Add New Project
        </Button>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Not started projects</h4>
          </CardHeader>
          <CardBody>
            <Table
              onClickTRow={onClickProject}
              tableHeaderColor="success"
              tableHead={['ID', 'Project Title', 'Project Manager', 'Complexity', 'Sync']}
              tableData={portfolioProjects}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Projects in execution</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="success"
              onClickTRow={onClickProject}
              tableHead={[
                'ID',
                'Project Title',
                'Project Manager',
                'Complexity',
                'Started',
                '# of Risks',
                'Sync',
              ]}
              tableData={onGoingProjects}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Completed Projects</h4>
          </CardHeader>
          <CardBody>
            <Table
              onClickTRow={onClickProject}
              tableHeaderColor="success"
              tableHead={[
                'ID',
                'Project Title',
                'Project Manager',
                'Complexity',
                'Started',
                'Completed',
                '# of Incidents',
              ]}
              tableData={completedProjects}
            />
          </CardBody>
        </Card>
      </GridItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal.open}
        onClose={onClickCloseNewProject}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal.open}>
          <div className={classes.paper}>
            <NewProject onClose={onClickCloseNewProject} data={projectEditData} type={modal.type} />
          </div>
        </Fade>
      </Modal>
    </GridContainer>
  );
}

TableList.layout = Admin;

export default TableList;
