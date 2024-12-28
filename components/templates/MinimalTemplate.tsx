import { CVData } from '@/app/types';
import Image from 'next/image';
export default function MinimalTemplate({ data }: { data: CVData }) {
  return (
    <div className="p-8 bg-white max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="flex justify-between items-start justify-center">
        <h1 className="text-4xl font-light text-gray-900 mb-4">{data.name}</h1>
        {data.photo && (
          <Image src={data.photo} alt={data.name} width={100} height={100} className="rounded-full mb-4" />
        )}
        </div>
        <div className="space-y-1 text-gray-600">
          {data.email && <div>{data.email}</div>}
          {data.phone && <div>{data.phone}</div>}
          {data.birthdate && <div>{data.birthdate}</div>}
          {data.militaryStatus && <div>{data.militaryStatus}</div>}
        </div>
      </div>

      {data.bio && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Hakkımda</h2>
          <p className="text-gray-700 leading-relaxed">{data.bio}</p>
        </div>
      )}

      {data.education.some(edu => edu.school || edu.degree || edu.year) && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Eğitim</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              edu.school && (
                <div key={edu.id}>
                  <h3 className="font-medium">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {data.experiences.some(exp => exp.role || exp.company || exp.duration) && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">İş Tecrübeleri</h2>
          <div className="space-y-4">
            {data.experiences.map((exp) => (
              exp.role && (
                <div key={exp.id}>
                  <h3 className="font-medium">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.duration}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {data.skills && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Beceriler</h2>
          <p className="text-gray-700">{data.skills}</p>
        </div>
      )}

      {data.interests && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">İlgi Alanları</h2>
          <p className="text-gray-700">{data.interests}</p>
        </div>
      )}

      {data.languages && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Diller</h2>
          <p className="text-gray-700">{data.languages}</p>
        </div>
      )}
    </div>
  );
}