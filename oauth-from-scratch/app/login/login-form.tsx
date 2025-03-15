import React from "react";
import { useFormStatus } from "react-dom";

function LoginForm() {
  return (
    <form>
      <div>
        <input id="name" name="name" placeholder="Name" />
      </div>

      <div>
        <input id="email" name="email" placeholder="Email" />
      </div>

      <div>
        <input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      <SubmitButton />
    </form>
  );
}

export default LoginForm;
