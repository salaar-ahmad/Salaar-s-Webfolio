"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { EMAIL, PHONE, PHONE_TEL, UPWORK_URL } from "@/data/site";
import { Book, ArrowRight } from "./Chrome";
import { Chips } from "./Interactive";

const TOPICS = ["ERP rollout", "Power Platform", "ClickUp workspace", "Automation", "Full-time role", "Something else"];

// Last section of the homepage: book a call, or send a message.
export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "", budget: "" });
  const [status, setStatus] = useState({ sending: false, ok: null });
  const [topic, setTopic] = useState("");
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null });
    emailjs.send("service_hg67o1y", "template_ri9jval", {
      from_name: form.name,
      from_email: form.email,
      message: (topic ? `Topic: ${topic}\n\n` : "") + form.message + (form.budget ? `\n\nBudget: ${form.budget}` : ""),
      to_email: EMAIL,
    }, "4McJnW1UwEbWA2DvM")
      .then(() => { setStatus({ sending: false, ok: true }); setForm({ name: "", email: "", message: "", budget: "" }); })
      .catch((err) => {
        // EmailJS returns the reason in err.text, e.g. "Gmail_API: Invalid grant. Please reconnect your Gmail account".
        console.error("Contact form: EmailJS send failed", err?.status, err?.text || err);
        setStatus({ sending: false, ok: false });
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap contact-in">
        <div className="contact-talk">
          <h2>Got a rollout that keeps slipping?</h2>
          <p className="lead">Booking calls for new projects. The button opens my calendar: pick a 30-minute slot and we go through your systems and your dates. Or send the details with the form.</p>
          <Book className="btn btn-exit">Book a 30-minute call<ArrowRight /></Book>
          <div className="contact-list">
            <a href={`mailto:${EMAIL}`}><FiMail aria-hidden="true" />{EMAIL}</a>
            <a href={`tel:${PHONE_TEL}`}><FiPhone aria-hidden="true" />{PHONE}</a>
            <a href="https://linkedin.com/in/salaarahmadfurqan" target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true" />LinkedIn</a>
            <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer"><SiUpwork aria-hidden="true" />Upwork</a>
          </div>
        </div>
        <form className="form tile" onSubmit={onSubmit}>
          <h3>Send a message</h3>
          <p className="sec-intro">Pick what it is about and fill in the details. It lands in my inbox and I reply by email.</p>
          <div className="field"><span className="field-label">What is it about?</span><Chips label="What is it about?" value={topic} onChange={(t) => setTopic(topic === t ? "" : t)} options={TOPICS.map((t) => ({ id: t, label: t }))} /></div>
          <div className="field-row">
            <div className="field"><label htmlFor="c-name">Your name</label><input id="c-name" name="name" value={form.name} onChange={onChange} autoComplete="name" required /></div>
            <div className="field"><label htmlFor="c-email">Your email</label><input id="c-email" type="email" name="email" value={form.email} onChange={onChange} autoComplete="email" required /></div>
          </div>
          <div className="field"><label htmlFor="c-message">Project details</label><textarea id="c-message" name="message" rows={4} value={form.message} onChange={onChange} placeholder="Goals, requirements and timeline" required /></div>
          <div className="field"><label htmlFor="c-budget">Project budget (optional)</label><input id="c-budget" name="budget" value={form.budget} onChange={onChange} placeholder="USD" /></div>
          <div className="actions">
            <button type="submit" className="btn btn-ink" disabled={status.sending}>{status.sending ? "Sending" : "Send message"}<ArrowRight /></button>
          </div>
          <p role="status" aria-live="polite">
            {status.ok === true && <span className="status ok">Message sent. I&apos;ll reply by email.</span>}
            {status.ok === false && <span className="status bad">The message did not send. Try again, or email {EMAIL} directly.</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
