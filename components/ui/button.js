import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  // return a regular button if there is no link -- aka form button with onclick
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
