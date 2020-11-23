export const onboardPath = (id, name) => {
  let path = '/onboard';

  if (id) path += `/${id}`;
  if (name) path += `?businessName=${name}`;

  return path;
};

export const privacyPolicyPath = () => '/privacy-policy';

export const contactPath = () => '/contact';
