
import { Icon } from "@iconify/react";
import { NavLink } from "react-router";

import { ModeToggle } from "../ui/mode-toggle";

const Links = [
  {
    path: "/dashboard",
    name: "Overview",
    icon: "mdi:home",
  },
  {
    path: "/mood",
    name: "Mood",
    icon: "tabler:mood-edit",
  },
  {
    path: "/reflection",
    name: "Reflection",
    icon: "fluent:image-reflection-32-light",
  },
  {
    path: "/goals",
    name: "Goals",
    icon: "mage:goals",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "mdi:settings-outline",
  },
];

const Panel = () => {
  const navSize = "56px";

  return (
      <nav
        className={`fixed right-0 bottom-0 left-0 z-10 flex h-[${navSize}] border-sidebar-border bg-sidebar flex-row items-center justify-around border-t lg:relative lg:h-screen lg:w-fit lg:flex-col lg:justify-start lg:border-t-0 lg:border-r lg:p-4`}
        style={{ "--nav-size": navSize } as React.CSSProperties}
      >
        <div className="flex w-full flex-col items-center lg:items-start">
          <h2 className="text-header-foreground hidden text-2xl font-bold lg:mb-8 lg:block tracking-widest">
            Human OS
          </h2>

          <ul className="flex w-full justify-evenly lg:w-auto lg:flex-col lg:space-y-3">
            {Links.map((link) => (
              <li key={link.path} className="lg:mb-7">
                <NavLink to={link.path} className={({ isActive }) =>`lg:flex lg:justify-start lg:w-full flex flex-col items-center justify-center p-2 text-xs font-medium lg:flex-row lg:rounded-md lg:px-4 lg:py-3 lg:text-sm lg:font-medium lg:transition-colors ${ isActive ? 'lg:bg-sidebar-foreground lg:text-sidebar text-destructive' : 'text-sidebar-foreground hover:text-destructive lg:hover:bg-sidebar-accent/70'}`}>
                  <Icon
                    icon={link.icon}
                    width={24}
                    height={24}
                    className="lg:mr-3"
                  />
                  <span className="mt-1 lg:mt-0 lg:block tracking-[2px]">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:mt-auto lg:block">
            <ModeToggle />
          </div>
        </div>
      </nav>
  );
};

export default Panel;
