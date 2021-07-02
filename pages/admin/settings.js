import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

import avatar from 'assets/img/faces/paulo.jpg';

const styles = {
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
};

function UserProfile() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose">
              <h4 className={classes.cardTitleWhite}>Settings</h4>
              <p className={classes.cardCategoryWhite}>Integration Configuration and Database</p>
            </CardHeader>
            <CardBody>
              <Typography variant="h5" gutterBottom>
                Database Configuration
              </Typography>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Address"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: '127.0.0.1',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Database Name"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: 'rm3_next',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Username"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: 'rm3',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Password"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: 'paulo@rm3.io',
                      type: 'password',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Port"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: '2300',
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <Typography variant="h5" gutterBottom>
                Integration Configuration
              </Typography>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    select
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: 'MS Project',
                      options: [
                        <MenuItem value={'MS Project'}>Microsoft Project</MenuItem>,
                        <MenuItem value={'Jira'}>Jira</MenuItem>,
                        <MenuItem value={'Asana'}>Asana</MenuItem>,
                        <MenuItem value={'MS Azure'}>Microsoft Azure DevOps</MenuItem>,
                      ],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Server Address"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: 'https://internalms.rm3.io/teamYoda/api',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Username"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: 'rm3',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Password"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: 'paulo@rm3.io',
                      type: 'password',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Port"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: '8080',
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="rose">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

UserProfile.layout = Admin;

export default UserProfile;
