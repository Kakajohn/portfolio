import React from 'react';
import { Helmet } from 'react-helmet';
import meta from '../config/main-config.json';

/**
 * @returns the metatags of the project using the Helmet component.
 */

const MetaTags = () => {
  return (
    <Helmet>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <meta name='description' content={meta.metatags.description} />
      <title>{meta.metatags.title}</title>
    </Helmet>
  );
};

export default MetaTags;
