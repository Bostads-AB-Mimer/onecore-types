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
  phone: z.string(),
  email: z.string().nullable(),
  reviewStatus: HousingReferenceReviewStatusSchema,
  reviewStatusReason: z.string().nullable(),
  reviewedAt: z.coerce.date().nullable(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})
