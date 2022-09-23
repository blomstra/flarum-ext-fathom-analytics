import PageViewEvent from '../EventHelpers/PageViewEvent';

export default PageViewEvent({
  name: 'View tags page',
  description: 'Triggered when a user views the Tags index page.',
  id: 'view-tags-page',
  flarumRouteName: 'tags',
  requiresExtensions: ['flarum-tags'],
});
