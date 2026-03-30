import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import type { AuthSchemaType } from "@/form/auth/hookform";

import htwettoeLogo from "@/assets/logos/htwettoe-logo.png";
import MyImage from "@/components/graphics/my-image";
import { GridScan } from "@/components/grid-scan";
import PrimaryLoading from "@/components/loadings/primary-loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTE_PATHS } from "@/constants/routes/route-paths";
import { AuthForm } from "@/form/auth/hookform";
import useAuth from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { AuthService } from "@/services/auth.services";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const form = useForm<AuthSchemaType>({ resolver: zodResolver(AuthForm.schema), defaultValues: AuthForm.defaultValues });

  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: AuthService.login,

  });

  const onSubmit = (data: AuthSchemaType) => {
    loginMutation(data);
  };

  useEffect(() => {
    if (auth) {
      navigate(ROUTE_PATHS.DASHBOARD);
    }
  }, [auth]);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black">
        {/* <DarkVeil hueShift={55} noiseIntensity={0} scanlineFrequency={20} speed={2} warpAmount={0} resolutionScale={1} /> */}
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          gridScale={0.1}
          scanColor="#00b843"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div className={cn("light z-50 relative h-screen w-screen  flex flex-col gap-5 items-center justify-center")}>

        <div className="flex flex-col gap-5 items-center text-white">
          <MyImage alt="HTWETTOE IMAGE" src={htwettoeLogo} width={60} height={60} />
          <Label>Htwet Toe VLMS</Label>
        </div>
        <Card className="w-100 ">

          <CardHeader>
            <CardTitle className="flex justify-between items-end">
              Login
            </CardTitle>

          </CardHeader>

          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email *</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...form.register("email")}
                  />

                  {form.formState.errors && <Label className="text-red-500">{form.formState.errors.email?.message}</Label>}
                </Field>

                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password *</FieldLabel>
                  </div>
                  <Input id="password" placeholder="Enter password" type="password" required {...form.register("password")} />

                  {form.formState.errors && <Label className="text-red-500">{form.formState.errors.password?.message}</Label>}
                </Field>
                <Field>
                  <Button disabled={isPending} type="submit" className="cursor-pointer">{isPending ? <PrimaryLoading /> : "Login"}</Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
