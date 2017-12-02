/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import key from "@unction/key"

import indexBy from "./index"

test(({same, end}) => {
  same(
    indexBy(key("id"))([
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
      aaa: [
        {
          id: "aaa",
          name: "Kurtis Rainbolt-Greene",
        },
      ],
      bbb: [
        {
          id: "bbb",
          name: "Angela Rainbolt-Greene",
        },
      ],
    }
  )

  end()
})

test(({same, end}) => {
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
      aaa: [
        {
          id: "aaa",
          name: "Angela Rainbolt-Greene",
        },
      ],
    }
  )

  end()
})
