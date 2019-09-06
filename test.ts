
import key from "@unction/key";

import indexBy from "./index.ts";

test("Multiple Object different key in Array", () => {
  expect(indexBy(
    key("id")
  )([
    {
      id: "aaa",
      name: "Kurtis Rainbolt-Greene",
    },
    {
      id: "bbb",
      name: "Angela Rainbolt-Greene",
    },
  ])).toEqual({
    aaa: {
      id: "aaa",
      name: "Kurtis Rainbolt-Greene",
    },
    bbb: {
      id: "bbb",
      name: "Angela Rainbolt-Greene",
    },
  });
});

test("Multiple Object same key in Array", () => {
  expect(indexBy(key("id"))([
    {
      id: "aaa",
      name: "Kurtis Rainbolt-Greene",
    },
    {
      id: "aaa",
      name: "Angela Rainbolt-Greene",
    },
  ])).toEqual({
    aaa: {
      id: "aaa",
      name: "Angela Rainbolt-Greene",
    },
  });
});

test("Multiple Map different key in Set", () => {
  expect(indexBy(
    key("id")
  )(
    new Set([
      new Map([
        [
          "id",
          "aaa",
        ],
        [
          "name",
          "Kurtis Rainbolt-Greene",
        ],
      ]),
      new Map([
        [
          "id",
          "bbb",
        ],
        [
          "name",
          "Angela Rainbolt-Greene",
        ],
      ]),
    ])
  )).toEqual(new Map([
    [
      "aaa",
      new Map([
        [
          "id",
          "aaa",
        ],
        [
          "name",
          "Kurtis Rainbolt-Greene",
        ],
      ]),
    ],
    [
      "bbb",
      new Map([
        [
          "id",
          "bbb",
        ],
        [
          "name",
          "Angela Rainbolt-Greene",
        ],
      ]),
    ],
  ]));
});

test("Multiple Map same key in Set", () => {
  expect(indexBy(
    key("id")
  )(
    new Set([
      new Map([
        [
          "id",
          "aaa",
        ],
        [
          "name",
          "Kurtis Rainbolt-Greene",
        ],
      ]),
      new Map([
        [
          "id",
          "aaa",
        ],
        [
          "name",
          "Angela Rainbolt-Greene",
        ],
      ]),
    ])
  )).toEqual(new Map([
    [
      "aaa",
      new Map([
        [
          "id",
          "aaa",
        ],
        [
          "name",
          "Angela Rainbolt-Greene",
        ],
      ]),
    ],
  ]));
});
