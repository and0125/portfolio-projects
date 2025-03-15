import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "../lib/form-schema-and-actions";

function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form action={loginAction}>
      <div>
        <input id="name" name="name" placeholder="Name" />
      </div>

      <div>
        <input id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}

      <div>
        <input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      {state?.errors?.password && (
        <p className="text-red-500">{state.errors.password}</p>
      )}
      <SubmitButton />
    </form>
  );
}

export default LoginForm;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      Login
    </button>
  );
}
