'use client'

import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem } from '../ui/form'
import { Auth, AuthPassword } from '../icon'

export const FormSignUp = () => {
  const form = useFormContext()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex relative grow">
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='flex w-full'>
              <FormControl className='flex grow py-2 pl-12 text-black border-gray-300 border-2 bg-gray-200 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-theme-red invalid:text-red-600 focus:invalid:border-theme-red focus:invalid:ring-theme-red rounded-md'>
                <input
                  type='text'
                  placeholder='Insira seu nome'
                  {...field}
                  onChange={event => {
                    const value = event.target.value.toLocaleLowerCase()

                    field.onChange(value)
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Auth />
      </div>

      <div className="flex relative grow">
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex w-full'>
              <FormControl className='flex grow py-2 pl-12 text-black border-gray-300 border-2 bg-gray-200 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-theme-red invalid:text-red-600 focus:invalid:border-theme-red focus:invalid:ring-theme-red rounded-md'>
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
              <FormControl className='flex grow py-2 pl-12 text-black border-gray-300 border-2 bg-gray-200 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-theme-red invalid:text-red-600 focus:invalid:border-theme-red focus:invalid:ring-theme-red rounded-md'>
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

      <div  className="flex relative grow">
        <FormField
          control={form.control}
          name='repeatPassword'
          render={({ field }) => (
            <FormItem className='flex w-full'>
              <FormControl className='flex grow py-2 pl-12 text-black border-gray-300 border-2 bg-gray-200 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-theme-red invalid:text-red-600 focus:invalid:border-theme-red focus:invalid:ring-theme-red rounded-md'>
                <input
                  type='password'
                  placeholder='Insira sua senha novamente'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <AuthPassword />
      </div>
      <button
        type="submit"
        className="py-2 mt-2 rounded-md bg-theme-blue-dark text-white w-full"
      >
        Registrar
      </button>
    </div>
  )
}
