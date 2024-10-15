enum CreateOfferErrorCodes {
  NoListing = 'no-listing',
  ListingNotExpired = 'listing-not-expired',
  NoApplicants = 'no-applicants',
  NoContact = 'no-contact',
  UpdateApplicantStatusFailure = 'update-applicant-status-failure',
  CreateOfferFailure = 'create-offer',
  SendEmailFailure = 'send-email-failure',
  Unknown = 'unknown',
}

export { CreateOfferErrorCodes }
