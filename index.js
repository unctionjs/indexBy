import mergeRight from "@unction/mergeright"
import reduceValues from "@unction/reducevalues"
import fresh from "@unction/fresh"
import first from "@unction/first"
import of from "@unction/of"

export default function indexBy (unction: RecordType => KeyType): UnaryFunctionType {
  return function indexByUnction (list: ListType<RecordType>): RecordType<RecordType> {
    return reduceValues(
      (accumulated: RecordType<RecordType>): UnaryFunctionType =>
        (value: ValueType): RecordType<RecordType> =>
          mergeRight(
            accumulated
          )(
            of(
              unction(value)
            )(
              value
            )(
              accumulated
            )
          )
    )(
      fresh(first(Array.from(list)))
    )(
      list
    )
  }
}
