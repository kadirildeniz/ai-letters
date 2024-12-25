import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: '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'
});

export async function POST(req: Request) {
  try {
    const { formData } = await req.json();

    const prompt = `Aşağıdaki bilgilere dayanarak profesyonel bir biyografi yaz:
    İsim: ${formData.name}
    Eğitim: ${formData.education.map((edu: any) => `${edu.school} - ${edu.degree}`).join(', ')}
    Tecrübeler: ${formData.experiences.map((exp: any) => `${exp.role} at ${exp.company}`).join(', ')}
    Beceriler: ${formData.skills}
    Diller: ${formData.languages}
    
    Lütfen profesyonel, kısa ve etkileyici bir biyografi oluştur.`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({ bio: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Biyografi oluşturulurken bir hata oluştu' }, { status: 500 });
  }
} 