import SectionWrapper from "./SectionWrapper";
import InfoCard from "./InfoCard";
import { Sprout, Sun, Tent, ShoppingBasket, GraduationCap, Heart } from "lucide-react";

const cards = [
  {
    icon: <Sprout size={22} />,
    title: "Hydroponic Agriculture",
    summary: "5,000 sq ft greenhouse with 200 aeroponic towers producing year-round leafy greens, herbs, and microgreens.",
    detail: "Our solar-powered hydroponic greenhouse uses cutting-edge aeroponic tower technology from industry leaders like Agrotonomy and Tower Farms. This controlled-environment agriculture system produces lettuce, kale, spinach, herbs, and microgreens 365 days a year — eliminating seasonal limitations and maximizing yield per square foot.\n\nThe system uses 90% less water than traditional farming while producing significantly higher yields, making it both environmentally sustainable and economically efficient.",
  },
  {
    icon: <Tent size={22} />,
    title: "Agritourism Lodging",
    summary: "20 RV sites and 10 geodesic glamping domes with premium amenities including pool, hot tubs, and clubhouse.",
    detail: "Beryllium Greens features a fully equipped 20-site RV park and 10 luxury geodesic glamping domes, creating a premium agritourism destination. Guests enjoy a swimming pool, hot tubs, community clubhouse, walking trails, and an outdoor pavilion.\n\nThe glamping domes alone are projected to generate $900,000 in Year 5 revenue, representing our highest-margin revenue stream. Combined with the RV park ($320,000), lodging accounts for over 50% of total revenue.",
  },
  {
    icon: <ShoppingBasket size={22} />,
    title: "Farm Market & Direct Sales",
    summary: "On-site farm market, CSA subscriptions, and presence at Prescott-area farmers markets.",
    detail: "Our direct-to-consumer strategy includes an on-site farm market, Community Supported Agriculture (CSA) subscription boxes, and vendor booths at Prescott's popular farmers markets. Demand for local organic produce consistently exceeds supply in the Prescott region.\n\nFarm production and market sales are projected at $400,000 and $300,000 respectively by Year 5, providing stable, recurring revenue independent of tourism cycles.",
  },
  {
    icon: <Sun size={22} />,
    title: "Solar-Powered Operations",
    summary: "On-site solar arrays reduce energy costs and power the greenhouse, creating long-term operational savings.",
    detail: "Strategically placed solar arrays power the hydroponic greenhouse and common facilities, dramatically reducing operating costs and energy volatility. Arizona's 300+ days of sunshine make solar an ideal energy source.\n\nThis renewable infrastructure not only reduces expenses but also qualifies the project for federal and state clean energy incentives, further improving the financial model.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Education & Events",
    summary: "Workshops on sustainable agriculture, wellness retreats, and event hosting including weddings.",
    detail: "The farm features a dedicated education pavilion hosting workshops on sustainable agriculture, healthy living, and environmental stewardship. The outdoor pavilion and scenic grounds serve as venues for weddings, retreats, and corporate events.\n\nEvents and retreats are projected to generate $250,000 annually by Year 5, while also building community relationships and strengthening the brand.",
  },
  {
    icon: <Heart size={22} />,
    title: "Community & Wellness",
    summary: "Faith-centered health outreach rooted in principles of holistic wellness and sustainable living.",
    detail: "Beryllium Greens is grounded in principles of holistic wellness — nurturing body, mind, and spirit. Our wellness programs, healthy cooking classes, and community outreach create meaningful connections with health-conscious consumers and values-driven visitors.\n\nThis community focus positions the project for grants, tax incentives, and partnerships while building a loyal customer base that extends well beyond tourism.",
  },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="text-center mb-14">
      <p className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-2">
        Executive Summary
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
        The Vision
      </h2>
      <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Beryllium Greens is a 36-acre vertically integrated agricultural and agritourism
        enterprise near Prescott, Arizona — combining hydroponic farming, premium lodging,
        direct food sales, and community education into a single multi-revenue ecosystem.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((c) => (
        <InfoCard key={c.title} {...c} />
      ))}
    </div>
  </SectionWrapper>
);

export default AboutSection;
