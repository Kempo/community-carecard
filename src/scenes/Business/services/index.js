import {
  ALERT_BUSINESS_ACTIVE, ALERT_BUSINESS_CLAIMED, ALERT_BUSINESS_PENDING,
} from '../../../constants';
import { ALERT_GENERIC_ERROR, ALERT_ONBOARDING_SUCCESSFUL } from '../constants';

export const alertPropsForType = (type, t) => {
  let props = null;

  if (type === ALERT_BUSINESS_ACTIVE) {
    props = { type: 'success', description: t('BUSINESS.ALERT.ACTIVE') };
  } else if (type === ALERT_BUSINESS_CLAIMED) {
    props = { type: 'info', description: t('BUSINESS.ALERT.CLAIMED') };
  } else if (type === ALERT_BUSINESS_PENDING) {
    props = { type: 'info', description: t('BUSINESS.ALERT.PENDING') };
  } else if (type === ALERT_ONBOARDING_SUCCESSFUL) {
    props = { type: 'success', description: t('BUSINESS.ONBOARD_SUCCESSFUL') };
  } else if (type === ALERT_GENERIC_ERROR) {
    props = { type: 'error', description: t('SHARED.GENERIC_ERROR') };
  }

  return props;
};
