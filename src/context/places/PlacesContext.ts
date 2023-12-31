import { createContext } from "react";
import { Feature } from "../../interfaces/IPlaces";

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [ number, number ];

    //Methods
    searchPlacesByTerm: (query: string) => Promise<Feature[]>;
}


export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps );