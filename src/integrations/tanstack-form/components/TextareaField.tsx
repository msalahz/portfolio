import * as React from 'react'
import { useStore } from '@tanstack/react-form'

import type { ReactNode } from 'react'

import { Textarea } from '@/integrations/shadcn/components/ui/textarea'
import { useFieldContext } from '@/integrations/tanstack-form/hooks/formContext'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/integrations/shadcn/components/ui/field'

export interface TextareaFieldProps extends React.ComponentProps<typeof Textarea> {
  label?: string
  description?: string
  labelChildren?: ReactNode
  fieldProps?: React.ComponentProps<typeof Field>
}

export function TextareaField({
  label,
  description,
  labelChildren,
  fieldProps,
  ...textareaProps
}: TextareaFieldProps) {
  const field = useFieldContext<string>()
  const errors = useStore(field.store, (state) => state.meta.errors)
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <Field data-invalid={isInvalid} {...fieldProps}>
      {label ? (
        <div className="flex w-full items-center justify-between">
          <FieldLabel htmlFor={textareaProps.id || `${field.name}-form-field`}>{label}</FieldLabel>
          {labelChildren}
        </div>
      ) : null}

      <Textarea
        id={`${field.name}-form-field`}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
        {...textareaProps}
      />

      {description ? <FieldDescription>{description}</FieldDescription> : null}
      {isInvalid ? <FieldError errors={errors} /> : null}
    </Field>
  )
}
