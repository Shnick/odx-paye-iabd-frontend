/* eslint-disable react/no-unused-prop-types */
import Button from '../../../BaseComponents/Button/Button';
import React from 'react';
import FieldValueList from '@pega/react-sdk-components/lib/components/designSystemExtension/FieldValueList';
import PropTypes from 'prop-types';
import { scrollToTop } from '../../../helpers/utils';

import StyledHmrcOdxGdsButtonWrapper from './styles';

// Duplicated runtime code from React SDK

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
export default function HmrcOdxGdsButton(props: any) {
  const { label, value = '', displayMode, hideLabel, getPConnect } = props;

  const containerItemID = getPConnect().getContextName();

  if (displayMode === 'LABELS_LEFT') {
    return <FieldValueList name={hideLabel ? '' : label} value={value} />;
  }

  if (displayMode === 'STACKED_LARGE_VAL') {
    return <FieldValueList name={hideLabel ? '' : label} value={value} variant='stacked' />;
  }

  const handleOnClick = e => {
    e.preventDefault();
    getPConnect().setValue('.AddToList', 'Yes');
    getPConnect().getActionsApi().finishAssignment(containerItemID);
  };

  return (
    <StyledHmrcOdxGdsButtonWrapper>
      <Button
        type='submit'
        name={label}
        variant='secondary'
        onClick={e => {
          handleOnClick(e);
          scrollToTop();
        }}
      >
        {label}
      </Button>
    </StyledHmrcOdxGdsButtonWrapper>
  );
}

HmrcOdxGdsButton.defaultProps = {
  value: '',
  placeholder: '',
  validatemessage: '',
  helperText: '',
  displayAsStatus: false,
  hideLabel: false,
  disabled: false,
  readOnly: false,
  required: false,
  testId: null,
  fieldMetadata: {},
  additionalProps: {},
  displayMode: null,
  variant: 'inline',
  formatter: '',
  isTableFormatter: false,
  hasSuggestions: false
};

HmrcOdxGdsButton.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  displayMode: PropTypes.string,
  displayAsStatus: PropTypes.bool,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  getPConnect: PropTypes.func.isRequired,
  validatemessage: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  testId: PropTypes.string,
  fieldMetadata: PropTypes.objectOf(PropTypes.any),
  additionalProps: PropTypes.objectOf(PropTypes.any),
  variant: PropTypes.string,
  formatter: PropTypes.string,
  isTableFormatter: PropTypes.bool,
  hasSuggestions: PropTypes.bool
};
