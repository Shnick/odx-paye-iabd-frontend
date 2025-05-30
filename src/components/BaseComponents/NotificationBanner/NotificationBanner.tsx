import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../../assets/css/appStyles.scss';

export default function NotificationBanner(props) {
  const { content, body } = props;
  const { t } = useTranslation();

  return (
    <div
      className='govuk-notification-banner'
      role='region'
      aria-labelledby='govuk-notification-banner-title'
      data-module='govuk-notification-banner'
    >
      <div className='govuk-notification-banner__header'>
        <h2 className='govuk-notification-banner__title' id='govuk-notification-banner-title'>
          {t('NOTIFICATION_BANNER_HEADER')}
        </h2>
      </div>
      <div className='govuk-notification-banner__content'>
        {content && <p className='govuk-notification-banner__heading'>{content}</p>}
        {body && <p className='govuk-body'>{body}</p>}
      </div>
    </div>
  );
}
