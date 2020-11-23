import { SERVER_URL, APP_URL, GOOGLE_API_KEY } from '../constants';

const serverUrl = path => `${SERVER_URL}/${path}`;
const appUrl = path => `${APP_URL}/${path}`;

export const businessInformationUrl = id => (
  serverUrl(`business/${id}`)
);

export const importBusinessUrl = id => (
  serverUrl(`business/import?googleplaceid=${id}`)
);

export const subscribeEmailUrl = email => (
  `https://ib489725g8.execute-api.us-east-2.amazonaws.com/prod?email=${email}`
);

export const googlePlacesApiUrl = () => (
  `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`
);

export const stripeApiUrl = () => 'https://js.stripe.com/v3/';

export const transactionDetailsUrl = id => (
  serverUrl(`cart/order/${id}`)
);

export const claimBusinessUrl = serverUrl('owner/claim');
export const createCheckoutUrl = serverUrl('cart/checkout');

export const businessPagePath = (id, alert) => {
  let path = `businesses/${id}`;

  if (alert) {
    path = `${path}?alert=${alert}`;
  }

  return path;
};

export const businessPageUrl = (id, alert) => appUrl(businessPagePath(id, alert));
