export const project = {
  name: 'project',
  title: 'Projekte & Referenzen',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Projekttitel',
      type: 'string',
      // eslint-disable-path-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug (z.B. madeirise)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      // eslint-disable-path-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategorie (z.B. Travel Platform)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
    },
    {
      name: 'domain',
      title: 'Live Domain (z.B. madeirise.com)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Browser Mockup Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Reihenfolge (Sortierung)',
      type: 'number',
    },
    {
      name: 'featured',
      title: 'Als Fokus-Projekt (Címlapsztori) markieren',
      type: 'boolean',
      description: 'Aktivieren, um dieses Projekt als Haupt-Fokus ganz oben im Magazin-Stil anzuzeigen.',
    },
    {
      name: 'challenge',
      title: 'Challenge / Ziel',
      type: 'text',
      description: 'Was war die Herausforderung oder das Ziel bei diesem Projekt?',
    },
    {
      name: 'solution',
      title: 'Solution / Lösung',
      type: 'text',
      description: 'Wie wurde es technisch oder konzeptionell gelöst?',
    },
    {
      name: 'outcome',
      title: 'Outcome / Ergebnis',
      type: 'text',
      description: 'Was war das messbare Ergebnis oder der langfristige Nutzen?',
    },
  ],
};