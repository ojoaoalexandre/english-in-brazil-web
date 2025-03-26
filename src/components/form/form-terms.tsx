'use client'

import { findTerm, TermsProps } from '@/actions/auth/find-term'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Markdown } from '../markdown'
import { FormControl, FormField, FormItem } from '../ui/form'

export const FormTerms = () => {
  const [terms, setTerms] = useState<TermsProps[]>([])
  const form = useFormContext()

  useEffect(() => {
    const email = form.getValues('email');

    const fetchTerms = async () => {
      const response = await findTerm({ email });
      if (response && response.error === null && response.data) {
        setTerms(response.data.terms);
      }
    };

    fetchTerms();
  }, []);

  return (
    <section className="flex flex-col max-w-sm p-2 border rounded-md gap-2 justify-between max-h-96 md:max-h-[36rem]">
      {terms.map((term, index) => {
        return (
          <div key={index} className='overflow-y-auto'>
            <h2 className="text-lg font-semibold text-theme-blue-dark">
              {term.title}
            </h2>

            <div className="flex flex-col grow-0 overflow-y-auto text-black leading-relaxed">
              <Markdown>{term.content}</Markdown>
            </div>
          </div>
        )
      })}

      <div className="flex gap-2 items-center font-semibold text-theme-blue-dark">
        <FormField
          control={form.control}
          name="accepted"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  {...field}
                  type='checkbox'
                  onChange={event => {
                    field.onChange(event.target.checked)
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <label>Aceito todos os termos de uso</label>
      </div>
    </section>
  )
}
