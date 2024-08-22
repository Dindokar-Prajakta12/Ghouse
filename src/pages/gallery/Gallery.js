import React from 'react';
import './Gallery.css';

const Gallery = () => {
    // Sample images, replace with your own URLs
    const images = [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322912670.jpg?k=e6df428c0dd85972bbd9a35c8b93ed80bdfd2f4fac6445d7d6553ee3b6f3706e&o=&hp=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/7e/6e/2a/cpwd-guest-house-cochin.jpg?w=700&h=-1&s=1',
        'https://content.jdmagicbox.com/comp/siliguri/d8/9999px353.x353.200627233255.l3d8/catalogue/cpwd-guest-house-siliguri-guest-house-am0twyf5po.jpg?clr=',
        'https://content.jdmagicbox.com/comp/puttaparthi/a6/9999p8554.8554.140426172922.d4a6/catalogue/sai-priyanka-guest-house-puttaparthi-puttaparthi-guest-house-u6dedpy1mk-250.jpg',
        'https://r1imghtlak.mmtcdn.com/3e235cf84e1f11ee95640a58a9feac02.jpg',
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/373715519.jpg?k=7ddc15f73a0646b34f56db0eaee71915e1f50129732bea67c94cc7e93be02b8a&o=',
        'https://media-cdn.tripadvisor.com/media/photo-s/03/de/31/f8/sahi-river-view-guesthouse.jpg',
        // 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/157123590.jpg?k=29d4dff885864e16f0694e54430b979127944abf5537a26caf23f6dda32e4ca4&o=&hp=1',
        // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToOBWBs1wZE3f0jw69NhlsdccUAe4fiqeaFQ&s',
        // 'https://media-cdn.tripadvisor.com/media/photo-i/11/99/9c/2e/guest-house-building.jpg',
        // 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/409919127.jpg?k=e8da6730c7b2f973f6109fbd3a545cb3c676e8a95306db31ff91c9a9f2e5e799&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/388897276.jpg?k=7b404502e8747fd952478aa91b4ee6b6552e44dcff3e8f2c75f67542d4d0e2a3&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/388897263.jpg?k=621a7d47768b171518921ade8eaca6501ed405eded579aafd53e91dd5e596bf3&o=&hp=1',
        'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg',
        'https://carrolldesign.co.uk/wp-content/uploads/2023/01/luxury-hotel-bedroom-design.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYn-ObjZyhSju2JPzWdwpIgeQ1w3Yguo99TlviqtOduFwzwRxb9Kl-e09qG8c9Dj0AQaU&usqp=CAU',
        'https://www.21oak.com/wp-content/uploads/sites/7/2021/12/dark-moody-modern-master-bedroom.jpg?fit=1024%2C1024&p=1',
        'https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM=',
        'https://media.istockphoto.com/id/1452529483/photo/3d-render-of-luxury-hotel-room.jpg?b=1&s=612x612&w=0&k=20&c=tcqSqaoCVZ09C0jh64qYxU1lkh5K6jDH1vYioD11EbA=',
        'https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743746292-GQXWCMJ1XT5JLVYJ5UCU/image-asset.jpeg',
        'https://t4.ftcdn.net/jpg/00/48/05/67/360_F_48056772_4xzGQerR7lW82z7MPTN8AulMraNIOZEJ.jpg',
        'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?cs=srgb&dl=pexels-pixabay-237371.jpg&fm=jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVFLKpKErXcI90FEJj4rmkhmmTlnAlKJC9wy-XV5y59Wb_XvC_4bHDUiub6HgLooDpj8&usqp=CAU'
    ];

    return (
        <div className='nnh'>
            <div className="gallery-container">
            {images.map((src, index) => (
                <div className="gallery-item" key={index}>
                    <img src={src} alt={`Gallery ${index + 1}`} />
                </div>
            ))}
        </div>
        </div>
    );
};

export default Gallery;