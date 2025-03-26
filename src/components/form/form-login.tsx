import Image from 'next/image'
import React, { useState } from 'react'
import { FormTerms } from './form-terms'
import { FormSignIn } from './form-sign-in'
import { FormSignUp } from './form-sign-up'
import { toast } from 'sonner'
import { FormControl, FormField, FormItem } from '../ui/form'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerStatus } from '@/actions/auth/register-status'
import { signIn } from '@/actions/auth/sign-in'
import { signUp } from '@/actions/auth/sign-up'
import { Auth } from '../icon'

export const formLoginSchema = z.object({
    email: z.string(),
    password: z.string(),
    repeatPassword: z.string(),
    name: z.string(),
    accepted: z.boolean()
})

export type FormLoginSchema = z.infer<typeof formLoginSchema>

export const FormLogin = () => {
    const [formSignIn, setFormSignIn] = useState(false)
    const [formSignUp, setFormSignUp] = useState(false)

    const form = useForm<FormLoginSchema>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: '',
            name: '',
            accepted: false
        }
    })

    const handleLogin = async (data: FormLoginSchema) => {
        if (data.email && !formSignIn && !formSignUp) {
            const isRegistered = await registerStatus({
                email: data.email
            })

            if (isRegistered?.error) {
                toast(isRegistered.error)
                return
            }

            if (isRegistered?.data?.registered) {
                setFormSignIn(true)
            } else {
                setFormSignUp(true)
            }
        }

        if (formSignIn && data.email && data.password) {
            const response = await signIn({
                email: data?.email,
                password: data?.password
            })

            if (response.error) {
                toast.error(response.error)
                return
            }
        }

        if (formSignUp && data.email) {
            if (!data.accepted) {
                toast.error('Aceite os termos para continuar')
                return
            }

            if (!data.name || data.name.length < 3) {
                toast.error('Favor informar seu nome com mais de 3 caracteres')
                return
            }

            if (data.password && data.password?.length < 6) {
                toast.error('Sua senha deve ter no mínimo 6 caracteres')
                return
            }

            if (!data.password || !data.repeatPassword) {
                toast.error('Favor preencher os dois campos de senha')
                return
            }

            if (data.password !== data.repeatPassword) {
                toast.error('As senhas devem ser iguais')
                return
            }

            const response = signUp({
                name: data.name,
                email: data.email,
                password: data.password
            })

            toast.promise(response, {
                loading: 'Registrando...',
                success: 'Registrado com sucesso',
                error: 'Registrado com sucesso'
            })
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-4">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className='flex'>
            {formSignUp && (
                <div className="flex items-center justify-center px-2">
                    <FormTerms  />
                </div>
            )}

            <section className="bg-white p-10 rounded-md shadow-md max-w-md">
                <div className="flex items-center justify-center mb-4">
                    <Image src="/logo-colorido.png" width={250} height={100} alt="logo" />
                </div>

                    <div onSubmit={form.handleSubmit(handleLogin)} className="flex flex-col gap-2">
                        {!formSignIn && !formSignUp && (
                            <div>
                                <div className="flex relative grow">
                                    <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem className='flex w-full'>
                                                <FormControl
                                                    className='flex grow py-2 pl-12 border-gray-300 border-2 bg-gray-200 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-theme-red text-black focus:invalid:border-theme-red focus:invalid:ring-theme-red rounded-md'>
                                                    <input
                                                        type='email'
                                                        placeholder='Insira seu email'
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
                                <button
                                    type="submit"
                                    className="py-2 mt-2 rounded-md bg-theme-blue-dark text-white w-full"
                                >
                                    Verificar Registro
                                </button>
                            </div>
                        )}

                        {formSignIn && <FormSignIn />}
                        {formSignUp && <FormSignUp />}
                    </div>

                <p className="text-sm text-center font-light text-gray-500 mt-6">
                    Ao entrar na plataforma, você concorda com os nossos{' '}
                    <span className="font-semibold">Termos</span> e{' '}
                    <span className="font-semibold">Política de Privacidade</span>.
                </p>
            </section>
            </form>
                </FormProvider>
        </div>
    )
}
