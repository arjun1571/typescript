"use strict";
{
    //
    let anythings;
    anythings = "amr nam arjun chandra das";
    anythings = 222;
    anythings;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
