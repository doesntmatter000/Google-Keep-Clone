import { useEffect, RefObject, useState } from 'react';
import { useAppDispatch } from '../../../../store/hook';
import { toggleOptions, changeBackColor, changeBackImage } from '../../../../store/Slices/mainInputSlice';


export const useOptions = (wrapperRef: RefObject<HTMLDivElement>, prevColor: RefObject<HTMLButtonElement>, prevBackground: RefObject<HTMLButtonElement>) => {

    const dispatch = useAppDispatch()

    const colors = [
        "#f28b82",
        "#fbbc04",
        "#fff475",
        "#ccff90",
        "#a7ffeb",
        "#cbf0f8",
        "#aecbfa",
        "#fdcfe8",
        "#e6c9a8",
        "#e8eaed",
    ];

    const images = [
        "https://www.gstatic.com/keep/backgrounds/grocery_light_0609.svg",
        "https://www.gstatic.com/keep/backgrounds/food_light_0609.svg",
        "https://www.gstatic.com/keep/backgrounds/music_light_0609.svg",
        "https://www.gstatic.com/keep/backgrounds/recipe_light_0609.svg",
        "https://www.gstatic.com/keep/backgrounds/notes_light_0609.svg",
        "https://www.gstatic.com/keep/backgrounds/places_light_0609.svg",
        "https://www.gstatic.com/keep/backgrounds/travel_light_0614.svg",
        "https://www.gstatic.com/keep/backgrounds/video_light_0609.svg",
        "https://www.gstatic.com/keep/backgrounds/celebration_light_0714.svg",
    ];

///////////////////////////////////////////
///////////////////////////////////////////

    useEffect(() => {
        let handler = (e: Event) => {
            if (!wrapperRef.current?.contains(e.target as Node)) {
                dispatch(toggleOptions(false));
            }
        };
        document.addEventListener("mousedown", handler);
    });

///////////////////////////////////////////
///////////////////////////////////////////
    const [prevColor1, setPrevColor1] = useState<HTMLButtonElement | null>(null)
    const switchColor = (e: HTMLButtonElement) => {
        if (prevColor1) {
            prevColor1.style.borderColor = "transparent"
        } else {
            if (prevColor.current) {
                prevColor.current.style.borderColor = "transparent"
            }
        }

        e.style.borderColor = "#ad5af5";
        setPrevColor1(e)
        dispatch(changeBackColor(e.style.backgroundColor));
    };

///////////////////////////////////////////
///////////////////////////////////////////

    let [prevBacground1, setPrevBackground1] = useState<HTMLButtonElement | null>(null)
    const switchBackground = (e: HTMLButtonElement) => {
        if (prevBacground1) {
            prevBacground1.style.borderColor = "transparent"
        } else {
            if (prevBackground.current) {
                prevBackground.current.style.borderColor = "transparent"
            }
        }
        e.style.borderColor = "#ad5af5";
        setPrevBackground1(e)
        dispatch(changeBackImage(e.style.backgroundImage));
    };

    return { colors, images, switchColor, switchBackground }
}