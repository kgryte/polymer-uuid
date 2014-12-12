/**
*
*	COMPONENT: polymer-uuid
*
*
*	DESCRIPTION:
*		- Registers the polymer-uuid web-component.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var uuid = require( 'node-uuid' );


// POLYMER //

/* global Polymer */
Polymer( 'polymer-uuid', {
	/**
	* METHOD: uuid
	*	Binds the dependency to the element.
	*/
	'uuid': uuid
});
