import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const initialFormState = {
	name: "",
	email: "",
	phone: "",
	interest: "",
	message: "",
};

const ContactSection = () => {
	const [form, setForm] = useState(initialFormState);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const subject = encodeURIComponent(
			`Beryllium Greens Inquiry${form.interest ? ` — ${form.interest}` : ""}`,
		);

		const body = encodeURIComponent(
			`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nInterest: ${form.interest || "—"}\n\nMessage:\n${form.message}`,
		);

		window.location.href = `mailto:info@berylliumgreens.com?subject=${subject}&body=${body}`;
	};

	return (
		<SectionWrapper id="contact" className="bg-gradient-earth">
			<div className="text-center mb-14">
				<p className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-2">
					Contact Us
				</p>
				<h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
					Let's Grow Together
				</h2>
				<p className="font-body text-muted-foreground max-w-xl mx-auto">
					Interested in investing, partnering, or learning more? We'd love to
					hear from you.
				</p>
			</div>

			<div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
				{/* Info */}
				<div className="lg:col-span-2 space-y-6">
					<div className="flex gap-4 items-start">
						<div className="w-10 h-10 rounded-lg bg-gradient-green flex items-center justify-center text-primary-foreground flex-shrink-0">
							<Mail size={18} />
						</div>
						<div>
							<p className="font-body text-sm font-semibold text-foreground">Email</p>
							<a
								href="mailto:info@berylliumgreens.com"
								className="font-body text-sm text-primary hover:underline"
							>
								info@berylliumgreens.com
							</a>
						</div>
					</div>
					<div className="flex gap-4 items-start">
						<div className="w-10 h-10 rounded-lg bg-gradient-green flex items-center justify-center text-primary-foreground flex-shrink-0">
							<MapPin size={18} />
						</div>
						<div>
							<p className="font-body text-sm font-semibold text-foreground">Location</p>
							<p className="font-body text-sm text-muted-foreground">Near Prescott, Arizona</p>
						</div>
					</div>
					<div className="flex gap-4 items-start">
						<div className="w-10 h-10 rounded-lg bg-gradient-green flex items-center justify-center text-primary-foreground flex-shrink-0">
							<Phone size={18} />
						</div>
						<div>
							<p className="font-body text-sm font-semibold text-foreground">By Appointment</p>
							<p className="font-body text-sm text-muted-foreground">
								Reach out via the form to schedule a call.
							</p>
						</div>
					</div>
				</div>

				{/* Form */}
				<form
					onSubmit={handleSubmit}
					className="lg:col-span-3 bg-background rounded-xl p-6 md:p-8 shadow-card border border-border space-y-5"
				>
					<div className="grid sm:grid-cols-2 gap-4">
						<div>
							<label className="block font-body text-xs font-semibold text-foreground mb-1.5">
								Name *
							</label>
							<input
								type="text"
								value={form.name}
								onChange={(e) => setForm({ ...form, name: e.target.value })}
								maxLength={100}
								className="w-full border border-input rounded-lg px-4 py-2.5 font-body text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
								required
							/>
						</div>
						<div>
							<label className="block font-body text-xs font-semibold text-foreground mb-1.5">
								Email *
							</label>
							<input
								type="email"
								value={form.email}
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								maxLength={255}
								className="w-full border border-input rounded-lg px-4 py-2.5 font-body text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
								required
							/>
						</div>
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						<div>
							<label className="block font-body text-xs font-semibold text-foreground mb-1.5">
								Phone
							</label>
							<input
								type="tel"
								value={form.phone}
								onChange={(e) => setForm({ ...form, phone: e.target.value })}
								maxLength={20}
								className="w-full border border-input rounded-lg px-4 py-2.5 font-body text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
							/>
						</div>
						<div>
							<label className="block font-body text-xs font-semibold text-foreground mb-1.5">
								Interest
							</label>
							<select
								value={form.interest}
								onChange={(e) => setForm({ ...form, interest: e.target.value })}
								className="w-full border border-input rounded-lg px-4 py-2.5 font-body text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
							>
								<option value="">Select an option</option>
								<option value="Investment">Investment Opportunity</option>
								<option value="Partnership">Partnership</option>
								<option value="Agritourism">Agritourism / Lodging</option>
								<option value="General">General Inquiry</option>
							</select>
						</div>
					</div>
					<div>
						<label className="block font-body text-xs font-semibold text-foreground mb-1.5">
							Message *
						</label>
						<textarea
							value={form.message}
							onChange={(e) => setForm({ ...form, message: e.target.value })}
							rows={4}
							maxLength={1000}
							className="w-full border border-input rounded-lg px-4 py-2.5 font-body text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none resize-none"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-gradient-green text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
					>
						Send Message
					</button>
				</form>
			</div>
		</SectionWrapper>
	);
};

export default ContactSection;
