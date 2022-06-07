import 'react-native';

import Home from '../src/components/Home';
import React from 'react';
import renderer from 'react-test-renderer';

// Note: test renderer must be required after react-native.


it('renders correctly', () => {
  renderer.create(<Home />);
});
it('creates snapshot', () => {
    const tree =renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
  });