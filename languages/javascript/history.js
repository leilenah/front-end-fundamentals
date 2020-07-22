// append #pageTarget to URL
history.pushState({}, pageTarget, `#${pageTarget}`)

// append ?page=1 to URL
history.pushState({page: 1}, 'Title 1', '#?page=1');
