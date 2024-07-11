import { FFF } from "./newFolderComponent/SomeFunction.mjs";
import { two } from "./newFolderComponent/anotherFunction.js";

function test() {
  console.log("Function is working normally! ");
  console.log("import is working fine -->");

  console.log(FFF());
  console.log(two());
}

test();
