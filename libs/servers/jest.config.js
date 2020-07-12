module.exports = {
  name: 'servers',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/servers',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
