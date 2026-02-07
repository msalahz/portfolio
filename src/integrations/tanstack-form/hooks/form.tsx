import { createFormHook } from '@tanstack/react-form'

import { InputField } from '@/integrations/tanstack-form/components/InputField'
import { TextareaField } from '@/integrations/tanstack-form/components/TextareaField'
import { ResetButton } from '@/integrations/tanstack-form/components/ResetButton'
import { SubmitButton } from '@/integrations/tanstack-form/components/SubmitButton'
import { fieldContext, formContext } from '@/integrations/tanstack-form/hooks/formContext.tsx'

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldComponents: {
    Input: InputField,
    Textarea: TextareaField,
  },
  formComponents: {
    SubmitButton,
    ResetButton,
  },
  fieldContext,
  formContext,
})
