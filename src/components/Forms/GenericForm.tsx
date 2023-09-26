"use client";
import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type DefaultConfig = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & DefaultConfig;

export default function WrapperForms({
  children,
  submitHandler,
  defaultValues,
}: FormProps) {
  const formConfig: DefaultConfig = {};
  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  const methods = useForm<FormProps>(formConfig);

  const onSubmit = (data: any) => {
    submitHandler(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
