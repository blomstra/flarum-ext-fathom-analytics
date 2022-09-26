import PageViewEvent from '../EventHelpers/PageViewEvent';

export default PageViewEvent({
  name: 'View blog index page',
  description: 'Triggered when a user views the Blog index page.',
  id: 'view-blog-index-page',
  flarumRouteName: 'blog',
  requiresExtensions: ['v17development-blog'],
});
