import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SectionHeader, Button, useToast, WhatsAppIcon } from '../ui';
import { api } from '../../lib/api';
import { Mail, MapPin, Send, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/LanguageContext';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t, data, language, isRTL } = useLanguage();
  const { PERSONAL_INFO } = data;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await api.sendMessage(formData);
      if (response.success) {
        toast({
          type: 'success',
          title: language === 'ar' ? 'تم استلام الرسالة' : 'Transmission Received',
          description: language === 'ar' ? t.contact.successToast : response.message,
        });
        reset();
      } else {
        throw new Error('Message dispatch returned unsuccessful status.');
      }
    } catch (err: any) {
      toast({
        type: 'error',
        title: language === 'ar' ? 'فشل الإرسال' : 'Transmission Failed',
        description: err.message || (language === 'ar' ? 'تعذر إرسال الرسالة، يرجى المحاولة لاحقاً.' : 'Could not dispatch message. Please retry or email directly.'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="09"
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Inboxes & Availability (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-card bg-surface border border-border flex flex-col gap-4">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                {t.contact.directContact}
              </span>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-btn bg-accent/10 border border-accent/20 text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-text-muted uppercase block">
                    {t.contact.emailLabel}
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs sm:text-sm text-text-primary hover:text-accent transition-colors focus-ring"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {PERSONAL_INFO.whatsapp && (
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-btn bg-success/10 border border-success/20 text-success">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-muted uppercase block">
                      WhatsApp Direct
                    </span>
                    <a
                      href={PERSONAL_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs sm:text-sm text-text-primary hover:text-success transition-colors focus-ring"
                    >
                      {language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Message Direct'}
                    </a>
                  </div>
                </div>
              )}

              {PERSONAL_INFO.location && (
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-btn bg-surface-elevated border border-border-strong text-text-secondary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-muted uppercase block">
                      {language === 'ar' ? 'الموقع' : 'Base Station'}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-text-primary">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* SLA / Availability note */}
            <div className="p-5 rounded-card bg-surface-elevated border border-border-strong flex items-start gap-3">
              <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider">
                  {language === 'ar' ? 'اتفاقية مستوى الخدمة (SLA)' : 'Guaranteed Response SLA'}
                </h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  {language === 'ar'
                    ? 'يتم الرد على جميع الاستفسارات المباشرة خلال 24 ساعة كحد أقصى.'
                    : 'Direct inquiries receive a response within 24 hours. For urgent system reviews, ping directly.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Zod validation (7 cols) */}
          <div className="lg:col-span-7 rounded-card bg-surface border border-border p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-1.5"
                  >
                    {t.contact.nameLabel} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    {...register('name')}
                    className={cn(
                      'w-full px-3.5 py-2.5 rounded-sm bg-surface-elevated border font-sans text-sm text-text-primary placeholder:text-text-muted transition-colors',
                      'focus-ring',
                      errors.name ? 'border-error' : 'border-border hover:border-border-strong'
                    )}
                  />
                  {errors.name && (
                    <span className="font-mono text-[11px] text-error mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-1.5"
                  >
                    {t.contact.emailLabel} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    {...register('email')}
                    className={cn(
                      'w-full px-3.5 py-2.5 rounded-sm bg-surface-elevated border font-sans text-sm text-text-primary placeholder:text-text-muted transition-colors',
                      'focus-ring',
                      errors.email ? 'border-error' : 'border-border hover:border-border-strong'
                    )}
                  />
                  {errors.email && (
                    <span className="font-mono text-[11px] text-error mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-1.5"
                >
                  {t.contact.subjectLabel} <span className="text-accent">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder={t.contact.subjectPlaceholder}
                  {...register('subject')}
                  className={cn(
                    'w-full px-3.5 py-2.5 rounded-sm bg-surface-elevated border font-sans text-sm text-text-primary placeholder:text-text-muted transition-colors',
                    'focus-ring',
                    errors.subject ? 'border-error' : 'border-border hover:border-border-strong'
                  )}
                />
                {errors.subject && (
                  <span className="font-mono text-[11px] text-error mt-1 block">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-1.5"
                >
                  {t.contact.messageLabel} <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  {...register('message')}
                  className={cn(
                    'w-full px-3.5 py-2.5 rounded-sm bg-surface-elevated border font-sans text-sm text-text-primary placeholder:text-text-muted transition-colors resize-y',
                    'focus-ring',
                    errors.message ? 'border-error' : 'border-border hover:border-border-strong'
                  )}
                />
                {errors.message && (
                  <span className="font-mono text-[11px] text-error mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  isLoading={isSubmitting}
                  rightIcon={<Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />}
                  className="w-full font-mono text-xs uppercase tracking-wider font-semibold"
                >
                  {isSubmitting ? t.contact.sending : t.contact.sendButton}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
