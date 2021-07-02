import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Table from 'components/Table/Table.js';

const useStyles = makeStyles((theme) => ({
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
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const tableData = [
  [1, 'Number of executors', '', ''],
  [2, 'Sectors involved', '', ''],
  [3, 'Interfaces with other processes', '', ''],
  [4, 'Dispersion in product quality generated', '', ''],
  [5, 'Geographic localization', '', ''],
  [6, 'Deadline', '', ''],
  [7, 'Quantity of control activities', '', ''],
  [8, 'Number of activities', '', ''],
  [9, 'External interference/sensitivity', '', ''],
  [10, 'Familiarity with the project', '', ''],
];

function getSteps(type) {
  console.log(type);
  if (type === 'new') {
    return ['Configure Project', 'Calculate Complexity'];
  }
  if (type === 'closed') {
    return ['Configure Project', 'Calculate Complexity', 'Project Risks', 'Lessons Learned'];
  }
  return ['Configure Project', 'Calculate Complexity', 'Project Risks'];
}

function ConfigureProject({ projectData, setProjectData }) {
  const onKeyUp = (e, prop) => {
    const tempData = { ...projectData };
    tempData[prop] = e.currentTarget.value;

    setProjectData(tempData);
  };
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Project Title"
            id="title"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: projectData?.title,
              onKeyUp: (e) => onKeyUp(e, 'title'),
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Project Manager"
            id="pm"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: projectData?.pm,
              onKeyUp: (e) => onKeyUp(e, 'pm'),
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Project Category"
            id="category"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: projectData?.category,
              onKeyUp: (e) => onKeyUp(e, 'category'),
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Integration ID"
            id="uuid"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: projectData?.uuid,
              onKeyUp: (e) => onKeyUp(e, 'uuid'),
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Budget"
            id="budget"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: projectData?.budget,
              onKeyUp: (e) => onKeyUp(e, 'budget'),
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Deadline"
            id="deadline"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: projectData?.deadline,
              onKeyUp: (e) => onKeyUp(e, 'deadline'),
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText="Project Description"
            id="description"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: projectData?.description,
              onKeyUp: (e) => onKeyUp(e, 'description'),
            }}
            textArea
          />
        </GridItem>
      </GridContainer>
    </>
  );
}

function CalculateComplexity({ projectData, setProjectData }) {
  const [complexity, setComplexity] = React.useState(projectData?.complexity || []);
  const [data, setData] = React.useState(
    projectData?.complexity
      ? tableData.map((t, index) => {
          t[2] = projectData.complexity[index].FQ;
          t[3] = projectData.complexity[index].W;
          return t;
        })
      : tableData
  );

  const onChangeInput = (e, prop, rowIndex) => {
    const value = parseInt(e.currentTarget.value) || 1;
    let actualObj = complexity[rowIndex] || {};

    if (prop.includes('(FQ)')) {
      actualObj = {
        FQ: value,
        W: actualObj.W || 1,
      };
    }

    if (prop.includes('(W)')) {
      actualObj = {
        FQ: actualObj.FQ || 1,
        W: value,
      };
    }

    const oldComplexity = [...complexity];
    oldComplexity[rowIndex] = actualObj;

    setComplexity(oldComplexity);
  };

  const calculateComplexity = () => {
    const n = complexity.length;
    let total = 0;
    complexity.forEach((c) => {
      total = Math.round(total + c.FQ * c.W);
    });

    const complexityTotal = total / n;

    return Number.isNaN(complexityTotal) ? 0 : complexityTotal.toFixed(2);
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Project Complexity: {calculateComplexity()}
      </Typography>
      <Divider />

      <Table
        onChangeInput={onChangeInput}
        tableHeaderColor="primary"
        tableHead={[' ', 'Factors', 'Factor Qualification (FQ)', 'Factor Weight (W)']}
        tableData={data}
      />
    </>
  );
}

function ShowRisks() {
  return 'test';
}

function ShowLessonsLearned() {
  return 'test';
}

function getStepContent(stepIndex, isNew) {
  switch (stepIndex) {
    case 0:
      return ConfigureProject;
    case 1:
      return CalculateComplexity;
    case 2:
      return ShowRisks;
    case 3:
      return ShowLessonsLearned;
    default:
      return () => <>Unknown stepIndex</>;
  }
}

function NewProject({ onClose, data = {}, type = 'new' }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [projectData, setProjectData] = React.useState(data);
  const steps = getSteps(type);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setProjectData({});
    if (onClose) {
      onClose(projectData);
    }
  };

  const Content = getStepContent(activeStep);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Card>
        {activeStep === steps.length ? (
          <>
            <CardBody>
              <Typography className={classes.instructions}>All steps completed</Typography>
            </CardBody>
            <CardFooter>
              <Button onClick={handleReset}>Close</Button>
            </CardFooter>
          </>
        ) : (
          <>
            <CardBody>
              <Content projectData={projectData} setProjectData={setProjectData} />
            </CardBody>
            <CardFooter>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}

NewProject.layout = Admin;

export default NewProject;
