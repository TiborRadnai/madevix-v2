Madevix 2.0 - Project Structure
Alapelvek

    Minden mappa és fájl neve angol.
    Nem hozunk létre üres route-okat.
    Nem hozunk létre üres komponenseket.
    Mindent akkor készítünk el, amikor ténylegesen használni kezdjük.
    A dokumentáció megelőzi a fejlesztést.
    A struktúrát először dokumentáljuk, utána implementáljuk.


-----------------Tervezett struktúra-----------------

src

├─ app
├─ core  
├─ features 
├─ home 
└─ subpages 
├─ schemas  
├─ lib  
├─ services  
├─ hooks  
├─ types  
├─ constants 
└─ styles


-----------------Core-----------------

Globális komponensek.

Példák:

    Navbar
    Footer
    Back To Top
    Scroll Progress
    Providers
    Layout elemek


-----------------Features-----------------

Oldalspecifikus komponensek.
Home

A főoldal összes komponense.

Példák:

    Hero
    Featured Projects
    Services Preview
    Why Madevix
    Contact CTA

-----------------Subpages-----------------

Az aloldalak komponensei.

Példák:

Subpages 
├─ services 
├─ projects 
├─ contact 
└─ legal

A későbbi aloldalak saját mappát kapnak.


-----------------Schemas-----------------

Sanity schema fájlok.

Példák:

    project
    service
    seo
    settings


-----------------Lib-----------------

Közös segédfüggvények.

Példák:

    sanity client
    metadata helpers
    utility functions


-----------------Services-----------------

Külső szolgáltatások integrációi.

Példák:

    sanity
    email service


-----------------Types-----------------

TypeScript típusok.
Constants

Konstansok.

Példák:

    navigation
    routes
    seo defaults


-----------------Styles-----------------

Globális stílusok.

Példák:

    globals.css


-----------------Alias stratégia-----------------

Példák:

@/core @/features @/schemas @/lib @/services @/types @/constants
Relatív importok kerülendők.