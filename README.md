# Slonik/Jest Memory Leak Demo

This repository demonstrates a memory leak error message when running `jest` with the `--detectLeaks` flag. The error is reproducible when importing and using the `sql` tag from the `slonik` library in a test.

It's possible that this is a false positive, since the `jest` documentation states that the `--detectLeaks` flag is experimental.

## Steps to reproduce

```
npm install
npm test
```

## Error message

```
> ts-slonik-jest-demo@1.0.0 test
> jest --detectLeaks

  console.log
    { sql: 'SELECT 1', values: [], type: 'SLONIK_TOKEN_FRAGMENT' }

      at Object.<anonymous> (test/dummy.test.ts:7:13)

 FAIL  test/dummy.test.ts
  ● Test suite failed to run

    EXPERIMENTAL FEATURE!
    Your test suite is leaking memory. Please ensure all references are cleaned.

    There is a number of things that can leak memory:
      - Async operations that have not finished (e.g. fs.readFile).
      - Timers not properly mocked (e.g. setInterval, setTimeout).
      - Keeping references to the global scope.

      at onResult (node_modules/@jest/core/build/TestScheduler.js:150:18)
          at Array.map (<anonymous>)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.272 s
Ran all test suites.
```
