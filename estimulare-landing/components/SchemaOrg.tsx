export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Clínica Estimulare",
          "image": "https://clinicaestimulare.com.br/og-image.jpg",
          "description": "Clínica Multidisciplinar em Xanxerê SC com equipe especializada em Neuropediatria, Fisioterapia, TO, Fonoaudiologia, Nutrição e Psicologia",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Joinville, 265",
            "addressLocality": "Xanxerê",
            "addressRegion": "SC",
            "postalCode": "89820-000",
            "addressCountry": "BR"
          },
          "telephone": "+55-49-8-8982-0000",
          "url": "https://clinicaestimulare.com.br",
          "sameAs": [
            "https://instagram.com/clinicaestimulare",
            "https://linktr.ee/clinicaestimulare"
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "12:00"
            }
          ],
          "priceRange": "$$",
          "medicalSpecialty": [
            "Neuropediatria",
            "Fisioterapia",
            "Terapia Ocupacional",
            "Fonoaudiologia",
            "Nutrição",
            "Psicologia"
          ]
        })
      }}
    />
  )
}
