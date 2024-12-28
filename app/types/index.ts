export interface CVData {
  name: string;
  email: string;
  phone: string;
  photo: string;
  birthdate: string;
  militaryStatus: string;
  education: Array<{
    id: number;
    school: string;
    degree: string;
    year: string;
  }>;
  skills: string;
  languages: string;
  experiences: Array<{
    id: number;
    role: string;
    company: string;
    duration: string;
  }>;
  interests: string;
  bio: string;
} 