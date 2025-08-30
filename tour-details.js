// Tour Details page (scoped)
(function () {
  const TOURS = [
    {
      slug: "Kurzreise-Höhepunkte",
      title: "Sri Lanka 5-Tage Kurzreise – Höhepunkte",
      hero: "images/ChatGPT Image Aug 27, 2025, 08_17_15 AM.png",
      locations: "Kandy, Sigiriya, Dambulla, Negombo, Polonnaruwa, Peradeniya, Bentota ",
      summary:
        "Alte Städte, heilige Tempel und üppige Teeplantagen – eine perfekte Reise, die Kultur, Geschichte und natürliche Schönheit vereint.",
      badges: ["5 Tage /4 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen → Negombo", detail: "Ankunft in Sri Lanka und Begrüßung durch Ihren freundlichen Chauffeur-Reiseleiter am Flughafen. Je nach Ankunftszeit erfolgt der Transfer nach Sigiriya oder Negombo zum Check-in im Hotel. Entspannen Sie sich und sammeln Sie neue Energie für das bevorstehende Abenteuer. Übernachtung in einem 2- bis 3-Sterne-Hotel in Sigiriya oder Negombo." },
        { title: "Tag 2: Negombo → Sigiriya", detail: "Verlassen Sie Negombo und fahren Sie ins Landesinnere nach Sigiriya, dem kulturellen Herzen des sogenannten Kulturellen Dreiecks Sri Lankas. Nach Ihrer Ankunft checken Sie im Hotel ein und haben Zeit zur freien Verfügung, um sich zu entspannen oder die Umgebung in Ihrem eigenen Tempo zu erkunden. Übernachtung in einem 2- bis 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 3: Sigiriya → Polonnaruwa → Sigiriya", detail: "Heute reisen Sie in die Vergangenheit bei einem geführten Besuch in Polonnaruwa, der mittelalterlichen Hauptstadt Sri Lankas. Erkunden Sie die beeindruckenden Ruinen von Palästen, Schreinen und die berühmten Gal-Vihara-Statuen. Am Abend kehren Sie nach Sigiriya zurück und genießen Sie Ruhe und Erholung. Übernachtung in einem 2- bis 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 4: Sigiriya → Dambulla → Kandy", detail: "Nach dem Frühstück geht es weiter in Richtung Kandy. Unterwegs besuchen Sie den faszinierenden Dambulla-Höhlentempel, ein UNESCO-Weltkulturerbe, bekannt für seine kunstvollen Wandmalereien und Buddha-Statuen. In Kandy angekommen, besichtigen Sie den heiligen Zahntempel und unternehmen eine Stadtrundfahrt, bei der Sie den besonderen Charme der alten Königsstadt erleben. Übernachtung in einem 2- bis 3-Sterne-Hotel in Kandy." },
        { title: "Tag 5: Kandy → Peradeniya → Teeplantage und Teefabrik → Bentota Beach oder Flughafen", detail: "Beginnen Sie den letzten Tag mit einem Spaziergang durch den Botanischen Garten von Peradeniya, der mit tausenden exotischen Pflanzenarten beeindruckt. Anschließend fahren Sie ins Hochland und besuchen eine Teeplantage und -fabrik, wo Sie mehr über das berühmte Ceylon-Teehandwerk erfahren. Am Nachmittag geht es weiter an den Bentota-Strand – genießen Sie die goldenen Sandstrände und die frische Meeresbrise. Danach Transfer zum Flughafen für Ihren Abflug." },
        
      ],
      includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
      excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
      Travel_Period: ["01.10.2025 bis 30.04.2026"],
          pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 850"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 1360"
       }
     ],
    },

    {
      slug: "6-Tage-Höhepunkte-Tour",
      title: "Sri Lanka – 6-Tage-Höhepunkte-Tour",
      hero: "images/ChatGPT Image Aug 27, 2025, 09_02_10 AM.png",
      locations: "Negombo, Udawalawe, Ella, Nuwara Eliya, Kandy, Dambulla, sigiriya, Bentota",
      summary: "Heilige Städte, sanfte Teehügel und eine atemberaubende Tierwelt – erleben Sie die Essenz Sri Lankas in nur sechs unvergesslichen Tagen.",
      badges: ["6 Tage /5 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen Colombo → Negombo", detail: "Willkommen in Sri Lanka! Am Flughafen werden Sie von Ihrem Chauffeur-Reiseleiter begrüßt und nach Negombo gebracht – ein lebhaftes Fischerdorf an der Westküste. Entspannen Sie sich im Hotel oder unternehmen Sie einen Spaziergang am Strand, um die ersten Eindrücke des Insellebens zu genießen. Übernachtung in einem 2- bis 3-Sterne-Hotel in Negombo." },
        { title: "Tag 2: Negombo → Sigiriya", detail: "Fahren Sie landeinwärts zum kulturellen Herzen Sri Lankas: Sigiriya. Nach dem Check-in im Hotel haben Sie Zeit zum Entspannen oder um die Umgebung zu erkunden. Morgen erwarten Sie weitere Highlights des Kulturdreiecks. Übernachtung in einem 2- bis 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 3: Sigiriya → Dambulla → Kandy", detail: "Starten Sie den Tag mit einem Besuch des weltberühmten Dambulla-Höhlentempels – ein UNESCO-Weltkulturerbe mit beeindruckenden Wandmalereien und alten Buddha-Statuen. Anschließend Weiterfahrt nach Kandy, der letzten Königsstadt Sri Lankas. Dort besichtigen Sie den heiligen Zahntempel und erleben den kulturellen Charme der Stadt. Übernachtung in einem 2- bis 3-Sterne-Hotel in Kandy." },
        { title: "Tag 4: Kandy → Nuwara Eliya", detail: "Heute führt Sie die Reise ins grüne Hochland Sri Lankas. Nach einem Zwischenstopp im Botanischen Garten von Peradeniya geht es weiter nach Nuwara Eliya – auch bekannt als „Little England“. Erkunden Sie Teeplantagen, koloniale Architektur und die nebelverhangenen Landschaften dieser bezaubernden Stadt. Übernachtung in einem 2- bis 3-Sterne-Hotel in Nuwara Eliya." },
        { title: "Tag 5: Nuwara Eliya → Ella", detail: "Ihre Reise führt Sie durch einige der malerischsten Landschaften Sri Lankas nach Ella – ein beliebter Ort im Hochland, bekannt für seine Aussichtspunkte, Wasserfälle und entspannte Atmosphäre. Genießen Sie die wunderschöne Strecke und einen ruhigen Abend in Ella. Übernachtung in einem 2- bis 3-Sterne-Hotel in Ella." },
        { title: "Tag 6: Ella → Udawalawe → Bentota oder Strand", detail: "Der Tag beginnt mit einem spannenden Besuch im Udawalawe-Nationalpark, wo Sie Elefanten und andere Wildtiere in freier Natur beobachten können. Danach fahren Sie weiter an die Südküste, z. B. nach Bentota oder in ein anderes Strandresort. Am späten Nachmittag oder Abend Transfer zum Flughafen für Ihre Heimreise." }
      ],
      includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
      excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
      Travel_Period: ["01.11.2025 bis 30.04.2026"],
             pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 950"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 1500"
       }
      ],
    
    },

    {
      slug: "6-Tage-Rundreise",
      title: "Sri Lanka Hotspots – 6-Tage-Rundreise",
      hero: "images/ChatGPT Image Aug 27, 2025, 08_50_02 AM.png",
      locations: "Kandy, Sigiriya, Dambulla, Negombo, Polonnaruwa, Ella, Bentota, Nuwara Eliya",
      summary: "Von antiken Wundern über neblige Berge bis hin zu goldenen Stränden – entdecken Sie Sri Lankas berühmteste Highlights auf einer unvergesslichen Reise.",
      badges: ["6 Tage /5 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen Colombo → Negombo", detail: "Ankunft am Flughafen Colombo, wo Sie herzlich von Ihrem Chauffeur-Reiseleiter begrüßt werden. Anschließend Transfer nach Negombo, eine lebhafte Küstenstadt, die für ihre Sandstrände und koloniale Vergangenheit bekannt ist. Erholen Sie sich nach dem Flug und genießen Sie die tropische Atmosphäre. Übernachtung in einem 2- bis 3-Sterne-Hotel in Negombo." },
        { title: "Tag 2: Negombo → Sigiriya", detail: "Heute fahren Sie ins Landesinnere, in das Herz des kulturellen Dreiecks Sri Lankas – nach Sigiriya. Nach dem Check-in im Hotel können Sie sich entspannen oder einen gemütlichen Spaziergang durch die Umgebung unternehmen. Morgen erwartet Sie das UNESCO-Weltkulturerbe mit weiteren Abenteuern. Übernachtung in einem 2- bis 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 3: Sigiriya → Polonnaruwa → Minneriya Safari → Sigiriya", detail: "Begeben Sie sich auf eine Zeitreise in die Vergangenheit mit einem Besuch in Polonnaruwa, der mittelalterlichen Hauptstadt mit beeindruckenden Tempeln, Schreinen und den berühmten Felsstatuen von Gal Vihara. Am Nachmittag geht es weiter zum Minneriya-Nationalpark, wo Sie bei einer aufregenden Safari Elefantenherden und viele weitere Wildtiere beobachten können. Rückfahrt nach Sigiriya am Abend. Übernachtung in einem 2- bis 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 4: Sigiriya → Dambulla → Kandy", detail: "Der Tag beginnt mit einem Besuch des berühmten Dambulla-Höhlentempels, der mit jahrhundertealten Wandmalereien und Buddha-Statuen geschmückt ist. Danach Weiterfahrt nach Kandy – die letzte Königsstadt Sri Lankas. Am Nachmittag besichtigen Sie die wichtigsten Sehenswürdigkeiten der Stadt, darunter den heiligen Zahntempel. Übernachtung in einem 2- bis 3-Sterne-Hotel in Kandy." },
        { title: "Tag 5: Kandy → Nuwara Eliya → Ella", detail: "Nach dem Frühstück führt die Reise weiter ins kühle Hochland von Nuwara Eliya – bekannt als „Little England“ aufgrund seines kolonialen Charmes. Besuchen Sie eine Teeplantage und -fabrik und erfahren Sie mehr über die Herstellung des weltberühmten Ceylon-Tees. Danach Weiterfahrt durch atemberaubende Landschaften in das malerische Bergdorf Ella. Übernachtung in einem 2- bis 3-Sterne-Hotel in Ella" },
        { title: "Tag 6: Ella → Strand oder Bentota", detail: "Genießen Sie ein letztes Mal die Schönheit von Ella, bevor es hinab an die Südküste Sri Lankas geht. Je nach Wunsch entspannen Sie an einem südlichen Strand oder in Bentota. Anschließend Transfer zum Flughafen für Ihre Heimreise – mit unvergesslichen Erinnerungen im Gepäck." }

      ],
      includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
      excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
      Travel_Period: ["01.10.2025 bis 30.04.2026"],
             pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 950"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 1450"
       }
      ],
    },

    {
      slug: "Aktivreise Sri Lanka",
      title: "6 Tage – Aktivreise Sri Lanka",
      hero: "images/ChatGPT Image Aug 27, 2025, 08_36_33 AM.png",
      locations: "Ella, Nuwara Eliya, Horton Plains, Kandy, Peradeniya, Dambulla, Pidurangala, Bentota",
      summary: "Erklimmen Sie alte Festungen, wandern Sie durch nebliges Hochland und erkunden Sie die lebendige Tierwelt – das perfekte Abenteuer für aktive Reisende in Sri Lanka.",
      badges: ["6 Tage /5 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen Colombo → Sigiriya", detail: "Ankunft am Flughafen Colombo und Begrüßung durch Ihren Chauffeur-Reiseleiter. Ihre Reise beginnt direkt im kulturellen Dreieck mit dem Transfer nach Sigiriya. Nach dem Check-in im Hotel genießen Sie einen entspannten Abend, umgeben von Natur und Geschichte. Übernachtung in einem 2- bis 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 2: Sigiriya → Pidurangala → Minneriya → Sigiriya", detail: "Heute beginnen Sie den Tag mit einer Wanderung auf den Pidurangala-Felsen – eine weniger bekannte, aber ebenso beeindruckende Alternative zum Sigiriya-Felsen. Vom Gipfel genießen Sie einen atemberaubenden Panoramablick, inklusive Aussicht auf die Felsenfestung von Sigiriya. Am Nachmittag erwartet Sie ein unvergessliches Safari-Erlebnis im Minneriya-Nationalpark, wo große Elefantenherden und viele andere Wildtiere in ihrer natürlichen Umgebung zu beobachten sind. Rückkehr nach Sigiriya am Abend. Übernachtung in einem 2- bis 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 3: Sigiriya → Dambulla → Kandy", detail: "Nach dem Frühstück besuchen Sie den weltberühmten Dambulla-Höhlentempel – ein UNESCO-Weltkulturerbe mit lebendigen Wandmalereien und zahlreichen Buddha-Statuen. Anschließend Weiterfahrt nach Kandy, der kulturellen Hauptstadt im Hochland. Dort besichtigen Sie den heiligen Zahntempel und entdecken den besonderen Charme dieser alten Königsstadt. Übernachtung in einem 2- bis 3-Sterne-Hotel in Kandy." },
        { title: "Tag 4: Kandy → Peradeniya → Nuwara Eliya", detail: "Der Tag beginnt mit einem Spaziergang durch den königlichen Botanischen Garten von Peradeniya, berühmt für seine Orchideen und exotischen Pflanzenarten. Danach reisen Sie weiter ins Hochland nach Nuwara Eliya – auch bekannt als „Little England“. Freuen Sie sich auf ein kühles Klima, Teeplantagen und kolonialen Charme. Übernachtung in einem 2- bis 3-Sterne-Hotel in Nuwara Eliya." },
        { title: "Tag 5: Nuwara Eliya → Horton Plains → Ella", detail: "Früh am Morgen geht es zu einer Wanderung im Horton-Plains-Nationalpark. Ein Höhepunkt ist der Aussichtspunkt „World’s End“ – eine steil abfallende Klippe mit atemberaubendem Ausblick. Danach Weiterfahrt in das entspannte Bergdorf Ella, das von herrlicher Landschaft umgeben ist. Übernachtung in einem 2- bis 3-Sterne-Hotel in Ella." },
        { title: "Tag 6: Ella → Strand oder Bentota", detail: "Zum Abschluss Ihrer Reise genießen Sie eine landschaftlich reizvolle Fahrt von den Bergen hinunter an die Südküste. Entspannen Sie an den goldenen Stränden von Bentota oder einem anderen Badeort, bevor es zum Flughafen für Ihre Heimreise geht." }
      ],
     includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
     excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
     Travel_Period: ["01.11.2025 bis 30.04.2026"],
             pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 900"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 1600"
       }
      ],
    },

    {
      slug: "Sri Lanka Soft Nature Tour",
      title: "8 Tage – Sri Lanka Soft Nature Tour",
      hero: "images/ChatGPT Image Aug 27, 2025, 08_42_45 AM.png",
      locations: "Udawalawe, Sigiriya, Bentota, Singharaja Forest, Yala, Tissa, Ella, Nuwara Eliya, Hortan Plains, Dambulla, Kandy",
      summary: "Von üppigen Regenwäldern und aufregenden Safaris bis hin zu nebligen Bergen und goldenen Stränden – tauchen Sie ein in die sanfte Seite der Natur und Kultur Sri Lankas.",
      badges: ["8 Tage /7 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen Colombo → Bentota", detail: "Willkommen in Sri Lanka! Am Flughafen werden Sie von Ihrem Chauffeur-Reiseleiter empfangen. Anschließend fahren Sie entlang der malerischen Westküste nach Bentota, wo Sie palmengesäumte Strände und entspannte Urlaubsatmosphäre erwarten. Der Abend steht Ihnen zur freien Verfügung – ideal zum Ausruhen am Meer. Übernachtung in einem 2- bis 3-Sterne-Hotel in Bentota" },
        { title: "Tag 2: Bentota → Sinharaja-Regenwald", detail: "Heute führt Sie die Reise in das grüne Herz des Sinharaja-Regenwaldes – ein UNESCO-Weltnaturerbe und das letzte intakte tropische Regenwaldgebiet der Insel. Unternehmen Sie eine geführte Wanderung und entdecken Sie die vielfältige Pflanzen- und Vogelwelt, die es nur in Sri Lanka gibt. Übernachtung in einem Hotel in der Nähe von Sinharaja." },
        { title: "Tag 3: Sinharaja → Udawalawe", detail: "Weiterfahrt zum Udawalawe-Nationalpark – eines der besten Gebiete Sri Lankas, um Elefanten in freier Wildbahn zu beobachten. Am Nachmittag unternehmen Sie eine Jeep-Safari durch die weiten Graslandschaften und Wasserreservoirs des Parks, Heimat von Elefanten, Büffeln, Krokodilen und zahlreichen Vogelarten. Übernachtung in einem Hotel in der Nähe von Udawalawe." },
        { title: "Tag 4: Udawalawe → Yala → Tissa", detail: "Fahrt zum berühmten Yala-Nationalpark, bekannt für seine hohe Leoparden-Population. Unternehmen Sie eine aufregende Safari, bei der Sie neben Leoparden auch Elefanten, Hirsche und andere Wildtiere beobachten können. Danach geht es weiter nach Tissamaharama (Tissa) zur Übernachtung. Übernachtung in einem Hotel in Tissa." },
        { title: "Tag 5: Yala → Ella → Nuwara Eliya", detail: "Nach dem Frühstück fahren Sie ins Hochland mit einem Zwischenstopp im charmanten Bergdorf Ella. Genießen Sie die spektakulären Ausblicke und Wasserfälle, bevor Sie weiter nach Nuwara Eliya reisen – auch bekannt als „Little England“. Teeplantagen, koloniale Architektur und ein kühles Klima prägen diese Region. Übernachtung in einem 2- bis 3-Sterne-Hotel in Nuwara Eliya." },
        { title: "Tag 6: Nuwara Eliya → Horton Plains → Kandy", detail: "Früh am Morgen brechen Sie zu einer Wanderung im Horton-Plains-Nationalpark auf. Highlights sind „World’s End“, eine atemberaubende Steilklippe mit spektakulärer Aussicht, sowie die malerischen Baker’s Falls. Danach Weiterfahrt nach Kandy, der letzten Königsstadt, wo Sie den heiligen Zahntempel besuchen. Übernachtung in einem 2- bis 3-Sterne-Hotel in Kandy." },
        { title: "Tag 7: Kandy → Dambulla → Sigiriya", detail: "Heute reisen Sie weiter nach Norden zum beeindruckenden Dambulla-Höhlentempel, berühmt für seine goldenen Buddha-Statuen und farbenfrohen Wandmalereien. Danach geht es weiter nach Sigiriya, wo Sie am Fuße der berühmten Felsenfestung den Tag gemütlich ausklingen lassen. Übernachtung in einem 3- bis 5-Sterne-Hotel in Sigiriya." },
        { title: "Tag 8: Sigiriya → Strand oder Bentota", detail: "Zum Abschluss Ihrer Reise geht es an die Südküste oder zurück nach Bentota. Genießen Sie noch einmal die goldenen Strände Sri Lankas, bevor Sie für Ihren Rückflug zum Flughafen gebracht werden." }
      ],
      includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
      excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
      Travel_Period: ["01.11.2025 bis 30.04.2026"],
            pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 1000"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 1700"
       }
      ],
    },

    {
      slug: "Sri Lanka Höhepunkte-Tour",
      title: "8 Tage – Sri Lanka Höhepunkte-Tour",
      hero: "images/ChatGPT Image Aug 27, 2025, 08_26_55 AM.png",
      locations: "Negombo, Sigiriya, Bentota, Polonnaruwa, Yala, Ella, Nuwara Eliya, Peradeniya, Dambulla, Kandy, Galle",
      summary: "Erkunden Sie Sri Lankas berühmteste Wunder – von alten Königreichen und heiligen Tempeln bis hin zu teebedeckten Hügeln, Safaris und goldenen Stränden – alles auf einer unvergesslichen Reise.",
      badges: ["8 Tage /7 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen → Negombo", detail: "Ankunft in Sri Lanka und Begrüßung durch Ihren Chauffeur-Reiseleiter am Flughafen. Transfer nach Negombo – eine lebendige Küstenstadt, bekannt für ihre Sandstrände, ihre Fischereikultur und das koloniale Erbe. Entspannen Sie sich und bereiten Sie sich auf die bevorstehende Reise vor. Übernachtung in einem 3-Sterne-Hotel in Negombo." },
        { title: "Tag 2: Negombo → Sigiriya", detail: "Reisen Sie landeinwärts nach Sigiriya, dem kulturellen Zentrum des berühmten Kulturdreiecks Sri Lankas. Nach dem Check-in in Ihrem Hotel können Sie den Abend in ruhiger Umgebung entspannt genießen. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 3: Sigiriya → Polonnaruwa → Sigiriya", detail: "Erkunden Sie Polonnaruwa, die mittelalterliche Hauptstadt Sri Lankas und UNESCO-Weltkulturerbe. Entdecken Sie beeindruckende Ruinen, Paläste, Tempel und die berühmten Gal-Vihara-Buddhastatuen. Am Abend Rückkehr nach Sigiriya zur Erholung. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 4: Sigiriya → Dambulla → Kandy", detail: "Besuchen Sie den spektakulären Dambulla-Höhlentempel, der mit goldenen Buddha-Statuen und farbenfrohen Wandmalereien beeindruckt. Weiterfahrt nach Kandy, der letzten Königsstadt Sri Lankas. Am Nachmittag besichtigen Sie den heiligen Zahntempel und erleben den kulturellen Charme dieser Stadt im Hochland. Übernachtung in einem 3-Sterne-Hotel in Kandy." },
        { title: "Tag 5: Kandy → Peradeniya → Nuwara Eliya", detail: "Beginnen Sie den Tag im Botanischen Garten von Peradeniya, berühmt für seine Orchideen und exotischen Pflanzenarten. Anschließend reisen Sie weiter in das Hochland nach Nuwara Eliya – auch bekannt als „Little England“. Hier verschmelzen koloniale Architektur und weite Teeplantagen zu einem besonderen Ambiente. Übernachtung in einem 3-Sterne-Hotel in Nuwara Eliya." },
        { title: "Tag 6: Nuwara Eliya → Ella", detail: "Fahrt durch atemberaubende Landschaften nach Ella – ein malerisches Bergdorf, umgeben von Bergen, Wasserfällen und Teeplantagen. Entspannen Sie sich und genießen Sie die entspannte Atmosphäre des Ortes. Übernachtung in einem 3-Sterne-Hotel in Ella." },
        { title: "Tag 7: Ella → Yala", detail: "Nach dem Frühstück geht es weiter zum Yala-Nationalpark, dem bekanntesten Wildreservat Sri Lankas. Am Nachmittag unternehmen Sie eine spannende Jeep-Safari, bei der Sie Elefanten, Hirsche, Leoparden und andere Wildtiere in ihrer natürlichen Umgebung beobachten können. Übernachtung in einem 3-Sterne-Hotel in der Nähe von Yala." },
        { title: "Tag 8: Yala → Galle → Bentota", detail: "Fahrt entlang der malerischen Südküste mit einem Stopp am Galle Fort – einem UNESCO-Weltkulturerbe mit charmanten Kolonialstraßen und historischen Festungsmauern. Weiterfahrt nach Bentota, wo Sie noch etwas Zeit am goldenen Sandstrand genießen können, bevor Sie zum Flughafen für Ihren Rückflug gebracht werden." }
      ],
      includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
      excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
      Travel_Period: ["01.11.2025 bis 30.04.2026"],
             pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 1000"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 1750"
       }
      ],
    },

    {
      slug: "Cultural Cocktail",
      title: "Sri Lanka Cultural Cocktail – 10-Tage-Rundreise",
      hero: "images/ChatGPT Image Aug 27, 2025, 09_07_49 AM.png",
      locations: "Negombo, Wilpattu, Anuradhapura, Mihintale, Sigiriya, Polonnaruwa, Dambulla, Ritigala, Peradeniya, Kandy, Ella, Nuwara Eliya, Tissa, Yala, Galle",
      summary: "Eine lebendige Mischung aus Kultur, Geschichte, Tierwelt und Landschaften – entdecken Sie auf dieser intensiven 10-tägigen Reise den wahren Geist Sri Lankas.",
      badges: ["10 Tage /9 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen → Negombo", detail: "Ankunft in Sri Lanka und Begrüßung durch Ihren Chauffeur-Reiseleiter. Transfer nach Negombo, einer Küstenstadt, die für ihren goldenen Sandstrand und die lebendige Fischereikultur bekannt ist. Entspannen Sie sich am Abend nach Ihrer Anreise. Übernachtung in einem 3-Sterne-Hotel in Negombo." },
        { title: "Tag 2: Negombo → Wilpattu → Anuradhapura", detail: "Fahrt in den Norden zum Wilpattu-Nationalpark, der für seine natürlichen Seen („Villus“) und die vielfältige Tierwelt – darunter Elefanten, Lippenbären und Leoparden – berühmt ist. Anschließend Weiterfahrt nach Anuradhapura, die erste antike Hauptstadt Sri Lankas, wo heilige Stupas und königliche Ruinen von einer glanzvollen Vergangenheit erzählen. Übernachtung in einem 3-Sterne-Hotel in Anuradhapura." },
        { title: "Tag 3: Anuradhapura → Mihintale → Sigiriya  ", detail: "Besuchen Sie die heilige Stadt Anuradhapura, ein UNESCO-Weltkulturerbe mit der verehrten Sri Maha Bodhi – dem ältesten historisch dokumentierten Baum der Welt. Danach Weiterfahrt nach Sigiriya. Der Abend steht Ihnen im kulturellen Dreieck zur freien Verfügung. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 4: Sigiriya → Polonnaruwa → Sigiriya", detail: "Besuchen Sie Polonnaruwa – die mittelalterliche Hauptstadt Sri Lankas. Entdecken Sie beeindruckende Ruinen, antike Paläste, Tempel und die berühmten Buddha-Statuen von Gal Vihara. Am Abend kehren Sie nach Sigiriya zurück. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 5: Sigiriya → Dambulla → Ritigala → Sigiriya", detail: "Am Morgen besuchen Sie den beeindruckenden Dambulla-Höhlentempel mit seinen goldenen Buddha-Statuen und farbenfrohen Wandmalereien. Danach geht es weiter zum geheimnisvollen Kloster von Ritigala, tief im Wald gelegen und umgeben von alten Legenden. Rückfahrt nach Sigiriya und entspannter Abend. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 6: Sigiriya → Kandy", detail: "Fahrt nach Kandy – der letzten Königsstadt Sri Lankas und spirituelles Zentrum der Insel. Besuchen Sie den heiligen Zahntempel (Sri Dalada Maligawa) und genießen Sie die besondere Atmosphäre dieser Stadt im Hochland. Übernachtung in einem 3-Sterne-Hotel in Kandy" },
        { title: "Tag 7: Kandy → Peradeniya → Kandy", detail: "Beginnen Sie den Tag mit einem Spaziergang durch den Botanischen Garten von Peradeniya, der für seine Orchideen und exotischen Pflanzen bekannt ist. Der restliche Tag steht für Erkundungen in Kandy zur Verfügung – von lebhaften Märkten bis hin zu traditionellen Kulturvorführungen. Übernachtung in einem 3-Sterne-Hotel in Kandy." },
        { title: "Tag 8: Kandy → Nuwara Eliya → Ella", detail: "Wir fahren weiter ins Hochland mit einem Zwischenstopp in Nuwara Eliya. Erkunden Sie Teeplantagen, genießen Sie das kühle Klima und lassen Sie den kolonialen Charme der Stadt auf sich wirken. Anschließend geht es weiter nach Ella – einem idyllischen Bergdorf, umgeben von grünen Hügeln und Wasserfällen. Übernachtung in einem 3-Sterne-Hotel in Ella." },
        { title: "Tag 9: Ella → Tissa → Yala", detail: "Fahrt in den Süden nach Tissamaharama (Tissa). Am Nachmittag erwartet Sie eine aufregende Safari im Yala-Nationalpark – Sri Lankas bekanntestes Wildschutzgebiet mit Leoparden, Elefanten und einer Vielzahl von Vogelarten. Übernachtung in einem 3-Sterne-Hotel in der Nähe von Yala." },
        { title: "Tag 10: Yala → Galle → Strand", detail: "Fahrt entlang der Südküste mit einem Stopp im historischen Galle Fort – ein UNESCO-Weltkulturerbe mit kolonialem Flair, charmanten Gassen und Festungsmauern. Anschließend Zeit zur Entspannung an einem Badeort wie Bentota. Am Abend Transfer zum Flughafen für Ihre Heimreise." }
      ],
      includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
      excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
      Travel_Period: ["01.11.2025 bis 30.04.2026"],
             pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 1350"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 2200"
       }
      ],
    },

    
    {
      slug: "Sri Lanka Extravagance",
      title: "Sri Lanka Extravagance – 11-Tage-Rundreise",
      hero: "images/ChatGPT Image Aug 27, 2025, 09_13_48 AM.png",
      locations: "Negombo,  Sigiriya, Polonnaruwa, Dambulla, Peradeniya, Kandy, Ella, Nuwara Eliya, Tissa, Yala, Galle, Udawalawe, Bentota, Hortan Plains",
      summary: "Eine genussvolle Reise entlang goldener Küsten, antiker Wunder, nebliger Teehochländer und aufregender Safaris – das ultimative Sri Lanka-Erlebnis in 11 unvergesslichen Tagen",
      badges: ["11 Tage /10 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen Colombo → Bentota", detail: "Ankunft am Flughafen Colombo, wo Sie von Ihrem Chauffeur-Reiseleiter begrüßt werden. Fahrt in den Süden nach Bentota – ein beliebter Badeort, bekannt für seine goldenen Sandstrände und ruhigen Flussmündungen. Genießen Sie einen entspannten Abend am Indischen Ozean. Übernachtung in einem 3-Sterne-Hotel in Bentota." },
        { title: "Tag 2: Bentota → Galle", detail: "Fahrt entlang der malerischen Küste nach Galle, der wohl bekanntesten Kolonialstadt Sri Lankas. Erkunden Sie das UNESCO-Weltkulturerbe Galle Fort mit seinen Kopfsteinpflasterstraßen, niederländischer Architektur und charmanten kleinen Boutiquen. Der Nachmittag steht Ihnen zur freien Verfügung – ideal zum Spazieren entlang der Festungsmauern oder für eine gemütliche Kaffeepause. Übernachtung in einem 3-Sterne-Hotel in Galle." },
        { title: "Tag 3: Galle → Tissa → Yala", detail: "Weiterfahrt nach Tissamaharama (Tissa), dem Tor zum Yala-Nationalpark. Am Nachmittag erwartet Sie eine spannende Jeep-Safari, bei der Sie Elefanten, Krokodile und mit etwas Glück auch den seltenen Leoparden beobachten können. Übernachtung in einem 3-Sterne-Hotel in der Nähe von Yala." },
        { title: "Tag 4: Tissa → Yala → Udawalawe", detail: "Frühmorgendliche Safari im Yala-Nationalpark. Anschließend Weiterfahrt zum Udawalawe-Nationalpark – bekannt für seine großen Elefantenherden und ein Paradies für Naturliebhaber. Übernachtung in einem Hotel in der Nähe von Udawalawe." },
        { title: "Tag 5: Udawalawe → Ella", detail: "Fahren Sie hinauf ins Hochland zum charmanten Bergdorf Ella. Umgeben von grünen Bergen, Teeplantagen und Wasserfällen bietet Ella eine atemberaubende Landschaft und eine entspannte Atmosphäre. Übernachtung in einem 3-Sterne-Hotel in Ella." },
        { title: "Tag 6: Ella → Nuwara Eliya", detail: "Fahrt nach Nuwara Eliya, liebevoll „Little England“ genannt. Erkunden Sie Teeplantagen, besuchen Sie eine Teefabrik und bestaunen Sie die koloniale Architektur inmitten eines angenehm kühlen Klimas. Übernachtung in einem 3-Sterne-Hotel in Nuwara Eliya." },
        { title: "Tag 7: Nuwara Eliya → Horton Plains → Kandy", detail: "Früh am Morgen Wanderung durch den Horton-Plains-Nationalpark mit Besuch des atemberaubenden Aussichtspunktes „World’s End“ und der malerischen Baker’s Falls. Danach Weiterfahrt nach Kandy – die kulturelle Hauptstadt Sri Lankas und Heimat des heiligen Zahntempels. Übernachtung in einem 3-Sterne-Hotel in Kandy." },
        { title: "Tag 8: Kandy → Peradeniya → Kandy", detail: "Besuchen Sie die königlichen Botanischen Gärten von Peradeniya, die für ihre Orchideen und exotischen Pflanzen berühmt sind. Am Nachmittag haben Sie Zeit, Kandy weiter zu erkunden – von lebendigen Märkten bis hin zum idyllischen Seeufer.Übernachtung in einem 3-Sterne-Hotel in Kandy." },
        { title: "Tag 9: Kandy → Dambulla → Sigiriya", detail: "Fahrt in den Norden zum berühmten Dambulla-Höhlentempel – UNESCO-Weltkulturerbe mit beeindruckenden Wandmalereien und zahlreichen Buddha-Statuen. Anschließend Weiterfahrt nach Sigiriya und Check-in im Hotel. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 10: Sigiriya → Polonnaruwa → Sigiriya", detail: "Besuchen Sie die antike Stadt Polonnaruwa – die mittelalterliche Hauptstadt Sri Lankas mit faszinierenden Tempeln, Schreinen und meisterhaften Steinschnitzereien. Rückkehr nach Sigiriya für einen entspannten Abend im kulturellen Dreieck. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 11: Sigiriya → Bentota oder Negombo", detail: "Zum Abschluss Ihrer Reise geht es an die Küste nach Bentota oder Negombo, wo Sie noch einmal am Strand entspannen können. Anschließend Transfer zum Flughafen für Ihre Heimreise – mit unvergesslichen Erinnerungen an Sri Lanka im Gepäck." }
      ],
      includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
      excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
      Travel_Period: ["01.11.2025 bis 30.04.2026"],
            pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 1650"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 2750"
       }
      ],
    },

    
    {
      slug: "Sri Lanka Ostküsten-Rundreise",
      title: "Sri Lanka Ostküsten-Rundreise – 21 Tage",
      hero: "images/ChatGPT Image Aug 27, 2025, 10_00_08 AM.png",
      locations: "Negombo, Wilpattu, Anuradhapura, Mihintale, Sigiriya, Jaffna, Dambulla, Trincomalee, Peradeniya, Kandy, Ella, Nuwara Eliya, Tissa, Yala, Galle, Polonnaruwa, Mirissa, Mihintale, Minneriya Safari",
      summary: "Vom Charme des Nordens Jaffnas bis zu den sonnenverwöhnten Stränden des Ostens, den alten Hauptstädten, den nebligen Teehügeln und der Tierwelt des Südens – eine dreiwöchige Reise, die die Seele Sri Lankas einfängt.",
      badges: ["21 Tage /20 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen Colombo → Negombo", detail: "Ankunft in Sri Lanka und Begrüßung durch Ihren Chauffeur-Reiseleiter. Transfer nach Negombo – eine lebhafte Küstenstadt mit bunter Fischereikultur, ideal zum Entspannen nach dem Flug. Übernachtung in einem 3-Sterne-Hotel in Negombo." },
        { title: "Tag 2: Negombo → Wilpattu → Anuradhapura", detail: "Fahrt in den Norden zum Wilpattu-Nationalpark, bekannt für seine Seen („Villus“) und seine artenreiche Tierwelt – darunter Elefanten, Bären und Leoparden. Anschließend Weiterfahrt nach Anuradhapura, die erste antike Hauptstadt Sri Lankas. Übernachtung in einem 3-Sterne-Hotel in Anuradhapura." },
        { title: "Tag 3: Anuradhapura → Mihintale → Jaffna", detail: "Besichtigung der heiligen Stadt Anuradhapura mit ihren uralten Stupas und dem ehrwürdigen Sri Maha Bodhi-Baum. Danach geht es weiter nach Mihintale, der Wiege des Buddhismus in Sri Lanka. Am Nachmittag Fahrt in den hohen Norden nach Jaffna. Übernachtung in einem 3-Sterne-Hotel in Jaffna." },
        { title: "Tag 4: Stadtrundfahrt Jaffna", detail: "Entdecken Sie die einzigartige Kultur Jaffnas, geprägt von tamilischen Traditionen. Besuchen Sie den Nallur Kandaswamy Kovil, das Jaffna-Fort, die berühmte Bibliothek sowie die lebhaften lokalen Märkte. Übernachtung in einem 3-Sterne-Hotel in Jaffna." },
        { title: "Tag 5: Jaffna → Trincomalee", detail: "Fahrt entlang der Ostküste nach Trincomalee – eine historische Hafenstadt mit traumhaften Stränden und kultureller Vielfalt. Übernachtung in einem 3-Sterne-Hotel in Trincomalee." },
        { title: "Tag 6: Trincomalee – ganzer Tag zur freien Verfügung", detail: "Genießen Sie einen entspannten Tag in Trincomalee. Optional können Sie den Koneswaram-Tempel besuchen, die heißen Quellen erkunden oder an einer Delfin- oder Walbeobachtungstour teilnehmen. Übernachtung in einem 3-Sterne-Hotel in Trincomalee." },
        { title: "Tag 7-8: Aufenthalt in Trincomalee", detail: "Verbringen Sie zwei erholsame Tage an den türkisblauen Stränden von Trincomalee – ideal zum Schwimmen, Schnorcheln oder Sonnenbaden. Übernachtungen in einem 3-Sterne-Hotel in Trincomalee." },
        { title: "Tag 9: Trincomalee → Sigiriya", detail: "Fahrt ins Landesinnere nach Sigiriya, im Herzen des kulturellen Dreiecks Sri Lankas. Entspannen Sie sich im Hotel und bereiten Sie sich auf die kommenden historischen Highlights vor. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 10: Sigiriya → Polonnaruwa → Sigiriya", detail: "Besichtigung der alten Königsstadt Polonnaruwa – eine UNESCO-Welterbestätte mit gut erhaltenen Ruinen, Tempeln und den berühmten Gal-Vihara-Felsfiguren. Rückfahrt nach Sigiriya. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 11: Sigiriya → Minneriya Safari", detail: "Freuen Sie sich auf eine aufregende Jeep-Safari im Minneriya-Nationalpark – berühmt für das große Zusammentreffen wilder Elefanten („The Gathering“). Der Rest des Tages steht zur freien Verfügung. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 12: Sigiriya → Dambulla → Kandy", detail: "Besuch des Dambulla-Höhlentempels, ein UNESCO-Weltkulturerbe mit farbenfrohen Wandmalereien und Buddha-Statuen. Danach Weiterfahrt nach Kandy, der letzten Königsstadt Sri Lankas, inklusive Besuch des heiligen Zahntempels. Übernachtung in einem 3-Sterne-Hotel in Kandy." },
        { title: "Tag 13: Kandy → Peradeniya → Kandy", detail: "Spaziergang durch den Königlichen Botanischen Garten von Peradeniya mit seinen exotischen Pflanzen und berühmten Orchideen. Der restliche Tag steht zur freien Erkundung der kulturellen Höhepunkte Kandys zur Verfügung. Übernachtung in einem 3-Sterne-Hotel in Kandy." },
        { title: "Tag 14: Kandy → Nuwara Eliya", detail: "Fahrt ins Hochland nach Nuwara Eliya, liebevoll „Little England“ genannt. Besuch von Teeplantagen, kolonialen Villen und Genuss des frischen, kühlen Klimas. Übernachtung in einem 3-Sterne-Hotel in Nuwara Eliya." },
        { title: "Tag 15: Nuwara Eliya → Horton Plains → Nuwara Eliya", detail: "Frühmorgendliche Wanderung im Horton-Plains-Nationalpark – mit Besichtigung von World’s End und den Baker’s Falls. Genießen Sie die spektakulären Aussichten, bevor Sie nach Nuwara Eliya zurückkehren. Übernachtung in einem 3-Sterne-Hotel in Nuwara Eliya." },
        { title: "Tag 16: Nuwara Eliya → Ella", detail: "Fahrt durch das atemberaubende Hochland nach Ella – ein idyllisches Bergdorf mit spektakulären Aussichtspunkten und Wasserfällen. Übernachtung in einem 3-Sterne-Hotel in Ella." },
        { title: "Tag 17: Ella → Tissa → Yala", detail: "Weiterreise in den Süden nach Tissamaharama (Tissa) mit anschließender Safari im Yala-Nationalpark – berühmt für seine Leoparden und vielfältige Tierwelt. Übernachtung in einem 3-Sterne-Hotel in der Nähe von Yala." },
        { title: "Tag 18: Mirissa → Galle → Mirissa", detail: "Fahrt an die Südküste – wählen Sie zwischen dem entspannten Strandresort Mirissa oder der Kolonialstadt Galle. Übernachtung in einem 3-Sterne-Hotel in Mirissa und Galle." },
        { title: "Tag 19: Mirissa → Galle", detail: "Wenn Sie in Mirissa übernachten, fahren Sie heute nach Galle und erkunden das UNESCO-Weltkulturerbe Galle Fort mit seinen Gassen, Boutiquen und kolonialen Bauten. Übernachtung in einem 3-Sterne-Hotel in Galle." },
        { title: "Tag 20: Galle – ganzer Tag zur freien Verfügung", detail: "Ein ganzer Tag zur freien Verfügung in Galle – ideal zum Bummeln durch kleine Galerien, Boutiquen oder für einen Spaziergang entlang der Festungsmauern bei Sonnenuntergang. Übernachtung in einem 3-Sterne-Hotel in Galle." },
        { title: "Tag 21: Galle → Flughafen oder Strand", detail: "Ende Ihrer Rundreise mit dem Transfer zum Flughafen oder – wenn gewünscht – Verlängerung Ihres Aufenthalts in einem Strandresort Ihrer Wahl an Sri Lankas traumhafter Küste." }
        
      ],
      includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
      excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
      Travel_Period: ["01.11.2025 bis 30.04.2026"],
            pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 3000"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 5250"
       }
      ],
    },

    
    {
      slug: "Sri Lanka Tee-Naturreise",
      title: "Sri Lanka Tee- & Naturreise – 17 Tage",
      hero: "images/ChatGPT Image Aug 27, 2025, 09_18_32 AM.png",
      locations: "Bentota, Sinharaja Regenwald, Anuradhapura, Mangroven-Boat tour, Sigiriya, Polonnaruwa, Peradeniya, Kandy, Ella, Nuwara Eliya, Udawalawe, Yala, Horton Plains, Knuckles-Gebirge (Trekking), Haton",
      summary: "Reisen Sie durch smaragdgrüne Teetäler, üppige Regenwälder, neblige Hochländer und antike Städte – ein 17-tägiges Abenteuer, das die natürliche Schönheit Sri Lankas mit kulturellen Schätzen verbindet.",
      badges: ["17 Tage /16 Nächte","Klimatisierte Fahrzeuge und deutschsprachiger Reiseleiter/Fahrer"],
      itinerary: [
        { title: "Tag 1: Flughafen Colombo → Bentota", detail: "Ankunft in Sri Lanka und Transfer in die Küstenstadt Bentota. Entspannen Sie sich nach Ihrer Reise am Strand und lassen Sie die tropische Atmosphäre auf sich wirken. Übernachtung in einem 3-Sterne-Hotel in Bentota." },
        { title: "Tag 2: Bentota → Mangroven-Boat tour", detail: "Genießen Sie eine entspannte Bootssafari durch die Mangroven des Madu-Ganga-Flusses. Gleiten Sie durch Lagunen, beobachten Sie die Vogelwelt und entdecken Sie das Alltagsleben in den umliegenden Fischerdörfern. Übernachtung in einem 3-Sterne-Hotel in Bentota." },
        { title: "Tag 3: Bentota → Galle", detail: "Fahrt entlang der Südküste nach Galle. Erkunden Sie das UNESCO-Weltkulturerbe Galle Fort mit seinen kolonialen Gassen, Boutiquen und gemütlichen Cafés. Übernachtung in einem 3-Sterne-Hotel in Galle." },
        { title: "Tag 4: Galle → Sinharaja", detail: "Fahrt ins Landesinnere zum Sinharaja-Regenwald – Sri Lankas letzter ursprünglicher Regenwald und UNESCO-Weltnaturerbe. Übernachtung in der Nähe von Sinharaja." },
        { title: "Tag 5: Sinharaja Regenwald", detail: "Geführte Wanderung durch den dichten Regenwald. Halten Sie Ausschau nach endemischen Vögeln, Schmetterlingen, Reptilien und seltener Pflanzenvielfalt – ein Paradies für Naturfreunde. Übernachtung in der Nähe von Sinharaja." },
        { title: "Tag 6: Sinharaja → Udawalawe", detail: "Fahrt zum Udawalawe-Nationalpark. Am Nachmittag unternehmen Sie eine spannende Jeep-Safari, bei der Sie Elefanten, Büffel, Krokodile und viele andere Tiere in freier Wildbahn erleben können. Übernachtung in einem Hotel bei Udawalawe." },
        { title: "Tag 7: Udawalawe → Yala", detail: "Weiterfahrt zum Yala-Nationalpark, bekannt für eine der höchsten Leopardendichten Asiens. Am Nachmittag Safari im Park mit der Chance, zahlreiche Wildtiere zu beobachten. Übernachtung in einem Hotel bei Yala." },
        { title: "Tag 8: Yala → Ella", detail: "Fahrt ins zentrale Hochland nach Ella – ein charmantes Bergdorf, umgeben von Teeplantagen, Wasserfällen und beeindruckenden Ausblicken. Übernachtung in einem 3-Sterne-Hotel in Ella." },
        { title: "Tag 9: Ella → Haputale → Ella", detail: "Tagesausflug nach Haputale – ein weiteres Hochlanddorf mit spektakulären Aussichten, historischen Teegärten und kolonialem Flair. Rückkehr nach Ella am Abend. Übernachtung in einem 3-Sterne-Hotel in Ella." },
        { title: "Tag 10: Ella → Nuwara Eliya", detail: "Fahrt durch das Teeland in das „Little England“ genannte Nuwara Eliya. Besichtigung von Teeplantagen, kolonialen Bungalows und Spaziergang durch die malerische Stadt im kühlen Hochlandklima. Übernachtung in einem 3-Sterne-Hotel in Nuwara Eliya." },
        { title: "Tag 11: Nuwara Eliya → Horton Plains → Haton", detail: "Frühmorgens starten Sie zu einer Wanderung im Horton-Plains-Nationalpark – mit Highlights wie „World’s End“, einer spektakulären Klippe, und den malerischen Baker’s Falls. Nach dem Trekking geht es weiter nach Hatton, einer ruhigen Hochlandregion, umgeben von weiten Teeplantagen und Hügeln. Übernachtung in einem 3-Sterne-Hotel in Hatton." },
        { title: "Tag 12: Haton → Kandy", detail: "Nach dem Frühstück verlassen Sie das Hochland von Hatton und fahren nach Kandy – der letzten Königsstadt Sri Lankas. Genießen Sie die landschaftlich reizvolle Strecke durch Teeplantagen und bergige Landschaften. Der Rest des Tages steht Ihnen zur freien Verfügung, um sich zu erholen oder die Stadt individuell zu entdecken. Übernachtung in einem 3-Sterne-Hotel in Kandy." },
        { title: "Tag 13: Kandy → Peradeniya → Kandy", detail: "Besuch des Königlichen Botanischen Gartens von Peradeniya, bekannt für seine Orchideensammlung und tropischen Pflanzen. Der Rest des Tages steht Ihnen in Kandy zur freien Verfügung. Übernachtung in einem 3-Sterne-Hotel in Kandy." },
        { title: "Tag 14: Kandy → Knuckles-Gebirge (Trekking) → Sigiriya", detail: "Der Tag beginnt: Ein leichtes Trekking-Abenteuer erwartet Sie in den Knuckles Mountains. Sie wandern durch Wälder, vorbei an Wasserfällen und traditionellen Dörfern. Anschließend fahren Sie nach Sigiriya. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 15: Sigiriya → Polonnaruwa → Sigiriya", detail: "Tagesausflug zur antiken Königsstadt Polonnaruwa – UNESCO-Weltkulturerbe mit beeindruckenden Palastruinen, Tempeln und den berühmten Gal-Vihara-Buddhastatuen. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 16: Sigiriya → Anuradhapura → Sigiriya", detail: "Besuchen Sie die heilige Stadt Anuradhapura – Sri Lankas erste Hauptstadt. Bewundern Sie alte Stupas, Klöster und den heiligen Bodhi-Baum. Rückfahrt nach Sigiriya. Übernachtung in einem 3-Sterne-Hotel in Sigiriya." },
        { title: "Tag 17: Sigiriya → Flughafen oder Strand", detail: "Ende Ihrer Reise: Transfer zum Flughafen für den Heimflug oder auf Wunsch Weiterfahrt zu einem Badeort für eine entspannte Verlängerung am Meer." }
      ],
      includes: ["Unterkunft", "Mahlzeiten gemäß Programm", "Klimatisiertes Fahrzeug mit Fahrer"],
      excludes: ["Flugpreise", "Alle Mahlzeiten, die nicht im Inklusivservice enthalten sind", "Alle Trinkgelder", "Medizinische Kosten jeglicher Art"],
      Travel_Period: ["01.11.2025 bis 30.04.2026"],
             pricingTable: [
       {
          Travel_Rate: "Preis für 1 Person",
          price: " € 2700"
       },
       {
          Travel_Rate: "Preis für 2 Personen",
          price: "€ 4700"
       }
      ],
    }
    
  ];

  // Build one tour block
  function renderTour(t) {
    const el = document.createElement("section");
    el.className = "td-tour";
    el.id = "tour-" + t.slug;
    el.innerHTML = `
      <div class="td-tour-head">
        <img src="${t.hero}" alt="" onerror="this.onerror=null;this.src='images/placeholder-hero.jpg'">
        <div>
          <h2>${t.title}</h2>
          <div class="td-meta"><span class="pin"></span>${t.locations}</div>
          <p class="td-summary">${t.summary}</p>
          <div class="td-badges">${t.badges.map(b => `<span>${b}</span>`).join('')}</div>
        </div>
      </div>

      <div class="td-tour-body">
        <div class="td-block">
          <h3>Ablauf / Reiseroute</h3>
          <ol class="td-acc">
            ${t.itinerary.map((d, i) => `
              <li class="td-it-item">
                <button class="td-it-toggle" type="button" aria-expanded="false">
                  <span class="td-it-title">${d.title}</span>
                  <svg class="td-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div class="td-it-body"><p>${d.detail || ""}</p></div>
              </li>
            `).join('')}
          </ol>
        </div>

        <div class="td-block">
          <h3>Leistungen & Hinweise</h3>
          <div class="td-kv">
            <b>Inklusive</b>
       <span>
       <ul class="td-icon-list td-inc">
      ${t.includes.map(item => `<li><span class="icon">✅</span>${item}</li>`).join("")}
    </ul>
  </span>
   <b>Exklusive</b>
  <span>
    <ul class="td-icon-list td-exc">
    ${t.excludes.map(item => `<li><span class="icon">❌</span>${item}</li>`).join("")}
  </ul>
</span>
  <b>Reisezeitraum</b><span>${t.Travel_Period.join(" • ")}</span>
  <b>Preis</b>
<span>
  <table style="width:100%; border-collapse:collapse; font-size:14px; margin-top:4px;">
    <thead style="background:#003366; color:#fff;">
      <tr>
        <th style="padding:6px; border:1px solid #99c;">Reisen rate</th>
        <th style="padding:6px; border:1px solid #99c;">Preis</th>
      </tr>
    </thead>
    <tbody>
      ${t.pricingTable?.map(p => `
        <tr>
          <td style="padding:6px; border:1px solid #99c;">${p.Travel_Rate}</td>
          <td style="padding:6px; border:1px solid #99c;">${p.price}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
  <ul style="list-style:none; padding-left:0; margin:8px 0 0;">
    <li style="margin:4px 0;">✅ Die oben genannten Preise gelten pro Person bei Unterbringung im Doppel- oder Zweibettzimmer.</li>
    <li style="margin:4px 0;">✅ In der Hochsaison können Zuschläge anfallen (bitte anfragen)</li>
    <li style="margin:4px 0;">✅ Preise für mehr als 2 Personen auf Anfrage.</li>
  </ul>
</span>

          </div>
          <div class="td-cta-row">
            <button class="td-btn td-btn-ghost" data-print="${t.slug}">Drucken</button>
            <a class="td-btn td-btn-teal" href="booking.html">Jetzt buchen</a>
          </div>
        </div>
      </div>
    `;
    el.querySelector(`[data-print="${t.slug}"]`).addEventListener("click", () => printTour(t));
    return el;
  }

  function printTour(t) {
    const w = window.open("", "_blank");
    const style = `
      <style>
        body{font-family:Inter,system-ui,Segoe UI,Roboto,Arial;line-height:1.5;padding:20px;color:#111}
        h2,h3{margin:0 0 8px}
        img{max-width:100%;height:auto;border-radius:8px}
        .badges span{display:inline-block;margin:4px 6px 0 0;padding:4px 8px;border:1px solid #ddd;border-radius:999px;font-size:12px}
        ol{padding-left:18px}
        .kv{display:grid;grid-template-columns:auto 1fr;gap:4px 10px}
      </style>`;
    w.document.write(`<h2>${t.title}</h2>${style}
      <img src="${t.hero}" alt=""><p>${t.summary}</p>
      <div><b>Orte:</b> ${t.locations}</div>
      <div class="badges">${t.badges.map(b=>`<span>${b}</span>`).join('')}</div>
      <h3>Reiseroute</h3>
      <ol>${t.itinerary.map(i=>`<li>${i.title}${i.detail ? " – " + i.detail : ""}</li>`).join('')}</ol>
      <b>Inklusive</b>
      <span><ul>${t.includes.map(i => `<li>✅ ${i}</li>`).join("")}</ul></span>
      <b>Exklusive</b>
      <span><ul>${t.excludes.map(i => `<li>❌ ${i}</li>`).join("")}</ul></span>
      <b>Preis</b>
<span>
  <table style="width:100%; border-collapse:collapse; font-size:14px; margin-top:4px;">
    <thead style="background:#003366; color:#fff;">
      <tr>
        <th style="padding:6px; border:1px solid #99c;">Reisen rate</th>
        <th style="padding:6px; border:1px solid #99c;">Preis</th>
      </tr>
    </thead>
    <tbody>
      ${t.pricingTable?.map(p => `
        <tr>
          <td style="padding:6px; border:1px solid #99c;">${p.Travel_Rate}</td>
          <td style="padding:6px; border:1px solid #99c;">${p.price}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
</span>
</div>`);
    w.document.close(); w.focus(); w.print();
  }

  // Render list (always all tours). If ?tour= is present, just scroll to it.
  function init() {
    const list = document.getElementById("td-list");
    list.innerHTML = "";

    const params = new URLSearchParams(location.search);
    const slug = params.get("tour");
    const only = params.get("only") === "1"; // optional: show only selected if &only=1

    const data = (only && slug) ? TOURS.filter(t => t.slug === slug) : TOURS;
    list.append(...data.map(renderTour));

    if (slug) {
      const target = document.getElementById("tour-" + slug);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Event delegation for accordion
    list.addEventListener("click", (e) => {
      const btn = e.target.closest(".td-it-toggle");
      if (!btn) return;
      const body = btn.parentElement.querySelector(".td-it-body");
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      if (!open) {
        body.style.maxHeight = body.scrollHeight + "px";
        body.classList.add("open");
      } else {
        body.style.maxHeight = 0;
        body.classList.remove("open");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();