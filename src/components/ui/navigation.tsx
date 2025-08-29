import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuContent,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import { Menu as MenuIcon } from "lucide-react"

function Navigation() {
  return (
    <div className="navigation-container flex flex-row justify-center">
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem className="desktop-menu-item">
                <NavigationMenuLink>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="desktop-menu-item">
                <NavigationMenuLink>About Us</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="desktop-menu-item">
                <NavigationMenuLink>FAQs</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="desktop-menu-item">
                <NavigationMenuLink>Schedule of Events</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="desktop-menu-item">
                <NavigationMenuLink>Travel & Stay</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="desktop-menu-item">
                <NavigationMenuLink>Registry</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mobile-menu-item">
                <NavigationMenuTrigger>
                        <MenuIcon />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div>
                        Menu Content
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

export default Navigation