import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import customInputStyle from 'assets/jss/rm3/components/customInputStyle.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];
const suggestions = [
  { id: 'Security', text: 'Security' },
  { id: 'Software Design', text: 'Software Design' },
  { id: 'Troubleshooting', text: 'Troubleshooting' },
  { id: 'Integration and interfaces', text: 'Integration and interfaces' },
  { id: 'Environmental impact', text: 'Environmental impact' },
  { id: 'Legislation', text: 'Legislation' },
  { id: 'Margins', text: 'Margins' },
  { id: 'Inflation', text: 'Inflation' },
];

function ConfigureProject({ projectData, setProjectData }) {
  const useStyles = makeStyles(customInputStyle);
  const classes = useStyles();

  const onKeyUp = (e, prop) => {
    const tempData = { ...projectData };
    tempData[prop] = e.currentTarget.value;

    setProjectData(tempData);
  };

  const { tags = null, type } = projectData || { type: 'new' };
  const [projectTags, setProjectTags] = React.useState(type !== 'new' && tags ? tags : []);

  const handleDelete = (i) => {
    setProjectTags(projectTags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setProjectTags([...projectTags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const tempTags = [...projectTags];
    const newTags = tempTags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setProjectTags(newTags);
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
          <style>
            {`.tag-wrapper {
            border: 1px solid #cecece;
            padding: 5px;
            margin: 5px;
            background: #cecece;
            border-radius: 15px;
          }
          .label-tags {
            font-size: 12px;
          }
          .tag-wrapper button {
            background: transparent;
            border: none;
            margin-left: 5px;
            cursor: pointer;
          }
          .ReactTags__tagInput {
            width: 100%;
            color: rgba(0, 0, 0, 0.87);
            cursor: text;
            font-size: 1rem;
            box-sizing: border-box;
            align-items: center;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            line-height: 1.1876em;
            letter-spacing: 0.00938em;
            margin-top: 16px;
            border-bottom: 1px solid #D2D2D2 !important;
          }
          .ReactTags__tagInputField {
            font: inherit;
            color: currentColor;
            width: 100%;
            border: 0;
            height: 1.1876em;
            margin: 0;
            display: block;
            padding: 6px 0 7px;
            min-width: 0;
            background: none;
            box-sizing: content-box;
            animation-name: mui-auto-fill-cancel;
            letter-spacing: inherit;
            animation-duration: 10ms;
            -webkit-tap-highlight-color: transparent;
          }
          `}
          </style>
          <br />
          <InputLabel className={classes.labelRoot + ' label-tags'}>Tags</InputLabel>
          <br />
          <ReactTags
            tags={projectTags}
            suggestions={suggestions}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            delimiters={delimiters}
            classNames={classes.tag}
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

export default ConfigureProject;
