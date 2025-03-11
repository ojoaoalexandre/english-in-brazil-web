import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormField, FormItem } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const formLoginSchema = z.object({
  email: z.string().email(),
})

type FormLoginSchema = z.infer<typeof formLoginSchema>

export const FormLogin = () => {
  const form = useForm<FormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: ""
    }
  })

  const handleLogin = async (data: FormLoginSchema) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Input {...field} placeholder="Email" />
            </FormItem>
          )}
        />

        <Button type="submit">Login</Button>
      </form>
    </Form>
  )
}
