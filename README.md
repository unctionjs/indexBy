# @unction/indexBy

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (RecordType -> KeyType) -> Array<RecordType> -> RecordType<Array<RecordType>>

Creates an object where the keys are results of mapping the record and the values are those that have the same key.

``` javascript
indexBy(key("id"))([
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
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/indexBy.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/indexBy.svg?maxAge=2592000&style=flat-square
