import app from 'flarum/forum/app';

app.initializers.add('blomstra/fathom-analytics', () => {
  setTimeout(() => {
    app.fathomEventsRepository.propogateServerEventData();

    app.fathomEventsRepository.getEnabledEvents().forEach((event) => {
      if (event.requiresExtensions?.some((ext) => !(ext in flarum.extensions))) {
        // One or more extensions not enabled that are required for this event!
        console.debug(`[Fathom Analytics] Event ${event.id} is enabled, but one or more required extensions are not active.`);
        return;
      }

      event.code(event);
    });

    m.redraw();
  }, 0);
});
