"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/UserContext";
import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";
import PrimaryButton from "@/components/shared/PrimaryButton";
import Link from "next/link";

const LoginForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const { setIsLoading } = useUser();
  const router = useRouter();

  // Fix: Use useState and useEffect instead of useSearchParams()
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setRedirectPath(searchParams.get("redirectPath"));
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        router.push(redirectPath || "/profile");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-[#001B61]">Welcome back</CardTitle>
          
        </CardHeader>

        

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              

              {/* Email Input */}
              <div className="grid gap-2 text-[#001B61]">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
              </div>

              {/* Password Input */}
              <div className="grid gap-2 text-[#001B61]">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
              </div>

              {/* Submit Button */}
              <PrimaryButton type="submit" className="w-full">
                {isSubmitting ? "Logging...." : "Login"}
              </PrimaryButton>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-[#001B61]">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Terms and Privacy */}
      <div className="text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:text-primary">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};

export default LoginForm;
