import { IconHome } from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    subtitle: "Welcome to CIRIS",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About us",
    subtitle: "Learn more about CIRIS",
    link: "https://ciris-covenant.alignordie.workers.dev/about",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Covenant",
    subtitle: "Our ethical covenant",
    link: "https://ciris-covenant.alignordie.workers.dev/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default navItems;
