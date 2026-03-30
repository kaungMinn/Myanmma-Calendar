import { Calendar, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { navBarItems } from "@/constants/nav-bar-items";

import { SmartLink } from "../loadings/smart-loading";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Item } from "../ui/item";

function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="scrollbar-hide" variant="sidebar" side="left" collapsible="icon">

      <div className="p-4">
        <Item variant="outline">
          <Calendar />

          MMCalendar
        </Item>
      </div>

      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navBarItems.map((item: any, index: number) => (
                <div key={index}>
                  {
                    item.subMenus
                      ? (
                          <Collapsible
                            asChild
                            defaultOpen={item.isActive || item.subMenus?.some((subItem: any) => location.pathname.includes(subItem?.url))}
                            className="group/collapsible"
                          >
                            <SidebarMenuItem>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                  {item.icon && <item.icon />}
                                  <span>{item.title}</span>
                                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                              </CollapsibleTrigger>

                              <CollapsibleContent>
                                <div className="relative">
                                  {/* Connecting line from parent to children */}
                                  <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>

                                  <SidebarMenuSub className="ml-2 space-y-1">
                                    {item?.subMenus?.map((subItem: any) => (
                                      <SidebarMenuSubItem key={subItem.url} className="relative">
                                        {/* Horizontal line to each child */}
                                        <div className="absolute left-2 top-1/2 w-4 h-px bg-border -translate-y-1/2"></div>

                                        <SidebarMenuSubButton
                                          asChild
                                          className={`w-full pl-8 hover:bg-primary hover:text-sidebar-accent  ${location.pathname === subItem.url ? "bg-primary  text-sidebar-accent border-l-2 border-primary" : ""}`}
                                        >
                                          <SmartLink to={subItem.url} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                              <span>{subItem.title}</span>
                                            </div>
                                          </SmartLink>
                                        </SidebarMenuSubButton>
                                      </SidebarMenuSubItem>
                                    ))}
                                  </SidebarMenuSub>
                                </div>
                              </CollapsibleContent>
                            </SidebarMenuItem>
                          </Collapsible>
                        )
                      : (
                          <SidebarMenuItem key={item.title} className={` ${location.pathname === item.url && "bg-primary text-sidebar-accent rounded-md shadow-[0_0_0_1px_hsl(var(--sidebar-accent))] "}`}>
                            <SidebarMenuButton asChild className="space-x-2 py-2">
                              <SmartLink to={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                              </SmartLink>
                            </SidebarMenuButton>
                          </SidebarMenuItem>

                        )
                  }
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
