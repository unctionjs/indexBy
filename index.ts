import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import fresh from "@unction/fresh";
import first from "@unction/first";
import of from "@unction/of";
export default function indexBy (unction) {
  return function indexByUnction (list) {
    return reduceValues((accumulated) => (value) => mergeRight(accumulated)(of(unction(value))(value)(accumulated)))(fresh(first(Array.from(list))))(list);
  };
}
