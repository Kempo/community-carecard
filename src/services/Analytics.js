export const emitClickEvent = (category, label) => (
  window.gtag('event', 'click', {
    'event_category': category,
    'event_label': label
  })
);

export const emitBusinessSearch = (category, label) => (
  window.gtag('event', 'search', {
    'event_category': category,
    'event_label': label
  })
);
