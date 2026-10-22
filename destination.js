const destinations = [
  {
    slug: "mount-cameroon",
    title: "Mount Cameroon",
    region: "Adventure · Southwest Region",
    image: "images/destination-mount-cameroon-hikers.jpg?v=20261020-1",
    alt: "Hikers descending a grassy slope on Mount Cameroon",
    intro: "Trade city streets for a high-altitude journey across forest, volcanic slopes and open grassland on West Africa’s highest mountain.",
    story: "Mount Cameroon rises above the coast near Buea and offers a striking sequence of landscapes as the trail climbs. A visit can be planned as a guided hike or as a closer look at the mountain’s foothills and surrounding communities, depending on your time and experience.",
    history: "The mountain is also known as Mongo ma Ndemi and holds cultural importance for Bakweri communities. Its active volcanic history has shaped the land, while the communities around its slopes maintain a close relationship with the mountain.",
    highlights: ["Changing scenery from forest to open highland terrain", "Views across the Southwest Region on clear days", "A guided trek planned around your fitness and schedule"],
    timing: "The drier months are often preferred for trekking, but conditions change with altitude and season. Confirm trail conditions and local guidance before setting out.",
    tip: "A full summit trek is demanding. Bring sturdy footwear, warm layers, rain protection and water, and arrange an experienced local guide and any required permissions in advance.",
    credit: { label: "Hikers on Mount Cameroon — photo supplied by Amigo Travel." }
  },
  {
    slug: "yaounde-city-tour",
    title: "Yaoundé City Tour",
    region: "City · Centre Region",
    image: "images/destination-yaounde-reunification.jpg?v=20261020-1",
    alt: "Cameroon’s Reunification Monument in Yaoundé",
    intro: "Get to know Cameroon’s capital through its civic landmarks, cultural stops, markets and lively hillside neighbourhoods.",
    story: "Yaoundé is a green, expanding city spread across a series of hills. A city tour can combine major public landmarks with museums, market visits and neighbourhood stops, with the pace and route adjusted to your interests.",
    history: "Founded as a German-era settlement in 1888, Yaoundé later became an administrative capital under French rule and grew into Cameroon’s political centre. The Reunification Monument commemorates the coming together of the country’s former French- and British-administered territories.",
    highlights: ["The Reunification Monument and civic district", "Museums and cultural institutions, subject to opening hours", "Markets and viewpoints selected with a local guide"],
    timing: "Yaoundé can be explored throughout the year. Mornings are useful for outdoor stops and markets, while traffic and weather can affect how many places fit into one day.",
    tip: "Allow extra travel time between neighbourhoods. Ask before photographing people, market stalls or official buildings, and check museum opening times before your visit.",
    credit: { label: "Reunification Monument, Yaoundé — photo supplied by Amigo Travel." }
  },
  {
    slug: "foumban-royal-palace",
    title: "Foumban Royal Palace",
    region: "Heritage · West Region",
    image: "images/destination-foumban-royal-palace.jpg?v=20261020-1",
    alt: "The Musée Royal de Foumban, home of the Bamoun royal palace museum",
    intro: "Step into the history and creative heritage of the Bamoun kingdom at Foumban’s royal palace and museum.",
    story: "Foumban is known for its royal court, artisans and distinctive Bamoun cultural heritage. Visitors can explore the palace museum and, where time allows, discover local craft traditions and the town’s historic centre.",
    history: "The Bamoun kingdom traces its roots to the late 14th century. Sultan Ibrahim Njoya, who ruled around the turn of the 20th century, encouraged a distinctive writing system and supported artistic and intellectual life. The palace museum helps tell these stories through royal objects and cultural displays.",
    highlights: ["The Musée Royal and Bamoun royal history", "Traditional arts, metalwork and woodcarving", "Local crafts and town markets, with time for browsing"],
    timing: "Foumban can be visited year-round. Confirm museum opening days and any visitor arrangements before travelling, especially around public holidays or major local events.",
    tip: "Plan time for a guided museum visit and ask staff about photography rules. Buying crafts directly from local makers can support the town’s artisan community.",
    credit: { label: "Musée Royal de Foumban — photo supplied by Amigo Travel." }
  },
  {
    slug: "douala-city-tour",
    title: "Douala City Tour",
    region: "City · Littoral Region",
    image: "images/destination-douala.jpg?v=20261021-1",
    alt: "Visitors exploring an exhibition at a cultural venue in Douala",
    intro: "Explore Cameroon’s energetic port city through its waterfront, markets, architecture and contemporary arts scene.",
    story: "Douala is a busy, cosmopolitan city shaped by the Wouri estuary and the movement of people and goods through its port. A guided outing can bring together historic and civic landmarks, art spaces and everyday city life; the route can be adapted to your interests and available time.",
    history: "The Wouri estuary has been a centre of coastal exchange for generations. Douala grew around Duala communities and developed into a major port during the colonial era, later becoming the country’s principal commercial centre.",
    highlights: ["Doual’Art and other contemporary cultural spaces", "The Maritime Museum or Cathedral of Saints Peter and Paul, subject to opening times", "Marché des Fleurs, Central Market and views toward the Wouri waterfront"],
    timing: "Douala is a year-round destination. Start early to make the most of cooler hours and reduce the impact of traffic; allow flexibility for rain and changing city conditions.",
    tip: "Agree on stops and transport before departure. Keep valuables secure in crowded areas, ask permission before taking photographs, and check attraction opening hours in advance.",
    credit: { label: "Cultural exhibition in Douala — photo supplied by Amigo Travel." }
  },
  {
    slug: "ekom-nkam-waterfalls",
    title: "Ekom-Nkam Waterfalls",
    region: "Nature · Littoral Region",
    image: "images/destination-ekom-nkam.jpg?v=20261020-hd1",
    alt: "Ekom-Nkam Waterfalls surrounded by forest",
    intro: "Feel the scale of these forest-framed cascades on a scenic excursion in the Nkam area near Nkongsamba.",
    story: "Ekom-Nkam is a dramatic natural stop where the Nkam River drops into a lush, steep-sided gorge. The viewpoint and surrounding landscape make the falls a memorable excursion for travellers interested in nature and photography.",
    history: "The falls became internationally familiar after appearing in the 1980 film Greystoke: The Legend of Tarzan. They remain part of the natural identity of the Nkam region and a popular stop for visitors travelling through the area.",
    highlights: ["Views of the cascades from designated visitor areas", "Forest scenery and photo opportunities", "A possible stop combined with a wider Nkongsamba-area itinerary"],
    timing: "Water flow and access conditions vary with rainfall. The wetter season can make the cascades especially powerful, while heavy rain may affect roads and paths; check conditions locally before travelling.",
    tip: "Wear shoes with good grip and follow local safety instructions near the gorge. Carry drinking water and allow additional time for the road journey.",
    credit: { label: "Ekom-Nkam Waterfalls", url: "https://commons.wikimedia.org/wiki/File:Chutes_Ekom_Nkam_Melong_04.jpg", author: "Junior Verges", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" }
  },
  {
    slug: "lobeke-national-park",
    title: "Lobéké National Park",
    region: "Wildlife · East Region",
    image: "images/destination-lobeke.jpg?v=20261020-hd1",
    alt: "Buffalo in the rainforest at Lobéké National Park",
    intro: "Discover a remote Congo Basin rainforest where forest clearings, waterways and rich biodiversity create a unique wildlife experience.",
    story: "Lobéké lies in southeastern Cameroon near the borders with the Republic of the Congo and the Central African Republic. Forest walks and wildlife viewing are best arranged with park authorities and experienced local guides, with the itinerary shaped by access, season and conservation rules.",
    history: "Established as a national park in 2001, Lobéké forms part of the Sangha Trinational forest landscape. The wider landscape was inscribed as a UNESCO World Heritage site in 2012, reflecting the ecological importance of this cross-border rainforest.",
    highlights: ["Congo Basin rainforest and forest-clearings known as bais", "Guided nature experiences planned around park rules", "A chance to learn about conservation in a transboundary forest"],
    timing: "Travel conditions and wildlife viewing vary through the year. The drier period is often more practical for remote access, but visitors should confirm current conditions and park arrangements before booking.",
    tip: "This is a remote destination that requires careful planning. Arrange permits, accommodation, transport and a guide in advance, and follow all wildlife-distance and conservation guidance.",
    credit: { label: "Buffalo in Lobéké National Park", url: "https://commons.wikimedia.org/wiki/File:Lob%C3%A9k%C3%A9_buffalo.jpg", author: "Amcaja", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" }
  },
  {
    slug: "limbe-wildlife-centre",
    title: "Limbe Wildlife Centre",
    region: "Wildlife · Southwest Region",
    image: "images/destination-limbe-wildlife-centre.jpg?v=20261020-hd1",
    alt: "The Limbe Wildlife Centre",
    intro: "Learn about wildlife rescue, rehabilitation and conservation at a respected centre on Cameroon’s southwest coast.",
    story: "The Limbe Wildlife Centre offers visitors an opportunity to learn about the pressures facing wildlife and the work involved in caring for animals rescued from illegal trade or other threats. A visit is educational and supports awareness of conservation in Cameroon.",
    history: "Opened in 1993, the centre developed from a wildlife rescue initiative into a conservation and education facility. Its work includes animal care and public outreach, with a focus on the welfare of the animals in its care.",
    highlights: ["Interpretive information about rescued wildlife", "Learning about conservation challenges in Cameroon", "A family-friendly educational visit that can pair with Limbe’s other attractions"],
    timing: "Opening hours and visitor arrangements may change, so check directly before setting out. Allow enough time to move through the centre without rushing.",
    tip: "Follow staff guidance, keep a respectful distance from animals and avoid tapping on enclosures or feeding wildlife. Ask before taking photographs where restrictions may apply.",
    credit: { label: "Limbe Wildlife Centre", url: "https://commons.wikimedia.org/wiki/File:Limbe_wildlife_center.jpg", author: "Ndiptambe", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/" }
  },
  {
    slug: "douala-cathedral",
    title: "Douala Cathedral of St Peter",
    region: "Heritage · Littoral Region",
    image: "images/destination-douala-cathedral.jpg?v=20261020-hd1",
    alt: "Inside St Peter and St Paul Cathedral in Douala",
    intro: "Visit one of Douala’s best-known religious landmarks and learn how faith and architecture are woven into the city’s history.",
    story: "The Cathedral of Saints Peter and Paul is a notable stop for visitors interested in sacred spaces and the city’s architectural heritage. It can be included in a broader Douala itinerary alongside cultural institutions, markets and historic neighbourhoods.",
    history: "The cathedral reflects the growth of Catholic communities in coastal Cameroon during the late 19th and early 20th centuries. It remains an active place of worship as well as a familiar landmark in the city.",
    highlights: ["The cathedral’s architecture and interior details", "A quiet cultural stop within a lively urban itinerary", "Nearby Douala landmarks and neighbourhoods"],
    timing: "As an active place of worship, access can depend on services and church activities. Confirm visitor access locally and avoid arriving during private ceremonies.",
    tip: "Dress respectfully, keep voices low and ask permission before photographing inside. Be prepared to adjust your visit if a service is underway.",
    credit: { label: "St Peter and St Paul Cathedral, Douala", url: "https://commons.wikimedia.org/wiki/File:Cath%C3%A9drale_Saint-pierre_et_Saint-Paul_de_Douala.1.jpg", author: "Blaizo 237", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" }
  },
  {
    slug: "kribi-community-visit",
    title: "Kribi Indigenous Community Visit",
    region: "Culture · South Region",
    image: "images/destination-kribi-community.jpg?v=20261020-hd1",
    alt: "Forest reserve in Kumba, an illustrative view of Cameroon’s forest landscape",
    intro: "Experience local forest heritage through a visit arranged with community hosts and guided by respect for living traditions.",
    story: "A community visit should be led by local hosts who decide what they wish to share and how visitors may participate. Depending on the hosts’ preferences, a visit may introduce local knowledge, everyday life and connections to the surrounding forest.",
    history: "Indigenous Bagyeli communities have longstanding ties to the forests around Kribi. Their knowledge and culture are part of the region’s living heritage; any visitor experience should recognize community choice, consent and the right to set boundaries.",
    highlights: ["Learning directly from community hosts", "Understanding local forest knowledge and cultural heritage", "A small-group experience shaped by community preferences"],
    timing: "Visits need to be arranged in advance with trusted local hosts. Availability depends on community schedules and should never be assumed without their agreement.",
    tip: "Ask before taking photographs, recording audio or sharing stories. Respect decisions about access, follow guidance from hosts and choose an experience where benefits are agreed with the community.",
    credit: { label: "Forest reserve, Kumba (illustrative forest image)", url: "https://commons.wikimedia.org/wiki/File:Forest_reserve,_Kumba.jpg", author: "A.R. Etoyiva", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" }
  },
  {
    slug: "kribi-beach-town",
    title: "Kribi Beach Town",
    region: "Beach · South Region",
    image: "images/destination-kribi-beach.jpg?v=20261020-hd1",
    alt: "Lobé Beach on the Atlantic coast near Kribi",
    intro: "Slow down on Cameroon’s Atlantic coast with broad beaches, seafood and the remarkable Lobé Falls nearby.",
    story: "Kribi combines a relaxed seaside feel with easy access to coastal scenery. Visitors can spend time by the ocean, explore the town and plan an excursion to the Lobé Falls, where the river meets the Atlantic near the shore.",
    history: "Kribi grew as a coastal settlement and port during the German colonial period; the historic lighthouse recalls that era. Today, the town is known as a beach escape and a base for exploring the surrounding coast.",
    highlights: ["Atlantic beaches and coastal sunsets", "Lobé Falls and the meeting of river and sea", "Local seafood and time to explore Kribi town"],
    timing: "Kribi is a year-round destination. Coastal weather can be changeable, so check forecasts and road conditions; sea conditions may affect swimming and boat excursions.",
    tip: "Follow local advice around currents and swimming areas. Arrange boat trips with reputable local operators, agree on prices beforehand and bring sun protection.",
    credit: { label: "Lobé Beach, Kribi", url: "https://commons.wikimedia.org/wiki/File:Lob%C3%A9_beach_kribi_Cameroon.jpg", author: "Blaizo 237", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" }
  },
  {
    slug: "waza-national-park",
    title: "Waza National Park",
    region: "Wildlife · Far North Region",
    image: "images/destination-waza.jpg?v=20261022-giraffe",
    alt: "Giraffes in Waza National Park, Cameroon",
    intro: "Experience the open savannah and seasonal wetlands of Cameroon’s Far North on a carefully planned wildlife visit.",
    story: "Waza’s broad plains and seasonal water sources create a distinctive landscape in the Far North. Wildlife viewing is generally organized as a guided drive, with routes and sightings varying according to season, park access and conservation requirements.",
    history: "First protected as a game reserve in 1934, Waza became a national park in 1968. It is one of the region’s best-known conservation areas and an important part of Cameroon’s natural heritage.",
    highlights: ["Open Sahelian savannah and seasonal wetlands", "Guided wildlife viewing when the park is open", "A distinctive contrast with Cameroon’s southern rainforest destinations"],
    timing: "The cooler dry season is often preferred for wildlife viewing, but park operations and access can change. Confirm current opening status and travel advisories before making plans.",
    tip: "Travel only with authorized local operators and respect park rules. Check current regional safety guidance, road conditions and park access before confirming any trip.",
    credit: { label: "Giraffes in Waza National Park — photo supplied by Amigo Travel." }
  }
];

const destinationId = new URLSearchParams(window.location.search).get("place");
const destination = destinations.find((item) => item.slug === destinationId);

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function renderPhotoCredit(credit) {
  const caption = document.getElementById("destination-photo-credit");
  if (!caption) return;

  if (!credit.url) {
    caption.textContent = credit.label;
    return;
  }

  const photoLink = document.createElement("a");
  photoLink.href = credit.url;
  photoLink.target = "_blank";
  photoLink.rel = "noopener noreferrer";
  photoLink.textContent = credit.label;
  caption.append(photoLink, ` — ${credit.author}, `);

  const licenseLink = document.createElement("a");
  licenseLink.href = credit.licenseUrl;
  licenseLink.target = "_blank";
  licenseLink.rel = "noopener noreferrer";
  licenseLink.textContent = credit.license;
  caption.append(licenseLink, ".");
}

function renderDestination(item) {
  document.getElementById("destination-hero").hidden = false;
  document.getElementById("destination-content").hidden = false;
  document.title = `${item.title} | Amigo Travel Logistics & Tourism`;

  const canonicalUrl = new URL("destination.html", "https://www.amigotravellogistics.org/");
  canonicalUrl.searchParams.set("place", item.slug);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl.href);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl.href);
  document.querySelector('meta[name="description"]')?.setAttribute("content", item.intro);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${item.title} | Amigo Travel Logistics & Tourism`);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", item.intro);
  document.querySelector('meta[property="og:image"]')?.setAttribute("content", new URL(item.image.split("?")[0], window.location.href).href);

  const heroImage = document.getElementById("destination-image");
  const asideImage = document.getElementById("destination-aside-image");
  heroImage.src = item.image;
  heroImage.alt = item.alt;
  asideImage.src = item.image;
  asideImage.alt = item.alt;

  setText("destination-region", item.region);
  setText("destination-title", item.title);
  setText("destination-intro", item.intro);
  setText("destination-story-title", `Discover ${item.title}`);
  setText("destination-story", item.story);
  setText("destination-history", item.history);
  setText("destination-timing", item.timing);
  setText("destination-tip", item.tip);
  renderPhotoCredit(item.credit);

  const highlights = document.getElementById("destination-highlights-list");
  for (const highlight of item.highlights) {
    const listItem = document.createElement("li");
    listItem.textContent = highlight;
    highlights.append(listItem);
  }

  const enquiry = `Hello Amigo Travel, I would like to know more about a trip to ${item.title}.`;
  const enquiryUrl = `https://wa.me/237674518729?text=${encodeURIComponent(enquiry)}`;
  document.getElementById("destination-contact").href = enquiryUrl;
  document.getElementById("destination-bottom-contact").href = enquiryUrl;
}

if (destination) {
  renderDestination(destination);
} else {
  document.getElementById("destination-hero").hidden = true;
  document.getElementById("destination-content").hidden = true;
  document.getElementById("destination-not-found").hidden = false;
  document.title = "Destination not found | Amigo Travel Logistics & Tourism";
  document.querySelector('meta[name="robots"]')?.setAttribute("content", "noindex, follow");
}
