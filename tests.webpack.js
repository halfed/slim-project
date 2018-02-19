// tests.webpack.js

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

const context = require.context('./app/js/components/spec', true, /-test\.js?$/);
context.keys().forEach(context);