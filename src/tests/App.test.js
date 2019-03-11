import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from '../App';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.555555555555555555555555555555;
global.Math = mockMath;

describe('App component', () => {
  it('snapshot', () => {
    const app = shallow(<App />);
    expect(toJson(app)).toMatchSnapshot();
  });
});
