import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import { Themes } from "../../utils/themes";

export default function CustomizedSwitches({
  onChange,
  checked = false,
  width = 0,
  height = 0,
  switchSize = 0,
}) {
  const SwitchStyles = withStyles((theme) => ({
    root: {
      borderRadius: 74,
      width: width,
      height: height,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 5,

      height: "100%",

      "&$checked": {
        transform: "translateX(16px)",
        width: width + 10,

        "& + $track": {
          backgroundColor: "#ffe115",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#ddd",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: switchSize,
      height: switchSize,
      backgroundColor: "#fff",
    },
    track: {
      borderRadius: 74,
      border: `1px solid ${Themes().gray}`,
      backgroundColor: Themes().gray,
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  return (
    <FormGroup>
      <SwitchStyles
        width={width}
        height={height}
        checked={checked}
        onChange={onChange}
        name="checkedB"
      />
    </FormGroup>
  );
}
