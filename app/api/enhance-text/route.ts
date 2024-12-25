import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const { text, type } = await req.json();

    const prompts = {
      bio: "Bu profesyonel biyografiyi daha etkileyici ve akıcı hale getir, ancak içeriği koruyarak düzenle:",
      skills: "Bu becerileri daha profesyonel ve etkileyici bir şekilde düzenle:",
      interests: "Bu ilgi alanlarını daha profesyonel bir dille yeniden yaz:",
      languages: "Bu dil yetkinliklerini daha profesyonel bir formatta düzenle:"
    };

    const prompt = `${prompts[type as keyof typeof prompts]} "${text}"`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({ enhancedText: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Metin iyileştirilemedi' }, { status: 500 });
  }
} 