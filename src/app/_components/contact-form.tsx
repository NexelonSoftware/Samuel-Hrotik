"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import useTranslation from "~/language/useTranslation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const { t, lang } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const templateParams = {
      user_name: values.name,
      user_subject: values.subject,
      user_email: values.email,
      user_message: values.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PERSONAL_TOKEN,
      )
      .then(
        () => {
          // Form submitted successfully
          setIsSubmitting(false);
          form.reset();
          toast(langData?.contact?.form?.sent ?? "Message sent!", {
            description:
              langData?.contact?.form?.sentDescription ??
              "Thank you for your message. I'll get back to you soon.",
          });
        },
        (error) => {
          console.log("Email send unsuccesfully", error);
        },
      );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                {" "}
                <FormLabel>{t(lang.contact.form.name)}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t(lang.contact.form.namePlaceholder)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {" "}
                <FormLabel>{t(lang.contact.form.email)}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t(lang.contact.form.emailPlaceholder)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              {" "}
              <FormLabel>{t(lang.contact.form.subject)}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t(lang.contact.form.subjectPlaceholder)}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              {" "}
              <FormLabel>{t(lang.contact.form.message)}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t(lang.contact.form.messagePlaceholder)}
                  className="min-h-[150px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t(lang.buttons.sending)}
            </>
          ) : (
            t(lang.buttons.sendMessage)
          )}
        </Button>
      </form>
    </Form>
  );
}
