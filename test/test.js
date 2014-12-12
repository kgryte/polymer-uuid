/* global suite, test, assert, expect */
'use strict';

// TESTS //

suite( 'polymer-uuid', function tests() {

	// SETUP //

	var el = document.querySelector( '#uuid' );

	test( 'should expose a UUID library', function test() {
		var uuid = el.uuid;
		assert.ok( el );
		expect( uuid ).to.be.a( 'function' );
		expect( uuid.v4 ).to.be.a( 'function' );
		expect( uuid.v4() ).to.be.a( 'string' );
	});

});
