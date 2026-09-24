import crypto from "crypto";

const hash = crypto
    .createHash("sha256")
    .update("hello")
    .digest("hex");

console.log(hash);
console.log("santhoshhhhh is veryyy erripukkk")
console.log("ami is veryy pretty and smart unlike santhosh")