import AuthForm from "@/components/AuthForm";

const SignUp = async () => {
  return (
    <section className="flex-center  items-center text-center size-full px-2 ">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
