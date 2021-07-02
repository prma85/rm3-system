import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
// @material-ui/icons
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
// core components
import styles from 'assets/jss/rm3/components/customInputStyle.js';

export default function CustomInput(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
    textArea,
    select,
  } = props;

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  });
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps?.className + ' ' + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel className={classes.labelRoot + labelClasses} htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      ) : null}
      {textArea ? (
        <Input
          id={id}
          multiline
          rows={2}
          classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses,
          }}
          {...inputProps}
        />
      ) : select ? (
        <Select
          classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses,
          }}
          id={id}
          {...inputProps}
        >
          {inputProps.options}
        </Select>
      ) : (
        <Input
          classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses,
          }}
          id={id}
          {...inputProps}
        />
      )}
      {error ? (
        <Clear className={classes.feedback + ' ' + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + ' ' + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
};
