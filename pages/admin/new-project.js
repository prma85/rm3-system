import React from 'react';
// @material-ui/core components
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
// modules
import CalculateComplexity from 'modules/project/calculate-complexity.js';
import ConfigureProject from 'modules/project/configure-project.js';
import LessonsLearned from 'modules/project/lessons-learned.js';
import ProjectTeam from 'modules/project/project-team.js';
import Risks from 'modules/project/risks.js';

function getSteps(type) {
  if (type === 'new') {
    return ['Configure Project', 'Calculate Complexity'];
  }
  if (type === 'closed') {
    return [
      'Configure Project',
      'Calculate Complexity',
      'Project Team',
      'Project Risks',
      'Lessons Learned',
    ];
  }
  return ['Configure Project', 'Calculate Complexity', 'Project Team', 'Project Risks'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return ConfigureProject;
    case 1:
      return CalculateComplexity;
    case 2:
      return ProjectTeam;
    case 3:
      return Risks;
    case 4:
      return LessonsLearned;
    default:
      return () => <>Unknown stepIndex</>;
  }
}

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
  cardRoot: {},
  cardBody: {},
  cardActions: {},
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

function NewProject({ onClose, data = {}, type = 'new' }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [projectData, setProjectData] = React.useState(data);
  const [completed, setCompleted] = React.useState(
    type === 'new' ? [] : [true, true, true, true, type === 'closed']
  );
  const steps = getSteps(type);
  const totalSteps = steps.length;

  const completedSteps = () => {
    return completed.filter((c) => c).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          handleReset()
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
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
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              <StepLabel>{label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Card className={classes.cardRoot}>
        {activeStep === steps.length ? (
          <>
            <CardBody className={classes.cardBody}>
              <Typography className={classes.instructions}>All steps completed</Typography>
            </CardBody>
            <CardFooter className={classes.cardActions}>
              <Button onClick={handleReset}>Close</Button>
            </CardFooter>
          </>
        ) : (
          <>
            <CardBody className={classes.cardBody}>
              <Content projectData={projectData} setProjectData={setProjectData} />
            </CardBody>
            <CardFooter className={classes.cardActions}>
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
