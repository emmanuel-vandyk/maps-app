import { MapView, BtnMyLocation, ReactLogo, SearchBar } from "../components";

export const HomeScreen = () => {
    return (
        <div>
            <MapView />
            <SearchBar />
            <BtnMyLocation />
            <ReactLogo />
        </div>
    )
}