'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Plus, Minus, Mail, Phone, Calendar, Shield, MessageSquare, School, Briefcase, Circle, Loader2, Sparkles, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
    bio: '',
  });
  const [isEnhancing, setIsEnhancing] = useState<{[key: string]: boolean}>({
    bio: false,
    skills: false,
    interests: false,
    languages: false
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
      experiences: [...formData.experiences, { id: Date.now(), role: '', company: '', duration: '' }],
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
      education: [...formData.education, { id: Date.now(), school: '', degree: '', year: '' }],
    });
  };

  const removeEducation = (id: number) => {
    setFormData({
      ...formData,
      education: formData.education.filter((edu) => edu.id !== id),
    });
  };

  const enhanceText = async (field: string) => {
    setIsEnhancing(prev => ({ ...prev, [field]: true }));
    try {
      const response = await fetch('/api/enhance-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          text: formData[field as keyof typeof formData],
          type: field 
        }),
      });

      const data = await response.json();
      if (data.enhancedText) {
        setFormData(prev => ({ ...prev, [field]: data.enhancedText }));
      }
    } catch (error) {
      console.error('Error enhancing text:', error);
    } finally {
      setIsEnhancing(prev => ({ ...prev, [field]: false }));
    }
  };

  const downloadPDF = async () => {
    try {
      const element = document.getElementById('cv-preview');
      if (!element) return;

      const canvas = await html2canvas(element, {
        margin: 4,
        useCORS: true,
        logging: false,
        allowTaint: true,
        onclone: (clonedDoc) => {
          const style = clonedDoc.createElement('style');
          style.innerHTML = `
            .icon-wrapper {
              display: flex !important;
              align-items: center !important;
              gap: 8px !important;
            }
            .icon {
              margin-top: 4px !important;
              width: 16px !important;
              height: 16px !important;
              flex-shrink: 0 !important;
            }
          `;
          clonedDoc.head.appendChild(style);
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.setProperties({
        title: 'CV',
        subject: 'CV',
        creator: 'CV Builder',
        author: formData.name,
        keywords: 'cv, resume',
        producer: 'CV Builder'
      });
      pdf.save('cv.pdf');

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('PDF oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[80vh]">
      <Card className="p-6 h-full bg-white border-indigo-100">
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold text-indigo-900 mb-6">1. Kişisel Bilgiler</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fotoğraf Yükle</label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="border-indigo-200 focus:ring-indigo-500"
                />
              </div>

              <Input
                placeholder="Ad Soyad"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-indigo-200 focus:ring-indigo-500"
              />
              <Input
                placeholder="E-posta"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-indigo-200 focus:ring-indigo-500"
              />
              <Input
                placeholder="Telefon"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-indigo-200 focus:ring-indigo-500"
              />
              <Input
                placeholder="Doğum Tarihi"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                className="border-indigo-200 focus:ring-indigo-500"
              />
              <Input
                placeholder="Askerlik Durumu"
                name="militaryStatus"
                value={formData.militaryStatus}
                onChange={handleChange}
                className="border-indigo-200 focus:ring-indigo-500"
              />
              
              <div className="relative">
                <Textarea
                  placeholder="Biyografi"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="min-h-[120px] resize-none border-indigo-200 focus:ring-indigo-500"
                />
                <Button
                  onClick={() => enhanceText('bio')}
                  disabled={isEnhancing.bio || !formData.bio}
                  className="absolute bottom-4 right-4 h-8 w-8 p-0 bg-indigo-500 hover:bg-indigo-600"
                  variant="ghost"
                  size="icon"
                  title="AI ile İyileştir"
                >
                  {isEnhancing.bio ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4 text-white" />
                  )}
                </Button>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold text-indigo-900 mb-6">2. Eğitim ve İş Tecrübeleri</h2>
            {formData.education.map((edu) => (
              <div key={edu.id} className="mb-4 p-4 rounded-lg bg-indigo-50 border border-indigo-100">
                <Input
                  placeholder="Okul"
                  value={edu.school}
                  onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)}
                  className="mb-2 border-indigo-200 focus:ring-indigo-500"
                />
                <Input
                  placeholder="Bölüm"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                  className="mb-2 border-indigo-200 focus:ring-indigo-500"
                />
                <Input
                  placeholder="Mezuniyet Yılı"
                  value={edu.year}
                  onChange={(e) => handleEducationChange(edu.id, 'year', e.target.value)}
                  className="mb-2 border-indigo-200 focus:ring-indigo-500"
                />
                <Button 
                  variant="destructive" 
                  onClick={() => removeEducation(edu.id)} 
                  className="text-sm"
                >
                  <Minus className="w-4 h-4 mr-2" /> Eğitimi Kaldır
                </Button>
              </div>
            ))}
            <Button 
              onClick={addEducation} 
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" /> Eğitim Ekle
            </Button>

            <h3 className="text-lg font-semibold text-indigo-900 mt-8 mb-4">İş Tecrübeleri</h3>
            {formData.experiences.map((exp) => (
              <div key={exp.id} className="mb-4 p-4 rounded-lg bg-indigo-50 border border-indigo-100">
                <Input
                  placeholder="Pozisyon"
                  value={exp.role}
                  onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)}
                  className="mb-2 border-indigo-200 focus:ring-indigo-500"
                />
                <Input
                  placeholder="Şirket"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                  className="mb-2 border-indigo-200 focus:ring-indigo-500"
                />
                <Input
                  placeholder="Süre"
                  value={exp.duration}
                  onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)}
                  className="mb-2 border-indigo-200 focus:ring-indigo-500"
                />
                <Button 
                  variant="destructive" 
                  onClick={() => removeExperience(exp.id)} 
                  className="text-sm"
                >
                  <Minus className="w-4 h-4 mr-2" /> Tecrübeyi Kaldır
                </Button>
              </div>
            ))}
            <Button 
              onClick={addExperience} 
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" /> Tecrübe Ekle
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold text-indigo-900 mb-6">3. İlgi Alanları ve Beceriler</h2>
            <div className="space-y-6">
              <div className="relative">
                <Textarea
                  placeholder="Beceriler"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="min-h-[120px] resize-none border-indigo-200 focus:ring-indigo-500"
                />
                <Button
                  onClick={() => enhanceText('skills')}
                  disabled={isEnhancing.skills || !formData.skills}
                  className="absolute bottom-4 right-4 h-8 w-8 p-0 bg-indigo-500 hover:bg-indigo-600"
                  variant="ghost"
                  size="icon"
                  title="AI ile İyileştir"
                >
                  {isEnhancing.skills ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4 text-white" />
                  )}
                </Button>
              </div>

              <div className="relative">
                <Textarea
                  placeholder="İlgi Alanları"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="min-h-[120px] resize-none border-indigo-200 focus:ring-indigo-500"
                />
                <Button
                  onClick={() => enhanceText('interests')}
                  disabled={isEnhancing.interests || !formData.interests}
                  className="absolute bottom-4 right-4 h-8 w-8 p-0 bg-indigo-500 hover:bg-indigo-600"
                  variant="ghost"
                  size="icon"
                  title="AI ile İyileştir"
                >
                  {isEnhancing.interests ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4 text-white" />
                  )}
                </Button>
              </div>

              <div className="relative">
                <Textarea
                  placeholder="Diller"
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                  className="min-h-[120px] resize-none border-indigo-200 focus:ring-indigo-500"
                />
                <Button
                  onClick={() => enhanceText('languages')}
                  disabled={isEnhancing.languages || !formData.languages}
                  className="absolute bottom-4 right-4 h-8 w-8 p-0 bg-indigo-500 hover:bg-indigo-600"
                  variant="ghost"
                  size="icon"
                  title="AI ile İyileştir"
                >
                  {isEnhancing.languages ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4 text-white" />
                  )}
                </Button>
              </div>
            </div>
          </>
        )}

        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <Button 
              onClick={prevStep}
              variant="outline" 
              className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
            >
              Geri
            </Button>
          )}
          {step < 3 ? (
            <Button 
              onClick={nextStep}
              className="bg-indigo-600 hover:bg-indigo-700 text-white ml-auto"
            >
              Sonraki
            </Button>
          ) : (
            <Button 
              onClick={downloadPDF}
              className="bg-indigo-600 hover:bg-indigo-700 text-white ml-auto"
            >
              <Download className="w-4 h-4 mr-2" />
              PDF İndir
            </Button>
          )}
        </div>
      </Card>

      <div id="cv-preview" className="p-6 rounded-lg bg-white border border-indigo-100 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-24">
            {formData.photo && (
              <img src={formData.photo} alt="Fotoğraf" className="w-full h-full rounded-md object-cover" />
            )}
          </div>
          {formData.name && <h1 className="text-xl font-semibold text-indigo-900">{formData.name}</h1>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {formData.email && (
            <div className="icon-wrapper">
              <Mail className="icon text-indigo-500" />
              <span className="text-sm text-gray-600">{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div className="icon-wrapper">
              <Phone className="icon text-indigo-500" />
              <span className="text-sm text-gray-600">{formData.phone}</span>
            </div>
          )}
          {formData.birthdate && (
            <div className="icon-wrapper">
              <Calendar className="icon text-indigo-500" />
              <span className="text-sm text-gray-600">{formData.birthdate}</span>
            </div>
          )}
          {formData.militaryStatus && (
            <div className="icon-wrapper">
              <Shield className="icon text-indigo-500" />
              <span className="text-sm text-gray-600">{formData.militaryStatus}</span>
            </div>
          )}
        </div>

        {formData.bio && (
          <>
            <hr className="my-4 border-indigo-100" />
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-indigo-900">Hakkımda</h2>
              <div className="icon-wrapper">
                <MessageSquare className="icon text-indigo-500" />
                <p className="text-sm text-gray-600 flex-grow">{formData.bio}</p>
              </div>
            </div>
          </>
        )}

        {formData.education.some(edu => edu.school || edu.degree || edu.year) && (
          <>
            <hr className="my-4 border-indigo-100" />
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-indigo-900">Eğitim</h2>
              <div className="space-y-2">
                {formData.education.map((edu) => {
                  if (edu.school || edu.degree || edu.year) {
                    return (
                      <div key={edu.id} className="icon-wrapper">
                        <School className="icon text-indigo-500" />
                        <span className="text-sm text-gray-600">
                          {[edu.school, edu.degree, edu.year].filter(Boolean).join(' - ')}
                        </span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </>
        )}

        {formData.experiences.some(exp => exp.role || exp.company || exp.duration) && (
          <>
            <hr className="my-4 border-indigo-100" />
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-indigo-900">İş Tecrübeleri</h2>
              {formData.experiences.map((exp) => {
                if (exp.role || exp.company || exp.duration) {
                  return (
                    <p key={exp.id} className="icon-wrapper">
                      <Briefcase className="icon text-indigo-500" />
                      {[exp.role, exp.company, exp.duration].filter(Boolean).join(' - ')}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </>
        )}

        {formData.skills && (
          <>
            <hr className="my-4 border-indigo-100" />
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-indigo-900">Beceriler</h2>
              <div className="icon-wrapper">
                <Circle className="icon text-indigo-500" />
                <span className="text-sm text-gray-600">{formData.skills}</span>
              </div>
            </div>
          </>
        )}

        {formData.interests && (
          <>
            <hr className="my-4 border-indigo-100" />
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-indigo-900">İlgi Alanları</h2>
              <div className="icon-wrapper">
                <MessageSquare className="icon text-indigo-500" />
                <span className="text-sm text-gray-600">{formData.interests}</span>
              </div>
            </div>
          </>
        )}

        {formData.languages && (
          <>
            <hr className="my-4 border-indigo-100" />
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-indigo-900">Diller</h2>
              <div className="icon-wrapper">
                <School className="icon text-indigo-500" />
                <span className="text-sm text-gray-600">{formData.languages}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
