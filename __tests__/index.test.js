import reverse from "../src/index.js";
import fs from "fs";
import path from "path";

test("reverse", () => {
  const filePath = path.resolve(__dirname, "../__fixtures__/any-text.txt");
  const text = fs.readFileSync(filePath, "utf-8").trim();
  const expectedResult = text.split("").reverse().join("");
  expect(reverse(text)).toEqual(expectedResult);
});
