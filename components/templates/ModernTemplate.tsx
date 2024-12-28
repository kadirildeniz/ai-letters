import Image from 'next/image';
import { Mail, Phone, Calendar, Shield, MessageSquare, School, Briefcase, Circle } from 'lucide-react';
import { CVData } from '@/app/types';

export default function ModernTemplate({ data }: { data: CVData }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-indigo-900">{data.name}</h1>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {data.email && (
              <div className="icon-wrapper">
                <Mail className="icon text-indigo-500" />
                <span className="text-gray-600">{data.email}</span>
              </div>
            )}
            {data.phone && (
              <div className="icon-wrapper">
                <Phone className="icon text-indigo-500" />
                <span className="text-gray-600">{data.phone}</span>
              </div>
            )}
            {data.birthdate && (
              <div className="icon-wrapper">
                <Calendar className="icon text-indigo-500" />
                <span className="text-gray-600">{data.birthdate}</span>
              </div>
            )}
            {data.militaryStatus && (
              <div className="icon-wrapper">
                <Shield className="icon text-indigo-500" />
                <span className="text-gray-600">{data.militaryStatus}</span>
              </div>
            )}
          </div>
        </div>
        {data.photo && (
          <Image 
            src={data.photo} 
            alt={data.name} 
            width={128} 
            height={128} 
            className="rounded-lg shadow-md object-cover"
          />
        )}
      </div>

      {data.bio && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-indigo-900 mb-3">Hakkımda</h2>
          <div className="icon-wrapper">
            <MessageSquare className="icon text-indigo-500" />
            <p className="text-gray-600">{data.bio}</p>
          </div>
        </div>
      )}

      {data.education.some(edu => edu.school || edu.degree || edu.year) && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-indigo-900 mb-3">Eğitim</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              edu.school && (
                <div key={edu.id} className="icon-wrapper">
                  <School className="icon text-indigo-500" />
                  <div>
                    <div className="font-medium">{edu.school}</div>
                    <div className="text-gray-600">{edu.degree}</div>
                    <div className="text-gray-500 text-sm">{edu.year}</div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {data.experiences.some(exp => exp.role || exp.company || exp.duration) && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-indigo-900 mb-3">İş Tecrübeleri</h2>
          <div className="space-y-3">
            {data.experiences.map((exp) => (
              exp.role && (
                <div key={exp.id} className="icon-wrapper">
                  <Briefcase className="icon text-indigo-500" />
                  <div>
                    <div className="font-medium">{exp.role}</div>
                    <div className="text-gray-600">{exp.company}</div>
                    <div className="text-gray-500 text-sm">{exp.duration}</div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {data.skills && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-indigo-900 mb-3">Beceriler</h2>
          <div className="icon-wrapper">
            <Circle className="icon text-indigo-500" />
            <p className="text-gray-600">{data.skills}</p>
          </div>
        </div>
      )}

      {data.interests && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-indigo-900 mb-3">İlgi Alanları</h2>
          <div className="icon-wrapper">
            <Circle className="icon text-indigo-500" />
            <p className="text-gray-600">{data.interests}</p>
          </div>
        </div>
      )}

      {data.languages && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-indigo-900 mb-3">Diller</h2>
          <div className="icon-wrapper">
            <Circle className="icon text-indigo-500" />
            <p className="text-gray-600">{data.languages}</p>
          </div>
        </div>
      )}
    </div>
  );
}