// Project data — edit this file to update case studies.
// Each section: { id, heading, html }. html may use <p>, <h3>, <ul>, <img>, <video>, .image-grid, .stats-row.
window.PROJECTS = {
  neo: {
    thumb: 'assets/thumb_neo.jpg',
    category: 'Gen Digital · AI-Native Browser',
    title: 'Norton Neo',
    tagline: 'An AI-native browser redefining the agentic web experience through cutting-edge AI and intuitive design.',
    layout: 'hub',
    entries: [
      { image: 'assets/thumb_neo_desktop.jpg',
        tags: ['UX/UI Design', 'Prototyping', 'User Research'],
        title: 'Neo Browser',
        desc: 'Designing a proactive AI browser companion. Case study coming soon!', locked: true },
      { image: 'assets/thumb_neo_mobile.jpg',
        tags: ['UX/UI Design', 'Prototyping', 'User Research'],
        title: 'Neo Mobile',
        desc: 'Designing the Neo browser companion for mobile.', href: 'project.html?id=neomobile' }
    ],
    recommended: ['shader', 'blizzard', 'spectacles']
  },
  shader: {
    thumb: 'img/thumbnail/Shader_mobile.jpg',
    category: 'Founding Designer · AR × genAI',
    title: 'Shader Inc.',
    tagline: 'Tools for people to augment reality into anything with realtime genAI.',
    layout: 'hub',
    entries: [
      { image: 'img/thumbnail/Shader_mobile.jpg',
        tags: ['UX/UI Design', 'Prototyping', 'Figma', 'User Research'],
        title: 'Shader Mobile',
        desc: 'Creating an app that lets anyone be anything.', href: 'project.html?id=shadermobile' },
      { image: 'img/thumbnail/Shader_web.jpg',
        tags: ['UX/UI Design', 'Prototyping', 'Figma', 'User Research'],
        title: 'Shader Web',
        desc: 'Designing a new form of social communication, built on genAI.', href: 'project.html?id=shaderweb' }
    ],
    recommended: ['neo', 'blizzard', 'instagram']
  },
  blizzard: {
    thumb: 'img/thumbnail/hackathon.png',
    category: 'Blizzard Entertainment · Microsoft',
    title: 'Blizzard Entertainment',
    tagline: 'Projects I worked on at the gaming powerhouse.',
    layout: 'hub',
    entries: [
      { image: 'assets/thumb_bnet_mobile.png',
        tags: ['UX/UI Design', 'Figma', 'User Research'],
        title: 'Battle.net Mobile',
        desc: 'Enhancing the Battle.net Mobile App experience for a new era of Blizzard gamers.',
        href: 'project.html?id=bnet' },
      { image: 'img/thumbnail/hackathon.png',
        tags: ['UX/UI Design', 'Figma', 'Prototyping', 'Unity'],
        title: 'Blizzard Hackathon',
        desc: 'Won 3rd place and pitched hackathon project concept to Blizzard executives.',
        href: 'project.html?id=blizzverse' },
      { image: 'img/thumbnail/desktop.png',
        tags: ['UX/UI Design', 'Figma', 'User Research'],
        title: 'Social Features for Desktop',
        desc: 'Designed new social interactions to delight players outside of Blizzard games.', locked: true },
      { image: 'assets/thumb_war3.jpg',
        tags: ['Web Design', 'Figma'],
        title: 'Warcraft III Reforged Website',
        desc: 'Redesigned the Warcraft III Reforged website 🔗',
        href: 'https://warcraft3.blizzard.com/en-us/' },
      { image: 'assets/thumb_starcraft.png',
        tags: ['Web Design', 'Figma'],
        title: 'StarCraft Remastered Website',
        desc: 'Redesigned the StarCraft Remastered website 🔗',
        href: 'https://starcraft.blizzard.com/en-us/' },
      { image: 'assets/thumb_diablo2.png',
        tags: ['Web Design', 'Figma'],
        title: 'Diablo II: Resurrected Website',
        desc: 'Redesigned the Diablo II: Resurrected website 🔗',
        href: 'https://diablo2.blizzard.com/en-us/' },
    ],
    games: [
      { title: 'World of Warcraft', image: 'img/games/wow.png', href: 'https://worldofwarcraft.blizzard.com/' },
      { title: 'Call of Duty: Modern Warfare II', image: 'img/games/mw2.png', href: 'https://www.callofduty.com/modernwarfare2' },
      { title: 'Overwatch 2', image: 'img/games/ow2.png', href: 'https://overwatch.blizzard.com/' },
      { title: 'Diablo IV', image: 'img/games/d4.png', href: 'https://diablo4.blizzard.com/' },
      { title: 'Diablo II: Resurrected', image: 'img/games/d2r.png', href: 'https://diablo2.blizzard.com/' },
      { title: 'Diablo Immortal', image: 'img/games/immortal.png', href: 'https://diabloimmortal.blizzard.com/' },
      { title: 'Hearthstone', image: 'assets/game_hearthstone.png', href: 'https://hearthstone.blizzard.com/' },
      { title: 'Warcraft Rumble', image: 'img/games/arclight.png', href: 'https://warcraftrumble.blizzard.com/' }
    ],
    recommended: ['neo', 'shader', 'spectacles']
  },
  neodesktop: {
    thumb: 'assets/thumb_neo_desktop.jpg',
    category: 'Gen Digital · AI-Native Browser',
    title: 'Neo Browser',
    tagline: 'Designing a proactive AI browser companion.',
    meta: { Role: 'AI Product Design Lead', Duration: '2024 — Present', Tools: 'UX/UI Design · Prototyping · User Research' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <img src="assets/thumb_neo_desktop.jpg" alt="Norton Neo desktop">
        <p>I lead the creative vision for <strong>Norton Neo</strong>, an AI-native browser redefining the agentic web experience — a proactive companion that understands what you're doing and helps you get it done.</p>
        <div class="video-placeholder"><span>case study content coming soon — full write-up in progress</span></div>` },
      { id: 'process', heading: 'Process', html: `
        <div class="video-placeholder"><span>process: research, explorations, iterations</span></div>` },
      { id: 'results', heading: 'Results', html: `
        <div class="video-placeholder"><span>results + shipped experience</span></div>` }
    ],
    recommended: ['neomobile', 'shadermobile', 'bnet']
  },
  neomobile: {
    thumb: 'assets/thumb_neo_mobile.jpg',
    category: 'Gen Digital · AI-Native Browser',
    title: 'Neo Mobile',
    tagline: 'Designing the Neo browser companion for mobile.',
    meta: { Role: 'AI Product Design Lead', Duration: '2024 — Present', Tools: 'UX/UI Design · Prototyping · User Research' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <img src="assets/thumb_neo_mobile.jpg" alt="Norton Neo mobile">
        <p>With Norton Neo we built <strong>one of the world's first AI browsers</strong> — a desktop browser with an AI companion woven into the browsing itself, not bolted on as a sidebar. Neo Mobile is the natural next step: <strong>bringing that companion with you on the go.</strong></p>
        <p>The brief wasn't "shrink the desktop app." It was: what does an AI-native browser feel like one-handed, on a small screen, in the moments people actually browse on their phones?</p>` },
      { id: 'magicbox', heading: 'Home & the Magic Box', html: `
        <p>It starts at home. The centerpiece is the <strong>Magic Box</strong> — a single entry point we patented, able to <strong>read user intent and route each request to the right model for the task</strong>. Type a URL and it navigates; ask a question and it answers; describe an image and it generates. No mode switching, no choosing a model — the box figures it out.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="assets/neo_m_home.png" alt="Neo Mobile home, light" style="margin:0">
          <img src="assets/neo_m_home_dark.png" alt="Neo Mobile home, dark" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">One box for search, URLs, questions, and generation — in light and dark</p>
        <p>The home surface also carries Neo's protection story at a glance: ads and trackers blocked, cookie pop-ups killed, time saved.</p>
        <img src="assets/neo_m_tabs.png" alt="Tab switcher with Magic Page" style="max-width:360px;display:block;margin:24px auto">
        <p class="media-caption" style="text-align:center">The Magic Page lives as a first-class tab alongside your browsing</p>` },
      { id: 'agent', heading: 'Your Agent, Anywhere on the Web', html: `
        <p>Neo's agent isn't confined to a chat tab — <strong>you can talk to it on any webpage, anywhere on the web.</strong> Summon it mid-article to summarize, compare, extract, or generate images, with suggestions drawn from the page you're on.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="assets/neo_m_chat.png" alt="Chatting with Neo" style="margin:0">
          <img src="assets/neo_m_browse.png" alt="Browsing with the Neo pill" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">A full conversation with sources — and the same agent one tap away while browsing</p>
        <img src="assets/neo_m_store_panels.png" alt="Neo Mobile feature overview" style="max-width:760px;display:block;margin:24px auto">
        <p class="media-caption" style="text-align:center">The pillars: safe AI browsing, page-aware chat, free generation, privacy, and sync</p>` },
      { id: 'standard', heading: 'The Table Stakes, Done Right', html: `
        <p>An AI browser still has to be a great browser. Neo Mobile ships the full kit: a <strong>feed of AI summaries categorized to your interests</strong>, shortcuts, VPN, ad block, dark mode, sync, and a browser menu tuned for one hand.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="assets/neo_m_feed.png" alt="AI summary feed" style="margin:0">
          <img src="assets/neo_m_shortcuts.png" alt="Add shortcut flow" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">Your feed, summarized and categorized by Neo; shortcuts one tap away</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="assets/neo_m_menu.png" alt="Browser menu" style="margin:0">
          <img src="assets/neo_m_menu_dark.png" alt="Browser menu, dark" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">VPN and Ad Block as first-class toggles in the browser menu</p>` },
      { id: 'takeaways', heading: 'Takeaways', html: `
        <ul>
          <li><strong>Intent beats modes /</strong> The Magic Box collapsed search, chat, navigation, and generation into one input — the patent came from solving the routing, the UX win came from hiding it.</li>
          <li><strong>The agent must live where you browse /</strong> Page-aware chat on every site is what makes it a companion instead of a destination.</li>
          <li><strong>AI-native ≠ browser-lite /</strong> Feed, VPN, shortcuts, and sync earn the daily-driver slot; the AI keeps it.</li>
        </ul>` }
    ],
    recommended: ['neodesktop', 'shaderweb', 'spectacles']
  },
  shadermobile: {
    thumb: 'img/thumbnail/Shader_mobile.jpg',
    category: 'Shader Inc. · Founding Design Lead',
    title: 'Shader Mobile App',
    tagline: 'Helping anyone become anything ✨',
    meta: { Role: 'Founding Design Lead', Duration: 'Sept 2023 — Sept 2024', Tools: 'Figma · UX/UI Design · User Research · Prototyping' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <img src="img/thumbnail/Shader_mobile.jpg" alt="Shader mobile app screens">
        <p class="media-caption">A selection of screens I designed for the Shader mobile app</p>
        <p>When I first met Darya, Shader's CEO, she told me all about her vision for an app that could harness the power of generative AI to let people turn themselves into anything with a few simple text prompts or voice commands. The technology would blend emerging genAI pipelines with existing AR principles to redefine how casual users interact with 3D assets in mixed reality. I was sold — and soon joined as the <strong>Founding Design Lead at Shader.</strong></p>
        <div class="stats-row">
          <div><div class="stat-num">3T+</div><div class="stat-label">views on AR lenses on Snapchat over the past year</div></div>
          <div><div class="stat-num">8.6T</div><div class="stat-label">views on TikTok Effect House community effects</div></div>
          <div><div class="stat-num">1.8x</div><div class="stat-label">Gen Z more likely to gravitate to AR experiences</div></div>
        </div>
        <h3>Problem</h3>
        <p>With the rise of social media, video calls, and streaming giants like Twitch, online identities are here to stay — millions of users use AR effects every day. But users haven't had much freedom in customizing their online personas beyond avatars, and <strong>creating lenses, filters, and effects is still gated behind software packages that take hours to learn.</strong></p>
        <h3>Objective</h3>
        <p>How can we let users personalize their online experiences by turning themselves into anything they want with AI-empowered Augmented Reality?</p>
        <div class="stats-row">
          <div><div class="stat-num">25k+</div><div class="stat-label">app downloads</div></div>
          <div><div class="stat-num">1,500+</div><div class="stat-label">Discord creator community members</div></div>
          <div><div class="stat-num">5th</div><div class="stat-label">best product of the day on Product Hunt</div></div>
        </div>` },
      { id: 'concept', heading: 'The Concept', html: `
        <p>Shader Mobile is a <strong>generative AI AR social camera</strong>: point the camera at yourself, describe anything — a character, a style, a universe — and become it in real time, then share it. The whole product hangs off three tabs: Feed, Camera, and AI Mask.</p>
        <p>Generation costs real GPU money, so the economy is part of the UX from the first launch: new users get free Shader credits that recharge daily, with invites and a subscription as the paths to more.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="assets/sw_m_welcome.png" alt="Onboarding with free credits" style="margin:0">
          <img src="assets/sw_m_cameratab.png" alt="Camera tab" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">Onboarding sets up the credit economy; the camera is always one tap away</p>` },
      { id: 'branding', heading: 'Branding & Design Language', html: `
        <p>Shader's brand came to life in partnership with a branding agency — my role was <strong>balancing brand and product</strong> so both conveyed the same playful feeling: a bubbly wordmark with layered dimensional outlines over the pink-to-purple-to-blue gradients that run through the whole app.</p>
        <img src="assets/sw_brand_logos.png" alt="Shader logo explorations — inline and stacked lockups">
        <p class="media-caption">The wordmark: inline and stacked lockups across the brand's fill and outline treatments</p>
        <p>The system extends to every surface the brand touches — app icon explorations on gradient tiles, and a favicon reduced to the dimensional "S" that still reads at 16px.</p>
        <img src="assets/sw_brand_icons.png" alt="Shader app icon and favicon explorations">
        <p class="media-caption">App icon and favicon explorations</p>
        <p>For type we licensed <strong>Visby Round CF</strong> — rounded, geometric, and friendly enough to sit next to the wordmark without competing with it.</p>
        <img src="assets/sw_brand_type.png" alt="Visby Round CF type specimen and brand example of use">
        <p class="media-caption">The brand typeface and an example of the system in use</p>` },
      { id: 'masks', heading: 'AI Masks on Your Face', html: `
        <p>The signature trick: we track a live mesh of your face, run your prompt through the generation pipeline, and project the AI output back onto the mesh — so the result isn't a static picture, it's <strong>an AR mask that moves with you</strong>. The AI Mask tab segments you out of the background entirely so the prompt can rebuild the scene around you.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:620px;margin:24px auto">
          <img src="assets/sw_app_camera.png" alt="Face mesh tracking" style="margin:0">
          <img src="assets/sw_m_aimask.png" alt="AI Mask segmentation" style="margin:0">
          <img src="assets/sw_app_dog.png" alt="Voice prompt entry" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">Face mesh → segmentation → prompt. The waveform in the prompt bar is voice mode</p>
        <p>Voice mode took it further: you could <strong>live-edit your mask by talking to it</strong> — the waveform listens, and the mask regenerates as you speak, no typing while holding a pose.</p>
        <img src="assets/sw_m_voice.png" alt="AI Mask voice mode" style="max-width:680px;display:block;margin:24px auto">
        <p class="media-caption" style="text-align:center">"Say something fun!" — voice-driven mask editing</p>
        <p>For everyone who'd rather not write prompts at all, the prompt sheet carries trending templates and categories — one tap on a Yoda, cyborg, or fox and the mask is yours.</p>
        <img src="assets/sw_m_templates.png" alt="Template and prompt entry" style="max-width:680px;display:block;margin:24px auto">` },
      { id: 'likeness', heading: 'Likeness & Personas', html: `
        <p>People don't just want a costume — they want to recognize themselves in the result. It starts at onboarding: upload 7–10 selfies and Shader <strong>trains an avatar on your likeness</strong>, which becomes your profile and your personal AR mask.</p>
        <img src="assets/sw_m_avatar_onboarding.png" alt="Avatar creation onboarding" style="max-width:760px;display:block;margin:24px auto">
        <p class="media-caption" style="text-align:center">Selfie upload → trained avatar → it becomes your profile</p>
        <p>From there, a <strong>likeness slider</strong> controls how much of your real face survives each transformation, from full stylization to a subtle restyle. Saved likenesses become <strong>personas</strong> you can switch between.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="assets/sw_m_likeness.png" alt="Likeness slider" style="margin:0">
          <img src="assets/sw_m_personas.png" alt="Personas on profile" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">Dialing in likeness; personas live on your profile</p>` },
      { id: 'creation', heading: 'Parallel Creation', html: `
        <p>Generations take time, so the app never blocks on them. Fire off a prompt and keep shooting, browsing, or queuing more — a <strong>creation tray tracks every job in parallel</strong> and pings you when results land.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="assets/sw_m_creating_toast.png" alt="Non-blocking creation toast" style="margin:0">
          <img src="assets/sw_m_queue.png" alt="Parallel generation queue" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">Keep exploring while Shaders generate; the tray holds the queue and recents</p>
        <p>Results open in a <strong>before/after compare slider</strong>, and every result keeps its prompt attached — edit it and recreate without starting over, or post it straight to the feed.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:620px;margin:24px auto">
          <img src="assets/sw_m_result.png" alt="Compare slider result" style="margin:0">
          <img src="assets/sw_m_editprompt.png" alt="Edit prompt and recreate" style="margin:0">
          <img src="assets/sw_app_compare.png" alt="Post result to feed" style="margin:0">
        </div>` },
      { id: 'draw', heading: 'Draw It Into Existence', html: `
        <p>Not every Shader starts with a camera. The <strong>Draw tab</strong> gives you a canvas and a prompt: sketch something, describe it, and the model brings your drawing to life — faithful to your lines, rendered like it matters.</p>
        <img src="assets/sw_m_draw_flow.png" alt="Draw flow: sketch, prompt, result" style="max-width:760px;display:block;margin:24px auto">
        <p class="media-caption" style="text-align:center">Sketch → prompt → your cat, alive</p>
        <img src="assets/sw_m_draw_yoda.png" alt="Yoda sketch brought to life" style="max-width:680px;display:block;margin:24px auto">
        <p class="media-caption" style="text-align:center">A doodled Yoda, reimagined</p>
        <p>Results don't stop at images: one tap cuts the subject out and turns it into a <strong>sticker pack you can save and use in your other social apps</strong>, collected in a stickers gallery of everything you've made.</p>
        <img src="assets/sw_m_stickers.png" alt="Sticker creation and gallery" style="max-width:760px;display:block;margin:24px auto">
        <p class="media-caption" style="text-align:center">From result to sticker pack to sticker gallery</p>` },
      { id: 'social', heading: 'The Social Layer', html: `
        <p>Shader's feed is built on a simple loop: every post carries its prompt. See someone as Darth Maul, tap <strong>"Show Prompt," and reimagine it as yourself</strong> — the same prompt, your face.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:620px;margin:24px auto">
          <img src="assets/sw_m_feed.png" alt="Shader feed" style="margin:0">
          <img src="assets/sw_m_feed_slider.png" alt="Feed post with compare slider" style="margin:0">
          <img src="assets/sw_m_feed_maul.png" alt="Post with Show Prompt" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">The feed: posts carry a compare slider and their prompt</p>
        <p>Your gallery collects everything you've made — photos and masks — and any result can become your profile picture in two taps.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:620px;margin:24px auto">
          <img src="assets/sw_app_gallery.png" alt="Gallery" style="margin:0">
          <img src="assets/sw_m_gallery2.png" alt="Gallery with photo and mask filters" style="margin:0">
          <img src="assets/sw_m_share_actions.png" alt="Set as profile picture" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">Galleries with photo/mask filters; set any result as your profile picture</p>
        <p>Sharing routes straight to where identity play already lives — Instagram, TikTok, Snapchat — and <strong>Discord is a first-class citizen</strong>: account linking on your profile connected the app to our 1,500+ member creator community.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="assets/sw_m_share_discord.png" alt="Share sheet with Discord" style="margin:0">
          <img src="assets/sw_m_profile.png" alt="Profile with Discord linking" style="margin:0">
        </div>
        <p>The profile itself went through plenty of iteration — balancing gallery, credits, social links, support, and account controls on one scrollable surface.</p>
        <img src="assets/sw_m_profile_iterations.png" alt="Profile design iterations" style="max-width:760px;display:block;margin:24px auto">
        <p class="media-caption" style="text-align:center">Four of the many profile iterations</p>` },
      { id: 'monetization', heading: 'Monetization', html: `
        <p>The credit economy converts naturally: free daily credits get you hooked, and <strong>Shader PRO</strong> removes the ceiling — unlimited credits, 20+ templates, drawing tools, no watermark — with weekly, monthly, and yearly plans tested against each other.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="assets/sw_m_paywall.png" alt="Shader PRO paywall" style="margin:0">
          <img src="assets/sw_m_plans.png" alt="Subscription plans" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">The PRO paywall and plan picker</p>` },
      { id: 'takeaways', heading: 'Takeaways', html: `
        <ul>
          <li><strong>Identity is the product /</strong> Likeness control and personas mattered more to retention than any single effect — people came back to be <em>themselves, transformed</em>.</li>
          <li><strong>Never block on the model /</strong> Parallel creation turned generation latency from a dead wait into more time spent in the app.</li>
          <li><strong>Prompts are social objects /</strong> Attaching the prompt to every post made the feed generative — each post is an invitation to remix.</li>
        </ul>
        <p>Thanks for reading! ✨</p>` }
    ],
    recommended: ['shaderweb', 'neodesktop', 'instagram']
  },
  shaderweb: {
    thumb: 'img/thumbnail/Shader_web.jpg',
    category: 'Shader Inc. · Founding Design Lead',
    title: 'Shader Web',
    tagline: 'Bringing an AI effects camera to every browser ✨',
    meta: { Role: 'Founding Design Lead', Duration: 'Sept 2023 — Sept 2024', Tools: 'Figma · UX/UI Design · Prototyping · User Research' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <img src="assets/sw_final_rainbow.png" alt="Shader Web final design">
        <p>Shader started as a mobile app — an AI effects camera that turns you into anything you can describe. But an app install is a big ask for something people usually discover through a shared clip, and many of our most active creators (streamers, VTubers) work on desktop with real webcams. So the next step was bringing Shader to the browser: the same realtime genAI camera, with no install.</p>
        <h3>Problem</h3>
        <p>The browser is a hard place to run a realtime AI camera. There's no native camera pipeline — every frame round-trips through WebRTC to GPU servers, so every design decision had to respect a tight latency budget. And "the web" isn't one surface: a portrait phone browser and a keyboard-and-mouse desktop browser behave like two different products behind the same URL.</p>
        <h3>Objective</h3>
        <p>How do we translate the mobile app to both mobile and desktop browsers without it feeling like a different app?</p>` },
      { id: 'lookfeel', heading: 'Look & Feel', html: `
        <p>The mobile app already had an established design language — the purple gradients, the rounded prompt bar, the shader rail. The web version had to read as the same product, not a port. These app screens were the reference point:</p>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:620px;margin:24px auto">
          <img src="assets/sw_app_camera.png" alt="Shader app camera" style="margin:0">
          <img src="assets/sw_app_gallery.png" alt="Shader app gallery" style="margin:0">
          <img src="assets/sw_app_dog.png" alt="Shader app effect browsing" style="margin:0">
          <img src="assets/sw_app_compare.png" alt="Shader app result compare" style="margin:0">
        </div>
        <p class="media-caption" style="text-align:center">The mobile app screens the web had to stay consistent with</p>
        <p>Keeping that consistency took a lot of iteration — each web layout below is an attempt to hold onto the app's feel while adapting to different input methods, aspect ratios, and screen sizes.</p>` },
      { id: 'process', heading: 'Process', html: `
        <h3>Starting from zero</h3>
        <p>The first working version of Shader on the web was an engineering testbed — raw model parameters (seed, steps, guidance scale) bolted onto two empty video panes. It proved the pipeline worked, but it felt like a lab tool, not Shader.</p>
        <img src="assets/sw_live_prototype.png" alt="Shader Live engineering prototype">
        <p class="media-caption">"Shader Live" — the bare-metal starting point</p>
        <h3>Iterating on desktop</h3>
        <p>Desktop gave us room the phone never had — the question was what to do with it. We tried side-by-side input/output (easier to understand what the AI is doing), a single large canvas with a picture-in-picture webcam (better for capture), and versions in between. The face-mesh overlay stuck around as a trust signal: it shows the system is tracking you before the effect lands.</p>
        <img src="assets/sw_desktop_mesh.png" alt="Side-by-side exploration">
        <img src="assets/sw_desktop_pip.png" alt="Picture-in-picture exploration">
        <p class="media-caption">Side-by-side vs. hero canvas with picture-in-picture</p>
        <div class="image-grid">
          <img src="assets/sw_desktop_single_mesh.png" alt="Single canvas, face tracking">
          <img src="assets/sw_desktop_single_bg.png" alt="Single canvas, full effect">
        </div>
        <p class="media-caption">The single-canvas direction: track, then transform — face effects and full background generation</p>
        <p>Early versions exposed stacks of "Advanced Settings" sliders straight from the model. Testing showed people wanted control but not that much of it — collapsing model parameters into fewer, clearer controls became a recurring theme of the iteration.</p>
        <h3>Mobile browsers</h3>
        <p>Mobile web had the least headroom: portrait space, browser chrome eating into the viewport, and users expecting the app's one-thumb flow. We stacked input and output vertically and kept the prompt bar and preset rail where app users already expect them.</p>
        <div class="image-grid">
          <img src="assets/sw_mobileweb_stack.png" alt="Mobile web stacked layout">
          <img src="assets/sw_mobileweb_single.png" alt="Mobile web single pane">
        </div>
        <p class="media-caption">Mobile browser layouts: stacked input/output, and a single full-bleed pane</p>` },
      { id: 'final', heading: 'Final Design', html: `
        <p>The final design brings it together: navigation, side-by-side panes on desktop, capture and record controls, and the wall of model sliders reduced to a single Realistic ↔ Creative slider.</p>
        <img src="assets/sw_final_fox.png" alt="Shader Web final — creative mode">
        <p class="media-caption">One slider covers the full range, from subtle touch-ups to becoming a fox</p>
        <p>Same prompt bar, same shader rail, same look — whether you open Shader on your phone, your laptop, or in the app.</p>
        <h3>Future vision: live alter egos</h3>
        <p>Part of the longer-term vision was opening the Shader API to Twitch streamers — letting them stream as a live alter ego built from their own persona, and letting their chat contribute to the scene in real time: changing the background, dropping things into the foreground, steering the vibe of the stream together.</p>
        <img src="assets/sw_persona_blend.png" alt="Persona blending: character plus streamer">
        <p class="media-caption">Persona blending: a character + a streamer = their live alter ego</p>` },
      { id: 'takeaways', heading: 'Takeaways', html: `
        <ul>
          <li><strong>Familiarity carries across platforms /</strong> Keeping the app's look and feel is what made the web version feel like Shader instead of a demo of it.</li>
          <li><strong>Design to the latency budget /</strong> On a realtime AI product, UX and infrastructure are the same conversation — every extra pane and preview has a performance cost.</li>
          <li><strong>Fewer, clearer controls /</strong> One understandable slider served people better than ten accurate ones.</li>
        </ul>
        <p>Thanks for reading! ✨</p>` }
    ],
    recommended: ['shadermobile', 'neomobile', 'collabxr']
  },
  bnet: {
    thumb: 'assets/thumb_bnet_mobile.png',
    category: 'Blizzard Entertainment · Mobile',
    title: 'Battle.net Mobile App',
    tagline: 'Enhancing how players interact with their games 🎮',
    meta: {
      Role: 'UX/UI Design Intern',
      Duration: 'June 2021 — Sept 2021',
      Team: '<a href="https://haoyanghe.com/" target="_blank" rel="noopener">Hao He</a>, <a href="https://www.robmccoy.work/" target="_blank" rel="noopener">Rob McCoy (mentor)</a>, and the rest of the mobile team',
      Tools: 'Figma · UX/UI Design · User Research'
    },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <img src="img/blizzard/intro.png" alt="Iterative mockups">
        <p class="media-caption">Just a few of the <strong>many</strong> iterative mockups I made during my internship</p>
        <p>I have always loved video games — they're the main reason I fell in love with creating experiences for users. A lot of my experience before Blizzard involved self-contained experimental projects, so I was extremely excited to <strong>spearhead design on two new features for a product reaching millions of gamers.</strong></p>
        <p>During my internship, <strong>I worked on the Battle.net mobile app</strong>, a hub for players to socialize while playing Activision-Blizzard games, learn more about their favorite games, get customer support, and more. My mentor gave me a very open-ended problem: <strong>the app has robust social features, but is lacking in player utility features.</strong> After an informal competitive analysis of gaming companion apps, <strong>I worked on two new utility features: News and Game Library.</strong></p>
        <img src="img/blizzard/3d.png" alt="Battle.net mobile app">
        <h3>Problem</h3>
        <p>If players want to find information about their games, they have to jump through many hoops, leading to user dissatisfaction.</p>
        <h3>Objective</h3>
        <p>How do we <strong>drive greater app engagement and user satisfaction?</strong></p>
        <div class="stats-row">
          <div><div class="stat-num">4M+</div><div class="stat-label">monthly active users</div></div>
          <div><div class="stat-num">56%</div><div class="stat-label">increase in user satisfaction</div></div>
          <div><div class="stat-num">2 tabs</div><div class="stat-label">allowing for easy in-app utility access</div></div>
        </div>` },
      { id: 'painpoints', heading: 'Pain Points', html: `
        <p>Through <strong>user interviews, telemetry data, and previous user research</strong> on the Battle.net desktop app, I identified the top pain points in the current mobile interface:</p>
        <ul>
          <li><strong>⏱ Slow interactions /</strong> It takes users 6 taps to find News in the app, which discourages them from engaging with the feature.</li>
          <li><strong>🛑 Interrupted flows /</strong> Many of the current utility options redirect users to external sites instead of integrating seamlessly within the app.</li>
          <li><strong>❌ Subverted expectations /</strong> News and Game Library are two of the most used utility features on desktop, but are absent on mobile.</li>
          <li><strong>🧠 Cognitive overload /</strong> It is unintuitive to find Games or News in the app, with users relying on trial and error to learn the proper interactions.</li>
        </ul>` },
      { id: 'goals', heading: 'Goals', html: `
        <p>How do we design new utility features to drive greater app engagement and user satisfaction?</p>
        <ul>
          <li><strong>1 /</strong> Create <strong>easy-access tabs</strong> in the navbar for News and Game Library</li>
          <li><strong>2 /</strong> Design <strong>intuitive interactions</strong> with appropriate affordances</li>
          <li><strong>3 /</strong> Avoid cognitive overload and validate with <strong>user testing</strong></li>
        </ul>` },
      { id: 'process', heading: 'Process', html: `
        <h3>Sparking Discussion with Wireframes</h3>
        <p>On my first day I was blown away by Blizzard's meticulous design systems, but surprised to learn <strong>my team had no system in place for creating wireframes.</strong> My News wireframes proved immensely effective during high-level discussions with engineers and PMs — so I created a Wireframe Design System for the team.</p>
        <img src="img/blizzard/news_wire.png" alt="News wireframes">
        <p>The wires explored 3 directions for delivering News: filtering news by game, aggregating all news into a single feed, and embedding news on game pages nested in the library. After <strong>feedback sessions with engineers, designers, and PMs</strong>, I iterated on the game-filtering user flow.</p>
        <h3>Iteration</h3>
        <p>I spent a lot of time iterating on the design and user flow of the News tab, working with the Content UI team on the most efficient and elegant ways to bring News into the app. <strong>Setting up meetings with engineers and PMs on multiple teams</strong> showed me that collaboration and communication are crucial early in the design process.</p>
        <img src="img/blizzard/news_iteration.png" alt="News design iterations">
        <img src="img/blizzard/iteration.png" alt="High fidelity iterations">
        <p class="media-caption">High fidelity mockups comparing possible looks for the News tab</p>
        <p>Conversations with other designers surfaced <strong>faults in my initial design thinking, letting me improve on subsequent iterations</strong> — PMs flagged that the swim lane wouldn't scale as games are added, and the localization team showed a language dropdown wasn't necessary since geolocation handles it.</p>
        <h3>Story Mapping</h3>
        <p>I led 3 formal feedback sessions: hi-fi design feedback from the entire design org, prototype critiques, and user story mapping. Story mapping <strong>let us create an affinity map of potential directions based on our team's many perspectives</strong>, and informed the final user stories mapping all possible interactions with a feature.</p>
        <img src="img/blizzard/affinity.png" alt="Affinity map">
        <img src="img/blizzard/stories.png" alt="User stories">
        <h3>A/B & Usability Testing</h3>
        <p>A/B and usability tests validated my design decisions and showed how users interact with these features for the first time. Asking users to narrate their thought process kept a record of how intuitive each step of the user flow was.</p>
        <img src="img/blizzard/ab_testing.png" alt="A/B testing">
        <h3>Prototyping</h3>
        <p>Interactive prototypes helped me convey my exact vision — an extremely valuable tool for quick iteration and RITE testing without committing to development time.</p>
        <video src="img/blizzard/prototype.mov" data-vertical autoplay muted loop playsinline></video>
        <h3>Design Handoff to Engineers</h3>
        <p>A huge milestone was handing off my designs for implementation: compiling them into coherent user stories accounting for more than core interactions — scroll states, loading states, empty states, error screens. The complete story gave PMs, engineers, managers, and designers a digestible breakdown of the feature's intended UX at a glance.</p>
        <img src="img/blizzard/handoff.png" alt="Design handoff">` },
      { id: 'result', heading: 'Result', html: `
        <p>A few months after my internship, <strong>the Game Library feature was released on mobile devices!</strong> The final experience integrates all game information on consolidated game pages to facilitate discovery.</p>
        <div class="image-grid">
          <img src="img/blizzard/library.PNG" alt="Game library">
          <img src="img/blizzard/game_page.PNG" alt="Game page">
        </div>
        <p class="media-caption">The game library in the current version of Battle.net</p>` },
      { id: 'takeaways', heading: 'Takeaways', html: `
        <p>My time at Blizzard was incredibly fun and helped me grow exponentially as a designer. I learned from some of the best UX designers I've ever met, and felt welcomed and included throughout.</p>
        <ul>
          <li><strong>Adversity can help you grow /</strong> Advocating for inclusion and change alongside my teammates reminded me that staying true to your values can help you through difficult times.</li>
          <li><strong>Gather feedback from anyone who'll provide it /</strong> Meetings with other teams, casual 1:1s with new faces, and general feedback sessions were highly encouraged — so I spoke to as many coworkers as possible.</li>
          <li><strong>Focus on the user /</strong> Even if you're not part of your product's target audience, understanding the user is crucial. Our job is to make products that solve problems in ways that feel natural.</li>
        </ul>
        <p>Thanks for reading! 🤠</p>` }
    ],
    recommended: ['blizzverse', 'ames', 'spectacles']
  },
  blizzverse: {
    thumb: 'img/thumbnail/hackathon.png',
    category: 'Blizzard Entertainment · Hackathon',
    title: 'Enter the Blizzverse',
    tagline: 'Conceptualizing the future of gaming platforms 🎮',
    meta: {
      Role: 'Designer, Prototyper',
      Duration: '3 days',
      Team: '<a href="https://www.sophianguyen.design/" target="_blank" rel="noopener">Sophia Nguyen</a> and myself!',
      Tools: 'Figma · Prototyping · AR · Lens Studio · Unity · 3D Animation'
    },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <video src="img/blizzverse/Blizzverse%20Demo%20Video.mov" autoplay muted loop playsinline></video>
        <p class="media-caption">The final sizzle reel — a product of a few late nights and <strong>a lot</strong> of coffee</p>
        <p>Blizzard's annual hackathon allows employees to make anything their heart desires, whether business related or not. We decided to make the Blizzverse: <strong>a unified platform experience that allows players to interact with Blizzard IPs in new ways outside of the games themselves.</strong> We won 3rd place and pitched the concept to Blizzard executives.</p>` },
      { id: 'process', heading: 'Process', html: `
        <h3>Building it all in 3 days</h3>
        <p>I knew the timeline was tight, but I had ambitious plans. The process began in Figma, where I mocked up the general flow of the experience. From there, I ideated on an entry point: why not make <strong>portals on Blizzard's Battle.net launcher</strong> that could take you to new virtual experiences?</p>
        <div class="image-grid">
          <img src="img/blizzverse/entry.png" alt="Blizzverse entry">
          <img src="img/blizzverse/portals.png" alt="Blizzverse portals">
        </div>
        <p>I created the entry flow by integrating lore pages on the Battle.net launcher, letting users read about in-game universes and their favorite characters in a single place.</p>
        <div class="image-grid">
          <img src="img/blizzverse/heroes.png" alt="Blizzverse characters">
          <img src="img/blizzverse/lore.png" alt="Blizzverse lore">
        </div>
        <p>While lore pages in the launcher were cool, I really wanted to prototype a new browser-based experience for players to interact outside their usual games. With inspiration from platforms like Gather.town, <strong>I created a Unity prototype for a 2.5D sidescrolling social gaming platform</strong> where players create their own characters, learn about Blizzard games, and interact in new ways — with a QR code to onboard desktop users to the mobile equivalent.</p>
        <div class="image-grid">
          <img src="img/blizzverse/character.png" alt="Character creator">
          <img src="img/blizzverse/customize.png" alt="Character customization">
        </div>
        <div class="image-grid">
          <img src="img/blizzverse/chat.png" alt="Blizzverse chat">
          <img src="img/blizzverse/qr.png" alt="Mobile gateway QR">
        </div>
        <h3>Going Mobile</h3>
        <p>That's right — with only a day left in the hackathon, we decided to make mobile Blizzverse experiences too.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="img/blizzverse/mobile_lore.png" alt="Mobile lore" style="margin:0">
          <img src="img/blizzverse/Detail%20Screen.png" alt="Detail screen" style="margin:0">
        </div>
        <p>These demos were a kitbash of Figma, Blender, and Lens Studio. I textured and animated the character models with Blender and Mixamo, exported renders to Figma for the mocks, and used Lens Studio to anchor animated characters in the environment for the live AR app.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:440px;margin:24px auto">
          <img src="img/blizzverse/lock%20in%20(1).png" alt="Mobile AR" style="margin:0">
          <img src="img/blizzverse/Kiriko%20AR%20DEMO%20(1).png" alt="Kiriko AR demo" style="margin:0">
        </div>
        <h3>AR Filters</h3>
        <p>With AR and non-AR mobile experiences working, there was still potential to augment our players' reality — so I created a set of <strong>AR Snapchat filters inspired by characters from Overwatch 2.</strong></p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:620px;margin:24px auto">
          <img src="img/blizzverse/snapchat1.png" alt="Snapchat filter" style="margin:0">
          <img src="img/blizzverse/snapchat2.png" alt="Snapchat filter" style="margin:0">
          <img src="img/blizzverse/snapchat3.png" alt="Snapchat filter" style="margin:0">
        </div>` },
      { id: 'takeaways', heading: 'Takeaways', html: `
        <p>Creating the Blizzverse was one of the most fun and challenging prototyping projects I've undergone in a long time, in no small part due to the sheer amount of content made within 3 days.</p>
        <p>Not only did it help me bring a cool idea to life, but the project also helped me find ways to integrate my favorite creative tools in novel workflows. Oh, and I got to pitch to leadership too, which was pretty cool.</p>` }
    ],
    recommended: ['bnet', 'instagram', 'spectacles']
  },
  spectacles: {
    thumb: 'img/thumbnail/spectacles.png',
    category: 'Brown HCI Lab · Snap Spectacles',
    title: 'Snap Spectacles',
    tagline: 'Prototyping novel AR interactions 😎',
    meta: {
      Role: 'UX Designer, Full-Stack Dev',
      Duration: 'Sept 2021 — June 2022',
      Team: '<a href="https://www.jingq.org/" target="_blank" rel="noopener">Jing Qian</a>, <a href="https://jeffhuang.com/" target="_blank" rel="noopener">Prof. Jeff Huang</a>',
      Tools: 'AR UX · JavaScript · Figma · Lens Studio'
    },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <div class="image-grid">
          <video src="img/spectacles/Pokemon_CatchAR.mp4" autoplay muted loop playsinline></video>
          <video src="img/spectacles/Chicken_CatchAR.mp4" autoplay muted loop playsinline></video>
        </div>
        <p>Snap released the next generation of AR technology in the form of the <a href="https://www.spectacles.com/new-spectacles" target="_blank" rel="noopener">2021 Snap Spectacles</a> — their first pair of true augmented reality glasses. At the <a href="https://hci.brown.edu/" target="_blank" rel="noopener">Brown HCI Lab</a>, I was the first to dive into this technology, exploring partial object manipulation and naturalistic throwing interactions.</p>
        <p>The result is <strong><a href="https://www.snapchat.com/lens/9eff1581da8e4ba7a5208787e08348f2?type=SNAPCODE&metadata=01" target="_blank" rel="noopener">Pokemon CatchAR</a></strong>, a Pokemon Go demo with live hand tracking and waypoint navigation. <strong>I led this project as a full-stack prototyper, defining end-to-end UX</strong> and gathering feedback along the way.</p>
        <img src="img/spectacles/devices.png" alt="Lens running on Spectacles and smartphones">
        <p class="media-caption">The lens works on both Spectacles and smartphones</p>
        <h3>Problem</h3>
        <p>AR applications aren't fully immersive — they still rely on a phone screen. Pokemon Go, the most popular AR game of all time, requires users to throw a ball by swiping. <strong>Current methods for interacting with AR objects are not nearly as immersive as users would like.</strong></p>
        <h3>Solution</h3>
        <p>What if we <strong>leverage hand tracking to create a more immersive and accessible experience</strong> for interacting with virtual objects?</p>
        <div class="stats-row">
          <div><div class="stat-num">1M+</div><div class="stat-label">unique plays and views on Snapchat</div></div>
          <div><div class="stat-num">2 lenses</div><div class="stat-label">with full hand tracking on Spectacles and smartphones</div></div>
        </div>
        <img src="img/spectacles/mocks.png" alt="Interface mockups">
        <p class="media-caption">The interface of the lens, from concept to reality</p>` },
      { id: 'goals', heading: 'Goals', html: `
        <p>How do we leverage hand tracking to create a more immersive and accessible experience for interacting with virtual objects?</p>
        <ul>
          <li><strong>1 /</strong> Implement an intuitive throwing algorithm</li>
          <li><strong>2 /</strong> Seamlessly embed objects in the user's world</li>
          <li><strong>3 /</strong> Make it fun by giving the user a goal</li>
        </ul>` },
      { id: 'process', heading: 'Process', html: `
        <h3>Brainstorming</h3>
        <p>Lenses can only be developed in Lens Studio, so I spent my first weeks learning the software. I initially explored AR navigation — Google Maps routing, projected right in your glasses!</p>
        <video src="img/spectacles/navigation.mov" autoplay muted loop playsinline></video>
        <p class="media-caption">Early AR navigation prototype</p>
        <p>Unfortunately there were clear roadblocks: <strong>a GPS API isn't quite possible with this tech stack yet</strong>, and granular navigation would be very time-consuming to implement. So we pivoted to what excites people most about AR: games.</p>
        <h3>Throwing</h3>
        <p>Lens Studio had no physics engine, so <strong>we calculated the velocity and trajectory of the ball ourselves</strong> — a ring buffer of the latest 10 hand positions feeds an average velocity vector into our own physics algorithm.</p>
        <img src="img/spectacles/throw.png" alt="Throwing algorithm diagram">
        <p>After refining the formula, we added some Pokemon into the scene and had a first draft of the project!</p>
        <video src="img/spectacles/v1.MP4" autoplay muted loop playsinline></video>
        <p class="media-caption">The first draft of the throwing interaction</p>
        <h3>Gamification</h3>
        <p>User feedback called for a tutorial to <strong>educate users about hand tracking</strong>, plus game mechanics to make the experience more exciting. We revisited the navigation idea as a <strong>radar-like mini-map showing where Pokemon spawn</strong>, randomized within a fixed distance so there are always 3 spawn locations nearby.</p>
        <img src="img/spectacles/navCode.png" alt="Navigation code">
        <h3>User feedback</h3>
        <p>We adapted the path-generating navigation system into an arrow pointing toward the nearest Pokemon, which turns off within "throwable" distance. When Snap added a physics engine to Lens Studio, we integrated it to ground the ball in the environment. <strong>These changes were informed by user feedback and observational studies.</strong></p>
        <video src="img/spectacles/final.mov" data-vertical autoplay muted loop playsinline></video>
        <p class="media-caption">The final version of Pokemon CatchAR</p>` },
      { id: 'rebrand', heading: 'Rebrand', html: `
        <p>To market the lens we had to remove the Pokémon IP due to legal issues. Here's what changed:</p>
        <ul>
          <li><strong>Updated Pokémon CatchAR to <a href="https://www.snapchat.com/lens/dad255155dfe48bda30b4d36e58d959b?type=SNAPCODE&metadata=01" target="_blank" rel="noopener">Chicken CatchAR</a>!</strong></li>
          <li><strong>Added scores</strong> based on chickens caught, helping gamify the experience.</li>
          <li><strong>Used the framework for educational purposes.</strong> We worked with a professor at the University of Oregon to create an educational lens about exploring endangered wildlife.</li>
          <li><strong>Randomized spawn points and added catching logic.</strong> We rewarded player efforts in the UI with some fun animations!</li>
        </ul>
        <video src="img/spectacles/Chicken_CatchAR_2.mov" data-vertical autoplay muted loop playsinline></video>
        <p class="media-caption">Chicken CatchAR in action</p>
        <p><strong>Links:</strong> Check out the <a href="https://www.snapchat.com/lens/dad255155dfe48bda30b4d36e58d959b?type=SNAPCODE&metadata=01" target="_blank" rel="noopener">final lens</a>, its feature on the <a href="https://www.instagram.com/p/CivNAcOpcEY/" target="_blank" rel="noopener">Snap Spectacles Instagram</a>, or the <a href="docs/Alejandro%20Romero-%20Master's%20Project%20Report.pdf" target="_blank" rel="noopener">official project paper</a>.</p>` },
      { id: 'reflection', heading: 'Reflection', html: `
        <ul>
          <li><strong>Understand the problem deeply /</strong> Establish exactly what problem you want to solve early on — if you can't convince someone else of your solution, explore it more before implementing.</li>
          <li><strong>Gather constant feedback from different sources /</strong> Experts in computer science, design, perceptual psychology, and gaming each offered something new to consider.</li>
          <li><strong>Set realistic goals /</strong> Communicate regularly about goals and adjust as needed. Stretch goals shouldn't distract from the main objective.</li>
        </ul>` }
    ],
    recommended: ['ames', 'instagram', 'gvis']
  },
  instagram: {
    thumb: 'img/thumbnail/instagram.png',
    category: 'Concept · Mixed Reality',
    title: 'Instagram AR/VR',
    tagline: 'Conceptualizing the future of social media interaction by designing a seamless mixed reality experience.',
    meta: { Role: 'UX/UI Designer, Full Stack Dev, Prototyper', Duration: '2 weeks', Team: '1 (Just me!)', Tools: 'VR · UX · Figma · Unity · C#' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <video src="img/instagram/InstagramARVR.mp4" autoplay muted loop playsinline></video>
        <p class="media-caption"><a href="https://www.youtube.com/watch?v=Z-o7AaLuoXo" target="_blank" rel="noopener">Watch the full YouTube teaser</a></p>
        <p>Social media provides us with the unique opportunity to socialize with one another from anywhere in the world. This medium of interaction satisfies our intrinsic needs of esteem and love/belonging in Maslow's hierarchy of needs. As technology evolves, the ways in which we meet these needs must evolve too.</p>
        <div class="ig-maslow">
          <div class="maslow-pyramid">
            <div class="maslow-caption">Maslow's Pyramid</div>
            <div class="maslow-level" style="width:42%"><div class="ml-name">Self-actualization</div><div class="ml-sub">desire to become the most that one can be</div></div>
            <div class="maslow-level hl" style="width:56%"><div class="ml-name">Esteem</div><div class="ml-sub">respect, self-esteem, status, recognition, strength, freedom</div></div>
            <div class="maslow-level hl2" style="width:70%"><div class="ml-name">Love and belonging</div><div class="ml-sub">friendship, intimacy, family, sense of connection</div></div>
            <div class="maslow-level" style="width:84%"><div class="ml-name">Safety needs</div><div class="ml-sub">personal security, employment, resources, health, property</div></div>
            <div class="maslow-level" style="width:98%"><div class="ml-name">Physiological needs</div><div class="ml-sub">air, water, food, shelter, sleep, clothing, reproduction</div></div>
          </div>
          <ul>
            <li>Social media helps us connect</li>
            <li>It allows us to maintain friendships and boost our self-esteem when used sensibly</li>
            <li>Bridges generational gaps</li>
          </ul>
        </div>
        <p>Of the biggest players in social, Instagram lets users connect not by walls of text but by pure visual media. It holds an impressive track record for engagement — but I believe it can be improved even further.</p>
        <div class="stats-row">
          <div><div class="stat-num">1b+</div><div class="stat-label">active monthly users</div></div>
          <div><div class="stat-num">3.5 hrs</div><div class="stat-label">average time spent by user per week</div></div>
          <div><div class="stat-num">4th most</div><div class="stat-label">users of any mobile app</div></div>
          <div><div class="stat-num">39.5%</div><div class="stat-label">of internet users use Instagram</div></div>
        </div>
        <p>Currently, Instagram offers little to no AR/VR support: viewing the app in VR means using the web app, which isn't optimized for mixed reality. Fully supporting VR and AR interactions could help reach wider audiences, make social experiences more natural, and change the game.</p>
        <div class="stats-row">
          <div><div class="stat-num">171m</div><div class="stat-label">active VR users in 2018</div></div>
          <div><div class="stat-num">$30.7b</div><div class="stat-label">combined AR/VR/MR/XR market size in 2021</div></div>
        </div>` },
      { id: 'approach', heading: 'Approach', html: `
        <h3>Make it feel good</h3>
        <p>Instagram works because it feels natural. Expanding how we interact with it requires overhauling its visual design while maintaining familiarity — <strong>innovation and familiarity don't have to be exclusive; attending to both is crucial.</strong></p>
        <img src="img/instagram/ui1.png" alt="UI exploration">
        <h3>Add key features</h3>
        <p>I didn't just want to redesign Instagram, but fundamentally change how a user interacts with it. I mapped the features that make it usable and looked for opportunities to expand them into mixed reality.</p>
        <div class="affinity-grid">
          <div class="affinity-col">
            <div class="aff-head">Mobile</div>
            <div class="aff-item">Easily available</div>
            <div class="aff-item">Iconography</div>
            <div class="aff-item">Minimal</div>
            <div class="aff-item opp">Add AR multi-window</div>
          </div>
          <div class="affinity-col">
            <div class="aff-head">Desktop</div>
            <div class="aff-item">High resolution image viewing</div>
            <div class="aff-item opp">Add text — too minimal</div>
            <div class="aff-item opp">Make navigation natural</div>
            <div class="aff-item opp">Add AR multi-window</div>
          </div>
          <div class="affinity-col">
            <div class="aff-head">VR</div>
            <div class="aff-item opp">Use of multiple windows</div>
            <div class="aff-item opp">Swipe ctrls, like mobile</div>
            <div class="aff-item opp">Viewing 3D models + photos</div>
          </div>
        </div>
        <div class="aff-legend">
          <span><span class="aff-dot" style="background:#f0f0f0;border:1px solid #ddd"></span>Existing strength</span>
          <span><span class="aff-dot" style="background:#FFE8DE"></span>Opportunity</span>
        </div>
        <p>From these criteria I redesigned the Instagram desktop app, staying hyper-aware of the affinity map so one visual style would carry across three device types: AR on mobile, VR, and desktop.</p>
        <img src="img/instagram/ui2.png" alt="Redesigned UI">
        <p>AR provides expanded screen real estate where there otherwise wouldn't be any — with AR glasses, users can view and manipulate multiple windows on desktop or mobile with the swipe of a finger.</p>
        <img src="img/instagram/ui3.png" alt="AR windows">
        <h3>Leveraging the power of XR</h3>
        <p>Mixed reality opens the door to interactions that just aren't possible on conventional displays: moving and resizing windows with your fingers (or from a distance with raycasted projections), 3D photos with real depth, and 3D models you can play with.</p>
        <div class="image-grid">
          <video src="img/instagram/moving.mp4" autoplay muted loop playsinline></video>
          <video src="img/instagram/3dphoto.mp4" autoplay muted loop playsinline></video>
        </div>` },
      { id: 'reflection', heading: 'Reflection', html: `
        <p>Instagram AR/VR started as a small consideration of mixed reality's applications to social media and quickly turned into a passion project. It let me do market research in the social space and address pain points I myself experience using social apps in VR — and design a concept that feels truly fresh and relevant.</p>
        <p>If you're interested in my work on this project, I'd love to hear from you. Thanks for reading! 😃</p>` }
    ],
    recommended: ['spectacles', 'collabxr', 'shader']
  },
  animus: {
    thumb: 'img/thumbnail/animus.png',
    category: 'RTFKT × Bezi AR Challenge',
    title: 'Animus AR',
    tagline: 'Interactive AR portals into the worlds of the RTFKT Animus characters 🔥',
    meta: {
      Role: 'AR Designer, Prototyper',
      Duration: '2024',
      Team: '1 (Just me!)',
      Tools: 'Bezi · Figma · Blender · Midjourney'
    },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <p>For the RTFKT × Bezi AR challenge, I set out to build an interactive AR experience around RTFKT's Animus characters. Rather than just placing the characters in your room, <strong>I wanted to let users look into the worlds these characters come from</strong> — so I designed a set of AR portals, each one a window into the environment I imagined for its character.</p>
        <video src="assets/Animus.mp4" autoplay muted loop playsinline></video>` },
      { id: 'worlds', heading: 'Building the Worlds', html: `
        <p>After digging through the character files in Blender to get a feel for each Animus, I drafted portals into where I imagined they'd come from. I generated the virtual worlds themselves with the help of Midjourney, iterating on prompts until each environment matched its character's personality.</p>
        <img src="assets/animus_midjourney_worlds.png" alt="Midjourney world generations">
        <p class="media-caption">Generating a Ghibli-style forest world for the plant Animus</p>
        <p>To match the Animus visual language, <strong>I went into the official Animus explainer video and grabbed quick style assets</strong> — the video's sci-fi border ended up becoming the card border in my experience too.</p>
        <img src="assets/animus_explainer.png" alt="The Animus explainer video">
        <p class="media-caption">The Animus explainer video that set the visual direction</p>
        <p>I also generated a ring of fire to add animation and a sense of wonder to the portal entrance. After editing it in Figma, it went straight into the scene using Bezi's Figma integration. To decorate the inside of each portal, I generated 3D set-dressing assets with Bezi AI.</p>
        <img src="assets/animus_ring_of_fire.png" alt="Ring of fire generation">
        <img src="assets/animus_bezi_assets.png" alt="3D assets generated with Bezi AI">
        <p class="media-caption">Bezi AI–generated rocks and grass used to dress the portal interiors</p>` },
      { id: 'cards', heading: 'Interactive Cards', html: `
        <p>I wanted a compelling way for users to access the portals that still tied into the Animus vibe. The answer was <strong>a set of interactive character cards designed in Figma</strong> — default and selected states for each character, brought into the scene with the Figma-to-Bezi integration.</p>
        <img src="assets/animus_cards.png" alt="Interactive character cards">
        <p class="media-caption">Card states for Garangy, Mythlet, and Gemdra</p>
        <p>To make the cards feel authentic, I rendered out PNGs of each character directly from the original files in Blender.</p>
        <img src="assets/animus_blender.png" alt="Character render in Blender">
        <p class="media-caption">Rendering Mythlet in Blender for its card</p>` },
      { id: 'statemachine', heading: 'The State Machine', html: `
        <p>With the pieces in place, I spent a <em>lot</em> of hours deep in Bezi's State Machine wiring up the swaps between design elements — card selection, portal transitions, and character states. It became <strong>a constant balance between performance optimization and visual fidelity</strong>, but I ultimately landed on something pretty stable (most of the time 😅).</p>
        <img src="assets/animus_statemachine.png" alt="Portal prototype in Bezi">
        <p class="media-caption">One of the finished portals, mid-build in Bezi</p>` },
      { id: 'reflection', heading: 'Reflection', html: `
        <p>This was a super fun experience, and I learned a whole lot about what Bezi is capable of — from AI-generated 3D assets to Figma round-tripping to the limits of its State Machine. Thanks RTFKT for the sick assets! 🔥</p>
        <p>If you're interested in my work on this project, I'd love to hear from you. Thanks for reading! 😃</p>` }
    ],
    recommended: ['spectacles', 'shader', 'instagram']
  },
  tkd: {
    thumb: 'img/thumbnail/tkd.png',
    category: 'Research · Motion Capture',
    title: 'Taekwondo Visualizer',
    tagline: 'Intuitive 3D visualization of accurate Taekwondo techniques using motion capture.',
    meta: { Role: 'Full Stack Dev', Duration: 'Jan 2020 — May 2020', Team: '<a href="https://aaronolsen.github.io/about_me.html" target="_blank" rel="noopener">Aaron Olsen, Ph.D.</a>', Tools: 'Mocap · Figma · C# · Unity · XROMM' },
    sections: [
      { id: 'why', heading: 'Why Taekwondo?', html: `
        <img src="img/tkd/TkdVizUI.png" alt="Taekwondo Visualizer UI">
        <p>Ever since the age of 6, I've been in love with Taekwondo. I joined the team at Brown and became an instructor. In Spring 2020, while studying motion data of nonhuman organisms at the Brainerd Biomechanics and Morphology lab, my mentor asked if I wanted to create an independent project — and the Taekwondo Visualizer was born.</p>
        <div class="image-grid">
          <img src="img/tkd/youngtkd.JPG" alt="Young Alejandro at Taekwondo">
          <img src="img/tkd/oldtkd.JPG" alt="Alejandro at Taekwondo">
        </div>` },
      { id: 'intro', heading: 'Introduction', html: `
        <h3>Quantifying Martial Arts</h3>
        <p><strong>What goal was I trying to accomplish? Who was the audience? What pain points needed addressing?</strong> Most online martial arts tutorials are 2D videos. An interactive 3D visualizer would let a user select techniques, view them from any angle, and learn breakdowns of each individual technique.</p>` },
      { id: 'data', heading: 'Data Collection', html: `
        <h3>Motion Capture System</h3>
        <p>We built a motion capture rig from scratch: a mocap suit with radio-dense beads tracked with <a href="https://www.xromm.org/" target="_blank" rel="noopener">XROMM</a> software, and 3 GoPro cameras capturing motion from three viewpoints — kick data tracked, exported as 3D transformations, and imported as Unity animations.</p>
        <img src="img/tkd/rig.png" alt="Motion capture rig">
        <div class="image-grid">
          <video src="img/tkd/block.mp4" autoplay muted loop playsinline></video>
          <video src="img/tkd/TaekwondoBlockTest.mp4" autoplay muted loop playsinline></video>
        </div>
        <video src="img/tkd/kickGoPro.mp4" autoplay muted loop playsinline></video>
        <h3>An Unexpected Roadblock</h3>
        <p>The workflow was solid — then Covid-19 made our motion capture system inaccessible. Rather than abandon the project, we <strong>pivoted to a new workflow</strong>.</p>` },
      { id: 'iteration', heading: 'Iteration', html: `
        <p>Photogrammetry was next — but holding a pose long enough for photos sacrifices accuracy, since a technique held statically differs from one in motion.</p>
        <div class="image-grid">
          <img src="img/tkd/roundhouse.png" alt="Roundhouse kick">
          <img src="img/tkd/front.png" alt="Front kick">
        </div>
        <p>We settled on animating character skeletons from two video viewpoints of an athlete completing each motion — time-efficient and accurate.</p>` },
      { id: 'design', heading: 'Design', html: `
        <p>With the animations created, I wireframed the final application, focusing entirely on ease of use in accessing the core features.</p>
        <img src="img/tkd/grey.png" alt="Wireframe">
        <img src="img/tkd/mockup.png" alt="Color mockup">
        <p>Core features: responsive camera, interactive playback bar, kick sub-technique breakdowns, technique tips, an interactive menu with cosmetic options, skeletal view with limb velocities, and a projected center-of-mass visualization.</p>` },
      { id: 'product', heading: 'The Product', html: `
        <h3>Playback</h3>
        <video src="img/tkd/Playback.mp4" autoplay muted loop playsinline></video>
        <h3>Skeletal View and Center of Mass</h3>
        <video src="img/tkd/Skeletal+COM.mp4" autoplay muted loop playsinline></video>
        <h3>Cosmetic Changes</h3>
        <video src="img/tkd/CosmeticChanges.mp4" autoplay muted loop playsinline></video>` },
      { id: 'reflection', heading: 'Reflection', html: `
        <p>The ideation and iterative processes were extremely valuable in tackling the project in manageable chunks. Integrating real-world data into Unity opens easy paths to VR, browser, and mobile. A huge lesson in visualizing data for users in a fun, intuitive way — and it was fun to make! Thanks for reading! 💥</p>` }
    ],
    recommended: ['catfish', 'sim', 'voxelpad']
  },
  collabxr: {
    thumb: 'assets/collabxr_thumb.png',
    category: 'Concept · Collaborative XR',
    title: 'Collab XR',
    tagline: 'Reimagining how we approach 3D modeling in collaborative spaces.',
    meta: { Role: 'Designer, Prototyper', Duration: '3 days', Tools: 'Figma · Bezi · Unity' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <video src="img/collabXR/xr%203d%20modeling%20demo.mp4" autoplay muted loop playsinline></video>
        <p>A few years ago I analyzed some of the most-used VR applications for 3D modeling, contributing my findings to Brown CS's VR wiki. I wanted to explore new ways to collaborate on scientific visualizations in VR.</p>
        <div class="cmp-table">
          <div></div><div class="cmp-head">VR Usability</div><div class="cmp-head">Collaboration</div><div class="cmp-head">Applications</div>
          <div class="cmp-tool">Mozilla Spoke</div>
          <div class="cmp-cell" data-col="VR Usability"><ul><li>Browser based in Hubs, super easy to make scenes and test in VR</li><li>Dedicated tutorials and support</li></ul><span class="cmp-dot good"></span></div>
          <div class="cmp-cell" data-col="Collaboration"><ul><li>Can't collaborate in editor</li><li>Simple Hubs setup for multiple users</li><li>Some users found controls finnicky</li></ul><span class="cmp-dot okay"></span></div>
          <div class="cmp-cell" data-col="Applications"><ul><li>Can import GLTF file formats (though supporting more would be nice)</li><li>Can view and interact with 3D models (no 3D modeling)</li></ul><span class="cmp-dot good"></span></div>
          <div class="cmp-tool">Unity Probuilder</div>
          <div class="cmp-cell" data-col="VR Usability"><ul><li>Runs locally (Unity), development for VR</li><li>Can't model once in VR scene</li><li>Helpful for 3D modeling quickly in Unity engine, but not as extensive as other software</li></ul><span class="cmp-dot okay"></span></div>
          <div class="cmp-cell" data-col="Collaboration"><ul><li>No collaboration in editor; no extensions created to allow it</li><li>Can only interact in Unity scene with others once app is built (can't use Probuilder)</li></ul><span class="cmp-dot bad"></span></div>
          <div class="cmp-cell" data-col="Applications"><ul><li>Allows for complex modeling, but may not be as fast a workflow as others</li><li>Exact modeling via measurements and grid snapping</li><li>Works well with Polybrush and other Unity extensions</li></ul><span class="cmp-dot okay"></span></div>
          <div class="cmp-tool">Blender XR</div>
          <div class="cmp-cell" data-col="VR Usability"><ul><li>Runs locally (Blender), easy setup with Blender 2.8</li><li>Simple access for VR window, good documentation</li><li>Intuitive functionality</li><li>Not super fleshed out yet (still in development)</li></ul><span class="cmp-dot good"></span></div>
          <div class="cmp-cell" data-col="Collaboration"><ul><li>No real collaboration</li><li>Only collaboration is one person on desktop viewing — not as smooth as Maya MARUI</li></ul><span class="cmp-dot okay"></span></div>
          <div class="cmp-cell" data-col="Applications"><ul><li>Can create scientific models</li><li>Can measure distances and angles</li><li>Lets users view already-made scenes with preloaded meshes or data</li></ul><span class="cmp-dot okay"></span></div>
          <div class="cmp-tool">Maya MARUI</div>
          <div class="cmp-cell" data-col="VR Usability"><ul><li>Runs locally (Maya), easy setup</li><li>Extremely extensive feature list</li><li>UI has lots of labels explaining the many menus</li><li>Intuitive; handles most of Maya functionality in VR</li></ul><span class="cmp-dot good"></span></div>
          <div class="cmp-cell" data-col="Collaboration"><ul><li>No VR-to-VR collaboration</li><li>Only collaboration is one person on desktop viewing</li><li>A lot smoother an experience in Maya than in Blender</li></ul><span class="cmp-dot okay"></span></div>
          <div class="cmp-cell" data-col="Applications"><ul><li>Can create scientific models, measure distances and angles</li><li>View already-made scenes with preloaded meshes or data</li><li>Can animate, do mocap, skin, rig, retopologize… extremely powerful</li></ul><span class="cmp-dot good"></span></div>
          <div class="cmp-tool">3D Slicer VR</div>
          <div class="cmp-cell" data-col="VR Usability"><ul><li>Easy setup and intuitive controls</li><li>Not many features beyond viewing the scene + minor edits</li></ul><span class="cmp-dot okay"></span></div>
          <div class="cmp-cell" data-col="Collaboration"><ul><li>No real collaboration</li><li>One person can view desktop while other is in VR</li><li>Can't do much at the same time</li></ul><span class="cmp-dot bad"></span></div>
          <div class="cmp-cell" data-col="Applications"><ul><li>View volume renderings from scientific imaging</li><li>Place elements in model, translating to 2D slices</li><li>Great for visualization</li></ul><span class="cmp-dot good"></span></div>
        </div>
        <div class="cmp-legend"><span><i style="background:#3DBB4E"></i>Good</span><span><i style="background:#F5A623"></i>Okay</span><span><i style="background:#E8442E"></i>Bad</span></div>
        <p>Years later I found Bezi, a browser-based collaborative tool for 3D design and XR prototyping. With its suite of innovative features, I couldn't help but imagine the ways it could change the standard for designing in XR.</p>` },
      { id: 'ai', heading: 'AI for 3D', html: `
        <p>With recent releases in generative AI — like OpenAI's Point-E for generating 3D point clouds from text — it's increasingly vital to discover what these systems mean for the future of 3D design workflows.</p>
        <video src="img/collabXR/AI.mov" autoplay muted loop playsinline></video>
        <p>I mocked up a possible interface for generating 3D meshes with generative models on the cloud. Democratizing this technology in an accessible browser-based tool will be critical to how AI-assisted 3D design shapes industry standards.</p>` },
      { id: 'mobile', heading: 'Mobile Collab', html: `
        <p>Not everyone has an HMD, but almost everyone has a smartphone. Viewing and editing 3D files on mobile is a great way to test XR prototypes — and lets anyone contribute to the 3D design process from anywhere.</p>
        <video src="img/collabXR/mobile.mov" autoplay muted loop playsinline></video>
        <p>Three primary interaction types on mobile: the editor, AR mode with touchscreen controls, and 3D scenes with hand tracking.</p>` },
      { id: 'vr', heading: 'Design in VR', html: `
        <p>I also considered 3D modeling and collaboration in VR, since currently available VR modeling applications leave much to be desired.</p>
        <img src="img/collabXR/vr_bezel.png" alt="3D scene in VR">
        <p>By letting users see each other's cursors and edits in VR — alongside collaborators on mobile or desktop — mixed reality design takes on a whole new meaning.</p>
        <div class="image-grid">
          <img src="img/collabXR/modeling1.png" alt="VR 3D modeling">
          <img src="img/collabXR/modeling2.png" alt="VR 3D modeling">
        </div>` },
      { id: 'passthrough', heading: 'Passthrough', html: `
        <p>The future of XR lies in AR. To design for AR, designs have to be viewed and tested in AR — color passthrough for HMDs and full AR glasses are the future of AR prototyping.</p>
        <img src="img/collabXR/passthrough.png" alt="Color passthrough">
        <p>Toggling into full color passthrough will set the next big XR design platforms apart. Pairing hand tracking with voice commands opens the door to the most naturalistic design opportunities we've ever seen.</p>` }
    ],
    recommended: ['instagram', 'spectacles', 'voxelpad']
  },
  nasa: {
    thumb: 'assets/thumb_nasa.jpg',
    category: 'NASA · Glenn & Ames Research Centers',
    title: 'NASA',
    tagline: 'Mixed-reality visualization work across two NASA research centers.',
    layout: 'hub',
    entries: [
      { image: 'img/thumbnail/GVIS.png',
        tags: ['VR', 'UX', 'Python', 'Unity'],
        title: 'NASA — GVIS',
        desc: 'Mixed-reality visualizations that make science accessible to everyone.', href: 'project.html?id=gvis' },
      { image: 'img/thumbnail/ames.png',
        tags: ['VR', 'UX', 'Python', 'Unity'],
        title: 'NASA — MarsVR',
        desc: 'The next generation of accessible Mars exploration in VR.', href: 'project.html?id=ames' }
    ],
    recommended: ['spectacles', 'collabxr', 'blizzard']
  },
  gvis: {
    thumb: 'img/thumbnail/GVIS.png',
    category: 'NASA · Glenn Research Center',
    title: 'NASA — GVIS',
    tagline: 'Crafting mixed reality visualizations to make science accessible to everyone.',
    meta: { Role: 'Full Stack Dev, UX Designer', Duration: 'June 2020 — Aug 2020', Team: 'NASA GVIS Lab Members (~10)', Tools: 'VR · AR · Figma · Unity · Blender' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <img src="img/gvis/iss.png" alt="ISS visualization">
        <p>Throughout the summer of 2020, I contributed to a variety of projects and prospective technologies at GVIS that allow for more powerful visualizations at NASA — from MR development to remote experiences and mobile applications, factors made more essential by the COVID-19 pandemic.</p>` },
      { id: 'iss', heading: 'ISS', html: `
        <h3>Interactive International Space Station Visualization</h3>
        <p>The ISS visualization let me experiment with natural user interface techniques, optimized for the Oculus Quest with controller-less hand tracking. I initially designed a room where the user views a model of the ISS, but a life-sized ISS in orbit proved far more informative and visually appealing.</p>
        <p>Constant rotations on the Earth and the scene's light source create the illusion of orbit with realistic lighting shifts. Users can highlight ISS components by tapping names in a scrollable hand menu, with labels that always face the user as the model rotates.</p>
        <img src="img/gvis/handanchoring.png" alt="Hand-anchored UI">
        <video src="img/gvis/iss.mp4" autoplay muted loop playsinline></video>` },
      { id: 'rover', heading: 'Mars Rover', html: `
        <h3>Exploring the Perseverance Rover</h3>
        <p>With the recent launch of Perseverance, I created an environment representing the surface of Mars using Unity's terrain editor.</p>
        <img src="img/gvis/rover.png" alt="Mars rover environment">
        <p>The scene opens with an interactive menu covering the rover, its history, and Mars itself. Users can teleport around and view the rover from every angle.</p>
        <img src="img/gvis/ui.png" alt="Interactive menu">
        <p>Users can even grab individual pieces of the rover to see their names and descriptions appear beside them — letting go snaps the piece back into place, for a hands-on educational experience.</p>
        <img src="img/gvis/menu.png" alt="Rover piece interaction">` },
      { id: 'other', heading: 'Other Projects', html: `
        <p>I also built an experimental VR navigation project where users "swim" with their hands to explore the liquid bodies on Titan, Saturn's biggest moon.</p>
        <img src="img/gvis/titan.png" alt="Titan exploration">
        <p>And a side project, <strong>Bored Games VR</strong> — a prototype for playing board games with nothing but a VR headset and your hands, in realtime multiplayer with friends.</p>
        <video src="img/gvis/boredgames.mp4" autoplay muted loop playsinline></video>
        <p>Players change games via a minimal tabletop menu and can emote with hand gestures — a "thumbs up" renders the matching emoticon.</p>
        <div class="image-grid">
          <img src="img/gvis/jenga.png" alt="Bored Games VR — Jenga">
          <img src="img/gvis/emoji.png" alt="Gesture emojis">
        </div>` },
      { id: 'reflection', heading: 'Reflection', html: `
        <p>Working at the GVIS lab was an incredible experience learning from extremely intelligent R&D experts. These projects let me tackle problems I never thought I'd solve, with a mentor who helped me grow to make an impact at NASA. 10/10 would do again.</p>` }
    ],
    recommended: ['ames', 'spectacles', 'infina']
  },
  ames: {
    thumb: 'img/thumbnail/ames.png',
    category: 'NASA · Ames Research Center',
    title: 'NASA — MarsVR',
    tagline: 'Creating the next generation of accessible Mars exploration in VR.',
    meta: { Role: 'UX Designer, Full Stack Dev', Duration: 'Aug 2020 — Dec 2020', Team: '4 · <a href="https://www.psi.edu/about/staffpage/eldar" target="_blank" rel="noopener">Eldar Noe Dobrea, Ph.D. (Mentor)</a>', Tools: 'VR · UX · Python · Figma · Unity · C#' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <video src="img/ames/demo.mp4" autoplay muted loop playsinline></video>
        <p>My project at NASA Ames Research Center supported an interactive toolkit for observing, interacting with, and assessing Mars data relayed by the Mars Science Laboratory (MSL). By directly referencing MSL database observations, we generated an accurate, traversable 3D representation of Mars as charted by the Curiosity rover.</p>` },
      { id: 'goals', heading: 'Key Interactions', html: `
        <ul>
          <li><strong>Generate an accurate, traversable martian surface</strong> from NavCam image data</li>
          <li><strong>"Fly" mode</strong> for a bird's-eye view of the terrain with key UI labels</li>
          <li><strong>A data product sorting system</strong> to browse every MastCam image to date</li>
          <li><strong>Camera cones</strong> visualizing the rover's point of view when capturing images</li>
          <li><strong>Selectable surface points</strong> plotting chemical composition via ChemCam data</li>
        </ul>` },
      { id: 'implementation', heading: 'Implementation', html: `
        <h3>Generating the Terrain</h3>
        <p>My teammates used NavCam coordinate and depth data (via Python) to generate meshes in Blender, colorized in an ochre palette for an accurate martian environment — the core of the VR app, and the basis for the 3D camera cones.</p>
        <div class="image-grid">
          <img src="img/ames/terrain1.png" alt="Terrain">
          <img src="img/ames/terrain2.png" alt="Terrain">
          <img src="img/ames/terrain3.png" alt="Terrain">
          <img src="img/ames/terrain4.png" alt="Terrain">
        </div>
        <h3>MastCam Image Sorting Engine</h3>
        <p>Most of my work involved MSL's MastCam images and their PDS labels. I automated an engine that parses every label, extracts the needed data into a lookup table, and queries the MSL database directly for both data and images.</p>
        <img src="img/ames/pds.png" alt="PDS label parsing">
        <p>With hundreds of thousands of data points per sol, sorting was the real challenge: users drill from sol → sequence → observation, with a preview window, camera cones, and a downloadable image gallery. Getting this smooth took heavy iteration and careful dictionary data structures.</p>
        <div class="image-grid">
          <img src="img/ames/MSL2.png" alt="MastCam interface">
          <img src="img/ames/MSL1.png" alt="MastCam interface">
        </div>` },
      { id: 'ux', heading: 'UX Aids', html: `
        <p>Because complex data can intimidate casual users, we added aids: a 3D Curiosity model showing the instruments that collect the data, explorable hands-on.</p>
        <img src="img/ames/blender.png" alt="Curiosity rover model">
        <p>And the "Mars Buddy" — a small green martian who walks users through the UI, answers FAQs, follows you around the surface, and will even play catch!</p>
        <img src="img/ames/marsbuddy.png" alt="Mars Buddy">` },
      { id: 'future', heading: 'Future Work', html: `
        <p>Future versions will incorporate additional MSL datasets and new data from the Mars 2020 Perseverance rover: automated camera cone generation, ChemCam composition plots for any surface point, more MSL datatypes (DAN, CheMin, APXS, MAHLI), and a virtual tour led by Mars Buddy.</p>
        <p>Working with the <a href="https://an.rsl.wustl.edu/msl/mslbrowser/an3.aspx" target="_blank" rel="noopener">MSL datasets</a> was challenging but fun, and taught me a great deal about showing users complex data in comprehensible ways.</p>` }
    ],
    recommended: ['gvis', 'spectacles', 'infina']
  },
  infina: {
    thumb: 'img/thumbnail/infina.png',
    category: 'Infina, Ltd. · FAA',
    title: 'Infina, Ltd.',
    tagline: 'Creating mixed reality training experiences for the Federal Aviation Administration.',
    meta: { Role: 'Full Stack Dev', Duration: 'July 2019 — Sept 2019', Team: 'Infina Design org · <a href="https://www.benmorseart.com/about.html" target="_blank" rel="noopener">Ben Morse (mentor)</a>', Tools: 'VR · AR · Speech Recognition · Unity · C#' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <video src="img/infina/Interactive%20Training%202019.mp4" autoplay muted loop playsinline></video>
        <p>During the summer of 2019, I worked with <a href="https://www.infina.net/" target="_blank" rel="noopener">Infina, Ltd.</a> creating mixed reality experiences for the Federal Aviation Administration — from VR technical operations training demos to ground control taxiway applications.</p>` },
      { id: 'intro', heading: 'Introduction', html: `
        <h3>Creating Government Training Apps</h3>
        <p>Working with my mentor Ben Morse, my objective was to create immersive experiences for FAA technical operations training — building 3D assets, coding simulations, and working across mixed reality hardware for the most optimal training experience possible.</p>` },
      { id: 'projects', heading: 'Projects', html: `
        <h3>Hardware Maintenance Training</h3>
        <p>An interactive refresher for power transfer switch maintenance. Physical training facilities bottleneck hands-on training with long waitlists, so we designed an app where users navigate the proper maintenance sequence with realtime feedback via UI elements, haptics, and environmental cues.</p>
        <video src="img/infina/ATS_Demo.mp4" autoplay muted loop playsinline></video>
        <h3>Extreme Environment Training</h3>
        <p>We also tested a maintenance sequence in an extreme environment — a radio tower in northern Alaska — using arm-swing velocity for naturalistic VR locomotion, with minimal UI interference.</p>
        <video src="img/infina/Alaska_Demo.mp4" autoplay muted loop playsinline></video>
        <h3>Taxiways</h3>
        <p>A breadth-first-search AI delegates planes along taxiway paths. I built an interactive Boise Airport implementation where users direct planes by click or voice command, with realtime tracking of destinations and instructions — simulating traffic-controller/pilot communication.</p>
        <div class="image-grid">
          <video src="img/infina/Taxiways_v1.mp4" autoplay muted loop playsinline></video>
          <video src="img/infina/Taxiways_v2.mp4" autoplay muted loop playsinline></video>
        </div>
        <h3>Sandbox Projects!</h3>
        <p>My mentor encouraged learning VR development through test projects — including giving myself the ability to firebend. 🔥</p>
        <div class="image-grid">
          <video src="img/infina/VR_ATLA.mp4" autoplay muted loop playsinline></video>
          <video src="img/infina/LeapMotionProximityTest.mp4" autoplay muted loop playsinline></video>
        </div>` },
      { id: 'reflection', heading: 'Reflection', html: `
        <p>Infina was my first experience designing and developing VR professionally — and my first exposure to government contracting, with users and pain points I'd never considered. I even got to present my work to the CEO and VPs! 🤩</p>` }
    ],
    recommended: ['gvis', 'ames', 'spectacles']
  },
  harvard: {
    thumb: 'img/thumbnail/harvard.png',
    category: 'Harvard · Data Visualization',
    title: 'Extreme Weather Visualization',
    tagline: 'Helping to illustrate global changes in extreme weather through interactive visualization.',
    meta: { Role: 'Full Stack Dev', Duration: 'Nov 2021 — Dec 2021', Team: '<a href="https://mpstewart.net/" target="_blank" rel="noopener">Matthew Stewart</a>, <a href="https://www.nadatarkhan.com/" target="_blank" rel="noopener">Nada Tarkhan</a>, <a href="https://www.linkedin.com/in/maximilian-urbany-766086123/" target="_blank" rel="noopener">Max Urbany</a>', Tools: 'JavaScript · HTML/CSS · Three.js · D3.js · Blender · Rhino' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <img src="img/harvard/title_redesign.png" alt="Title design">
        <img src="img/harvard/globe_redesign.png" alt="Globe design">
        <p>I had the pleasure of taking Harvard's famous Visualization course, taught by <a href="https://vcg.seas.harvard.edu/people" target="_blank" rel="noopener">Hanspeter Pfister</a>, learning D3.js and Three.js to build our final data visualization project.</p>
        <video src="img/harvard/v1.mp4" autoplay muted loop playsinline></video>
        <p><strong>Links:</strong> <a href="https://climate-crew.github.io/d3-climate-visualization/" target="_blank" rel="noopener">Interactive website</a> · <a href="https://github.com/Climate-Crew/d3-climate-visualization" target="_blank" rel="noopener">GitHub repo</a></p>` },
      { id: 'intro', heading: 'Introduction', html: `
        <h3>Raising awareness of a global issue</h3>
        <p>We chose climate change — an issue that has shrunk from the public eye but is more real than ever — building interactive visualizations on objective data from the National Weather Service and NOAA's Extreme Weather dataset.</p>
        <p><strong>Core questions:</strong> What places are most affected by extreme weather? What are the human impacts? How can we convey this data in a fun, interactive way?</p>` },
      { id: 'implementation', heading: 'Implementation', html: `
        <h3>Brainstorming</h3>
        <p>We focused on three areas from macro to micro — global, city, and personal impacts — to paint a story that resonates: climate change affects everyone. We sketched over 20 potential visualizations and voted on the finalists.</p>
        <div class="image-grid">
          <img src="img/harvard/sketch1.png" alt="Sketch">
          <img src="img/harvard/sketch2.png" alt="Sketch">
          <img src="img/harvard/sketch3.png" alt="Sketch">
          <img src="img/harvard/sketch4.png" alt="Sketch">
        </div>
        <h3>First Pass Implementation</h3>
        <p>We set up a design system and standardized CSS and JS packages. Most visuals used D3.js; the globe used Three.js — the two integrate surprisingly seamlessly.</p>
        <div class="image-grid">
          <video src="img/harvard/spiral_vid.mov" autoplay muted loop playsinline></video>
          <video src="img/harvard/globe_vid.mov" autoplay muted loop playsinline></video>
        </div>` },
      { id: 'redesign', heading: 'Redesign', html: `
        <p>Our v1 was practical, but had lost our initial vision of an aesthetically pleasing experience. User testing surfaced great feedback we couldn't fully implement in time — so I redesigned the website to reflect a cleaner, more polished experience.</p>
        <img src="img/harvard/redesigns.png" alt="Redesigned screens">` },
      { id: 'reflection', heading: 'Reflection', html: `
        <p>We won the <strong>Best Project Award</strong> out of 29 projects, earning a spot in the Harvard <a href="https://www.cs171.org/2021/fame/" target="_blank" rel="noopener">CS 171 Hall of Fame</a>! Beyond the award, it was a great lesson in creating data-driven experiences that drive users to learn about important issues.</p>
        <img src="img/harvard/certificate.png" alt="Best Project certificate">` }
    ],
    recommended: ['catfish', 'sim', 'tkd']
  },
  catfish: {
    thumb: 'assets/thumb_catfish.png',
    category: 'Brown · Scientific Visualization',
    title: 'Catfish Visualization',
    tagline: 'Browser-based experience allowing users to visualize catfish skull morphology.',
    meta: { Role: 'Full Stack Dev', Duration: 'Feb 2018 — July 2020', Team: '<a href="https://aaronolsen.github.io/about_me.html" target="_blank" rel="noopener">Aaron Olsen, Ph.D.</a>', Tools: 'R · HTML/CSS · JavaScript · XROMM · Blender' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <video src="img/catfish/interpolation.mp4" autoplay muted loop playsinline></video>
        <p>At Brown's <a href="http://www.brainerdlab.org/" target="_blank" rel="noopener">Brainerd Lab</a>, I worked with my mentor Aaron Olsen on projects exploring how suction feeding behaviors have driven evolutionary diversification of musculoskeletal systems in ray-finned fish — learning XROMM technology and 3D segmenting tools like 3D Slicer and HOROS along the way.</p>
        <p><strong>Published software:</strong> <a href="https://cran.r-project.org/web/packages/svgViewR/index.html" target="_blank" rel="noopener">svgViewR package on CRAN</a></p>` },
      { id: 'intro', heading: 'Introduction', html: `
        <h3>Understanding science through visuals</h3>
        <p>Suction feeding fish rapidly expand their mouths to create a pressure gradient, forcing water and prey inside. Skull skeletal elements are studied via x-ray and CT imaging — but we wanted an interactive tool where anyone could change the conformation of a fish's bones through a biologically accurate linkage model.</p>` },
      { id: 'implementation', heading: 'Implementation', html: `
        <h3>Creating the Meshes</h3>
        <p>The 3D meshes came from real fish bones: CT scans produced DICOM files, imported into 3D Slicer or HOROS to isolate bones and export them as 3D meshes.</p>
        <div class="image-grid">
          <img src="img/catfish/scan1.png" alt="CT scan">
          <img src="img/catfish/scan2.png" alt="Segmented mesh">
        </div>
        <h3>Making the Meshes presentable</h3>
        <p>We cleaned and decimated the meshes for performance while keeping scientific accuracy, leaving bones in their CT-scan positions. Each bone is its own mesh — enabling visualization, color-coding, even 3D printing.</p>
        <div class="image-grid">
          <img src="img/catfish/Catfish%20Comparisons%201.png" alt="Mesh comparison">
          <img src="img/catfish/Catfish%20Comparisons%202.png" alt="Mesh comparison">
          <img src="img/catfish/Catfish%20Comparisons%203.png" alt="Mesh comparison">
        </div>
        <h3>Physical Model</h3>
        <p>We 3D printed each bone to scale, simulating ligaments with woven polyester ribbons anchored by micro-screws — letting us manipulate the skull "by hand" to understand its motion patterns.</p>
        <div class="image-grid">
          <img src="img/catfish/physicaldisassembled.png" alt="Disassembled print">
          <img src="img/catfish/3D%20Print%20Key.jpg" alt="3D print key">
        </div>
        <img src="img/catfish/physical.jpg" alt="Assembled physical model">
        <video src="img/catfish/projected.mp4" autoplay muted loop playsinline></video>` },
      { id: 'application', heading: 'The Application', html: `
        <p>Aaron wrote a <a href="https://aaronolsen.github.io/software/linkr.html" target="_blank" rel="noopener">linkage model</a> handling the physics of motion and kinematics between bones. I helped expand the <a href="https://cran.r-project.org/web/packages/svgViewR/index.html" target="_blank" rel="noopener">svgViewR package</a> with interpolation functionality, so users can drive different forms of movement with sliders — all at once, or as individual breakdowns.</p>
        <video src="img/catfish/Catfish%20Skull%20Visualization%20Demo.mp4" autoplay muted loop playsinline></video>` },
      { id: 'reflection', heading: 'Reflection', html: `
        <p>This interdisciplinary project was my first foray into scientific visualization. Taking real-world data and creating a medium for others' understanding is truly special — and it inspired countless other projects (plus a rare title: expert in catfish skull segmentation 😉).</p>` }
    ],
    recommended: ['tkd', 'harvard', 'sim']
  },
  voxelpad: {
    thumb: 'img/thumbnail/voxelpad.png',
    category: 'Personal Project · Unity',
    title: 'Voxel Pad',
    tagline: 'An app allowing users to draw anything in three dimensions using voxels.',
    meta: { Role: 'Full Stack Dev', Duration: '1 week', Tools: 'Unity · C#' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <video src="img/voxelpad/clip.mp4" autoplay muted loop playsinline></video>
        <p>I wanted to design an application for creating 8bit-style graphics using 3D voxels in an interactive environment — starting with the core question of "painting": how would the user draw in the first place?</p>` },
      { id: 'features', heading: 'Core Features', html: `
        <ul>
          <li><strong>Responsive camera</strong> — navigate the scene in 3D</li>
          <li><strong>Customizable brush color and size</strong></li>
          <li><strong>Toggle canvas on/off</strong> — some people like guidelines, others don't</li>
          <li><strong>Draw on previous blocks in 3D</strong> (far more complex than I imagined)</li>
          <li><strong>2D preview with zoom</strong> — a source of truth for complex scenes</li>
          <li><strong>Erase tool</strong> — we all make mistakes</li>
          <li><strong>Color override</strong> — drawing over a block updates its color</li>
        </ul>` },
      { id: 'implementation', heading: 'Implementation', html: `
        <h3>Mockups</h3>
        <p>To avoid issues later, I created a rough mockup with every feature I wanted so I knew exactly what to design and build.</p>
        <div class="image-grid">
          <img src="img/voxelpad/3d.png" alt="3D mockup">
          <img src="img/voxelpad/grey.png" alt="Greybox wireframe">
        </div>
        <h3>Challenges</h3>
        <p>The primary issue was handling blocks that had already been drawn, since users would draw over them to add detail and color.</p>
        <h3>Solution</h3>
        <p>Two modes: <strong>2D mode</strong> draws on the canvas and overwrites colors of existing blocks, while <strong>3D mode</strong> uses a ray tracer to determine which face of a block is hovered, letting the user build on top of it in 3D.</p>
        <div class="image-grid">
          <img src="img/voxelpad/note3.png" alt="Implementation notes">
          <img src="img/voxelpad/note2.png" alt="Implementation notes">
          <img src="img/voxelpad/note1.png" alt="Implementation notes">
        </div>` },
      { id: 'reflection', heading: 'Reflection', html: `
        <p>The final result met the main goal: a lightweight program for drawing with 3D voxels. Future improvements: better UI with highlighted CTAs, clearer 2D/3D mode distinction, camera fixes, and image export. A great learning experience balancing functionality and UX while bringing big ideas to life in Unity. Thanks for reading!</p>` }
    ],
    recommended: ['sim', 'collabxr', 'tkd']
  },
  sim: {
    thumb: 'img/sim/final.png',
    category: 'Personal Project · AI',
    title: 'Natural Selection Sim',
    tagline: 'Visualizing the selection of optimal traits in a population of A.I. agents in real time.',
    meta: { Role: 'Full Stack Dev', Duration: '1 week', Tools: 'AI · Unity · C#' },
    sections: [
      { id: 'overview', heading: 'Overview', html: `
        <video src="img/sim/NaturalSelectionSim.mp4" autoplay muted loop playsinline></video>
        <p>While discovering Unity and interactive design at Infina, I had the idea to build a natural selection simulator using AI. I'd seen similar projects, but wanted to create my own from scratch to learn more about AI and the Unity engine.</p>` },
      { id: 'ideation', heading: 'Ideation', html: `
        <h3>Objective</h3>
        <p>AI-controlled bots simulating natural processes: eating, reproducing, passing on genetic traits.</p>
        <h3>Problem</h3>
        <p>To convey these cleanly, organisms are simple AI-controlled cubes with a small UI canvas showing energy and sex. Speed is conveyed by color (blue = slow, red = fast); food sources are green spheres that repopulate in feeding areas.</p>
        <h3>Other Challenges</h3>
        <p>A believable population also needed food consumption, energy management, reproductive drive, and genetic variation in the backend.</p>
        <img src="img/sim/notes.jpg" alt="Simulation notes">` },
      { id: 'implementation', heading: 'Implementation', html: `
        <h3>Mockups</h3>
        <p>I mocked up a lightweight, intuitive layout and a palette for the ten possible speed groups.</p>
        <div class="image-grid">
          <img src="img/sim/greybox.png" alt="Greybox layout">
          <img src="img/sim/design.png" alt="Design palette">
        </div>
        <h3>Design</h3>
        <p>Minimal, nonintrusive UI: two graphs show the distribution of sexes and speeds in the population, with pause and fast-forward controls.</p>
        <img src="img/sim/final.png" alt="Final UI">
        <div class="image-grid">
          <video src="img/sim/graph1.mp4" autoplay muted loop playsinline></video>
          <video src="img/sim/graph2.mp4" autoplay muted loop playsinline></video>
        </div>
        <h3>The Result</h3>
        <p>Tradeoffs between speed and energy consumption, paired with limited food, selected for moderate speed genes: slow organisms (1–3) died out, fast ones (7–10) perished from energy consumption, and midrange speeds (4–6) dominated over repeated trials — with controlled population sizes.</p>` },
      { id: 'reflection', heading: 'Reflection', html: `
        <p>This side project stressed how important it is to know what and how you want to build before diving in. Flying solo meant no external critique — a real cost — but it taught me that iteration is vital, and catching errors early improves both timeline and quality.</p>` }
    ],
    recommended: ['voxelpad', 'tkd', 'harvard']
  }
};
