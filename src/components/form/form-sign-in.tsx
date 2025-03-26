'use client'

import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem } from '../ui/form'
import { forgotPassword } from '@/actions/auth/forgot-password'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Auth, AuthPassword } from '../icon'

export const FormSignIn = () => {
  const router = useRouter()
  const form = useFormContext()

  const forgetPassword = async () => {
    const response = forgotPassword({
      email: form.getValues('email')
    })

    toast.promise(
      response,
      {
        loading: 'Enviando Email',
        success: `Nova senha enviada para o email ${form.getValues('email')}`,
        error: 'Erro no Servidor'
      },
    )

    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  return (
    <div className="flex flex-col gap-2">
        <div className="flex relative grow">
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex w-full'>
                <FormControl className='flex grow py-2 pl-12 border-gray-300 border-2 bg-gray-200 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-theme-red text-black focus:invalid:border-theme-red focus:invalid:ring-theme-red rounded-md'>
                  <input
                    type='email'
                    placeholder='Insira seu email'
                    {...field}
                    onChange={event => {
                      const value = event.target.value.toLocaleLowerCase()

                      field.onChange(value)
                    }}
                    disabled
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Auth />
        </div>

      <div  className="flex relative grow">
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='flex w-full'>
              <FormControl className='flex grow py-2 pl-12 border-gray-300 border-2 bg-gray-200 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-theme-red invalid:text-red-600 text-black focus:invalid:border-theme-red focus:invalid:ring-theme-red rounded-md'>
                <input
                  type='password'
                  placeholder='Insira sua senha'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <AuthPassword />
      </div>
      <div className="flex justify-end">
        <div
          onClick={() => forgetPassword()}
          className="text-sm text-theme-blue-dark font-semibold cursor-pointer"
        >
          Esqueci minha senha
        </div>
      </div>
      <button
        type="submit"
        className="py-2 mt-2 rounded-md bg-theme-blue-dark text-white w-full"
      >
        Entrar
      </button>
    </div>
  )
}
