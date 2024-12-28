import Image from 'next/image';
import { Mail, Phone, Calendar, Shield, MessageSquare, School, Briefcase, Circle } from 'lucide-react';
import { CVData } from '@/app/types';

export default function CreativeTemplate({ data }: { data: CVData }) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-lg">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1 bg-indigo-900 text-white p-6 rounded-lg">
          {data.photo && (
            <div className="mb-6">
              <Image 
                src={data.photo} 
                alt={data.name} 
                width={200} 
                height={200} 
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
          )}
          
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <div className="space-y-3 text-indigo-100">
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

            {data.skills && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Beceriler</h2>
                <p className="text-indigo-100">{data.skills}</p>
              </div>
            )}

            {data.languages && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Diller</h2>
                <p className="text-indigo-100">{data.languages}</p>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-2 p-6">
          {data.bio && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Hakkımda</h2>
              <p className="text-gray-600 leading-relaxed">{data.bio}</p>
            </div>
          )}

          {data.education.some(edu => edu.school || edu.degree || edu.year) && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Eğitim</h2>
              <div className="space-y-4">
                {data.education.map((edu) => (
                  edu.school && (
                    <div key={edu.id} className="flex items-start gap-3">
                      <School className="w-5 h-5 mt-1 text-indigo-600" />
                      <div>
                        <h3 className="font-semibold text-indigo-900">{edu.school}</h3>
                        <p className="text-gray-600">{edu.degree}</p>
                        <p className="text-gray-500 text-sm">{edu.year}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {data.experiences.some(exp => exp.role || exp.company || exp.duration) && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">İş Tecrübeleri</h2>
              <div className="space-y-4">
                {data.experiences.map((exp) => (
                  exp.role && (
                    <div key={exp.id} className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 mt-1 text-indigo-600" />
                      <div>
                        <h3 className="font-semibold text-indigo-900">{exp.role}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.duration}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {data.interests && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">İlgi Alanları</h2>
              <div className="flex items-start gap-3">
                <Circle className="w-5 h-5 mt-1 text-indigo-600" />
                <p className="text-gray-600">{data.interests}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}