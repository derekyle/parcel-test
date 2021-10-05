import React from "react";
import ReactDOM from "react-dom";
import DateRangePicker from "rsuite/DateRangePicker";

import 'rsuite/styles/index.less';
  
var mountNode = document.getElementById("app");

const instance = <DateRangePicker
                  style={{ paddingTop: 5 }}
                  placeholder="Select Date Range"
                  />;

ReactDOM.render(instance, mountNode);