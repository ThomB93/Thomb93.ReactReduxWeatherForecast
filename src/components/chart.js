import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

function average(data) {
  return _.round(_.sum(data) / data.length); //return the average of the data, round to nearest zero
}
//component takes in props and returns html, reusable
export default (props) => {
  return (
    <div>
      <Sparklines height={100} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};
