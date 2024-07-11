import { FFF } from "./NewFolderComponent/SomeFunction.mjs";
import { two } from "./NewFolderComponent/anotherFunction.js";

function test() {
  console.log("Function is working normally! ");
  console.log("import is working fine -->");

  console.log(FFF());
  console.log(two());
}

test();
