import { defaultFont, container, primaryColor, grayColor } from 'assets/jss/rm3.js';

const footerStyle = {
  block: {
    color: 'inherit',
    padding: '15px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
    ...defaultFont,
    fontWeight: '500',
    fontSize: '12px',
  },
  left: {
    display: 'block',
    flex: 1,
  },
  right: {
    padding: '10px',
    margin: '0',
    fontSize: '14px',
    textAlign: 'right',
    flex: 1,
  },
  footer: {
    bottom: '0',
    borderTop: '1px solid ' + grayColor[11],
    padding: '8px 0 4px',
    position: 'sticky',
    backgroundColor: 'white',
    display: 'flex',
    boxShadow: '0px 5px 24px -5px rgba(14, 31, 53, 0.4)',
    ...defaultFont,
  },
  a: {
    color: primaryColor,
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto',
  },
};
export default footerStyle;
