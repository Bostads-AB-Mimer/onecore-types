import { z } from 'zod'

import { ApplicationProfileHousingReferenceSchema } from './application-profile-housing-reference'

export const ApplicationProfileHousingTypeSchema = z.enum([
  'LIVES_WITH_FAMILY', // Bor med familj
  'LODGER', // Inneboende
  'RENTAL', // Hyresrätt
  'SUB_RENTAL', // Andrahandskontrakt
  'OWNS_HOUSE', // Äger hus
  'OWNS_FLAT', // Äger lägenhet
  'OWNS_ROW_HOUSE', // Äger radhus
  'OTHER', // Övrigt,
])

export const ApplicationProfileSchema = z.object({
  id: z.number(),
  contactCode: z.string(),
  numAdults: z.number(),
  numChildren: z.number(),
  housingType: ApplicationProfileHousingTypeSchema.optional(),
  housingTypeDescription: z.string().optional(),
  landlord: z.string().optional(),
  housingReference: ApplicationProfileHousingReferenceSchema.optional(),
  expiresAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})
