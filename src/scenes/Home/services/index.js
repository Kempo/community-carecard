import React from 'react';
import kathyImg from '../../../images/kathy-huynh-CK-headshot.jpg';
import { Trans } from 'react-i18next';
import { ALERT_GENERIC_ERROR } from '../constants';

export const getTranslatedTestimonials = t => [
  {
    owner: 'Kathy Huynh',
    business: 'C&K Nails Spa',
    quote: <Trans i18nKey="HOME.TESTIMONIAL_0" />,
    image: kathyImg,
  },
];

export const alertPropsForType = (type, t) => {
  let props = null;

  if (type === ALERT_GENERIC_ERROR) {
    props = { type: 'error', description: t('SHARED.GENERIC_ERROR') };
  }

  return props;
};
