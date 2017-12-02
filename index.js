import mergeRight from "@unction/mergeright"
import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function indexBy (unction: RecordType => KeyType): UnaryFunctionType {
  return function indexByUnction (record: Array<RecordType>): RecordType<Array<RecordType>> {
    return reduceWithValueKey(
      (accumulated: RecordTreeType): UnaryFunctionType =>
        (value: ValueType): UnaryFunctionType =>
          (key: KeyType): RecordTreeType =>
            mergeRight(accumulated)({
              [unction(value)]: mergeRight(
                accumulated[key] || [
                ]
              )([
                value,
              ]),
            })
    )(
      {}
    )(
      record
    )
  }
}
