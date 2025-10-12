import { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
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

    const activeLinkStyle = ({isActive}: {isActive: boolean}) => {
        const styles = [
            "ml-5px",
            "mr-5px",
            "hover:underline",
            "text-(--foreground)",
            "font-normal"
        ]
        
        if (isActive) {
            const textColorIndex= styles.indexOf("text-(--foreground)");
            styles.splice(textColorIndex, 1);
            styles.push("font-semibold");
            styles.push("text-(--accent)") ;
        }

        const classes = styles.join(" ");
        return classes
    }

    const visibleItems = navItems.filter(item => item.visible);

    const renderNavItems = () => {
        return visibleItems.map(({value, label, to}: {value: string,label: string, to: string}, index: number) => (
            <>
                <NavigationMenuItem key={value} className="desktop-menu-item text-center ml-2 mr-2">
                    <NavLink to={to} className={ activeLinkStyle } >{label}</NavLink>
                </NavigationMenuItem>
                { index !== visibleItems.length - 1 && <Separator className="bg-(--accent)/25" orientation="vertical"/> }
            </>
        ))
    }

    const renderMobileNavItems = () => {
        return visibleItems.map(({ value, label, to }: { value: string,label: string, to: string }) => (
            <li key={value} className="mobile-menu-option font-normal active:font-semiboldactive:text-(--accent) text-2xl">
                <NavLink to={to} onClick={ handleLinkClick }>{ label }</NavLink>
            </li>
        ))
    }



  return (
    <div className="
    navigation-container 
    flex flex-row pt-2 pb-2 pr-2 justify-end
    sm:justify-center sm:pt-5 sm:pb-10
    ">
        <NavigationMenu className="navigation-menu hidden sm:block">
            <NavigationMenuList>
                { renderNavItems() }
            </NavigationMenuList>
        </NavigationMenu>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mobile-menu-button bg-white/70 rounded-full size-[50px] sm:hidden">
                    <MenuIcon className="size-[25px]" />
                </Button>
            </SheetTrigger>
            <SheetContent className="mobile-menu-sheet-content bg-white/95 p-[30px]"> 
                <ul className="mobile-menu-options-list flex flex-col gap-4">
                    { renderMobileNavItems() }
                </ul>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Navigation