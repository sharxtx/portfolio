'use client'

import { z } from "zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { ArrowRight } from "lucide-react"
import useThrottle from "@/lib/hooks/useThrottle"


const contactFormSchema = z.object({
  fullname: z.string().min(2, "Your name is less than 2 characters?").max(50, "Why so long? Try to keep it under 50 characters."),
  email: z.string().email({ message: "Not a valid email don't you think?" }),
  message: z.string().min(10, "Your message is less than 10 characters?").max(500, "Why so long? Try to keep it under 500 characters."),
  phone: z.coerce
    .string()
    .refine(
      (val) => val === "" || /^\d{10}$/.test(val),
      "Phone must be 10 digits if provided"
    )
    .transform((val) => (val === "" ? undefined : val))
    .optional(),
})

const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
      phone: "",
    },
  })

  const onSubmit = useThrottle(async (...args: unknown[]) => {
    const values = args[0] as z.infer<typeof contactFormSchema>;
    try {
      const res = contactFormSchema.parse(values);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(res),
        });
        
        if (response.ok) {
          toast('I have received your message. I will get back to you as soon as possible.');
          form.reset();
        } else {
          toast('Looks like something is not working. Can you contact me on other platforms pretty please.');
        }
      } catch (e: unknown) {
        toast('Looks like something is not working. Can you contact me on other platforms pretty please.');
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          console.log('An unknown error occurred.');
        }
      }
    } catch (e: unknown) {
      if (e instanceof z.ZodError) {
        console.log(e.errors)
        toast(e.errors[0].message);
      }
    }
  }, 1000)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input
                    autoComplete="off"
                    className="peer bg-background px-0 pt-6 pb-2 rounded-none border-0 border-b focus-visible:ring-0 focus-visible:border-foreground"
                    {...field}
                  />
                </FormControl>
                {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                <label className={`absolute tracking-widest left-0  ${form.control._formValues.fullname ? "top-0 text-xs -translate-y-2" : "top-1/2 -translate-y-1/2"}  text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-2 transition-all duration-200 pointer-events-none`}>
                  FULL NAME *
                </label>
              </div>
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-8 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <div className="relative">
                  <FormControl>
                    <Input
                      autoComplete="off"
                      className="peer bg-transparent px-0 pt-6 pb-2 rounded-none border-0 border-b focus-visible:ring-0 focus-visible:border-foreground"
                      {...field}
                    />
                  </FormControl>
                  {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                  <label className={`absolute tracking-widest  left-0  ${form.control._formValues.email ? "top-0 text-xs -translate-y-2" : "top-1/2 -translate-y-1/2"}  text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-2 transition-all duration-200 pointer-events-none`}>
                    EMAIL *
                  </label>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <div className="relative">
                  <FormControl>
                    <Input
                      autoComplete="off"
                      className="peer bg-transparent/100 px-0 pt-6 pb-2 rounded-none border-0 border-b focus-visible:ring-0 focus-visible:border-foreground"
                      {...field}
                    />
                  </FormControl>
                  {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                  <label className={`absolute  tracking-widest left-0  ${form.control._formValues.phone ? "top-0 text-xs -translate-y-2" : "top-1/2 -translate-y-1/2"}  text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-2 transition-all duration-200 pointer-events-none`}>
                    PHONE
                  </label>
                </div>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input
                    autoComplete="off"
                    autoCorrect="off"
                    className="peer bg-transparent px-0 pt-6 pb-2 rounded-none border-0 border-b focus-visible:ring-0 focus-visible:border-foreground "
                    {...field}
                  />
                </FormControl>
                {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                <label className={`absolute  tracking-widest left-0  ${form.control._formValues.message ? "top-0 text-xs -translate-y-2" : "top-1/2 -translate-y-1/2"}  text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-2 transition-all duration-200 pointer-events-none`}>
                  MESSAGE *
                </label>
              </div>
            </FormItem>
          )}
        />

        <div className="flex items-end justify-end gap-2">
          <Button type="submit" variant="outline" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>

      <Toaster
        closeButton
        position="bottom-right"
        duration={3000}
        swipeDirections={["right", "left"]}
      />
    </Form>
  )
}

export default ContactForm