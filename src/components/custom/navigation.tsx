import { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { NavLink } from 'react-router'
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet"
import { Menu as MenuIcon } from "lucide-react"
import navItems from '@/constants/navitems'


function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const renderNavItems = () => {
        return navItems.map(({value, label, to}: {value: string,label: string, to: string}, index: number) => (
            <>
                <NavigationMenuItem key={value} className="desktop-menu-item">
                    <NavigationMenuLink asChild className="text-sm text-center sm:text-lg">
                        <NavLink to={to}>{label}</NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                { index !== navItems.length - 1 && <Separator orientation="vertical"/> }
            </>
        ))
    }

    const renderMobileNavItems = () => {
        return navItems.map(({ value, label, to }: { value: string,label: string, to: string }) => (
            <li key={value} className="mobile-menu-option active:bg-gray-100 text-2xl">
                <NavLink to={to} onClick={ handleLinkClick }>{ label }</NavLink>
            </li>
        ))
    }



  return (
    <div className="
    navigation-container 
    flex flex-row pt-2 pb-2 pr-2 justify-end
    sm:justify-center sm:pt-5 sm:pb-5
    ">
        <NavigationMenu className="navigation-menu hidden sm:block">
            <NavigationMenuList>
                { renderNavItems() }
            </NavigationMenuList>
        </NavigationMenu>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mobile-menu-button bg-white rounded-full sm:hidden">
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="mobile-menu-sheet-content bg-white p-[30px]"> 
                <ul className="mobile-menu-options-list flex flex-col gap-4">
                    { renderMobileNavItems() }
                </ul>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Navigation