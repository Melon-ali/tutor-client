export type TReview = {
  studentId: string; 
  comment: string;
  rating: number;
  createdAt?: string; 
}

export type TAvailability = {
  day: string;
  startTime: string;
  endTime: string;
}

export type TRates = {
  hourlyRate: number;
  discount?: number;
}

export type TProfile = {
  _id: string;
  userId: string; 
  image?: string;
  bio?: string;
  subjects: string[];
  role: string; 
  experience?: number;
  rates: TRates;
  availability: TAvailability[];
  ratings?: number;
  reviews: TReview[];
  requestRole?: string; 
  isVerified?: boolean;
  callToAction?: string;
  createdAt?: string; 
  updatedAt?: string; 
}