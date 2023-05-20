// HEAD IMAGES FOR GALLERY SECTIONS -> TO REPRESENT EACH SECTION

import bhilaiHead_img from "../../assets/BHILAI_TRIP/IMG-20220802-WA0026.jpg"   
import nightoutHead_img from "../../assets/NIGHOUT/IMG_20221001_210217_0384.jpg"
import eclectikaHead_img from "../../assets/ECLECTIKA _23/IMG_3389.jpg"




// IMPORTING THE ARRAYS OF PHOTOS 

import { bhilaiTripPhotos, nightoutPhotos, eclectika23Photos } from "../DynamicGalleryPage/tripPhotos"





const galleryData= [
    {
        title: "Trip to Bhilai",
        imgSrc: bhilaiHead_img,
        dynamicLink: "trip-to-bhilai",
        imagesArray: bhilaiTripPhotos,
        abt: "",
    },
    
    {
        title: "Night out",
        imgSrc: nightoutHead_img,
        dynamicLink: "night-out",
        imagesArray: nightoutPhotos,
        abt: "",
    },
    
    {
        title: "Eclectika '23",
        imgSrc: eclectikaHead_img,
        dynamicLink: "eclectika-2023",
        imagesArray: eclectika23Photos,
        abt: "",
    },
]

export default galleryData;