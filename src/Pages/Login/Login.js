import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user) {
    console.log(user);
  }

  if (error) {
    console.log(error);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-xl font-bold font-mono">LOGIN</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered input-error w-full max-w-xs"
                {...register("email", {
                    required:{
                        value: true,
                        message: 'Email is Required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Porvide a valid Email' 
                    }
                  })} 
              />
              <label class="label">
              {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            {/* password */}
             <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                class="input input-bordered input-error w-full max-w-xs"
                {...register("password", {
                    required:{
                        value: true,
                        message: 'Password is Required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 Characters or longer' 
                    }
                  })} 
              />
              <label class="label">
              {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>

            <input className="btn btn-warning w-full max-w-xs" type="submit" value="Login" />
          </form>

          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
