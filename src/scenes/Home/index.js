import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Alert from 'components/Alert';
import { useQueryParams } from 'hooks/useQueryParams';
import { alertPropsForType, getTranslatedTestimonials } from './services';
import { ALERT_GENERIC_ERROR } from './constants';

import MainSection from './components/MainSection';
import FeaturedSection from './components/FeaturedSection';
import SearchBarArea from './components/SearchBarArea';
import SubscribeSection from './components/SubscribeSection';
import Testimonial from './components/Testimonial';
import HowItWorks from './components/HowItWorks';
import LogoSection from './components/LogoSection';

const Home = () => {
  const { t } = useTranslation();

  const testimonial = useMemo(
    () => getTranslatedTestimonials(t)[0],
    [t],
  );

  const { alert: alertQueryParam, confirm } = useQueryParams('alert', 'confirm');
  const [alert] = useState(alertQueryParam);
  const alertType = confirm ? ALERT_GENERIC_ERROR : alert;

  return (
    <div className="home">
      {(alert === 'generic-error') && <Alert {...alertPropsForType(alertType, t)} />}
      <MainSection />
      <HowItWorks />
      <SearchBarArea />
      <FeaturedSection />
      <Testimonial {...testimonial} />
      <LogoSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;
