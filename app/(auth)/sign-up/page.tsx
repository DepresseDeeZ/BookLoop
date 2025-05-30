"use client";

import AuthForm from "@/components/AuthForm";
import { singUpSchema } from "@/lib/validation";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={singUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={() => {}}
  />
);

export default Page;
