import { Email } from './types';

interface ParkingSpaceOfferEmail extends Email {
  adress: string;
  firstName: string;
  availableFrom: string;
  deadlineDate: string;
  rent: string;
  type: string;
  parkingSpaceId: string;
  objectId: string;
  hasParkingSpace: boolean;
}

export type {
  ParkingSpaceOfferEmail
}