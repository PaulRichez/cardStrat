export interface User {
  id: string;
  userBasicInfos: UserBasicInfos;
  userBirthInfos?: UserBirthInfos;
  userContactInfos?: UserContactInfos;
}

export interface UserBasicInfos {
  gender: 'male' | 'female';
  firstname: string;
  lastname: string;
}

export interface UserBirthInfos {
  birthdate?: Date;
  birthcountry?: string;
  birthcity?: string;
  birthstate?: string;
  birthzip?: string;
}


export interface UserContactInfos {
  email: string;
  phone?: string;
  protable?: string;
  address: string;
  city: string;
  country: string;
  zipcode: string;
}
