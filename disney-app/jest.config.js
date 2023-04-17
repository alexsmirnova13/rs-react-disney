export default {
  displayName: 'react-b',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/react-b',
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs',
  },
};
