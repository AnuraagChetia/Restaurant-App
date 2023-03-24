import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const Form = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button type="submit">+Add</button>
    </form>
  );
};
export default Form;
