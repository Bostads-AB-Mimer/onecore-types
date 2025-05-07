import { Email, Sms } from './types'

interface ParkingSpaceOfferEmail extends Email {
  address: string
  firstName: string
  availableFrom: string
  deadlineDate: string
  rent: string
  type: string
  parkingSpaceId: string
  objectId: string
  applicationType: 'Replace' | 'Additional'
  offerURL: string
}

interface ParkingSpaceOfferSms extends Sms {
  firstName: string
  deadlineDate: string
}

interface WorkOrderSms extends Sms {
  text: string
  externalContractorName?: string
}

interface WorkOrderEmail extends Email {
  externalContractorName?: string
}

interface FlowParticipant {
  identifyBy: {
    identifier: string
    type: string // e.g., "PHONE", "EMAIL"
  }
  person: {
    firstName: string
    lastName: string
    customAttributes?: Record<string, string>
    contactInformation?: {
      phone?: {
        number: string
      }[]
      email?: {
        address: string
      }[]
    }
  }
}

interface AddToFlowRequest {
  flowId: string
  participants: FlowParticipant[]
}

// Can be used for both positive and negative notifications
interface ParkingSpaceNotificationEmail extends Email {
  address: string
  parkingSpaceId: string
}

export type {
  ParkingSpaceOfferEmail,
  ParkingSpaceNotificationEmail,
  ParkingSpaceOfferSms,
  WorkOrderSms,
  WorkOrderEmail,
  FlowParticipant,
  AddToFlowRequest,
}

