import { Home } from "./Pages/Home";
import { Routes, Route, Link } from "react-router";
import { Strats } from "./Pages/Strat";
import { Composition } from "./Pages/Comp";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { HouseSimpleIcon, SwordIcon, BookIcon } from "@phosphor-icons/react";

function App() {
  return (
    <div className="flex h-screen w-full ml-0">
      <Sidebar variant="inset" className="mr-0">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Pages</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link to="/Composition">
                  <SidebarMenuButton>
                    <span>Composition</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>
                    <SwordIcon />
                  </SidebarMenuBadge>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link to="/">
                  <SidebarMenuButton>
                    <span>Home</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>
                    <HouseSimpleIcon />
                  </SidebarMenuBadge>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link to="/Strats">
                  <SidebarMenuButton>
                    <span>Strats</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>
                    <BookIcon />
                  </SidebarMenuBadge>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger></SidebarTrigger>
      <SidebarInset className="flex">
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Strats" element={<Strats />} />
            <Route path="/Composition" element={<Composition />} />
          </Routes>
        </main>
      </SidebarInset>
    </div>
  );
}

export default App;
