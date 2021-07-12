import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
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
import { MenuItem } from '@material-ui/core';

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

function NewRisk({ onClose, data = {} }) {
  const classes = useStyles();
  const [requestData, setRequestData] = React.useState(data);

  return (
    <div className={classes.root}>
      <Card>
        <CardBody>
          <Typography variant="h5" gutterBottom>
            New Change Request
          </Typography>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="Title"
                id="company-disabled"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  defaultValue: data.title,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="Reporter"
                id="username"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  defaultValue: data.reporter,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="Category"
                id="email-address"
                formControlProps={{
                  fullWidth: true,
                }}
                select
                inputProps={{
                  defaultValue: data.category,
                  options: [
                    <MenuItem value="Technical">Technical</MenuItem>,
                    <MenuItem value="Programmatic">Programmatic</MenuItem>,
                    <MenuItem value="Support">Support</MenuItem>,
                    <MenuItem value="Cost">Cost</MenuItem>,
                    <MenuItem value="Schedule">Schedule</MenuItem>,
                  ],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="Status"
                id="email-address"
                formControlProps={{
                  fullWidth: true,
                }}
                select
                inputProps={{
                  defaultValue: data.status || 'Not Monitored',
                  options: [
                    <MenuItem value="Not Monitored">Not Monitored</MenuItem>,
                    <MenuItem value="In progress">In progress</MenuItem>,
                    <MenuItem value="Closed">Closed</MenuItem>,
                    <MenuItem value="Abandoned">Abandoned</MenuItem>,
                  ],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="Priority"
                id="email-address"
                formControlProps={{
                  fullWidth: true,
                }}
                select
                inputProps={{
                  defaultValue: data.priority || 'medium',
                  options: [
                    <MenuItem value="low">Low</MenuItem>,
                    <MenuItem value="medium">Medium</MenuItem>,
                    <MenuItem value="high">High</MenuItem>,
                    <MenuItem value="critical">Critical</MenuItem>,
                  ],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="Type"
                id="email-address"
                formControlProps={{
                  fullWidth: true,
                }}
                select
                inputProps={{
                  defaultValue: data.type || 'threat',
                  options: [
                    <MenuItem value="opportunity">Opportunity</MenuItem>,
                    <MenuItem value="threat">Threat</MenuItem>,
                  ],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Description"
                id="email-address"
                textArea
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  defaultValue: data.description,
                }}
              />
            </GridItem>
          </GridContainer>
          {data.status && (
            <>
              <br />
              <Typography variant="h6" gutterBottom>
                Projects
              </Typography>
              <Table
                tableHeaderColor="danger"
                tableHead={['ID', 'Project Title', 'Stated Date', 'Exposure', 'Last Meeting']}
                tableData={data.projects ?? [['No entries']]}
              />
              <br />
              <Typography variant="h6" gutterBottom>
                Historic
              </Typography>
              <Table
                tableHeaderColor="danger"
                tableHead={['Update type', 'Initiator', 'Date', 'Comments']}
                tableData={data.historic ?? [['No entries']]}
              />
            </>
          )}
        </CardBody>
        <CardFooter>
          <Button color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button color="danger" onClick={onClose}>
            {data.status ? 'Save Changes' : 'Send'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

NewRisk.layout = Admin;

export default NewRisk;
