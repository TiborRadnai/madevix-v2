export const myStructure = (S: any) =>
  S.list()
    .title('Madevix Content')
    .items([
      S.listItem()
        .title('Projekte & Referenzen')
        .child(
          S.documentTypeList('project').title('Projekte')
        ),
      // Ide jöhetnek majd a jövőbeni menüpontok (pl. Szolgáltatások)
    ]);