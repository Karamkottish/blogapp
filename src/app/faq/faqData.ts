export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  icon: string; // icon name for lucide-react
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    title: "General First-Time Owner Queries",
    icon: "PawPrint",
    items: [
      { question: "How to take care of a dog for the first time?", answer: "Start with routine feeding, basic training, vet visits, and a safe environment." },
      { question: "First-time dog owner guide", answer: "Learn dog needs, set a daily routine, and ensure vet checks, training, and bonding." },
      { question: "What do new dog owners need to know?", answer: "Dogs need structure, exercise, quality food, and early vet care." },
      { question: "Dog care basics for beginners", answer: "Provide food, water, grooming, training, and regular health checkups." },
      { question: "Checklist for first-time dog owners", answer: "Food, bowls, bed, leash, ID tag, toys, grooming tools, and vet appointment." }
    ]
  },

  {
    title: "Before Buying or Adopting",
    icon: "Dog",
    items: [
      { question: "Best dog breeds for first-time owners", answer: "Labradors, Beagles, Shih Tzus, Pugs, and Golden Retrievers are beginner-friendly." },
      { question: "Should I adopt or buy a dog?", answer: "Adopt if possible; it's ethical, affordable, and saves lives." },
      { question: "Cost of owning a dog monthly", answer: "₹2,000–₹10,000 for food, grooming, vet visits, and supplies." },
      { question: "How to choose the right dog for me?", answer: "Match breed traits with your lifestyle, home size, and activity level." },
      { question: "Best dog breed for apartment living", answer: "Shih Tzu, Pug, Chihuahua, and French Bulldog suit small spaces." }
    ]
  },

  {
    title: "Health & Safety",
    icon: "Stethoscope",
    items: [
      { question: "When to take dog to vet?", answer: "Visit if your dog shows unusual behavior or sickness." },
      { question: "Dog vaccination schedule in India", answer: "Core vaccines start at 6–8 weeks with boosters yearly." },
      { question: "Dog emergency symptoms", answer: "Heavy breathing, collapse, seizures, or nonstop vomiting." },
      { question: "Can my dog get parvo?", answer: "Yes, unvaccinated puppies are at high risk." },
      { question: "How to check if dog has fever?", answer: "Use a rectal thermometer; above 103°F indicates fever." }
    ]
  },

  {
    title: "Training & Behavior",
    icon: "GraduationCap",
    items: [
      { question: "How to train a dog at home?", answer: "Use rewards, short sessions, and consistent rules." },
      { question: "Dog commands for beginners", answer: "Start with sit, stay, come, heel, and leave it." },
      { question: "How to stop leash pulling?", answer: "Pause when pulling happens and reward loose-leash walking." },
      { question: "How to stop dog from chewing furniture?", answer: "Provide chew toys and block access when unsupervised." },
      { question: "How to reduce separation anxiety?", answer: "Practice short departures and build independence." }
    ]
  }
];
