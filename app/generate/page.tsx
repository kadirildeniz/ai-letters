'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Plus, Minus } from 'lucide-react';
import html2pdf from 'html2pdf.js';

export default function Generate() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    photo: '',
    birthdate: '',
    militaryStatus: '',
    education: [{ id: 1, school: '', degree: '', year: '' }],
    skills: '',
    languages: '',
    experiences: [{ id: 1, role: '', company: '', duration: '' }],
    interests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photo: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleExperienceChange = (id: number, field: string, value: string) => {
    const updatedExperiences = formData.experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { id: Date.now(), role: '', company: '', duration: '' },
      ],
    });
  };

  const removeExperience = (id: number) => {
    setFormData({
      ...formData,
      experiences: formData.experiences.filter((exp) => exp.id !== id),
    });
  };

  const handleEducationChange = (id: number, field: string, value: string) => {
    const updatedEducation = formData.education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    setFormData({ ...formData, education: updatedEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { id: Date.now(), school: '', degree: '', year: '' },
      ],
    });
  };

  const removeEducation = (id: number) => {
    setFormData({
      ...formData,
      education: formData.education.filter((edu) => edu.id !== id),
    });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const downloadPDF = () => {
    const element = document.getElementById('cv-preview');
    html2pdf(element, {
      margin: 10,
      filename: 'cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[80vh]">
      <Card className="p-6 shadow-md h-full bg-white rounded-lg">
        {step === 1 && (
          <>
            <h2 className="text-xl font-normal mb-4">1. Kişisel Bilgiler</h2>
            <Input
              placeholder="Ad Soyad"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mb-3"
              style={{ fontSize: '16px' }}
            />
            <Input
              placeholder="E-posta"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mb-3"
              style={{ fontSize: '16px' }}
            />
            <Input
              placeholder="Telefon"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mb-3"
              style={{ fontSize: '16px' }}
            />
            <Input
              placeholder="Doğum Tarihi"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="mb-3"
              style={{ fontSize: '16px' }}
            />
            <Input
              placeholder="Askerlik Durumu"
              name="militaryStatus"
              value={formData.militaryStatus}
              onChange={handleChange}
              className="mb-3"
              style={{ fontSize: '16px' }}
            />
            <label className="block mb-3 text-gray-700">Fotoğraf Yükle</label>
            <Input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="mb-3"
              style={{ fontSize: '16px' }}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-normal mb-4">2. Eğitim ve İş Tecrübeleri</h2>
            {formData.education.map((edu) => (
              <div key={edu.id} className="mb-4 border p-4 rounded-md bg-gray-50">
                <Input
                  placeholder="Okul"
                  value={edu.school}
                  onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)}
                  className="mb-2"
                  style={{ fontSize: '16px' }}
                />
                <Input
                  placeholder="Bölüm"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                  className="mb-2"
                  style={{ fontSize: '16px' }}
                />
                <Input
                  placeholder="Mezuniyet Yılı"
                  value={edu.year}
                  onChange={(e) => handleEducationChange(edu.id, 'year', e.target.value)}
                  className="mb-2"
                  style={{ fontSize: '16px' }}
                />
                <Button variant="destructive" onClick={() => removeEducation(edu.id)} className="text-sm">
                  <Minus className="w-4 h-4" /> Eğitimi Kaldır
                </Button>
              </div>
            ))}
            <Button onClick={addEducation} className="mt-2 text-sm">
              <Plus className="w-4 h-4" /> Eğitim Ekle
            </Button>
            <h3 className="text-xl font-normal mt-6 mb-4">İş Tecrübeleri</h3>
            {formData.experiences.map((exp) => (
              <div key={exp.id} className="mb-4 border p-4 rounded-md bg-gray-50">
                <Input
                  placeholder="Pozisyon"
                  value={exp.role}
                  onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)}
                  className="mb-2"
                  style={{ fontSize: '16px' }}
                />
                <Input
                  placeholder="Şirket"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                  className="mb-2"
                  style={{ fontSize: '16px' }}
                />
                <Input
                  placeholder="Süre"
                  value={exp.duration}
                  onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)}
                  className="mb-2"
                  style={{ fontSize: '16px' }}
                />
                <Button variant="destructive" onClick={() => removeExperience(exp.id)} className="text-sm">
                  <Minus className="w-4 h-4" /> Tecrübeyi Kaldır
                </Button>
              </div>
            ))}
            <Button onClick={addExperience} className="mt-2 text-sm">
              <Plus className="w-4 h-4" /> Tecrübe Ekle
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-normal mb-4">3. İlgi Alanları ve Beceriler</h2>
            <Textarea
              placeholder="Beceriler"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="mb-3"
              style={{ fontSize: '16px' }}
            />
            <Textarea
              placeholder="İlgi Alanları"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="mb-3"
              style={{ fontSize: '16px' }}
            />
            <Textarea
              placeholder="Diller"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              className="mb-3"
              style={{ fontSize: '16px' }}
            />
          </>
        )}

        <div className="mt-6 flex justify-between">
          {step > 1 && <Button onClick={prevStep}>Geri</Button>}
          {step < 3 ? (
            <Button onClick={nextStep}>Sonraki</Button>
          ) : (
            <Button onClick={downloadPDF}>PDF İndir</Button>
          )}
        </div>
      </Card>

      <div id="cv-preview" className="border-2 p-6 shadow-md rounded-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-24">
            {formData.photo && <img src={formData.photo} alt="Fotoğraf" className="w-full h-full rounded-md" />}
          </div>
          <h1 className="text-xl font-normal">{formData.name}</h1>
        </div>
        <p className="text-sm">{formData.email}</p>
        <p className="text-sm">{formData.phone}</p>
        <p className="text-sm">{formData.birthdate}</p>
        <p className="text-sm">{formData.militaryStatus}</p>

        <hr className="my-4 border-gray-300" />

        <h2 className="text-lg font-normal mt-6">Eğitim</h2>
        {formData.education.map((edu) => (
          <p key={edu.id} className="text-sm">
            {edu.school} - {edu.degree} ({edu.year})
          </p>
        ))}

        <hr className="my-4 border-gray-300" />

        <h2 className="text-lg font-normal mt-6">İş Tecrübeleri</h2>
        {formData.experiences.map((exp) => (
          <p key={exp.id} className="text-sm">
            {exp.role} - {exp.company} ({exp.duration})
          </p>
        ))}

        <hr className="my-4 border-gray-300" />

        <h2 className="text-lg font-normal mt-6">Beceriler</h2>
        <p className="text-sm">{formData.skills}</p>

        <hr className="my-4 border-gray-300" />

        <h2 className="text-lg font-normal mt-6">İlgi Alanları</h2>
        <p className="text-sm">{formData.interests}</p>

        <hr className="my-4 border-gray-300" />

        <h2 className="text-lg font-normal mt-6">Diller</h2>
        <p className="text-sm">{formData.languages}</p>
      </div>
    </div>
  );
}
