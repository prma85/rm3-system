import { drawerWidth, transition, container } from 'assets/jss/rm3.js';

const appStyle = (theme) => ({
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh',
  },
  mainPanel: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    ...transition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch',
  },
  content: {
    marginTop: '15px',
    padding: '30px 15px',
    minHeight: 'calc(100vh - 215px)',
  },
  container,
});

export default appStyle;
