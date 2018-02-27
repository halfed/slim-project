import React from 'react';
import {shallow, mount, } from 'enzyme';
import ImageDisplay from '../ImageDisplayClass';

describe('Image display component', () => {
	let wrapper;
	const props = {
		movieDisplayType: [{"movie_id":"12","movie_name":"Hitch"}],
	}

	beforeEach(() => {
		wrapper = shallow(<ImageDisplay {...props} />);
	});

	it('should render without exploding', () => {
		expect(
			wrapper.length
		).toEqual(1);
	});

	
});

