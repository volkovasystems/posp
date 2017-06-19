const assert = require( "assert" );
const posp = require( "./posp.js" );

assert.deepEqual( posp( [ 1, 2, 3, 4, 5 ], 2 ), [ 1, 3, 4, 5 ], "should be equal" );

assert.deepEqual( posp( [ "hello", "world", 1, 2, 3, true, false, 5, 6 ], NUMBER ), [ 'hello', 'world', true, false ],
 						"should be deeply equal" );

console.log( "ok" );
