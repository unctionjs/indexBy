import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import fresh from "@unction/fresh";
import first from "@unction/first";
import of from "@unction/of";
import {MapperFunctionType} from "./types";

export default function indexBy<A, B> (unction: MapperFunctionType<A, B>) {
  return function indexByUnction (list: Array<A> | Set<A>): Map<B, A> {
    return reduceValues(
      (accumulated: Map<B, A>) => (value: A) => mergeRight(
        accumulated
      )(
        of(unction(value))(value)(accumulated)
      )
    )(
      // TODO: Switch to new Map(), like group by
      fresh(first(Array.from(list)))
    )(list);
  };
}
