module.exports = {
    'verbose': true,
    'transform': {
        '^.+\\.jsx?$': 'babel-jest'
      },
      setupFiles: [ './testEnv.js' ],
      testPathIgnorePatterns: [ 'node_modules' ],
      snapshotSerializers: ["enzyme-to-json/serializer", 'jest-emotion'],
}