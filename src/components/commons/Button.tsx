import { FormButtonFieldAttr } from "./Form/@types";
import cx from "classnames";
import TextToHTML from "./TextToHTML";

function Button({ id, className, value, ...props }: FormButtonFieldAttr) {
  return (
    <button className={cx(id, className)} {...props}>
      <TextToHTML text={value as string}/>
    </button>
  );
}

export default Button