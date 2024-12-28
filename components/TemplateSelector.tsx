import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
}

export default function TemplateSelector({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-indigo-900 mb-4">CV Şablonu Seçin</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {['modern', 'classic', 'minimal', 'creative', 'professional'].map((template) => (
          <Card
            key={template}
            className={`p-4 cursor-pointer hover:border-indigo-500 transition-all ${
              selectedTemplate === template ? 'border-indigo-500 ring-2 ring-indigo-200' : ''
            }`}
            onClick={() => onTemplateChange(template)}
          >
            <div className="aspect-[3/4] bg-gray-100 mb-3 rounded-md">
              <img 
                src={`/${template}.png`} 
                alt={`${template} template`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <RadioGroup value={selectedTemplate}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={template} id={template} />
                <Label htmlFor={template} className="capitalize">
                  {template.replace('-', ' ')}
                </Label>
              </div>
            </RadioGroup>
          </Card>
        ))}
      </div>
    </div>
  );
} 