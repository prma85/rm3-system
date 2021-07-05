import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Table from 'components/Table/Table.js';
import React from 'react';

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

export default CalculateComplexity;
