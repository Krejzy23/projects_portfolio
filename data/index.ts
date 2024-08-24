"use client"

import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";




export const navItems = [
    { name: "Home", link: "#home", imgURL: "/icons/home.svg" },
    { name: "Discover", link: "#discover", imgURL: "/icons/discover.svg" },
    { name: "Contact", link: "#contact", imgURL: "/icons/contact.svg"},
];

export const products = [
    {
        id: 1,
        title: "Eventy",
        description: "Complex NextJs SaaS Application for planing Events and meetups",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/fm.svg"],
        link: "https://events-platform-mu.vercel.app/",
        thumbnail:
            "/images/eventl.png",
    },
    {   id: 2,
        title: "Photographer portfolio",
        description: "Simple and nice website using Html,Css and javascript",
        iconLists: ["/icons/html.svg","/icons/css.svg","/icons/javascript.svg"],
        link: "https://photographer-portfolio-nine.vercel.app/",
        thumbnail:
            "/images/photo.png",
    },
    {
        id: 3,
        title: "AI Summerizer",
        description: "Simple React Application using GPT models for summerize open source artictle",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/fm.svg"],
        link: "https://summarizer-ai-psi.vercel.app/",
        thumbnail:
            "/images/sumz.png",
    },
    {   id: 4,
        title: "Anime List",
        description: "NextJs website using server actions and awesome infinite scroll",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/fm.svg"],
        link: "https://anime-list-beige.vercel.app/",
        thumbnail:
            "/images/anime.png",
    },
    {   
        id: 5,
        title: "Live Text Application",
        description: "NextJs Real-time text editor build by LiveBlocks and user auth",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/fm.svg"],
        link: "https://live-text-three.vercel.app/",
        thumbnail:
            "/images/live.png",
    },
    {   
        id: 6,
        title: "IPhone15 Pro UI/UIX",
        description: "Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/fm.svg"],
        link: "https://i-phone15-pro.vercel.app/",
        thumbnail:
            "/images/iphonepro.png",
    },
    {
        id: 7,
        title: "BrainWave UI/UIX",
        description: "Beuatifull website with Framer-motion animations.",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/fm.svg"],
        link: "https://brainwave-ui-uix.vercel.app/",
        thumbnail:
            "/images/brainwave.png",
    },
    {
        id: 8,
        title: "Podcast Application",
        description: "AI SaaS platform for creating podcasts with a complete user interface.",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/fm.svg"],
        link: "https://podcastr-app-ten.vercel.app/",
        thumbnail:
            "/images/podcast.png",
    },
    {   
        id: 9,
        title: "Image Ai Application",
        description: "NextJs AI image SaaS platform using MongoDB ,Stripe ,Clerk and more...",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/fm.svg"],
        link: "https://image-ai-nu.vercel.app/",
        thumbnail:
            "/images/image.png",
    },
    {   
        id: 10,
        title: "Metaverse UI/UIX",
        description: "NextJs Website With Framer Motion & Tailwind CSS",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/fm.svg"],
        link: "https://krejzy-verse.vercel.app/",
        thumbnail:
            "/images/meta.png",
    },
    {   
        id: 11,
        title: "3D Japan Bistro",
        description: "Webite page with 3D Animations",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/javascript.svg", "/icons/three.svg"],
        link: "https://3-d-sushi-ramen-bistro.vercel.app/",
        thumbnail:
            "/images/bistro.png",
    },

    {
        id: 12,
        title: "Blog Application",
        description: "MERN blog with admin dashboard.",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/mongodb.svg","/icons/express.svg", "/icons/nodejs.svg", "/icons/redux.svg"],
        link: "https://mern-blog-gmho.onrender.com/",
        thumbnail:
            "/images/blog.png",
    },
    {
        id: 13,
        title: "Barber Website",
        description: "Barber promo page",
        iconLists: ["/icons/html.svg","/icons/css.svg","/icons/javascript.svg"],
        link: "https://barber-portfolio.vercel.app/",
        thumbnail:
            "/images/barber.png",
    },
    {   
        id: 14,
        title: "Trip List",
        description: "Nice 3D Camp list with ThreeJs animations",
        iconLists: ["/icons/re.svg", "/icons/tail.svg", "/icons/three.svg"],
        link: "https://trip-list-3-d.vercel.app/",
        thumbnail:
            "/images/trip.png",
    },
    {
        id: 15,
        title: "Clinic Reserve",
        description: "NextJs app for healthcare platform with complete registration and sms notifications.",
        iconLists: ["/icons/next.svg", "/icons/tail.svg", "/icons/ts.svg","/icons/c.svg"],
        link: "https://clinic-reserve.vercel.app/",
        thumbnail:
            "/images/clinic.png",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/icons/git.svg",
        link: "https://github.com/Krejzy23",
    },
    {
        id: 2,
        img: "/icons/whats.svg",
        link: "",
    },
    {
        id: 3,
        img: "/icons/gmail.svg",
        link: "",
    },
    {
        id: 4,
        img: "/icons/ver.svg",
        link: "https://vercel.com/krejzy23s-projects",
    },
];

export const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: IconTerminal2,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: IconEaseInOut,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: IconCurrencyDollar,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: IconCloud,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: IconRouteAltLeft,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. At least our AI Agents are.",
      icon: IconHelp,
    }, 
    {
      title: "Money back guarantee",
      description:
        "If you do not like EveryAI, we will convince you to like us.",
      icon: IconAdjustmentsBolt,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: IconHeart,
    },
  ];
