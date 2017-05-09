const assert = require( "assert" );
const posp = require( "./posp.js" );

assert.deepEqual( posp( [ "hello", "world", 1, 2, 3, true, false, 5, 6 ], NUMBER ), [ 'hello', 'world', true, false ] );

console.log( "ok" );
