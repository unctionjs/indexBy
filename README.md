# @unction/indexBy

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (RecordType -> KeyType) -> ListType<RecordType> -> RecordType<RecordType>

Creates a record tree where the key is a computation on the value and the value is the original value.

``` javascript
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
])
```

Which returns:

``` javascript
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
```

``` javascript
indexBy(
  key("id")
)(
  new Set([
    new Map([
      ["id", "aaa"],
      ["name", "Kurtis Rainbolt-Greene"]
    ]),
    new Map([
      ["id", "bbb"],
      ["name", "Angela Rainbolt-Greene"]
    ])
  ])
)
```

Which returns:

``` javascript
new Map([
  ["aaa", new Map([
    ["id", "aaa"],
    ["name", "Kurtis Rainbolt-Greene"]
  ])],
  ["bbb", new Map([
    ["id", "bbb"],
    ["name", "Angela Rainbolt-Greene"]
  ])],
])
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/indexBy.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/indexBy.svg?maxAge=2592000&style=flat-square
