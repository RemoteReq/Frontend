import React from 'react';
import DefaultPreloader from '#assets/preloaders/svg/gray-infinity-preloader.svg';
import BluePreloader from '#assets/preloaders/svg/blue-infinity-preloader.svg';
import WhitePreloader from '#assets/preloaders/svg/background-infinity-preloader.svg';
import YellowPreloader from '#assets/preloaders/svg/yellow-infinity-preloader.svg';

const Preloader = ({ color }) => {
  switch (color) {
    case 'blue':
      return (
        // <object type="image/svg+xml" data={BluePreloader}>blue-preloader</object>
        <BluePreloader />
      );
    case 'white':
      return (
        // <object type="image/svg+xml" data={WhitePreloader}>white-preloader</object>
        <WhitePreloader />
      );
    case 'yellow':
      return (
        // <object type="image/svg+xml" data={YellowPreloader}>yellow-preloader</object>
        <YellowPreloader />
      );
    default:
      return (
        // <object type="image/svg+xml" data={DefaultPreloader}>default-preloader</object>
        <DefaultPreloader />
      );
  }
};

export default Preloader;