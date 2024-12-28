import Image from 'next/image';
import { Mail, Phone, Calendar, Shield, MessageSquare, School, Briefcase, Circle } from 'lucide-react';
import { CVData } from '@/app/types';

export default function ProfessionalTemplate({ data }: { data: CVData }) {
  return (
    <div className="p-8 bg-white">
      <div className="border-l-4 border-gray-800 pl-6 mb-8">
        <div className="flex items-start gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
              {data.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{data.email}</span>
                </div>
              )}
              {data.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{data.phone}</span>
                </div>
              )}
              {data.birthdate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{data.birthdate}</span>
                </div>
              )}
              {data.militaryStatus && (
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>{data.militaryStatus}</span>
                </div>
              )}
            </div>
          </div>
          {data.photo && (
            <Image 
              src={data.photo} 
              alt={data.name} 
              width={100} 
              height={100} 
              className="rounded-md shadow-md object-cover"
            />
          )}
        </div>
      </div>

      {data.bio && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <MessageSquare className="mr-2 w-5 h-5" />
            Profesyonel Özet
          </h2>
          <p className="text-gray-700 leading-relaxed pl-7">{data.bio}</p>
        </div>
      )}

      {data.education.some(edu => edu.school || edu.degree || edu.year) && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <School className="mr-2 w-5 h-5" />
            Eğitim
          </h2>
          <div className="space-y-4 pl-7">
            {data.education.map((edu) => (
              edu.school && (
                <div key={edu.id}>
                  <h3 className="font-semibold text-gray-800">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {data.experiences.some(exp => exp.role || exp.company || exp.duration) && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Briefcase className="mr-2 w-5 h-5" />
            İş Tecrübeleri
          </h2>
          <div className="space-y-4 pl-7">
            {data.experiences.map((exp) => (
              exp.role && (
                <div key={exp.id}>
                  <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.duration}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {data.skills && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Circle className="mr-2 w-5 h-5" />
            Beceriler
          </h2>
          <p className="text-gray-700 pl-7">{data.skills}</p>
        </div>
      )}

      {data.interests && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Circle className="mr-2 w-5 h-5" />
            İlgi Alanları
          </h2>
          <p className="text-gray-700 pl-7">{data.interests}</p>
        </div>
      )}

      {data.languages && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Circle className="mr-2 w-5 h-5" />
            Diller
          </h2>
          <p className="text-gray-700 pl-7">{data.languages}</p>
        </div>
      )}
    </div>
  );
}