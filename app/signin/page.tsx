import { SignIn } from "@/features/SignIn";
import React from "react";

function SignInPage() {
  return (
    <div className="pt-20">
      {/* @ts-expect-error Server Component */}
      <SignIn />
    </div>
  );
}

export default SignInPage;
