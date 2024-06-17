
import React from 'react'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const CustomInput = ({form, name, label, description, placeholder}:{form: any, name: string, label: string, description: string, placeholder: string}) => {
  return (
    <FormField
    control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} />
        </FormControl>
        <FormDescription>
          {description}
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}  
  />
  )
}

export default CustomInput