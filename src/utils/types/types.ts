export type LayoutType = {
location: "header" | "footer";
}

export type HeaderType = {
    isMenu:boolean;
    toggleMenu:()=>void
}

export type OrderSummary = {
    drinkWay:string,
    coffeeType:string,
    coffeeVolume:string,
    grindWay:string,
    frequency:string,
}

export type OrderQuestion =
  | "How do you drink your coffee?"
  | "What type of coffee?"
  | "How much would you like?"
  | "Want us to grind them?"
  | "How often should we deliver?";