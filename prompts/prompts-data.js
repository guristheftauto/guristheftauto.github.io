/**
 * GURIS THEFT AUTO — BANCO DE DADOS DE PROMPTS & ESTILOS
 * Este arquivo alimenta a Galeria de Prompts no site oficial.
 * Para adicionar um novo combo/estilo, basta adicionar um novo objeto no array STYLES_DATA.
 */

const STYLES_DATA = [
  {
    id: "estilo-1",
    badge: "COMBO 01",
    name: "Estilo 01: GTA VI Next-Gen Character Render",
    slug: "estilo-1",
    icon: "fa-gamepad",
    description: "Renderização estilo modelo 3D de alta fidelidade da RAGE Engine (GTA VI). Pele com subsurface scattering, iluminação volumétrica neon de Leonida e preservação total dos traços faciais.",
    toolRecommended: "Midjourney v6.1 (--cref) / Fooocus / SeaArt",
    items: [
      {
        id: "e1-01",
        title: "01. Downtown Boulevard Twilight",
        image: "../assets/prompts/estilo-1/01_boulevard_neon.jpg",
        prompt: `The subject from the reference image, framed from the chest upward, standing centered on a downtown boulevard at twilight, shoulders squared to camera and head turned very slightly off-axis, chin level, gaze directed just past the lens with a calm neutral expression and the lips barely parted mid-sentence, wearing a plain pale button-up shirt with the collar open, the fabric lightly creased at the shoulder and sleeve. Behind the subject, the street runs deep into the frame: a tall vertical neon sign in hot magenta and cyan on the left, curved mid-rise towers on the right traced with bands of pink and cyan tubing and warm lit windows, rows of palms silhouetted at two depths against a peach and lavender gradient sky, storefront signage in green and pink glowing along the sidewalk, the asphalt catching soft colored reflections, everything behind the subject falling into heavy engine bloom and simplified depth. Rendered as a high-end real-time game character model rather than a photograph: the surface reads as a sculpted digital asset, skin built on strong subsurface scattering that lets warm light bleed through the ear edges and along the nose, a soft even sheen across the forehead and cheek planes, pores and fine lines present but smoothed and uniformly distributed the way a hand-authored character texture behaves, slightly waxy specular response, hair modeled as clean sculpted volume with defined strand groupings catching a bright warm edge, fabric with crisp simulated folds and clean seam geometry, polished glassy micro-shine on every surface, while anatomy and proportion stay grounded and true to life. Identity comes from the character reference; pose, wardrobe, environment, lighting, rendering and grading come from this description. Ensure the subject's face and features remain completely unchanged from the reference. LIGHTING: warm low sun key from camera-left raking across the brow, cheek and hair edge with a strong golden rim, cool teal-cyan neon spill filling the camera-right side of the face and neck, moderate overall level with shadows prominent under the brow line and along the jaw, shadow side visible but noticeably darker, strong soft bloom around every neon source behind. COLOR GRADING: teal and amber palette, deep teal-green shadows (#0A1A1A), desaturated green-gray midtones (#3A4A3A), warm amber highlights (#D4A456), magenta accents held in the signage, controlled blacks, filmic highlight rolloff. CAMERA SPECIFICATIONS: medium close-up from the chest upward at eye level, centered hero composition, shallow depth of field with the boulevard fully soft behind, virtual camera emulating a Sony Venice with a Cooke S4 at 50mm, f/1.8, replicate precisely the warm organic rendering, creamy bokeh and gentle halation of that lens. Grounded proportions and true likeness throughout, presented as a polished real-time engine render.`,
        negativePrompt: "blurry, low quality, deformed, extra limbs, bad anatomy, flat 2D illustration",
        parameters: "--ar 4:5 --style raw --v 6.1",
        tags: ["Boulevard", "Neon Twilight", "Retrato"]
      },
      {
        id: "e1-02",
        title: "02. Beachfront Walkway & Dollar Stack",
        image: "../assets/prompts/estilo-1/02_beach_cash.jpg",
        prompt: `The subject from the reference image, framed from the chest upward, standing on a beachfront walkway at dusk, shoulders angled slightly off-axis, one hand raised into the lower frame holding a thick fanned stack of US hundred dollar bills, chin slightly raised, gaze directed straight into the lens with an ambitious self-assured expression, one corner of the mouth lifted in a confident half-smirk, wearing an unbuttoned camp shirt in soft washed fabric worn open over a plain fitted tee, the collar catching the breeze. Behind the subject, the ocean stretches to a low horizon with the last sun sitting on the waterline, gentle surf catching golden broken reflections, tall palms silhouetted at two depths along the sand, a pastel deco strip running down the right with cyan and magenta neon just coming alive, distant tower windows glowing warm, everything behind falling into heavy engine bloom and simplified depth. Rendered as a high-end real-time game character model rather than a photograph: the surface reads as a sculpted digital asset, skin built on strong subsurface scattering that lets warm light bleed through the ear edges and along the nose, a soft even sheen across the forehead and cheek planes, pores and fine lines present but smoothed and uniformly distributed the way a hand-authored character texture behaves, slightly waxy specular response, hair modeled as clean sculpted volume with defined strand groupings lifting slightly in the wind, fabric with crisp simulated folds and clean seam geometry, the banknotes rendered with crisp paper edges, printed detail and a matte fibrous surface, polished glassy micro-shine across the scene, while anatomy and proportion stay grounded and true to life. Identity comes from the character reference; pose, wardrobe, environment, lighting, rendering and grading come from this description. Ensure the subject's face and features remain completely unchanged from the reference. LIGHTING: warm low sun key from camera-left raking across the brow, cheekbone, jaw and hair edge with a strong golden rim, cool sky bounce and teal-cyan neon spill filling the camera-right side of the face and neck, warm reflected light catching the top edges of the banknotes, moderate overall level with shadows prominent under the brow line and along the jaw, shadow side visible but noticeably darker, gentle lens flare where the sun clips the frame edge and soft bloom around the neon. COLOR GRADING: dark warm orange palette, shadows (#050200), midtones (#3A2015), highlights (#C87045), teal and magenta accents held in the sky and signage, controlled blacks, filmic highlight rolloff. CAMERA SPECIFICATIONS: medium close-up from the chest upward at a slight low angle looking up at the subject for dominance, centered hero composition, shallow depth of field with the beach and strip fully soft behind, virtual camera emulating a Sony Venice with a Cooke S4 at 50mm, f/1.8, replicate precisely the warm organic rendering, creamy bokeh and gentle halation of that lens. Grounded proportions and true likeness throughout, presented as a polished real-time engine render.`,
        negativePrompt: "blurry, low quality, deformed, extra fingers, bad anatomy",
        parameters: "--ar 4:5 --style raw --v 6.1",
        tags: ["Praia", "Dólares", "Sunset Ocean"]
      },
      {
        id: "e1-03",
        title: "03. 1970s Silver Muscle Car",
        image: "../assets/prompts/estilo-1/03_muscle_car.jpg",
        prompt: `The subject from the reference image, framed from the waist upward, leaning back against the front fender of a car parked on a beachfront boulevard at dusk, weight settled onto the car, arms loosely crossed at the chest, shoulders angled slightly off-axis, chin level, gaze directed straight into the lens with a confident composed expression, wearing a plain fitted tank top and loose cargo trousers, the fabric creased and hanging with real weight. The car is a 1970s American muscle sedan in gunmetal silver: long flat hood, quad round headlights set into a blacked-out grille, chrome bumper and trim catching the low sun, wide chrome five-spoke wheels, low aggressive stance, the paint holding soft reflections of the sky. Behind, the boulevard runs into the frame: pastel deco hotel facades along the right, tall palms silhouetted at two depths, a peach and lavender gradient sky over a low horizon, distant tower windows and early neon glowing warm, everything behind falling into heavy engine bloom and simplified depth. Rendered as a high-end real-time game character model rather than a photograph: the surface reads as a sculpted digital asset, skin built on strong subsurface scattering that lets warm light bleed through the ear edges and along the nose, a soft even sheen across the forehead and cheek planes, pores and fine lines present but smoothed and uniformly distributed the way a hand-authored character texture behaves, slightly waxy specular response, hair modeled as clean sculpted volume with defined strand groupings, fabric with crisp simulated folds and clean seam geometry, the car rendered with clean panel geometry, sharp reflection lines running down the bodywork and polished chrome micro-shine, while anatomy and proportion stay grounded and true to life. Identity comes from the character reference; pose, wardrobe, environment, lighting, rendering and grading come from this description. Ensure the subject's face and features remain completely unchanged from the reference. LIGHTING: warm low sun key from camera-left raking across the brow, cheekbone, jaw and hair edge with a strong golden rim, the same light skimming along the top of the hood and firing off the chrome, cool sky bounce and faint teal neon spill filling the camera-right side of the face, moderate overall level with shadows prominent under the brow line and along the jaw, shadow side visible but noticeably darker, gentle lens flare where the sun clips the frame edge. COLOR GRADING: dark warm orange palette, shadows (#050200), midtones (#3A2015), highlights (#C87045), lavender and teal accents held in the sky and distant signage, controlled blacks, filmic highlight rolloff. CAMERA SPECIFICATIONS: medium shot from the waist upward at a slight low angle, three-quarter angle with the car receding to camera-left, shallow depth of field with the boulevard fully soft behind, virtual camera emulating a Sony Venice with a Cooke S4 at 40mm, f/2.0, replicate precisely the warm organic rendering, creamy bokeh and gentle halation of that lens. Grounded proportions and true likeness throughout, presented as a polished real-time engine render.`,
        negativePrompt: "blurry, low quality, deformed, extra limbs, bad anatomy",
        parameters: "--ar 4:5 --style raw --v 6.1",
        tags: ["Muscle Car", "Art Déco", "Entardecer"]
      },
      {
        id: "e1-04",
        title: "04. Highway Cruiser Motorcycle",
        image: "../assets/prompts/estilo-1/04_motorcycle_cruise.jpg",
        prompt: `The subject from the reference image, framed from the waist upward astride a motorcycle, both hands gripping the wide handlebars with the arms extended and the shoulders squared into the ride, torso upright, chin level, head turned to face the lens with a hard composed expression, wearing a plain fitted tank top and a cap worn backwards, a thin chain at the neck, the fabric creased and hanging with real weight. The motorcycle fills the lower foreground: a chrome-heavy cruiser with a large round headlamp on the left, polished fork tubes and mirror stems catching hard specular hits, a deep red fuel tank, wide swept handlebars crossing the frame, hand controls and levers rendered in clean mechanical detail. Behind, an open sky dominates the frame: deep blue with a large sunlit cumulus cloud bank, the coastline and a strip of ocean sitting low at the horizon, a small propeller plane crossing at the right in the middle distance, everything behind falling into soft engine bloom and simplified depth. Rendered as a high-end real-time game character model rather than a photograph: the surface reads as a sculpted digital asset, skin built on strong subsurface scattering that lets sunlight bleed through the ear edges and along the nose, a soft even sheen across the forehead and cheek planes, pores and fine lines present but smoothed and uniformly distributed the way a hand-authored character texture behaves, slightly waxy specular response, the shoulders and arms carrying clean sculpted muscle definition, fabric with crisp simulated folds and clean seam geometry, the motorcycle rendered with sharp panel geometry, mirror-polished chrome micro-shine and crisp reflection lines running along the tank and forks, while anatomy and proportion stay grounded and true to life. Identity comes from the character reference; pose, wardrobe, environment, lighting, rendering and grading come from this description. Ensure the subject's face and features remain completely unchanged from the reference. LIGHTING: hard high midday sun keying from camera-left, bright hot highlights on the shoulder, cheekbone and jaw with a warm rim along the arm, deep contrasty shadow falling on the camera-right side of the face and under the brow line, strong cool sky bounce filling the shadow side, blown specular hits firing off the chrome and headlamp glass, high contrast with shadow side visible but noticeably darker. COLOR GRADING: teal and amber palette, deep teal-green shadows (#0A1A1A), desaturated green-gray midtones (#3A4A3A), warm amber highlights (#D4A456), rich saturated blue held in the sky, controlled blacks, filmic highlight rolloff. CAMERA SPECIFICATIONS: medium shot from the waist upward at a low angle looking up at the subject from just ahead of the front wheel, centered hero composition with the handlebars cutting across the foreground, moderate depth of field with the sky and clouds softly rendered, virtual camera emulating an Arri Alexa 35 with a Zeiss Ultra Prime at 35mm, f/4, replicate precisely the clinical sharpness, neutral color rendering and controlled flaring of that lens. Grounded proportions and true likeness throughout, presented as a polished real-time engine render.`,
        negativePrompt: "blurry, low quality, deformed, extra arms, bad anatomy",
        parameters: "--ar 4:5 --style raw --v 6.1",
        tags: ["Moto Custom", "Céu Aberto", "High Noon"]
      },
      {
        id: "e1-05",
        title: "05. Hotel Promenade & Poolside",
        image: "../assets/prompts/estilo-1/05_hotel_promenade.jpg",
        prompt: `The subject from the reference image, framed from just above the waist upward, standing on a lit hotel promenade at night with one shoulder leaned back against a thick palm trunk, weight settled onto it, one hand holding a phone up at chest height with the screen throwing a faint glow onto the fingers, a watch on the wrist, head turned toward the lens with a guarded alert expression, wearing a plain fitted dark t-shirt with the words "Prendeu, matou" printed across the chest in clean bold sans-serif lettering, the text crisp, correctly spelled and clearly legible, the fabric hanging with real weight and creased at the shoulder. The palm trunk runs floor to ceiling through the right of the frame in sharp foreground detail, its rough fibrous bark catching a warm edge. Behind, a mid-century hotel facade is banded with continuous warm amber light strips running along each floor, tall lit palms flanking the walkway, a poolside terrace below with cyan and magenta neon glowing along the bar front, everything behind falling into heavy engine bloom and simplified depth. Rendered as a high-end real-time game character model rather than a photograph: the surface reads as a sculpted digital asset, skin built on strong subsurface scattering that lets the warm light bleed through the ear edges and along the nose, a soft even sheen across the forehead and cheek planes, pores and fine lines present but smoothed and uniformly distributed the way a hand-authored character texture behaves, slightly waxy specular response, the forearms carrying clean sculpted definition, hair modeled as clean sculpted volume with defined strand groupings, fabric with crisp simulated folds, clean seam geometry and the printed lettering sitting flat on the weave and following the folds of the shirt, polished glassy micro-shine across the scene, while anatomy and proportion stay grounded and true to life. Identity comes from the character reference; pose, wardrobe, environment, lighting, rendering and grading come from this description. Ensure the subject's face and features remain completely unchanged from the reference. LIGHTING: warm amber practical key from the facade light strips behind and camera-left, throwing a strong golden rim along the hair, cheek and shoulder edge and separating the subject from the dark trunk, cool cyan spill from the poolside neon filling the camera-right side of the face and the forearm, faint cold screen light lifting the underside of the chin and hand, low overall light level with shadows prominent throughout the frame, shadow under the brow line and along the jaw, shadow side visible but noticeably darker, the chest lettering catching enough key light to stay readable, strong soft bloom around every light strip and neon source. COLOR GRADING: teal and amber palette, deep teal-green shadows (#0A1A1A), desaturated green-gray midtones (#3A4A3A), warm amber highlights (#D4A456), magenta accents held in the distant signage, controlled blacks, filmic highlight rolloff. CAMERA SPECIFICATIONS: medium shot from just above the waist upward at eye level, subject weighted to the left of frame with the palm trunk and lit facade filling the right, shallow depth of field with the promenade fully soft behind, virtual camera emulating a Sony Venice with a Cooke S4 at 50mm, f/2.0, replicate precisely the warm organic rendering, creamy bokeh and gentle halation of that lens. Grounded proportions and true likeness throughout, presented as a polished real-time engine render.`,
        negativePrompt: "blurry, low quality, deformed, extra hands, bad anatomy",
        parameters: "--ar 4:5 --style raw --v 6.1",
        tags: ["Hotel Motel", "Piscina Neon", "Celular"]
      },
      {
        id: "e1-06",
        title: "06. Gas Station at Dusk",
        image: "../assets/prompts/estilo-1/06_gas_station.jpg",
        prompt: `The subject from the reference image, framed from the waist upward, standing on the forecourt of a gas station at dusk with the arms crossed firmly at the chest, shoulders squared to camera, chin level, gaze directed straight into the lens with a hard composed expression, wearing an open camp shirt over a plain fitted tee, sleeves pushed to the forearm, the fabric creased at the shoulder. Beside the subject a fuel pump stands in sharp detail, its price display glowing, the canopy edge above traced with a continuous magenta neon tube. Behind, the station front runs across the frame: a convenience store with a big cyan and hot pink illuminated sign over the entrance, warm amber light pouring out through the glass, a wall of vertical neon striping down the side of the building, tall palms silhouetted against a peach and lavender gradient sky with the last sun low on the horizon, a chrome-heavy car parked at the far pump catching a golden hit, distant deco facades and early signage glowing along the road, everything behind falling into heavy engine bloom and simplified depth with a stylised saturated palette. Rendered as a high-end real-time game character model rather than a photograph: the surface reads as a sculpted digital asset, skin built on strong subsurface scattering that lets the coloured light bleed through the ear edges and along the nose, a soft even sheen across the forehead and cheek planes, pores and fine lines present but smoothed and uniformly distributed the way a hand-authored character texture behaves, slightly waxy specular response, the crossed forearms carrying clean sculpted definition, hair modeled as clean sculpted volume with defined strand groupings catching a bright warm edge, fabric with crisp simulated folds and clean seam geometry, the pump and car rendered with clean panel geometry, crisp emissive signage and mirror-polished chrome micro-shine, while anatomy and proportion stay grounded and true to life. Identity comes from the character reference; pose, wardrobe, environment, lighting, rendering and grading come from this description. Ensure the subject's face and features remain completely unchanged from the reference. LIGHTING: warm low sun key from camera-left raking across the brow, cheekbone, jaw and hair edge with a strong golden rim, hot magenta neon from the canopy tube washing the camera-right side of the face, neck and forearms, cyan spill from the store sign kicking the shoulder, moderate overall level with shadows prominent under the brow line and along the jaw, shadow side visible but noticeably darker, strong soft bloom around every neon source and a gentle flare where the sun clips the frame edge. COLOR GRADING: teal and amber palette, deep teal-green shadows (#0A1A1A), desaturated green-gray midtones (#3A4A3A), warm amber highlights (#D4A456), saturated magenta and cyan accents carried in the neon and spill, controlled blacks, filmic highlight rolloff. CAMERA SPECIFICATIONS: medium shot from the waist upward at a slight low angle looking up at the subject, centered hero composition with the pump anchoring one side and the station front receding behind, shallow depth of field with the forecourt fully soft, virtual camera emulating a Sony Venice with a Cooke S4 at 50mm, f/1.8, replicate precisely the warm organic rendering, creamy bokeh and gentle halation of that lens. Grounded proportions and true likeness throughout, presented as a polished real-time engine render.`,
        negativePrompt: "blurry, low quality, deformed, extra fingers, bad anatomy",
        parameters: "--ar 4:5 --style raw --v 6.1",
        tags: ["Posto de Gasolina", "Neon Magenta", "Dusk"]
      },
      {
        id: "e1-07",
        title: "07. Casino Floor & Slot Machine",
        image: "../assets/prompts/estilo-1/07_casino_slots.jpg",
        prompt: `The subject from the reference image, framed from the waist upward, seated at a slot machine on a busy casino floor, body turned toward the machine with one hand still resting on the console buttons, torso twisted and head turned back over the shoulder toward the lens, chin level, gaze directed straight into the camera with a composed knowing expression, caught mid-turn as if looking back from the game, wearing an open dark shirt over a plain fitted tee, the fabric creased at the shoulder, a watch on the wrist. The slot machine fills the left of the frame in sharp foreground detail: a tall cabinet with a curved glass screen glowing with bright spinning reel symbols, a chrome-trimmed console with backlit buttons, an illuminated topper panel above, a molded seat back. Behind, a long aisle of identical machines runs deep into the frame in receding rows, their screens and topper lights forming continuous bands of magenta, cyan, gold and green down both sides, patterned carpet with a loud geometric print, mirrored columns and gold trim on the ceiling, glowing signage panels overhead, chandeliers and a distant gaming pit far back, a few figures moving out of focus between the aisles, thin haze hanging in the light, everything behind falling into heavy engine bloom and simplified depth with a stylised saturated palette. Rendered as a high-end real-time game character model rather than a photograph: the surface reads as a sculpted digital asset, skin built on strong subsurface scattering that lets the coloured light bleed through the ear edges and along the nose, a soft even sheen across the forehead and cheek planes, pores and fine lines present but smoothed and uniformly distributed the way a hand-authored character texture behaves, slightly waxy specular response, hair modeled as clean sculpted volume with defined strand groupings, fabric with crisp simulated folds and clean seam geometry, the machine rendered with clean panel geometry, crisp emissive screen graphics and mirror-polished chrome micro-shine, the carpet pattern crisply resolved near the subject and dissolving into bloom with distance, while anatomy and proportion stay grounded and true to life. Identity comes from the character reference; pose, wardrobe, environment, lighting, rendering and grading come from this description. Ensure the subject's face and features remain completely unchanged from the reference. LIGHTING: the scene is lit almost entirely by the machines themselves, cool cyan and magenta emissive light from the adjacent screen keying the camera-left side of the face, brow and shoulder at close range, warm gold spill from the aisle toppers filling from camera-right and rimming the hair and jaw, faint green kick from a machine behind, low overall ambient level with shadows prominent throughout the aisle, shadow under the brow line and along the jaw, shadow side visible but noticeably darker, strong soft bloom around every screen and light strip, visible light haze along the aisle. COLOR GRADING: cyan and magenta palette, deep blue-black shadows (#050A14), electric cyan midtones (#00D4FF), hot magenta highlights (#FF0080), warm gold accents held in the toppers and trim, crushed blacks, saturated but controlled neon spill. CAMERA SPECIFICATIONS: medium shot from the waist upward at eye level from just behind the subject's shoulder, three-quarter angle with the slot cabinet anchoring the left foreground and the aisle receding to the right, shallow depth of field with the far machines fully soft, virtual camera emulating a Sony Venice with a Cooke S4 at 40mm, f/1.8, replicate precisely the warm organic rendering, creamy bokeh and gentle halation of that lens. Grounded proportions and true likeness throughout, presented as a polished real-time engine render.`,
        negativePrompt: "blurry, low quality, deformed, extra arms, bad anatomy",
        parameters: "--ar 4:5 --style raw --v 6.1",
        tags: ["Cassino", "Caça-Níquel", "Neon Lights"]
      },
      {
        id: "e1-08",
        title: "08. Beachfront Promenade Ocean Drive",
        image: "../assets/prompts/estilo-1/08_art_deco_beach.jpg",
        prompt: `The subject from the reference image, framed from the waist upward, standing on a beachfront promenade with shoulders angled slightly off-axis to camera, chin level, gaze directed into the lens with a relaxed half-smile, wearing an open short-sleeve camp shirt in soft washed fabric over a plain fitted tee. Behind the subject, a pastel art deco strip lines the boulevard, cyan and magenta neon tubing tracing the facades, a lit sign glowing above the storefronts, tall palms silhouetted against a pink and orange gradient sky, parked cars and headlights receding down the wet asphalt into soft engine bloom. Rendered as a high-end real-time game character model rather than a photograph: the surface reads as a sculpted digital asset, skin built on strong subsurface scattering that lets warm light bleed through the ear edges and nose, a soft even sheen across the forehead and cheek planes, pores and fine lines present but smoothed and uniformly distributed the way a hand-authored character texture behaves, slightly waxy specular response, hair modeled as clean sculpted volume with defined strand groupings, fabric with crisp simulated folds and clean seam geometry, polished glassy micro-shine on every surface, while anatomy and proportion stay grounded and true to life. Identity comes from the character reference; pose, wardrobe, environment, lighting, rendering and grading come from this description. Ensure the subject's face and features remain completely unchanged from the reference. LIGHTING: warm low sun key raking from camera-right with a bright rim along the jaw and shoulder, cool skylight and magenta-cyan neon spill filling from camera-left, moderate overall level, shadows prominent on the camera-left cheek plane, shadow side noticeably darker, soft bloom around every neon source. COLOR GRADING: teal and amber palette, deep teal-green shadows (#0A1A1A), desaturated green-gray midtones (#3A4A3A), warm amber highlights (#D4A456), controlled blacks, filmic rolloff. CAMERA SPECIFICATIONS: medium shot from the waist upward at eye level, centered hero composition, shallow depth of field, virtual camera emulating a Sony Venice with a Cooke S4 at f/2.0, replicate precisely the warm organic rendering, creamy bokeh and gentle halation of that lens. Grounded proportions and true likeness throughout, presented as a polished real-time engine render.`,
        negativePrompt: "blurry, low quality, deformed, extra fingers, bad anatomy",
        parameters: "--ar 4:5 --style raw --v 6.1",
        tags: ["Ocean Drive", "Art Déco", "Palmeiras"]
      }
    ]
  }
  ,
  {
    id: "estilo-2",
    badge: "COMBO 02",
    name: "Estilo 02: GTA VI Ilustração 2D Key-Art (Estilo Desenho)",
    slug: "estilo-2",
    icon: "fa-paintbrush",
    description: "Arte vetorial e pintura digital 2D inspirada nas clássicas telas de carregamento da Rockstar Games. Preserva 100% da sua identidade com traços de tinta, planos angulares de cor e cel-shading tropical.",
    toolRecommended: "Nano Banana Pro / Gemini / Midjourney / Fooocus",
    items: [
      {
        id: "e2-01",
        title: "01. Retrato no Espelho (Justin Bieber)",
        image: "../assets/prompts/estilo-2/01_justin_bieber_mirror.jpg",
        prompt: `{
  "TASK": "IMAGE-TO-IMAGE STYLE TRANSFORMATION",

  "PRIMARY_INSTRUCTION": "Use the uploaded photo as the strict structural source. Recreate the SAME person or people, SAME facial identity, SAME hairstyle, SAME body proportions, SAME pose, SAME hand positions, SAME clothing, SAME accessories, SAME objects, SAME environment, SAME camera angle, SAME perspective, SAME crop and SAME composition. Do not redesign, beautify, simplify, reposition or invent elements. Change ONLY the visual rendering language into a premium semi-realistic 2D open-world crime videogame key-art illustration.",

  "IDENTITY_PRESERVATION": "Highest priority: preserve the subject's recognizable facial identity from the input image. Maintain exact face shape, jaw width, cheekbones, nose shape, eyebrow shape, eye spacing, eyelids, lips, hairline, hairstyle, facial hair, age characteristics, skin tone and distinctive features. The final image must clearly depict the same individual from the source photograph, illustrated rather than photographed. Do not replace the face with a generic attractive videogame character.",

  "COMPOSITION_LOCK": "Treat the source image as an immutable composition blueprint. Preserve subject scale, body orientation, head angle, gaze direction, limb placement, hand gestures, object positions, foreground/background relationships, horizon, perspective and crop. Do not convert a standing pose into sitting, do not change camera distance, do not introduce a new environment.",

  "ART_DIRECTION": "high-end hand-painted 2D character key art, mature semi-realistic graphic illustration, cinematic open-world crime-game promotional artwork aesthetic, realistic anatomy translated into deliberate illustrated planes, sophisticated comic-influenced rendering without looking like a comic panel, strong editorial polish, believable human proportions, assertive silhouettes, dense character detail combined with selectively simplified environmental detail",

  "LINEWORK": "confident hand-drawn dark contour work, predominantly deep charcoal, dark plum and blue-black instead of pure black; variable line weight with thick external silhouette contours, medium structural lines around clothing and anatomy, extremely restrained thin internal facial lines; contours subtly broken where strong light hits the form; organic hand-inked character rather than uniform vector strokes; avoid identical line thickness throughout the image",

  "FACE_RENDERING": "preserve the source face exactly while translating it through semi-realistic illustrated construction. Build the face from multiple angular tonal planes: warm local skin midtone, deep muted plum-brown core shadows, peach and rose transitional planes, narrow pale-gold highlights. Sculpt cheekbones, temples, jaw, nose bridge, eye sockets and forehead through color shapes and directional shading rather than excessive outlines. Eyes detailed but not anime-like; restrained catchlights; realistic eyelids; natural asymmetry preserved. Skin should feel painted and dimensional, never flat vector fill.",

  "ANATOMY_RENDERING": "realistic adult anatomy with subtle graphic exaggeration only where perspective demands it. Arms, shoulders, neck, hands and legs constructed with multiple overlapping planes of light and shadow. Show believable bone structure, muscle tension, tendons and joints without superhero exaggeration. Hands receive careful anatomical treatment, defined knuckles and finger articulation. Never simplify limbs into flat cartoon tubes.",

  "SHADING_SYSTEM": "complex hybrid cel-painted shading using 4 to 7 distinct tonal families per important form. Large hard-edged shadow masses establish structure, secondary midtone planes model volume, narrow warm highlights describe direct sunlight, subtle reflected lavender or pink light appears inside selected shadows. Some transitions remain crisp while selected facial and skin transitions receive controlled painted softness. Never use simple two-tone cel shading.",

  "LIGHTING_TRANSLATION": "retain the approximate light direction present in the source photograph but reinterpret it cinematically. Strong sculptural directional light, warm cream-to-golden highlights cutting across faces, arms, clothing and objects; cool violet, dusty-magenta and blue ambient fill inside shadows; pronounced rim-light selectively separating important silhouettes. Light shapes should be deliberately designed and irregular, creating dramatic graphic patches across anatomy and fabric.",

  "COLOR_LANGUAGE": "cinematic tropical pastel color grading built around dusty cyan, aqua, muted turquoise, lavender, violet-blue, dusty rose, salmon, peach, warm cream and pale golden sunlight, balanced by deep burgundy, plum, navy and charcoal shadows. Preserve the actual colors of clothing, skin and important source objects while shifting their tonal relationships into this palette. Sophisticated saturation: colorful but never fluorescent, childish or candy-like.",

  "CLOTHING_RENDERING": "preserve every garment from the source image. Render fabric using anatomical folds, angular polygonal shadow shapes, overlapping midtones and selective rim highlights. Seams, collars, pockets, buttons, tears, printed patterns and fabric weight should remain recognizable. Avoid flat areas of uninterrupted color.",

  "HAIR_RENDERING": "preserve exact hairstyle and hairline. Construct hair as layered graphic masses containing individually suggested strand groups, deep internal shadow shapes, selective warm rim highlights and a few sharp reflected-light accents. Hair must have volume and directional flow without photorealistic strand-by-strand rendering.",

  "MATERIAL_RENDERING": "translate each material differently: skin uses layered warm/cool painted planes; cotton uses broad matte folds; denim uses sharper crease networks; leather uses dark broad masses plus controlled specular streaks; polished metal and jewelry use tiny high-contrast cream highlights; glass uses simplified geometric reflections; vehicles use broad painted reflection shapes; water uses layered cyan, lavender and pale-gold graphic reflections. Avoid uniform material treatment.",

  "BACKGROUND_RENDERING": "preserve the original environment and architecture but reduce background information strategically rather than replacing it. Convert distant buildings, foliage, furniture, vehicles and scenery into layered geometric painted masses with approximately 40 percent less micro-detail than the protagonist. Maintain recognizable spatial structure and perspective. Use atmospheric lavender-blue separation for distance while retaining important source-specific landmarks and objects.",

  "DEPTH_SYSTEM": "foreground receives strongest contours, richest shadows and highest local contrast; main subject receives maximum facial, anatomical and clothing detail; middle ground uses moderately reduced line density; distant background becomes progressively flatter, softer and more pastel. Achieve depth through illustration hierarchy rather than photographic depth-of-field blur.",

  "EDGE_CONTROL": "mix crisp inked edges, sharp polygonal shadow boundaries, partially lost edges inside dark regions and occasional softened painted transitions. Avoid perfectly smooth computer-vector edges everywhere. Important silhouette intersections remain extremely readable.",

  "SURFACE_FINISH": "premium digital painting finish with subtle hand-painted irregularity, extremely clean but not sterile. Fine tonal variation inside large color fields, delicate grain in shadow gradients, occasional visible brush-shaped transition, controlled texture on skin and fabric. No photographic pores and no obvious canvas texture.",

  "DETAIL_DENSITY": "high detail on faces, hands, tattoos, jewelry, clothing folds and foreground props; medium detail on nearby environment; intentionally reduced detail in distant architecture and sky. Maintain a sophisticated hierarchy comparable to expensive videogame promotional key art rather than generic AI illustration.",

  "CAMERA": "preserve the source photograph's exact camera position, focal perspective, crop and aspect ratio. Do not automatically transform the image into a centered character poster. If the source is candid, preserve candid framing; if close-up, preserve close-up; if full body, preserve full body; if multiple people are present, preserve their exact spatial relationship.",

  "MOOD": "mature, cinematic, glamorous, tense and contemporary; polished narrative key art from a fictional tropical urban crime drama. The result should feel hand-directed by a professional concept-art team, not like a cartoon filter applied to a photograph.",

  "STYLE_CONSISTENCY_RULE": "Across every new source photograph, keep this exact rendering grammar constant: dark variable hand-inked contours + semi-realistic anatomy + multi-plane painted faces + complex hard/soft cel-paint shading + burgundy/plum shadow masses + pale golden directional highlights + lavender reflected light + tropical pastel environmental palette + simplified geometric distance + highly detailed characters. Only the photographic content changes.",

  "DO_NOT_CHANGE": "identity, ethnicity, age, body type, facial proportions, hairstyle, expression unless impossible to preserve, clothing design, tattoos, accessories, pose, gesture, number of people, objects, location, architecture, perspective, framing, camera angle or narrative content of the source image",

  "NEGATIVE_PROMPT": "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children's animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face, generic videogame character face, identity drift, changed hairstyle, changed clothing, changed pose, changed camera angle, invented accessories, simplified anatomy, two-tone cel shading, uniform line thickness, perfectly smooth vector curves, flat skin, flat clothing, minimal shading, pastel children's poster, excessive neon, oversaturated colors, watercolor, oil impasto, pencil sketch, rough concept sketch, comic halftone dots, black-and-white ink drawing, photographic depth-of-field, excessive bokeh, text, typography, logo, watermark, interface elements"
}`,
        negativePrompt: "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face",
        parameters: "Image-to-Image (Nano Banana Pro / Gemini / Midjourney --cref)",
        tags: ["Ilustração 2D", "Rockstar Art", "Key-Art", "Espelho"]
      },
      {
        id: "e2-02",
        title: "02. Marina e Jet Ski (Drake Vice City)",
        image: "../assets/prompts/estilo-2/02_drake_jetski.jpg",
        prompt: `{
  "TASK": "IMAGE-TO-IMAGE STYLE TRANSFORMATION",

  "PRIMARY_INSTRUCTION": "Use the uploaded photo as the strict structural source. Recreate the SAME person or people, SAME facial identity, SAME hairstyle, SAME body proportions, SAME pose, SAME hand positions, SAME clothing, SAME accessories, SAME objects, SAME environment, SAME camera angle, SAME perspective, SAME crop and SAME composition. Do not redesign, beautify, simplify, reposition or invent elements. Change ONLY the visual rendering language into a premium semi-realistic 2D open-world crime videogame key-art illustration.",

  "IDENTITY_PRESERVATION": "Highest priority: preserve the subject's recognizable facial identity from the input image. Maintain exact face shape, jaw width, cheekbones, nose shape, eyebrow shape, eye spacing, eyelids, lips, hairline, hairstyle, facial hair, age characteristics, skin tone and distinctive features. The final image must clearly depict the same individual from the source photograph, illustrated rather than photographed. Do not replace the face with a generic attractive videogame character.",

  "COMPOSITION_LOCK": "Treat the source image as an immutable composition blueprint. Preserve subject scale, body orientation, head angle, gaze direction, limb placement, hand gestures, object positions, foreground/background relationships, horizon, perspective and crop. Do not convert a standing pose into sitting, do not change camera distance, do not introduce a new environment.",

  "ART_DIRECTION": "high-end hand-painted 2D character key art, mature semi-realistic graphic illustration, cinematic open-world crime-game promotional artwork aesthetic, realistic anatomy translated into deliberate illustrated planes, sophisticated comic-influenced rendering without looking like a comic panel, strong editorial polish, believable human proportions, assertive silhouettes, dense character detail combined with selectively simplified environmental detail",

  "LINEWORK": "confident hand-drawn dark contour work, predominantly deep charcoal, dark plum and blue-black instead of pure black; variable line weight with thick external silhouette contours, medium structural lines around clothing and anatomy, extremely restrained thin internal facial lines; contours subtly broken where strong light hits the form; organic hand-inked character rather than uniform vector strokes; avoid identical line thickness throughout the image",

  "FACE_RENDERING": "preserve the source face exactly while translating it through semi-realistic illustrated construction. Build the face from multiple angular tonal planes: warm local skin midtone, deep muted plum-brown core shadows, peach and rose transitional planes, narrow pale-gold highlights. Sculpt cheekbones, temples, jaw, nose bridge, eye sockets and forehead through color shapes and directional shading rather than excessive outlines. Eyes detailed but not anime-like; restrained catchlights; realistic eyelids; natural asymmetry preserved. Skin should feel painted and dimensional, never flat vector fill.",

  "ANATOMY_RENDERING": "realistic adult anatomy with subtle graphic exaggeration only where perspective demands it. Arms, shoulders, neck, hands and legs constructed with multiple overlapping planes of light and shadow. Show believable bone structure, muscle tension, tendons and joints without superhero exaggeration. Hands receive careful anatomical treatment, defined knuckles and finger articulation. Never simplify limbs into flat cartoon tubes.",

  "SHADING_SYSTEM": "complex hybrid cel-painted shading using 4 to 7 distinct tonal families per important form. Large hard-edged shadow masses establish structure, secondary midtone planes model volume, narrow warm highlights describe direct sunlight, subtle reflected lavender or pink light appears inside selected shadows. Some transitions remain crisp while selected facial and skin transitions receive controlled painted softness. Never use simple two-tone cel shading.",

  "LIGHTING_TRANSLATION": "retain the approximate light direction present in the source photograph but reinterpret it cinematically. Strong sculptural directional light, warm cream-to-golden highlights cutting across faces, arms, clothing and objects; cool violet, dusty-magenta and blue ambient fill inside shadows; pronounced rim-light selectively separating important silhouettes. Light shapes should be deliberately designed and irregular, creating dramatic graphic patches across anatomy and fabric.",

  "COLOR_LANGUAGE": "cinematic tropical pastel color grading built around dusty cyan, aqua, muted turquoise, lavender, violet-blue, dusty rose, salmon, peach, warm cream and pale golden sunlight, balanced by deep burgundy, plum, navy and charcoal shadows. Preserve the actual colors of clothing, skin and important source objects while shifting their tonal relationships into this palette. Sophisticated saturation: colorful but never fluorescent, childish or candy-like.",

  "CLOTHING_RENDERING": "preserve every garment from the source image. Render fabric using anatomical folds, angular polygonal shadow shapes, overlapping midtones and selective rim highlights. Seams, collars, pockets, buttons, tears, printed patterns and fabric weight should remain recognizable. Avoid flat areas of uninterrupted color.",

  "HAIR_RENDERING": "preserve exact hairstyle and hairline. Construct hair as layered graphic masses containing individually suggested strand groups, deep internal shadow shapes, selective warm rim highlights and a few sharp reflected-light accents. Hair must have volume and directional flow without photorealistic strand-by-strand rendering.",

  "MATERIAL_RENDERING": "translate each material differently: skin uses layered warm/cool painted planes; cotton uses broad matte folds; denim uses sharper crease networks; leather uses dark broad masses plus controlled specular streaks; polished metal and jewelry use tiny high-contrast cream highlights; glass uses simplified geometric reflections; vehicles use broad painted reflection shapes; water uses layered cyan, lavender and pale-gold graphic reflections. Avoid uniform material treatment.",

  "BACKGROUND_RENDERING": "preserve the original environment and architecture but reduce background information strategically rather than replacing it. Convert distant buildings, foliage, furniture, vehicles and scenery into layered geometric painted masses with approximately 40 percent less micro-detail than the protagonist. Maintain recognizable spatial structure and perspective. Use atmospheric lavender-blue separation for distance while retaining important source-specific landmarks and objects.",

  "DEPTH_SYSTEM": "foreground receives strongest contours, richest shadows and highest local contrast; main subject receives maximum facial, anatomical and clothing detail; middle ground uses moderately reduced line density; distant background becomes progressively flatter, softer and more pastel. Achieve depth through illustration hierarchy rather than photographic depth-of-field blur.",

  "EDGE_CONTROL": "mix crisp inked edges, sharp polygonal shadow boundaries, partially lost edges inside dark regions and occasional softened painted transitions. Avoid perfectly smooth computer-vector edges everywhere. Important silhouette intersections remain extremely readable.",

  "SURFACE_FINISH": "premium digital painting finish with subtle hand-painted irregularity, extremely clean but not sterile. Fine tonal variation inside large color fields, delicate grain in shadow gradients, occasional visible brush-shaped transition, controlled texture on skin and fabric. No photographic pores and no obvious canvas texture.",

  "DETAIL_DENSITY": "high detail on faces, hands, tattoos, jewelry, clothing folds and foreground props; medium detail on nearby environment; intentionally reduced detail in distant architecture and sky. Maintain a sophisticated hierarchy comparable to expensive videogame promotional key art rather than generic AI illustration.",

  "CAMERA": "preserve the source photograph's exact camera position, focal perspective, crop and aspect ratio. Do not automatically transform the image into a centered character poster. If the source is candid, preserve candid framing; if close-up, preserve close-up; if full body, preserve full body; if multiple people are present, preserve their exact spatial relationship.",

  "MOOD": "mature, cinematic, glamorous, tense and contemporary; polished narrative key art from a fictional tropical urban crime drama. The result should feel hand-directed by a professional concept-art team, not like a cartoon filter applied to a photograph.",

  "STYLE_CONSISTENCY_RULE": "Across every new source photograph, keep this exact rendering grammar constant: dark variable hand-inked contours + semi-realistic anatomy + multi-plane painted faces + complex hard/soft cel-paint shading + burgundy/plum shadow masses + pale golden directional highlights + lavender reflected light + tropical pastel environmental palette + simplified geometric distance + highly detailed characters. Only the photographic content changes.",

  "DO_NOT_CHANGE": "identity, ethnicity, age, body type, facial proportions, hairstyle, expression unless impossible to preserve, clothing design, tattoos, accessories, pose, gesture, number of people, objects, location, architecture, perspective, framing, camera angle or narrative content of the source image",

  "NEGATIVE_PROMPT": "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children's animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face, generic videogame character face, identity drift, changed hairstyle, changed clothing, changed pose, changed camera angle, invented accessories, simplified anatomy, two-tone cel shading, uniform line thickness, perfectly smooth vector curves, flat skin, flat clothing, minimal shading, pastel children's poster, excessive neon, oversaturated colors, watercolor, oil impasto, pencil sketch, rough concept sketch, comic halftone dots, black-and-white ink drawing, photographic depth-of-field, excessive bokeh, text, typography, logo, watermark, interface elements"
}`,
        negativePrompt: "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face",
        parameters: "Image-to-Image (Nano Banana Pro / Gemini / Midjourney --cref)",
        tags: ["Ilustração 2D", "Jet Ski", "Marina", "Vice City"]
      },
      {
        id: "e2-03",
        title: "03. O Bruxo de Leonida (Ronaldinho Gaúcho)",
        image: "../assets/prompts/estilo-2/03_ronaldinho_gaucho.jpg",
        prompt: `{
  "TASK": "IMAGE-TO-IMAGE STYLE TRANSFORMATION",

  "PRIMARY_INSTRUCTION": "Use the uploaded photo as the strict structural source. Recreate the SAME person or people, SAME facial identity, SAME hairstyle, SAME body proportions, SAME pose, SAME hand positions, SAME clothing, SAME accessories, SAME objects, SAME environment, SAME camera angle, SAME perspective, SAME crop and SAME composition. Do not redesign, beautify, simplify, reposition or invent elements. Change ONLY the visual rendering language into a premium semi-realistic 2D open-world crime videogame key-art illustration.",

  "IDENTITY_PRESERVATION": "Highest priority: preserve the subject's recognizable facial identity from the input image. Maintain exact face shape, jaw width, cheekbones, nose shape, eyebrow shape, eye spacing, eyelids, lips, hairline, hairstyle, facial hair, age characteristics, skin tone and distinctive features. The final image must clearly depict the same individual from the source photograph, illustrated rather than photographed. Do not replace the face with a generic attractive videogame character.",

  "COMPOSITION_LOCK": "Treat the source image as an immutable composition blueprint. Preserve subject scale, body orientation, head angle, gaze direction, limb placement, hand gestures, object positions, foreground/background relationships, horizon, perspective and crop. Do not convert a standing pose into sitting, do not change camera distance, do not introduce a new environment.",

  "ART_DIRECTION": "high-end hand-painted 2D character key art, mature semi-realistic graphic illustration, cinematic open-world crime-game promotional artwork aesthetic, realistic anatomy translated into deliberate illustrated planes, sophisticated comic-influenced rendering without looking like a comic panel, strong editorial polish, believable human proportions, assertive silhouettes, dense character detail combined with selectively simplified environmental detail",

  "LINEWORK": "confident hand-drawn dark contour work, predominantly deep charcoal, dark plum and blue-black instead of pure black; variable line weight with thick external silhouette contours, medium structural lines around clothing and anatomy, extremely restrained thin internal facial lines; contours subtly broken where strong light hits the form; organic hand-inked character rather than uniform vector strokes; avoid identical line thickness throughout the image",

  "FACE_RENDERING": "preserve the source face exactly while translating it through semi-realistic illustrated construction. Build the face from multiple angular tonal planes: warm local skin midtone, deep muted plum-brown core shadows, peach and rose transitional planes, narrow pale-gold highlights. Sculpt cheekbones, temples, jaw, nose bridge, eye sockets and forehead through color shapes and directional shading rather than excessive outlines. Eyes detailed but not anime-like; restrained catchlights; realistic eyelids; natural asymmetry preserved. Skin should feel painted and dimensional, never flat vector fill.",

  "ANATOMY_RENDERING": "realistic adult anatomy with subtle graphic exaggeration only where perspective demands it. Arms, shoulders, neck, hands and legs constructed with multiple overlapping planes of light and shadow. Show believable bone structure, muscle tension, tendons and joints without superhero exaggeration. Hands receive careful anatomical treatment, defined knuckles and finger articulation. Never simplify limbs into flat cartoon tubes.",

  "SHADING_SYSTEM": "complex hybrid cel-painted shading using 4 to 7 distinct tonal families per important form. Large hard-edged shadow masses establish structure, secondary midtone planes model volume, narrow warm highlights describe direct sunlight, subtle reflected lavender or pink light appears inside selected shadows. Some transitions remain crisp while selected facial and skin transitions receive controlled painted softness. Never use simple two-tone cel shading.",

  "LIGHTING_TRANSLATION": "retain the approximate light direction present in the source photograph but reinterpret it cinematically. Strong sculptural directional light, warm cream-to-golden highlights cutting across faces, arms, clothing and objects; cool violet, dusty-magenta and blue ambient fill inside shadows; pronounced rim-light selectively separating important silhouettes. Light shapes should be deliberately designed and irregular, creating dramatic graphic patches across anatomy and fabric.",

  "COLOR_LANGUAGE": "cinematic tropical pastel color grading built around dusty cyan, aqua, muted turquoise, lavender, violet-blue, dusty rose, salmon, peach, warm cream and pale golden sunlight, balanced by deep burgundy, plum, navy and charcoal shadows. Preserve the actual colors of clothing, skin and important source objects while shifting their tonal relationships into this palette. Sophisticated saturation: colorful but never fluorescent, childish or candy-like.",

  "CLOTHING_RENDERING": "preserve every garment from the source image. Render fabric using anatomical folds, angular polygonal shadow shapes, overlapping midtones and selective rim highlights. Seams, collars, pockets, buttons, tears, printed patterns and fabric weight should remain recognizable. Avoid flat areas of uninterrupted color.",

  "HAIR_RENDERING": "preserve exact hairstyle and hairline. Construct hair as layered graphic masses containing individually suggested strand groups, deep internal shadow shapes, selective warm rim highlights and a few sharp reflected-light accents. Hair must have volume and directional flow without photorealistic strand-by-strand rendering.",

  "MATERIAL_RENDERING": "translate each material differently: skin uses layered warm/cool painted planes; cotton uses broad matte folds; denim uses sharper crease networks; leather uses dark broad masses plus controlled specular streaks; polished metal and jewelry use tiny high-contrast cream highlights; glass uses simplified geometric reflections; vehicles use broad painted reflection shapes; water uses layered cyan, lavender and pale-gold graphic reflections. Avoid uniform material treatment.",

  "BACKGROUND_RENDERING": "preserve the original environment and architecture but reduce background information strategically rather than replacing it. Convert distant buildings, foliage, furniture, vehicles and scenery into layered geometric painted masses with approximately 40 percent less micro-detail than the protagonist. Maintain recognizable spatial structure and perspective. Use atmospheric lavender-blue separation for distance while retaining important source-specific landmarks and objects.",

  "DEPTH_SYSTEM": "foreground receives strongest contours, richest shadows and highest local contrast; main subject receives maximum facial, anatomical and clothing detail; middle ground uses moderately reduced line density; distant background becomes progressively flatter, softer and more pastel. Achieve depth through illustration hierarchy rather than photographic depth-of-field blur.",

  "EDGE_CONTROL": "mix crisp inked edges, sharp polygonal shadow boundaries, partially lost edges inside dark regions and occasional softened painted transitions. Avoid perfectly smooth computer-vector edges everywhere. Important silhouette intersections remain extremely readable.",

  "SURFACE_FINISH": "premium digital painting finish with subtle hand-painted irregularity, extremely clean but not sterile. Fine tonal variation inside large color fields, delicate grain in shadow gradients, occasional visible brush-shaped transition, controlled texture on skin and fabric. No photographic pores and no obvious canvas texture.",

  "DETAIL_DENSITY": "high detail on faces, hands, tattoos, jewelry, clothing folds and foreground props; medium detail on nearby environment; intentionally reduced detail in distant architecture and sky. Maintain a sophisticated hierarchy comparable to expensive videogame promotional key art rather than generic AI illustration.",

  "CAMERA": "preserve the source photograph's exact camera position, focal perspective, crop and aspect ratio. Do not automatically transform the image into a centered character poster. If the source is candid, preserve candid framing; if close-up, preserve close-up; if full body, preserve full body; if multiple people are present, preserve their exact spatial relationship.",

  "MOOD": "mature, cinematic, glamorous, tense and contemporary; polished narrative key art from a fictional tropical urban crime drama. The result should feel hand-directed by a professional concept-art team, not like a cartoon filter applied to a photograph.",

  "STYLE_CONSISTENCY_RULE": "Across every new source photograph, keep this exact rendering grammar constant: dark variable hand-inked contours + semi-realistic anatomy + multi-plane painted faces + complex hard/soft cel-paint shading + burgundy/plum shadow masses + pale golden directional highlights + lavender reflected light + tropical pastel environmental palette + simplified geometric distance + highly detailed characters. Only the photographic content changes.",

  "DO_NOT_CHANGE": "identity, ethnicity, age, body type, facial proportions, hairstyle, expression unless impossible to preserve, clothing design, tattoos, accessories, pose, gesture, number of people, objects, location, architecture, perspective, framing, camera angle or narrative content of the source image",

  "NEGATIVE_PROMPT": "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children's animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face, generic videogame character face, identity drift, changed hairstyle, changed clothing, changed pose, changed camera angle, invented accessories, simplified anatomy, two-tone cel shading, uniform line thickness, perfectly smooth vector curves, flat skin, flat clothing, minimal shading, pastel children's poster, excessive neon, oversaturated colors, watercolor, oil impasto, pencil sketch, rough concept sketch, comic halftone dots, black-and-white ink drawing, photographic depth-of-field, excessive bokeh, text, typography, logo, watermark, interface elements"
}`,
        negativePrompt: "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face",
        parameters: "Image-to-Image (Nano Banana Pro / Gemini / Midjourney --cref)",
        tags: ["Ronaldinho", "Camisa 10", "Seleção", "Ilustração 2D"]
      },
      {
        id: "e2-04",
        title: "04. West Coast e Cali Rosé (Snoop Dogg)",
        image: "../assets/prompts/estilo-2/04_snoop_dogg.jpg",
        prompt: `{
  "TASK": "IMAGE-TO-IMAGE STYLE TRANSFORMATION",

  "PRIMARY_INSTRUCTION": "Use the uploaded photo as the strict structural source. Recreate the SAME person or people, SAME facial identity, SAME hairstyle, SAME body proportions, SAME pose, SAME hand positions, SAME clothing, SAME accessories, SAME objects, SAME environment, SAME camera angle, SAME perspective, SAME crop and SAME composition. Do not redesign, beautify, simplify, reposition or invent elements. Change ONLY the visual rendering language into a premium semi-realistic 2D open-world crime videogame key-art illustration.",

  "IDENTITY_PRESERVATION": "Highest priority: preserve the subject's recognizable facial identity from the input image. Maintain exact face shape, jaw width, cheekbones, nose shape, eyebrow shape, eye spacing, eyelids, lips, hairline, hairstyle, facial hair, age characteristics, skin tone and distinctive features. The final image must clearly depict the same individual from the source photograph, illustrated rather than photographed. Do not replace the face with a generic attractive videogame character.",

  "COMPOSITION_LOCK": "Treat the source image as an immutable composition blueprint. Preserve subject scale, body orientation, head angle, gaze direction, limb placement, hand gestures, object positions, foreground/background relationships, horizon, perspective and crop. Do not convert a standing pose into sitting, do not change camera distance, do not introduce a new environment.",

  "ART_DIRECTION": "high-end hand-painted 2D character key art, mature semi-realistic graphic illustration, cinematic open-world crime-game promotional artwork aesthetic, realistic anatomy translated into deliberate illustrated planes, sophisticated comic-influenced rendering without looking like a comic panel, strong editorial polish, believable human proportions, assertive silhouettes, dense character detail combined with selectively simplified environmental detail",

  "LINEWORK": "confident hand-drawn dark contour work, predominantly deep charcoal, dark plum and blue-black instead of pure black; variable line weight with thick external silhouette contours, medium structural lines around clothing and anatomy, extremely restrained thin internal facial lines; contours subtly broken where strong light hits the form; organic hand-inked character rather than uniform vector strokes; avoid identical line thickness throughout the image",

  "FACE_RENDERING": "preserve the source face exactly while translating it through semi-realistic illustrated construction. Build the face from multiple angular tonal planes: warm local skin midtone, deep muted plum-brown core shadows, peach and rose transitional planes, narrow pale-gold highlights. Sculpt cheekbones, temples, jaw, nose bridge, eye sockets and forehead through color shapes and directional shading rather than excessive outlines. Eyes detailed but not anime-like; restrained catchlights; realistic eyelids; natural asymmetry preserved. Skin should feel painted and dimensional, never flat vector fill.",

  "ANATOMY_RENDERING": "realistic adult anatomy with subtle graphic exaggeration only where perspective demands it. Arms, shoulders, neck, hands and legs constructed with multiple overlapping planes of light and shadow. Show believable bone structure, muscle tension, tendons and joints without superhero exaggeration. Hands receive careful anatomical treatment, defined knuckles and finger articulation. Never simplify limbs into flat cartoon tubes.",

  "SHADING_SYSTEM": "complex hybrid cel-painted shading using 4 to 7 distinct tonal families per important form. Large hard-edged shadow masses establish structure, secondary midtone planes model volume, narrow warm highlights describe direct sunlight, subtle reflected lavender or pink light appears inside selected shadows. Some transitions remain crisp while selected facial and skin transitions receive controlled painted softness. Never use simple two-tone cel shading.",

  "LIGHTING_TRANSLATION": "retain the approximate light direction present in the source photograph but reinterpret it cinematically. Strong sculptural directional light, warm cream-to-golden highlights cutting across faces, arms, clothing and objects; cool violet, dusty-magenta and blue ambient fill inside shadows; pronounced rim-light selectively separating important silhouettes. Light shapes should be deliberately designed and irregular, creating dramatic graphic patches across anatomy and fabric.",

  "COLOR_LANGUAGE": "cinematic tropical pastel color grading built around dusty cyan, aqua, muted turquoise, lavender, violet-blue, dusty rose, salmon, peach, warm cream and pale golden sunlight, balanced by deep burgundy, plum, navy and charcoal shadows. Preserve the actual colors of clothing, skin and important source objects while shifting their tonal relationships into this palette. Sophisticated saturation: colorful but never fluorescent, childish or candy-like.",

  "CLOTHING_RENDERING": "preserve every garment from the source image. Render fabric using anatomical folds, angular polygonal shadow shapes, overlapping midtones and selective rim highlights. Seams, collars, pockets, buttons, tears, printed patterns and fabric weight should remain recognizable. Avoid flat areas of uninterrupted color.",

  "HAIR_RENDERING": "preserve exact hairstyle and hairline. Construct hair as layered graphic masses containing individually suggested strand groups, deep internal shadow shapes, selective warm rim highlights and a few sharp reflected-light accents. Hair must have volume and directional flow without photorealistic strand-by-strand rendering.",

  "MATERIAL_RENDERING": "translate each material differently: skin uses layered warm/cool painted planes; cotton uses broad matte folds; denim uses sharper crease networks; leather uses dark broad masses plus controlled specular streaks; polished metal and jewelry use tiny high-contrast cream highlights; glass uses simplified geometric reflections; vehicles use broad painted reflection shapes; water uses layered cyan, lavender and pale-gold graphic reflections. Avoid uniform material treatment.",

  "BACKGROUND_RENDERING": "preserve the original environment and architecture but reduce background information strategically rather than replacing it. Convert distant buildings, foliage, furniture, vehicles and scenery into layered geometric painted masses with approximately 40 percent less micro-detail than the protagonist. Maintain recognizable spatial structure and perspective. Use atmospheric lavender-blue separation for distance while retaining important source-specific landmarks and objects.",

  "DEPTH_SYSTEM": "foreground receives strongest contours, richest shadows and highest local contrast; main subject receives maximum facial, anatomical and clothing detail; middle ground uses moderately reduced line density; distant background becomes progressively flatter, softer and more pastel. Achieve depth through illustration hierarchy rather than photographic depth-of-field blur.",

  "EDGE_CONTROL": "mix crisp inked edges, sharp polygonal shadow boundaries, partially lost edges inside dark regions and occasional softened painted transitions. Avoid perfectly smooth computer-vector edges everywhere. Important silhouette intersections remain extremely readable.",

  "SURFACE_FINISH": "premium digital painting finish with subtle hand-painted irregularity, extremely clean but not sterile. Fine tonal variation inside large color fields, delicate grain in shadow gradients, occasional visible brush-shaped transition, controlled texture on skin and fabric. No photographic pores and no obvious canvas texture.",

  "DETAIL_DENSITY": "high detail on faces, hands, tattoos, jewelry, clothing folds and foreground props; medium detail on nearby environment; intentionally reduced detail in distant architecture and sky. Maintain a sophisticated hierarchy comparable to expensive videogame promotional key art rather than generic AI illustration.",

  "CAMERA": "preserve the source photograph's exact camera position, focal perspective, crop and aspect ratio. Do not automatically transform the image into a centered character poster. If the source is candid, preserve candid framing; if close-up, preserve close-up; if full body, preserve full body; if multiple people are present, preserve their exact spatial relationship.",

  "MOOD": "mature, cinematic, glamorous, tense and contemporary; polished narrative key art from a fictional tropical urban crime drama. The result should feel hand-directed by a professional concept-art team, not like a cartoon filter applied to a photograph.",

  "STYLE_CONSISTENCY_RULE": "Across every new source photograph, keep this exact rendering grammar constant: dark variable hand-inked contours + semi-realistic anatomy + multi-plane painted faces + complex hard/soft cel-paint shading + burgundy/plum shadow masses + pale golden directional highlights + lavender reflected light + tropical pastel environmental palette + simplified geometric distance + highly detailed characters. Only the photographic content changes.",

  "DO_NOT_CHANGE": "identity, ethnicity, age, body type, facial proportions, hairstyle, expression unless impossible to preserve, clothing design, tattoos, accessories, pose, gesture, number of people, objects, location, architecture, perspective, framing, camera angle or narrative content of the source image",

  "NEGATIVE_PROMPT": "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children's animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face, generic videogame character face, identity drift, changed hairstyle, changed clothing, changed pose, changed camera angle, invented accessories, simplified anatomy, two-tone cel shading, uniform line thickness, perfectly smooth vector curves, flat skin, flat clothing, minimal shading, pastel children's poster, excessive neon, oversaturated colors, watercolor, oil impasto, pencil sketch, rough concept sketch, comic halftone dots, black-and-white ink drawing, photographic depth-of-field, excessive bokeh, text, typography, logo, watermark, interface elements"
}`,
        negativePrompt: "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face",
        parameters: "Image-to-Image (Nano Banana Pro / Gemini / Midjourney --cref)",
        tags: ["Snoop Dogg", "Cali Rosé", "Ouro", "Ilustração 2D"]
      },
      {
        id: "e2-05",
        title: "05. Camisa 10 de Vice City (Neymar Jr)",
        image: "../assets/prompts/estilo-2/05_neymar_jr.jpg",
        prompt: `{
  "TASK": "IMAGE-TO-IMAGE STYLE TRANSFORMATION",

  "PRIMARY_INSTRUCTION": "Use the uploaded photo as the strict structural source. Recreate the SAME person or people, SAME facial identity, SAME hairstyle, SAME body proportions, SAME pose, SAME hand positions, SAME clothing, SAME accessories, SAME objects, SAME environment, SAME camera angle, SAME perspective, SAME crop and SAME composition. Do not redesign, beautify, simplify, reposition or invent elements. Change ONLY the visual rendering language into a premium semi-realistic 2D open-world crime videogame key-art illustration.",

  "IDENTITY_PRESERVATION": "Highest priority: preserve the subject's recognizable facial identity from the input image. Maintain exact face shape, jaw width, cheekbones, nose shape, eyebrow shape, eye spacing, eyelids, lips, hairline, hairstyle, facial hair, age characteristics, skin tone and distinctive features. The final image must clearly depict the same individual from the source photograph, illustrated rather than photographed. Do not replace the face with a generic attractive videogame character.",

  "COMPOSITION_LOCK": "Treat the source image as an immutable composition blueprint. Preserve subject scale, body orientation, head angle, gaze direction, limb placement, hand gestures, object positions, foreground/background relationships, horizon, perspective and crop. Do not convert a standing pose into sitting, do not change camera distance, do not introduce a new environment.",

  "ART_DIRECTION": "high-end hand-painted 2D character key art, mature semi-realistic graphic illustration, cinematic open-world crime-game promotional artwork aesthetic, realistic anatomy translated into deliberate illustrated planes, sophisticated comic-influenced rendering without looking like a comic panel, strong editorial polish, believable human proportions, assertive silhouettes, dense character detail combined with selectively simplified environmental detail",

  "LINEWORK": "confident hand-drawn dark contour work, predominantly deep charcoal, dark plum and blue-black instead of pure black; variable line weight with thick external silhouette contours, medium structural lines around clothing and anatomy, extremely restrained thin internal facial lines; contours subtly broken where strong light hits the form; organic hand-inked character rather than uniform vector strokes; avoid identical line thickness throughout the image",

  "FACE_RENDERING": "preserve the source face exactly while translating it through semi-realistic illustrated construction. Build the face from multiple angular tonal planes: warm local skin midtone, deep muted plum-brown core shadows, peach and rose transitional planes, narrow pale-gold highlights. Sculpt cheekbones, temples, jaw, nose bridge, eye sockets and forehead through color shapes and directional shading rather than excessive outlines. Eyes detailed but not anime-like; restrained catchlights; realistic eyelids; natural asymmetry preserved. Skin should feel painted and dimensional, never flat vector fill.",

  "ANATOMY_RENDERING": "realistic adult anatomy with subtle graphic exaggeration only where perspective demands it. Arms, shoulders, neck, hands and legs constructed with multiple overlapping planes of light and shadow. Show believable bone structure, muscle tension, tendons and joints without superhero exaggeration. Hands receive careful anatomical treatment, defined knuckles and finger articulation. Never simplify limbs into flat cartoon tubes.",

  "SHADING_SYSTEM": "complex hybrid cel-painted shading using 4 to 7 distinct tonal families per important form. Large hard-edged shadow masses establish structure, secondary midtone planes model volume, narrow warm highlights describe direct sunlight, subtle reflected lavender or pink light appears inside selected shadows. Some transitions remain crisp while selected facial and skin transitions receive controlled painted softness. Never use simple two-tone cel shading.",

  "LIGHTING_TRANSLATION": "retain the approximate light direction present in the source photograph but reinterpret it cinematically. Strong sculptural directional light, warm cream-to-golden highlights cutting across faces, arms, clothing and objects; cool violet, dusty-magenta and blue ambient fill inside shadows; pronounced rim-light selectively separating important silhouettes. Light shapes should be deliberately designed and irregular, creating dramatic graphic patches across anatomy and fabric.",

  "COLOR_LANGUAGE": "cinematic tropical pastel color grading built around dusty cyan, aqua, muted turquoise, lavender, violet-blue, dusty rose, salmon, peach, warm cream and pale golden sunlight, balanced by deep burgundy, plum, navy and charcoal shadows. Preserve the actual colors of clothing, skin and important source objects while shifting their tonal relationships into this palette. Sophisticated saturation: colorful but never fluorescent, childish or candy-like.",

  "CLOTHING_RENDERING": "preserve every garment from the source image. Render fabric using anatomical folds, angular polygonal shadow shapes, overlapping midtones and selective rim highlights. Seams, collars, pockets, buttons, tears, printed patterns and fabric weight should remain recognizable. Avoid flat areas of uninterrupted color.",

  "HAIR_RENDERING": "preserve exact hairstyle and hairline. Construct hair as layered graphic masses containing individually suggested strand groups, deep internal shadow shapes, selective warm rim highlights and a few sharp reflected-light accents. Hair must have volume and directional flow without photorealistic strand-by-strand rendering.",

  "MATERIAL_RENDERING": "translate each material differently: skin uses layered warm/cool painted planes; cotton uses broad matte folds; denim uses sharper crease networks; leather uses dark broad masses plus controlled specular streaks; polished metal and jewelry use tiny high-contrast cream highlights; glass uses simplified geometric reflections; vehicles use broad painted reflection shapes; water uses layered cyan, lavender and pale-gold graphic reflections. Avoid uniform material treatment.",

  "BACKGROUND_RENDERING": "preserve the original environment and architecture but reduce background information strategically rather than replacing it. Convert distant buildings, foliage, furniture, vehicles and scenery into layered geometric painted masses with approximately 40 percent less micro-detail than the protagonist. Maintain recognizable spatial structure and perspective. Use atmospheric lavender-blue separation for distance while retaining important source-specific landmarks and objects.",

  "DEPTH_SYSTEM": "foreground receives strongest contours, richest shadows and highest local contrast; main subject receives maximum facial, anatomical and clothing detail; middle ground uses moderately reduced line density; distant background becomes progressively flatter, softer and more pastel. Achieve depth through illustration hierarchy rather than photographic depth-of-field blur.",

  "EDGE_CONTROL": "mix crisp inked edges, sharp polygonal shadow boundaries, partially lost edges inside dark regions and occasional softened painted transitions. Avoid perfectly smooth computer-vector edges everywhere. Important silhouette intersections remain extremely readable.",

  "SURFACE_FINISH": "premium digital painting finish with subtle hand-painted irregularity, extremely clean but not sterile. Fine tonal variation inside large color fields, delicate grain in shadow gradients, occasional visible brush-shaped transition, controlled texture on skin and fabric. No photographic pores and no obvious canvas texture.",

  "DETAIL_DENSITY": "high detail on faces, hands, tattoos, jewelry, clothing folds and foreground props; medium detail on nearby environment; intentionally reduced detail in distant architecture and sky. Maintain a sophisticated hierarchy comparable to expensive videogame promotional key art rather than generic AI illustration.",

  "CAMERA": "preserve the source photograph's exact camera position, focal perspective, crop and aspect ratio. Do not automatically transform the image into a centered character poster. If the source is candid, preserve candid framing; if close-up, preserve close-up; if full body, preserve full body; if multiple people are present, preserve their exact spatial relationship.",

  "MOOD": "mature, cinematic, glamorous, tense and contemporary; polished narrative key art from a fictional tropical urban crime drama. The result should feel hand-directed by a professional concept-art team, not like a cartoon filter applied to a photograph.",

  "STYLE_CONSISTENCY_RULE": "Across every new source photograph, keep this exact rendering grammar constant: dark variable hand-inked contours + semi-realistic anatomy + multi-plane painted faces + complex hard/soft cel-paint shading + burgundy/plum shadow masses + pale golden directional highlights + lavender reflected light + tropical pastel environmental palette + simplified geometric distance + highly detailed characters. Only the photographic content changes.",

  "DO_NOT_CHANGE": "identity, ethnicity, age, body type, facial proportions, hairstyle, expression unless impossible to preserve, clothing design, tattoos, accessories, pose, gesture, number of people, objects, location, architecture, perspective, framing, camera angle or narrative content of the source image",

  "NEGATIVE_PROMPT": "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children's animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face, generic videogame character face, identity drift, changed hairstyle, changed clothing, changed pose, changed camera angle, invented accessories, simplified anatomy, two-tone cel shading, uniform line thickness, perfectly smooth vector curves, flat skin, flat clothing, minimal shading, pastel children's poster, excessive neon, oversaturated colors, watercolor, oil impasto, pencil sketch, rough concept sketch, comic halftone dots, black-and-white ink drawing, photographic depth-of-field, excessive bokeh, text, typography, logo, watermark, interface elements"
}`,
        negativePrompt: "generic cartoon, flat vector illustration, simple vector art, clean corporate illustration, children animation, anime, manga, chibi, Pixar-like 3D, Disney-like character design, photorealism, raw photography, plastic CGI, glossy 3D render, airbrushed face, beauty-filter face",
        parameters: "Image-to-Image (Nano Banana Pro / Gemini / Midjourney --cref)",
        tags: ["Neymar", "Seleção", "Urbano", "Ilustração 2D"]
      }
    ]
  },
  {
    id: "estilo-3",
    badge: "COMBO 03",
    name: "Estilo 03: GTA VI Cinematic Next-Gen (AAA Open-World Render)",
    slug: "estilo-3",
    icon: "fa-film",
    description: "Renderização hiper-realista moderna inspirada na estética cinematográfica AAA do GTA VI. Iluminação HDR, reflexos de neon em Miami e imperfeições naturais da pele.",
    toolRecommended: "Nano Banana Pro / Gemini / Midjourney v6.1 / SeaArt",
    items: [
      {
        id: "e3-01",
        title: "01. Club Neon (Tony Montana / Scarface)",
        image: "../assets/prompts/estilo-3/01_tony_montana_club.png",
        prompt: `[Transform this image into a modern Grand Theft Auto VI-inspired visual style.

Preserve the original composition, subject identity, pose, and facial features, but enhance it with a highly polished, next-gen video game aesthetic.

Apply:
- Ultra-realistic rendering with cinematic lighting
- High dynamic range (HDR), realistic shadows and reflections
- Detailed skin textures and natural imperfections (not cartoonish)
- Subtle stylization inspired by GTA VI character design (modern, grounded, semi-realistic — NOT exaggerated or comic-like)
- Vibrant but controlled color grading (Miami/Vice City-inspired tones, warm highlights, teal shadows)
- Depth of field and environmental atmosphere for immersion
- Clean, sharp focus with AAA video game quality

Environment:
- If applicable, enhance background to feel like a living open-world city (modern Vice City vibe: neon lights, palm trees, urban luxury, night glow or sunset lighting)

Important constraints:
- Do NOT convert into cartoon, comic, or GTA V-style illustration
- Avoid thick outlines or exaggerated proportions
- Maintain realism with subtle stylization only
- Keep the subject recognizable and authentic

Final result:
A cinematic, next-generation GTA VI-style render that looks like a character from a modern AAA open-world game.]`,
        negativePrompt: "cartoon, comic, 3D anime, flat textures, low quality, oversaturated cartoon",
        parameters: "Image-to-Image (Nano Banana Pro / Gemini / Midjourney v6.1)",
        tags: ["Cinematic", "Next-Gen AAA", "Neon Club", "Scarface"]
      },
      {
        id: "e3-02",
        title: "02. Presidential Suite (Donald Trump Leonida)",
        image: "../assets/prompts/estilo-3/02_donald_trump_office.png",
        prompt: `[Transform this image into a modern Grand Theft Auto VI-inspired visual style.

Preserve the original composition, subject identity, pose, and facial features, but enhance it with a highly polished, next-gen video game aesthetic.

Apply:
- Ultra-realistic rendering with cinematic lighting
- High dynamic range (HDR), realistic shadows and reflections
- Detailed skin textures and natural imperfections (not cartoonish)
- Subtle stylization inspired by GTA VI character design (modern, grounded, semi-realistic — NOT exaggerated or comic-like)
- Vibrant but controlled color grading (Miami/Vice City-inspired tones, warm highlights, teal shadows)
- Depth of field and environmental atmosphere for immersion
- Clean, sharp focus with AAA video game quality

Environment:
- If applicable, enhance background to feel like a living open-world city (modern Vice City vibe: neon lights, palm trees, urban luxury, night glow or sunset lighting)

Important constraints:
- Do NOT convert into cartoon, comic, or GTA V-style illustration
- Avoid thick outlines or exaggerated proportions
- Maintain realism with subtle stylization only
- Keep the subject recognizable and authentic

Final result:
A cinematic, next-generation GTA VI-style render that looks like a character from a modern AAA open-world game.]`,
        negativePrompt: "cartoon, comic, 3D anime, flat textures, low quality, oversaturated cartoon",
        parameters: "Image-to-Image (Nano Banana Pro / Gemini / Midjourney v6.1)",
        tags: ["Cinematic", "Next-Gen AAA", "Golden Sunset", "Grounded Realism"]
      }
    ]
  }
];
