function createData(id, title, reporter, category, status, lastUpdate, type, priority, projectIds) {
  return { id, title, reporter, category, status, lastUpdate, type, priority, projectIds };
}

const rows = [
  createData(
    1,
    'Risk 1',
    'Dakota Rice',
    'Technical',
    'In progress',
    '1 week ago',
    'opportunity',
    'low',
    [1, 2, 3, 4]
  ),
  createData(
    3,
    'Risk 2.2',
    'Minerva Hooper',
    'Technical',
    'In progress',
    '2 hours ago',
    'threat',
    'medium',
    [1, 2, 3, 4]
  ),
  createData(
    4,
    'Risk 3.1',
    'Sage Rodriguez',
    'Programmatic',
    'In progress',
    '2 hours ago',
    'opportunity',
    'high',
    [1, 2, 3, 4]
  ),
  createData(
    5,
    'Risk 4',
    'Philip Chaney',
    'Programmatic',
    'Closed',
    '1 day ago',
    'opportunity',
    'high',
    [1, 2, 3, 4]
  ),
  createData(
    9,
    'Risk 9',
    'Doris Greene',
    'Support',
    'In progress',
    '1 day ago',
    'threat',
    'medium',
    [1, 2, 3, 4]
  ),
  createData(
    10,
    'Risk 10',
    'Dakota Rice',
    'Support',
    'Closed',
    '2 seconds ago',
    'opportunity',
    'low',
    [1, 2, 3, 4]
  ),
  createData(
    13,
    'Buy New Software',
    'Minerva Hooper',
    'Support',
    'In progress',
    '2 seconds ago',
    'opportunity',
    'low',
    [1, 2, 3, 4]
  ),
  createData(
    14,
    'Risk 14',
    'Sage Rodriguez',
    'Cost',
    'Closed',
    '2 seconds ago',
    'threat',
    'medium',
    [1, 2, 3, 4]
  ),
  createData(
    15,
    'Access Level Server',
    'Philip Chaney',
    'Cost',
    'Not Monitored',
    '2 seconds ago',
    'threat',
    'medium',
    [1, 2, 3, 4]
  ),
  createData(
    19,
    'Risk 19',
    'Doris Greene',
    'Cost',
    'Not Monitored',
    '2 seconds ago',
    'threat',
    'high',
    [1, 2, 3, 4]
  ),
  createData(
    20,
    'Risk 20',
    'Mason Porter',
    'Schedule',
    'Not Monitored',
    '1 hour ago',
    'opportunity',
    'high',
    [1, 2, 3, 4]
  ),
  createData(
    21,
    'Risk Scope Task 1.2',
    'Dakota Rice',
    'Schedule',
    'In progress',
    '3 days ago',
    'opportunity',
    'high',
    [1, 2, 3, 4]
  ),
  createData(
    23,
    'Risk Scope Task 2.3',
    'Minerva Hooper',
    'Schedule',
    'In progress',
    '3 days ago',
    'threat',
    'high',
    [1, 2, 3, 4]
  ),
  createData(
    24,
    'Risk Scope Task 3.2',
    'Sage Rodriguez',
    'Technical',
    'Closed',
    '2 seconds ago',
    'opportunity',
    'low',
    [1, 2, 3, 4]
  ),
  createData(
    25,
    'Change Resources',
    'Philip Chaney',
    'Technical',
    'In progress',
    '2 seconds ago',
    'opportunity',
    'low',
    [1, 2, 3, 4]
  ),
  createData(
    29,
    'Renew Software 10',
    'Doris Greene',
    'Programmatic',
    'In progress',
    '2 seconds ago',
    'threat',
    'medium',
    [1, 2, 3, 4]
  ),
];

export default rows;
