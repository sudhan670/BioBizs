import { Facebook, Mail, Linkedin, MessageCircle, Send } from 'lucide-react';

const socialLinks = [
  { icon: MessageCircle, label: 'WhatsApp', color: 'text-green-500' },
  { icon: Facebook, label: 'Facebook', color: 'text-blue-600' },
  { icon: Send, label: 'Telegram', color: 'text-blue-400' },
  { icon: Linkedin, label: 'LinkedIn', color: 'text-blue-700' },
  { icon: Mail, label: 'Email', color: 'text-red-500' },
];

export function SocialLinks() {
  return (
    <div className="flex flex-col space-y-4">
      {socialLinks.map(({ icon: Icon, label, color }) => (
        <a
          key={label}
          href="#"
          className={`flex items-center space-x-2 ${color} hover:opacity-80 transition-opacity`}
        >
          <Icon className="h-6 w-6" />
          <span className="text-gray-600">{label}</span>
        </a>
      ))}
    </div>
  );
}