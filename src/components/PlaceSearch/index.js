import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { useScript } from 'hooks/useScript';
import { googlePlacesApiUrl } from 'services/urlHelper';

const PlaceSearch = ({ placeholder, onSelect }) => {
  const [googleApiLoaded] = useScript(googlePlacesApiUrl());

  useEffect(() => {
    if (!googleApiLoaded) return;

    const autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('place-search'));
    autocomplete.setTypes(['establishment']);

    const listener = autocomplete.addListener('place_changed', () => {
      const placeId = autocomplete.getPlace().place_id;
      onSelect(placeId);
    });

    return () => {
      window.google.maps.event.removeListener(listener);
    };
  }, [onSelect, googleApiLoaded]);

  return (
    <Input
      id="place-search"
      placeholder={placeholder}
      size="large"
    />
  );
};

PlaceSearch.propTypes = {
  placeholder: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

PlaceSearch.defaultProps = {
  placeholder: '',
};

export default PlaceSearch;
