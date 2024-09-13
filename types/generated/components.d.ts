import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedProfile extends Schema.Component {
  collectionName: 'components_shared_profiles';
  info: {
    displayName: 'Profile';
    description: '';
  };
  attributes: {
    position: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sociallinks: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'anchor';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
    iconClass: Attribute.String;
  };
}

export interface SharedFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seoInformation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.RichText;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'image';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.profile': SharedProfile;
      'shared.link': SharedLink;
      'shared.faq': SharedFaq;
      'seo.seo-information': SeoSeoInformation;
      'layout.hero': LayoutHero;
    }
  }
}
