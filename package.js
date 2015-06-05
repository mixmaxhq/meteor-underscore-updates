Package.describe({
  name: 'mixmax:underscore-updates',
  version: '0.0.2',
  summary: 'Extend Meteor\'s Underscore with selected methods from the latest standard version.',
  git: 'https://github.com/mixmaxhq/meteor-underscore-updates',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('underscore');
  api.imply('underscore');
  api.addFiles('underscore-updates.js');
});
