import Image from 'next/image';
import { Mail, Phone, Calendar, Shield, MessageSquare, School, Briefcase, Circle } from 'lucide-react';
import { CVData } from '@/app/types';

export default function ClassicTemplate({ data }: { data: CVData }) {
  return (
    <div className="p-8 bg-white">
      <header className="text-center border-b-2 border-gray-200 pb-6">
        {data.photo && (
          <div className="mb-4 flex justify-center">
            <Image 
              src={data.photo} 
              alt={data.name} 
              width={120} 
              height={120} 
              className="rounded-full shadow-md object-cover"
            />
          </div>
        )}
        <h1 className="text-3xl font-serif text-gray-900">{data.name}</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-6 text-gray-600">
          {data.email && (
            <div className="icon-wrapper">
              <Mail className="icon" />
              <span>{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="icon-wrapper">
              <Phone className="icon" />
              <span>{data.phone}</span>
            </div>
          )}
          {data.birthdate && (
            <div className="icon-wrapper">
              <Calendar className="icon" />
              <span>{data.birthdate}</span>
            </div>
          )}
          {data.militaryStatus && (
            <div className="icon-wrapper">
              <Shield className="icon" />
              <span>{data.militaryStatus}</span>
            </div>
          )}
        </div>
      </header>

      {data.bio && (
        <section className="mt-8">
          <h2 className="text-xl font-serif text-gray-800 border-b mb-4 pb-2">Profesyonel Özet</h2>
          <p className="text-gray-600 leading-relaxed">{data.bio}</p>
        </section>
      )}

      {data.education.some(edu => edu.school || edu.degree || edu.year) && (
        <section className="mt-8">
          <h2 className="text-xl font-serif text-gray-800 border-b mb-4 pb-2">Eğitim</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              edu.school && (
                <div key={edu.id} className="flex items-start gap-4">
                  <School className="w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-semibold">{edu.school}</h3>
                    <p className="text-gray-600">{edu.degree}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {data.experiences.some(exp => exp.role || exp.company || exp.duration) && (
        <section className="mt-8">
          <h2 className="text-xl font-serif text-gray-800 border-b mb-4 pb-2">İş Tecrübeleri</h2>
          <div className="space-y-4">
            {data.experiences.map((exp) => (
              exp.role && (
                <div key={exp.id} className="flex items-start gap-4">
                  <Briefcase className="w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {data.skills && (
        <section className="mt-8">
          <h2 className="text-xl font-serif text-gray-800 border-b mb-4 pb-2">Beceriler</h2>
          <div className="flex items-start gap-4">
            <Circle className="w-5 h-5 mt-1" />
            <p className="text-gray-600">{data.skills}</p>
          </div>
        </section>
      )}

      {data.interests && (
        <section className="mt-8">
          <h2 className="text-xl font-serif text-gray-800 border-b mb-4 pb-2">İlgi Alanları</h2>
          <div className="flex items-start gap-4">
            <Circle className="w-5 h-5 mt-1" />
            <p className="text-gray-600">{data.interests}</p>
          </div>
        </section>
      )}

      {data.languages && (
        <section className="mt-8">
          <h2 className="text-xl font-serif text-gray-800 border-b mb-4 pb-2">Diller</h2>
          <div className="flex items-start gap-4">
            <Circle className="w-5 h-5 mt-1" />
            <p className="text-gray-600">{data.languages}</p>
          </div>
        </section>
      )}
    </div>
  );
}