import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser, loginToast } from "./../../services/auth";

export default function LoginForm() {
  const [response, SetResponse] = useState(null);
  const [passwordVisibilty, SetPasswordVisibilty] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    try {
      const response = await loginUser(data);
      SetResponse(response);
      reset();
    } catch (error) {
      SetResponse(error.message);
      reset();
    }
  }

  useEffect(() => {
    if (response) {
      loginToast(response)
        .then(() => {
          navigate("/dashboard", { replace: true });
        })
        .catch(() => {});
      document.title = "Login";
    }
  }, [response, navigate]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-black sm:text-3xl">
          Welcome Back
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Sign in to access exclusive job opportunities, company details, and
          placement-related resources. Start preparing for your career today!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="example@gmail.com"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter email",
                  },
                })}
              />
              {errors.email && (
                <small className="red">{errors.email.message}</small>
              )}
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type={passwordVisibilty ? "text" : "password"}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter password",
                  },
                })}
              />
              {errors.password && (
                <small className="red">{errors.password.message}</small>
              )}

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => SetPasswordVisibilty(!passwordVisibilty)}
                >
                  {passwordVisibilty ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.997 9.997 0 013.614-5.362M9.879 9.879A3 3 0 0112 12m0 0a3 3 0 013 3m-3-3l6.364 6.364M3 3l18 18"
                    />
                  ) : (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </>
                  )}
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
            disabled={isSubmitting}
          >
            Sign in
          </button>

          {/* <p className="text-center text-sm text-gray-500">
            No account?
            <a className="underline" href="#">
              Sign up
            </a>
          </p> */}
        </form>
      </div>
    </div>
  );
}
