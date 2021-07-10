import { Themes } from "../utils/themes";
const styledCodeInput = {
  inputStyle: {
    fontFamily: "roboto",
    margin: "4px",
    width: "80px",
    borderRadius: "5px",
    fontSize: "70px",
    height: "120px",
    textAlign: "center",
    color: "#ffe115",
    border: "1px solid #ffe115",
    backgroundColor: `${Themes().background}`,
  },
  inputStyleInvalid: {
    fontFamily: "roboto",
    margin: "4px",
    width: "80px",
    borderRadius: "5px",
    fontSize: "70px",
    height: "120px",
    textAlign: "center",
    color: "#E74C3C",
    border: "1px solid #E74C3C",
    backgroundColor: `${Themes().background}`,
  },
};
const styledMobileCodeInput = {
  inputStyle: {
    fontFamily: "roboto",
    margin: "4px",
    width: "35px",
    borderRadius: "5px",
    fontSize: "15px",
    height: "40px",
    textAlign: "center",
    color: "#ffe115",
    border: "1px solid #ffe115",
    backgroundColor: `${Themes().background}`,
  },
  inputStyleInvalid: {
    fontFamily: "roboto",
    margin: "4px",
    width: "35px",
    borderRadius: "5px",
    fontSize: "15px",
    height: "40px",
    textAlign: "center",
    color: "#E74C3C",
    border: "1px solid #E74C3C",
    backgroundColor: `${Themes().background}`,
  },
};
export { styledCodeInput, styledMobileCodeInput };
