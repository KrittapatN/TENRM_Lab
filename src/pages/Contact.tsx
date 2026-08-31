import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    setStatusMessage(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatusMessage({ type: 'success', text: t('contact.success_msg') });
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          setStatusMessage({ type: 'error', text: t('contact.error_msg') });
      })
      .finally(() => {
          setIsSending(false);
      });
  };

  return (
    <div className="contact-page container">
      <section>
        <h1>{t('contact.title')}</h1>
        <p className="section-intro">
          {t('contact.intro')}
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <h3>{t('contact.office')}</h3>
              <p>{t('contact.address1')}</p>
              <p>{t('contact.faculty')}</p>
              <p>{t('contact.address2')}</p>
            </div>
            {/* TODO: restore the email and phone info-items once the lab's real contact details are available */}
          </div>

          <div className="contact-form-container">
            <h3>{t('contact.form_title')}</h3>
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="user_name">{t('contact.label_name')}</label>
                <input type="text" id="user_name" name="user_name" placeholder={t('contact.label_name')} required />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">{t('contact.label_email')}</label>
                <input type="email" id="user_email" name="user_email" placeholder={t('contact.label_email')} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contact.label_message')}</label>
                <textarea id="message" name="message" rows={5} placeholder={t('contact.label_message')} required></textarea>
              </div>
              <button type="submit" className="btn btn-submit" disabled={isSending}>
                {isSending ? t('contact.btn_sending') : t('contact.btn_send')}
              </button>
              
              {statusMessage && (
                <div className={`status-alert ${statusMessage.type}`}>
                  {statusMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="map-container">
          <h3>{t('contact.map_title')}</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3875.601540307525!2d100.5299087!3d13.7356713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQ0JzA4LjQiTiAxMDDCsDMxJzQ3LjciRQ!5e0!3m2!1sen!2sth!4v1715653456789!5m2!1sen!2sth" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="TENRM Lab Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
