// 'use client'
"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { LoginService } from "@/apis/login.service"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {

}

export async function UserAuthForm({ className, ...props }: UserAuthFormProps) {

  // const router = useRouter();

  // const [formData, setFormData] = useState({
  //       email: "",
  //       password: "",
  //   });

  //  //Call API Login 
  //   const { loginResponse, loginIsLoading, loginError, callLoginRefetch } = await LoginService();

    // useEffect(() => {
    //     if (loginResponse) {
    //         console.log(loginResponse);
    //         localStorage.setItem('token', loginResponse.access_token);
    //         router.push('/admin');
    //     }
    //     else if (loginError) {
    //         console.log(loginError);
    //         alert('Login Failed');
    //     }
    // }, [loginResponse, loginError])

    // const handleOnSubmit = (e: any) => {
    //     e.preventDefault();
    //     callLoginRefetch(formData);
    // }
    // const handleChange = (e: any) => {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 10000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* onSubmit */}
      <form onSubmit={() => {}}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  )
}