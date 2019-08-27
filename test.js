
import {test} from "tap";
import key from "@unction/key";

import indexBy from "./";

test("Multiple Object different key in Array", ({same, end}) => {
  same(
    indexBy(
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
    ]),
    {
      aaa: {
        id: "aaa",
        name: "Kurtis Rainbolt-Greene",
      },
      bbb: {
        id: "bbb",
        name: "Angela Rainbolt-Greene",
      },
    }
  );

  end();
});

test("Multiple Object same key in Array", ({same, end}) => {
  same(
    indexBy(key("id"))([
      {
        id: "aaa",
        name: "Kurtis Rainbolt-Greene",
      },
      {
        id: "aaa",
        name: "Angela Rainbolt-Greene",
      },
    ]),
    {
      aaa: {
        id: "aaa",
        name: "Angela Rainbolt-Greene",
      },
    }
  );

  end();
});

test("Multiple Map different key in Set", ({same, end}) => {
  same(
    indexBy(
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
    ),
    new Map([
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
    ])
  );

  end();
});

test("Multiple Map same key in Set", ({same, end}) => {
  same(
    indexBy(
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
    ),
    new Map([
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
    ])
  );

  end();
});
