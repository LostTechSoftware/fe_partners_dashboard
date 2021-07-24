import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Themes } from "../../utils/themes";

// Inspired by blueprintjs
function StyledRadio(props) {
  const useStyles = makeStyles({
    root: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    icon: {
      borderRadius: "50%",
      width: props.size,
      height: props.size,
      border: "2px solid #ffe115",
      backgroundColor: Themes().background,
      "$root.Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2,
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)",
      },
    },
    checkedIcon: {
      border: "none",
      backgroundColor: "#ffe115",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      "&:before": {
        display: "block",
        width: props.size,
        height: props.size,
        backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: "#ffe115",
      },
    },
  });

  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function RadioButton({
  defaultValue = "",
  ariaLabel = "",
  options = [],
  size = 25,
  handleRadioChange = () => {},
}) {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        defaultValue={defaultValue}
        aria-label={ariaLabel}
        name="customized-radios"
        onChange={handleRadioChange}
      >
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={<StyledRadio size={size} />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
