import React from 'react';

import {shallow, mount} from 'enzyme';

import Breadcrumb from '../BreadcrumbClass';

describe('Breadcrumb component', () => {
	let wrapper, mWrapper;

    const props = {
    	movieDisplayBreadcrumb: [{"movie_id":"12","movie_name":"Hitch"}],
    	result: {movie_name: "HomeMovieHitch"}
    }

	beforeEach(() => {
		wrapper = shallow(<Breadcrumb {...props}/> );
	});

	it("should contain a Breadcrumb element", () => {
		expect(wrapper.is("Breadcrumb")).toBe(false);
	});

	it("should contain a div element", () => {
		expect(wrapper.is("div")).toBe(true);
	});

	it("should contain an array of information of a specific movie selected", () => {
		expect(wrapper.text()).toBe(props.result.movie_name);
	});

	it('should display props', () => {
    	mWrapper = mount(<Breadcrumb {...props}/>);
    	const texts = mWrapper.find('.active').map(node => node.text());
    	expect(texts).toEqual(['Hitch']);
  });
});



