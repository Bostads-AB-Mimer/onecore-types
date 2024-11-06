import { ApplicationProfileSchema } from '../schemas'

export const GetApplicationProfileResponseDataSchema = ApplicationProfileSchema

export const UpdateApplicationProfileRequestParamsSchema =
  ApplicationProfileSchema.pick({
    numAdults: true,
    numChildren: true,
    expiresAt: true,
  })

export const UpdateApplicationProfileResponseDataSchema =
  ApplicationProfileSchema
