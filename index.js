// CONSTANS
{
    const COEFFICIENT = 8.85;
    // COEFFICIENT = 13; TypeError: Assignment to constant variable.

    const monkey = {
        faa: "value",
    };

    monkey.faa = "other value"; // allowed
}

// BLOCK-SCOPED VARIABLES
// BLOCK-SCOPED FUNCTIONS
{
    function foo() {
        return 1;
    }

    foo() === 1; // true

    // new scope
    {
        function foo() {
            return 2;
        }

        foo() === 2; // true
    }

    foo() === 1; // true
}

// ARROW FUNCTIONS
{
    const foo = (value) => ({ param: value });
    // const foo = function (value){ return { param: value };};
}

// DEFAULT PARAMETER VALUES
{
    const foo = (a = 1, b = 2, c = 3) => a + b + c;

    foo() === 6; // true
    foo(2, 5, 8) === 15; // true
}

// REST PARAMETER
{
    const foo = (a, b, ...c) => a + b + c;
    foo(1, 2, "value", true, 10) === 6;
    // ...c is an array. It works like params in C#
}

// SPREAD OPERATOR
{
    // Concat two arrays
    const numbers = [1, 2, 3];
    const mixed = ["one", ...numbers]; // ["one", 1, 2, 3]

    // Convert string to array
    const value = "foo";
    const characters = [...value]; // [f, o, o]
}

// STRING INTERPOLATION
{
    const foo = { faa: "something", fii: "someone" };
    const message = `This is ${foo.faa},
from ${foo.fii}.`;

    /*
This is something,
from someone.
*/
}

const one = 1;
const two = 2;
const three = "three";

const foo = (v) => console.log(v);
foo`http://example.com/foo?bar=${one + two}&quux=${three}`;
