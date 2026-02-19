# G7-Modern-Store
Projekt: Modern store
Grupp: Grupp 7
Datum: 2026-02-19


1. Syfte

Syftet med detta kontrakt är att säkerställa:
• En gemensam och konsekvent struktur för versionshantering
• Minskad risk för merge-konflikter
• Tydlig spårbarhet av förändringar
• Professionell arbetsprocess motsvarande branschstandard

Alla gruppmedlemmar förbinder sig att följa detta dokument.


2. Verktyg

• Versionshanteringssystem: Git
• Repository-plattform: Github
• Kommunikationskanal vid konflikter: Teams


3. Branch-struktur

Vi använder följande branch-struktur:
• main – Produktionsklar kod
• dev – Integrationsbranch
• feature/* – Nya funktioner
• bugfix/* – Buggfixar
• hotfix/* – Akuta fixar mot produktion
Lägg till #number för den issue du arbetar mot i din commit

Regler:
• Direkt push till main är inte tillåten
• All kod ska gå via Pull Request
• main ska alltid vara stabil och körbar
• dev ska alltid vara byggbar


4. Namngivningsstandard

Branch-namn

Format:

feature/kort-beskrivning
bugfix/kort-beskrivning

Exempel:
feature/login-system
bugfix/nullpointer-check
Commit-meddelanden

Format:

Typ: Kort beskrivning i imperativ form

Exempel:

Add: Implement login validation
Fix: Handle null pointer in UserService
Refactor: Simplify authentication logic
Docs: Update README

Commits ska:
• Vara små och fokuserade
• Ha tydliga och beskrivande meddelanden
• Inte innehålla irrelevant kod

---

5. Pull Requests

Alla ändringar ska:
• Skapas via Pull Request

• Ha en beskrivning av:
  • Vad som har gjorts
  • Varför det gjordes
  • Eventuella kända begränsningar*
  • Granskas av minst en annan gruppmedlem
  • Vara godkända innan merge

Ingen får godkänna sin egen Pull Request.


6. Kodgranskning (Code Review)

Vid granskning ska följande kontrolleras:
• Kodens läsbarhet
• Struktur och arkitektur
• Namngivning
• Testbarhet
• Att inga känsliga uppgifter checkas in
• Att koden följer projektets kodstandard

Feedback ska vara:
  • Saklig
  • Respektfull - Exempel: Börja med något bra i koden och sen lyfta fram förbättringsområden
  • Lösningsorienterad


8. Hantering av konflikter

Vid merge-konflikt:
1. Den som mergar ansvarar för att lösa konflikten.
2. Osäkerhet diskuteras i gruppen innan lösning.
3. Ingen “force push” utan gruppens godkännande.

8. Tests och byggbar kod
• Kod får inte mergas om projektet inte bygger.
• Tester ska köras innan push.
• Nya funktioner ska, om möjligt, inkludera tester.
- För att testa en pull request så laddar man ner den branchen lokalt på sin dator och validerar.


10. Ansvar

Varje medlem ansvarar för att:
• Hålla sin branch uppdaterad
• Pusha regelbundet
• Kommunicera om större förändringar
• Inte arbeta direkt i main


10. Brott mot överenskommelsen

Om kontraktet inte följs:
1. Gruppen diskuterar situationen.
2. Åtgärder beslutas gemensamt.
3. Upprepade överträdelser dokumenteras.


11. Signaturer

Genom att skriva under godkänner vi att följa detta kontrakt.

Namn Signatur Datum

Victor 2026-02-19
Thomas 2026-02-19
Mattias 2026-02-19
Danial 2026-02-19