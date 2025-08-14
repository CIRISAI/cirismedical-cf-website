import { IconHome, IconShieldCheck, IconLicense, IconHeart, IconStethoscope, IconUsers } from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    subtitle: "Healthcare for Humanity",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Safety",
    subtitle: "Patient protection first",
    link: "/safety",
    icon: <IconShieldCheck className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Licensing",
    subtitle: "Why CML, not open source",
    link: "/licensing",
    icon: <IconLicense className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Technology",
    subtitle: "Domain-routed medical AI",
    link: "/technology",
    icon: <IconStethoscope className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Partnership",
    subtitle: "Join the mission",
    link: "/partnership",
    icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Impact",
    subtitle: "Lives we're changing",
    link: "/impact",
    icon: <IconHeart className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default navItems;