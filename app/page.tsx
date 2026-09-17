import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/ServiceSection";
import Team from "@/components/Team";
import Treatments from "@/components/Treatments";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Treatments />

        <ServiceSection
          id="nutricion"
          tone="cream"
          title="Nutrición"
          imagePosition="right"
          imageAlt="Consulta de nutrición en Nutrika"
          ctaLabel="Pedir cita de nutrición"
          paragraphs={[
            "En consulta de nutrición trabajamos la obesidad, las intolerancias alimentarias y el equilibrio de tu microbiota intestinal y de la piel.",
            "Diseñamos un plan a tu medida, sin dietas genéricas ni promesas imposibles, para que los cambios se noten y se mantengan en el tiempo.",
          ]}
          specialist={{
            name: "Alicia Garralón Domínguez",
            role: "Nutricionista especializada en microbiota de la piel y obesidad",
          }}
        />

        <ServiceSection
          id="psicologia"
          tone="white"
          title="Psicología"
          imagePosition="left"
          imageAlt="Consulta de psicología en Nutrika"
          ctaLabel="Pedir cita de psicología"
          paragraphs={[
            "Te acompañamos en el cambio de hábitos y en cómo te relacionas con la comida y con tu cuerpo.",
            "Todo en un lenguaje sencillo y cercano, sin jerga clínica, a tu ritmo.",
          ]}
        />

        <ServiceSection
          id="acupuntura"
          tone="cream"
          title="Acupuntura"
          imagePosition="right"
          imageAlt="Sesión de acupuntura en Nutrika"
          ctaLabel="Pedir cita de acupuntura"
          paragraphs={[
            "La acupuntura te ayuda a recuperar el equilibrio y el bienestar general, como apoyo a tu proceso de nutrición.",
            "Una terapia complementaria pensada para acompañar tu salud de forma natural.",
          ]}
        />

        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
