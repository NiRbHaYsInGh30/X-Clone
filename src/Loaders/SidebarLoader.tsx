import { useState, useEffect } from "react";
import { Badge, Bell, Bookmark, Hash, Home, User} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/Components/ui/sidebar";
import { useNavigate } from "react-router";
import { Button } from "../Components/ui/button";

const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "explore",
    url: "/search",
    icon: Hash,
  },
  {
    title: "Bookmarks",
    url: "/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Jobs",
    url: "/jobs",
    icon: Badge,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
]
export function AppSidebar() {


  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  const navigate=useNavigate();
  const handleLogout = () => {
   localStorage.setItem("logged in", "false");
   localStorage.removeItem("token");
   navigate("/");
  }
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
            
              <button
                onClick={toggleDarkMode}
                style={{
                  marginLeft: "10px",
                  background: "none",
                  border: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                {isDarkMode ? "☀️ " : "🌙 "}
              </button>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <Button onClick={handleLogout} className="w-full">
        Logout
      </Button>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>

  );
}


