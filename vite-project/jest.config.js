// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|css.ts|css.js)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
