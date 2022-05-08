export interface SideNavItem {
    name: string,
    link: string,
    subSideNavItems?: SideNavItem[]
}