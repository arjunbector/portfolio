"use client";
import { FormEvent, useState } from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import CustomFormError from "../ui/custom-error";

const Connect = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const submitForm = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    setLoading(true);
    const res = await axios.post("/api/submitForm", {
      ...data,
    });
    if (res.status === 200) {
      toast({
        title: "Form submitted successfully.",
        description: "I'll get back to you soon.",
        variant: "success",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast({
        description: "Failed to submit form.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };
  return (
    <MaxWidthWrapper className="flex flex-col items-center py-10">
      <h1 className="mb-1.5 text-center text-4xl font-bold sm:mb-5 sm:text-5xl">
        Let&apos;s connect
      </h1>
      <p className="mx-4 max-w-prose text-center text-sm text-zinc-500 sm:text-base">
        Have a project in mind or just want to say hello? Fill out the form
        below and I&apos;ll get back to you as soon as possible.
      </p>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="sm:px-30 mt-5 flex flex-col space-y-3 px-10 md:px-60"
        >
          <div>
            <Input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <CustomFormError>{errors.name.message}</CustomFormError>
            )}
          </div>
          <div>
            <Input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <CustomFormError>{errors.email.message}</CustomFormError>
            )}
          </div>
          <div>
            <Textarea
              rows={5}
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <CustomFormError>{errors.message.message}</CustomFormError>
            )}
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="min-w-20" disabled={loading}>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Connect"
              )}
            </Button>
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default Connect;
