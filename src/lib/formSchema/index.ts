import { z } from 'zod'

export type BasicFormValues = z.infer<typeof basicFormSchema>

export const basicFormSchema = z.object({
  userId: z.string().min(1, '必須項目です'),
  password: z.string().min(1, '必須項目です'),
})
