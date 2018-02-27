import React from 'react';
import {shallow, mount} from 'enzyme';
import MovieContent from '../MovieContentClass';

describe('Main Content component', () => {
	let wrapper, mWrapper;

    const props = {
    	indMovieContent: [{"movie_id":"6","movie_name":"Guardians of the Galaxy","movie_thumb":"7217.jpg","movie_img_lg":"7217.jpg","movie_release_date":"2014","movie_rating":"PG-13","movie_description":"Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.","movie_video_id":"d96cjJhvlMA","genre":"Action, Adventure, Sci-Fi"}],
    	result: {movie_name: "Guardians of the Galaxy"},
    	onClick: jasmine.createSpy('onClick')
    	
    }

    beforeEach(() => {
		wrapper = shallow(<MovieContent {...props}/> );
	});

	it('should render without exploding', () => {
		expect(
			wrapper.length
		).toEqual(1);
	});

	it('should call the `onClick` handler when the button is clicked', () => {
	    wrapper.find('.trailer').simulate('click');

	    expect(props.onClick).toHaveBeenCalled();
	});
});


//BASIC API JSON TEST DATA FOR TESTING REACT MOVIE COMPONENTS
//[{"movie_id":"6","movie_name":"Guardians of the Galaxy","movie_thumb":"7217.jpg","movie_img_lg":"7217.jpg","movie_release_date":"2014","movie_rating":"PG-13","movie_description":"Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.","movie_video_id":"d96cjJhvlMA","genre":"Action, Adventure, Sci-Fi"}]