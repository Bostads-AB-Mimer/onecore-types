import { z } from 'zod'

export const HousingReferenceReviewStatusSchema = z.enum([
  'APPROVED',
  'REJECTED',
  'CONTACTED_UNREACHABLE',
  'PENDING',
  'REFERENCE_NOT_REQUIRED',
])

export const ApplicationProfileHousingReferenceSchema = z.object({
  id: z.number(),
  applicationProfileId: z.number(),
  phone: z.string(), // TODO: Should parse as phone number
  email: z.string().nullable(), // TODO: Should parse as email
  reviewStatus: HousingReferenceReviewStatusSchema,
  reviewStatusReason: z.string().nullable(),
  reviewedAt: z.coerce.date().nullable(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})
