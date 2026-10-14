export const project = {
  name: 'project',
  title: 'Projekte & Referenzen',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Projekttitel',
      type: 'string',
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
  ],
};