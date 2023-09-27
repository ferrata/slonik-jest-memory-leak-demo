import { sql } from "slonik";

describe("Dummy test", () => {
  test("should pass", () => {
    // the line below leads to a memory leak error
    // when running `jest` with the `--detectLeaks` flag
    console.log(sql.fragment`SELECT 1`);

    expect(true).toBe(true);
  });
});
