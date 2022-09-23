import app from 'flarum/admin/app';
import SettingsPage from './components/SettingsPage';

app.initializers.add('blomstra/fathom-analytics', () => {
  app.extensionData
    .for('blomstra-fathom-analytics')
    .registerSetting({
      setting: 'blomstra-fathom-analytics.site_id',
      type: 'text',
      label: app.translator.trans('blomstra-fathom-analytics.admin.settings.site_id_label'),
      help: app.translator.trans('blomstra-fathom-analytics.admin.settings.site_id_help'),
    })
    .registerPage(SettingsPage);
});

export * as components from './components';
