// HEAD IMAGES FOR GALLERY SECTIONS -> TO REPRESENT EACH SECTION

import bhilaiHead_img from "../../assets/BHILAI_TRIP/IMG-20220802-WA0026.jpg"
import nightoutHead_img from "../../assets/NIGHOUT/IMG_20221001_210217_0384.jpg"
import eclectikaHead_img from "../../assets/ECLECTIKA _23/IMG_3389.jpg"




// IMPORTING THE ARRAYS OF PHOTOS 

import { bhilaiTripPhotos, nightoutPhotos, eclectika23Photos } from "../DynamicGalleryPage/tripPhotos"





const galleryData = [
    {
        title: "Trip to Bhilai",
        imgSrc: bhilaiHead_img,
        dynamicLink: "trip-to-bhilai",
        imagesArray: bhilaiTripPhotos,
        abt: `Have you ever embarked on an exciting journey with your closest friends, creating memories that will last a lifetime? Let me take you on a virtual trip to Bhilai, a charming city nestled in the heart of Chhattisgarh, where a group of friends set out to explore its beauty and create unforgettable moments.
        
        Our adventure began with anticipation and excitement as we gathered our backpacks and a list of must-visit places. Bhilaiknown for its warm hospitality, offered us a perfect blend of urban charm and natural wonders.
        
        As we arrived in Bhilai, we were greeted by the vibrant atmosphere of the city. Our first stop was Maitri Bagh, a lush green park brimming with serene lakes and captivating flora. We strolled through the gardens, capturing the scenic beauty and posing for candid photos. The laughter and camaraderie echoed through the air, creating an atmosphere of pure joy.
        
        No trip to Bhilai would be complete without savoring its delectable cuisine. We indulged in local delicacies like poha, jalebi, and the famous street food known as chaat. The tantalizing flavors tantalized our taste buds, giving us a glimpse into the culinary delights of the region.
        
        Our journey in Bhilai ended with a heart full of memories and a promise to return someday. The laughter, adventures, and shared experiences bonded us in a unique way, leaving an indelible mark on our hearts.
        
        Bhilai, with its charm and warmth, provided us with a memorable trip that will forever be etched in our minds. The city's blend of modernity and tradition, coupled with the company of dear friends, made it a truly unforgettable experience. As we bid farewell to Bhilai, we carried with us not just photographs and souvenirs but a treasure trove of cherished moments that will be cherished for years to come.
        
        If you ever find yourself planning a trip to Bhilai, be prepared to embark on an adventure filled with laughter, exploration, and the joy of friendship. Bhilai awaits with open arms, ready to create beautiful memories with you and your loved ones.`,
    },

    {
        title: "Night out",
        imgSrc: nightoutHead_img,
        dynamicLink: "night-out",
        imagesArray: nightoutPhotos,
        abt: `As the sun dipped below the horizon, casting a warm glow over the city, we embarked on a thrilling night out in Naya Raipur. The bustling streets came alive with anticipation as my friends and I prepared for an unforgettable adventure in this vibrant city.
        
        Energized by the lively atmosphere, we decided to explore the vibrant streets of Naya Raipur. Neon lights illuminated the night as we strolled through the bustling markets, soaking in the sights and sounds of the city. The vibrant nightlife engulfed us, with clubs and bars pulsating with music and laughter.
        
        As the night progressed, we decided to take a leisurely walk along the beautifully lit streets of Naya Raipur. The city's modern architecture and well-maintained parks provided a picturesque backdrop for our nighttime adventure. We reveled in the tranquility of the city at night, the peacefulness juxtaposed with the vibrant energy we had experienced earlier.
        
        The night slowly gave way to the dawn, and we found ourselves reflecting on the incredible moments we had shared. The bonds of friendship had grown stronger, and our hearts were filled with gratitude for this unforgettable night out in Naya Raipur.
        
        As the sun began to rise, casting a golden hue over the city, we bid farewell to Naya Raipur, carrying with us the memories of a night filled with laughter, connection, and pure joy. The night had been a testament to the power of friendship and the magic that can unfold when we embrace new experiences together.
        
        Naya Raipur had shown us a different side, a place where vibrant nightlife, lively conversations, and unforgettable moments coexist. We left with a promise to return, knowing that Naya Raipur would always hold a special place in our hearts as the backdrop to one of our most cherished adventures.`,
    },

    {
        title: "Eclectika '23",
        imgSrc: eclectikaHead_img,
        dynamicLink: "eclectika-2023",
        imagesArray: eclectika23Photos,
        abt: `Picture this: The campus alive with a buzz of anticipation, vibrant decorations adorning every corner, and a palpable sense of excitement in the air. You find yourself amidst the exhilarating atmosphere of Eclectika, your college's annual fest, ready to embark on a thrilling journey of music, art, and cultural festivities.
        
        As you step into the fest grounds, a kaleidoscope of colors and sounds greets you. The main stage is alive with energetic performances, captivating the audience with music that fills the air. The beats reverberate through your body, igniting a surge of energy within you. 
        
        Eclectika is not just about entertainment; it's a celebration of diversity and inclusivity. 
        
        But Eclectika is not only about what you see and hear; it' about laughing and reminiscing about shared experiences. You meet new people, exchanging stories and ideas, forging new friendships that will extend beyond the fest's boundaries. Eclectika becomes a melting pot of personalities, cultures, and perspectives, where you realize the true essence of a college community.
        
        Amidst the hustle and bustle, you find moments of respite. The serene chill-out zones provide a sanctuary to relax and rejuvenate. You sit under a tree, enjoying the cool breeze, reflecting on the incredible experiences of the day. The festive spirit infuses you with a sense of pride and gratitude for being part of such a vibrant and dynamic community.
        
        Eclectika, your college's fest, has been a celebration of art, music, culture, and friendship. It has provided you with an opportunity to explore your passions, broaden your horizons, and connect with like-minded individuals. As you bid farewell to the fest, you carry with you a newfound appreciation for the power of creativity, the joy of shared experiences, and the strength of a united community.
        
        Until next year's Eclectika, the memories and inspiration gained will continue to fuel your journey, reminding you of the extraordinary moments that can be created when people come together to celebrate their collective spirit.`,
    },
]

export default galleryData;