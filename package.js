Package.describe({
  name: 'planettraining:angular-file-saver-bundle',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'angular file saver meteor package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('angular:angular@1.4.8', ['client']);
  api.use('ecmascript');
  api.addFiles('bower_components/angular-file-saver/dist/angular-file-saver.bundle.js');
});
