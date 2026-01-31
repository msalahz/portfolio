import { z } from 'zod'

export const booleanStringSchema = z.union([z.literal('true'), z.literal('false')])
