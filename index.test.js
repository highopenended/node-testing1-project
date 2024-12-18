const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
    test("[1] returns an object with the properties trimmed", () => {
        const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
        const expected = { foo: "foo", bar: "bar", baz: "baz" };
        const actual = utils.trimProperties(input);
        expect(actual).toEqual(expected);
    });
    // test('[2] returns a copy, leaving the original object intact', () => {})
    test("[2] returns a copy, leaving the original object intact", () => {
        // EXAMPLE
        const inputCopy = { foo: "  foo ", bar: "bar ", baz: " baz" };
        const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
        const expected = { foo: "foo", bar: "bar", baz: "baz" };
        const actual = utils.trimProperties(input);
        expect(inputCopy).toEqual(input);
    });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
    // test('[3] returns an object with the properties trimmed', () => {})
    test("[3] returns an object with the properties trimmed", () => {
        const input = { foo: "   foo   ", bar: "  bar", baz: "baz   " };
        const expected = { foo: "foo", bar: "bar", baz: "baz" };
        utils.trimPropertiesMutation(input);
        expect(input).toEqual(expected);
    });
    test("[4] the object returned is the exact same one we passed in", () => {
        const input = { foo: "   foo   ", bar: "  bar   " };
        const result = utils.trimPropertiesMutation(input);
        expect(result).toBe(input); // Ensures the returned object is the same reference
    });
});

describe("[Exercise 3] findLargestInteger", () => {
    test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
        const input = [{ integer: 2 }, { integer: 5 }, { integer: 8 }, { integer: 3 }];
        const result = utils.findLargestInteger(input);
        const expected = 8;

        expect(result).toBe(expected);
    });
});

describe("[Exercise 4] Counter", () => {
    let counter;
    beforeEach(() => {
        counter = new utils.Counter(3); // each test must start with a fresh couter
    });
    test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
        expect(counter.countDown()).toBe(3); // Should return the initial count
    });

    test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
        counter.countDown(); // First call
        expect(counter.countDown()).toBe(2); // Second call should be initial count - 1
    });

    test("[8] the count eventually reaches zero but does not go below zero", () => {
        counter.countDown(); // 3 -> 2
        counter.countDown(); // 2 -> 1
        counter.countDown(); // 1 -> 0
        expect(counter.countDown()).toBe(0); // Should remain at 0
        expect(counter.countDown()).toBe(0); // Ensure it doesn't go below 0
    });
});

describe("[Exercise 5] Seasons", () => {
    let seasons;
    beforeEach(() => {
        seasons = new utils.Seasons(); // each test must start with fresh seasons
    });
    test('[9] the FIRST call of seasons.next returns "summer"', () => {
      expect(seasons.next()).toBe('summer');
    });
  
    test('[10] the SECOND call of seasons.next returns "fall"', () => {
      seasons.next(); // First call
      expect(seasons.next()).toBe('fall'); // Second call
    });
  
    test('[11] the THIRD call of seasons.next returns "winter"', () => {
      seasons.next(); // First call
      seasons.next(); // Second call
      expect(seasons.next()).toBe('winter'); // Third call
    });
  
    test('[12] the FOURTH call of seasons.next returns "spring"', () => {
      seasons.next(); // First call
      seasons.next(); // Second call
      seasons.next(); // Third call
      expect(seasons.next()).toBe('spring'); // Fourth call
    });
  
    test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
      for (let i = 0; i < 4; i++) {
        seasons.next(); // Calls 1 to 4
      }
      expect(seasons.next()).toBe('summer'); // Fifth call
    });
  
    test('[14] the 40th call of seasons.next returns "spring"', () => {
      for (let i = 0; i < 39; i++) {
        seasons.next(); // Calls 1 to 39
      }
      expect(seasons.next()).toBe('spring'); // 40th call
    });
});

describe("[Exercise 6] Car", () => {
    let focus;
    beforeEach(() => {
        focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
    });
    test('[15] driving the car returns the updated odometer', () => {
      expect(focus.drive(60)).toBe(60);
      expect(focus.drive(30)).toBe(90);
    });
  
    test('[16] driving the car uses gas', () => {
      focus.drive(60); // 60 miles at 30 mpg uses 2 gallons
      expect(focus.fuel).toBe(18);
    });
  
    test('[17] refueling allows to keep driving', () => {
      focus.drive(600); // Uses the full tank (20 * 30 = 600 miles)
      expect(focus.fuel).toBe(0);
  
      focus.refuel(10);
      expect(focus.fuel).toBe(10);
  
      focus.drive(300); // 10 gallons * 30 mpg = 300 miles
      expect(focus.odometer).toBe(900);
    });
  
    test('[18] adding fuel to a full tank has no effect', () => {
      focus.refuel(5); // Attempt to overfill
      expect(focus.fuel).toBe(20); // Fuel stays at tank capacity
    });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
    // test('[19] resolves true if passed an even number', () => {})
    // test('[20] resolves false if passed an odd number', () => {})
});
