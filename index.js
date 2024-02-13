const shoppingProducts = [
    {
        image: 'https://asmpa.selise.cloud/1707465302_90c1e4382c85c728167579a72c08d4_headphone.jpeg',
        alt: 'items',
        name: 'Zebronics Jet PRO Premium Wired Gaming On Ear Headphone with LED for Headband + earcups, 40mm Neodymium Drivers, 2 Meter Braided Cable, with mic, Suspension Design, 3.5mm + USB Connector (Black, Blue)',
        details: 'Get immersed into your gaming world with the 40mm Neodymium drivers which produce the best sound signature for a Gaming headphone! Powerful Bass, minor details like footsteps and gunshots, Clear vocals are easily audible with ZEB-JET PRO!',
        price: '$9.99',
        rating: '3.9'
    },
    {
        image: 'https://asmpa.selise.cloud/1707825639_14da0105e8f31a9deba41e91feaf8d_watch.jpeg',
        alt: 'items',
        name: 'Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3",120+ Sports Modes, 240 * 240 PX High Res with SpO2, Heart Rate Monitoring & IP67 Rating (Silver Grey)',
        details: '【High Resolution Display】- Comes with a 1.3" TFT Color Full Touch Screen and a 240*240 Pixel High Resolution this fashion smartwatch is covered to flaunt the sleek and stylish look always with 260 NITS Peak Brightness',
        price: '$49.99',
        rating: '3.9'
    },
    {
        image: 'https://asmpa.selise.cloud/1707825756_0a14d4121b8664fab006d02952b3d3_bag.jpeg',
        alt: 'items',
        name: 'Storite Portable Nylon Stylish Small 6 Multi-Pocket Zip Closure Sling Cross Body Travel Messenger One Side Shoulder Bag for Men & Women - (Grey,27x10.5x23 cm)',
        details: 'Dimensions: 27 x 10.5 x 23 Cm (LXWXH), Color: Grey, Adjustable strap belt length- 130 cm, Color: Brown, Material: Nylon',
        price: '$9.99',
        rating: '3.9'
    }
];

const cartContainer = document.getElementById("cart-container");
const closeBtn = document.createElement("span");
closeBtn.className = ("material-symbols-outlined cursor-pointer mb-[20px]");
closeBtn.append("close")
cartContainer.append(closeBtn);


for (i = 0; i < shoppingProducts.length; i++ ) {
    const myProducts = shoppingProducts[i];
    const main = document.querySelector("main");
    main.style.cssText = `
        display: flex;
        flex-direction: row;
        gap: 20px;
    `
    const addCartPop = document.getElementsByClassName("add-cart-modal")
    const shoppingCartBtn = document.getElementById("cart-button");
    const products = document.createElement("div");
    const image = document.createElement("img");
    image.className = "rounded-t-[8px]";
    const description = document.createElement("div");
    const title = document.createElement("h3");
    const priceDiv = document.createElement("div");
    const price = document.createElement("p");
    const rating = document.createElement("p");
    const cartBtn = document.createElement("button");
    const cartIcon = document.createElement("span");
    products.classList.add("products");
    cartIcon.classList.add("material-symbols-outlined");

    //product details page
    const productSection = document.getElementsByClassName("product-section");
    const productImg = document.querySelector("product-image");
    const productName = document.querySelector("product-name");
    const productDescription = document.querySelector("product-description");

    //adding product details
    // productImg.src = myProducts.image;
    // productImg.alt = myProducts.alt
    // productName.append(myProducts.name);
    // productDescription.append(myProducts.details);


    //cart modal
    const cartModal = document.createElement("div");
    const cartPrice = document.createElement("h2");
    const cartFooter = document.createElement("div");
    const cancelBtn = document.createElement("button");
    const confirmBtn = document.createElement("button");

    //adding class/content
    cartModal.className = "add-cart-modal";
    cartPrice.className = "text-[32px]";
    cartFooter.className = "w-full flex flex-row gap-x-[10px] mt-[20px] pt-[16px] px-[16px] border-t border-black/10"
    cancelBtn.className = "w-full bg-transparent text-[#0080ff] border border-[#0080ff] py-[8px] rounded-[4px] text-white"
    confirmBtn.className = "w-full bg-[#0080ff] hover:bg-[#0070ff] py-[8px] rounded-[4px] text-white";

    //nesting elements (cart modal)
    cartModal.appendChild(cartPrice);
    cartModal.appendChild(cartFooter);
    cartFooter.appendChild(cancelBtn);
    cartFooter.appendChild(confirmBtn);

    //cart modal contents
    cartPrice.append(myProducts.price);
    cancelBtn.append("Cancel");
    confirmBtn.append("Confirm");


    //add products card along with details
    main.appendChild(products);
    products.appendChild(cartModal);
    products.appendChild(image);
    image.src = myProducts.image;
    image.alt = myProducts.alt;
    products.appendChild(description);
    description.className = "p-[12px]";
    description.appendChild(title);
    title.append(myProducts.name);
    title.className = "truncate";
    description.appendChild(priceDiv);
    priceDiv.appendChild(price);
    price.className = "text-black/60";
    priceDiv.className = "flex justify-between text-[12px] my-[12px]";
    price.append(myProducts.price);
    priceDiv.appendChild(rating);
    rating.className = "text-[#ffaf00]";
    rating.append(myProducts.rating);
    description.appendChild(cartBtn);
    cartBtn.append("Add to cart");
    cartBtn.className = "w-full flex justify-center items-center gap-[10px] bg-[#0080ff] hover:bg-[#0070ff] py-[8px] rounded-[4px] text-white";
    cartBtn.appendChild(cartIcon);
    cartIcon.append("shopping_cart");

    
    cartBtn.onclick=function() {
        cartModal.style.display = "flex";
    }
    
    products.onclick=function() {
        productSection.style.display = "flex";
    }
    
    
    confirmBtn.onclick=function() {
        cartModal.style.display = "none";
        cartContainer.style.display = "flex";

        //adding to cart section
        
        const cartProducts = document.createElement("div");
        const cartDetails = document.createElement("div");
        const cartImage = document.createElement("img");
        const productTitle = document.createElement("h2");
        const productPrice = document.createElement("p");
        const deleteProduct = document.createElement("button");
        cartContainer.append(cartProducts);
        cartProducts.className = "cart-products";
        cartProducts.append(cartImage);
        cartImage.src = myProducts.image;
        cartImage.width = 100;
        cartImage.height = 100;
        cartImage.alt = myProducts.alt;
        cartImage.className = "rounded-[4px]"
        cartProducts.append(cartDetails);
        cartDetails.className = "pl-[20px] truncate"
        cartDetails.append(productTitle);
        productTitle.append(myProducts.name);
        productTitle.className = "text-[24px]"
        cartDetails.append(productPrice);
        productPrice.append(myProducts.price)
        productPrice.className = "text-[#00802b]"
        cartDetails.append(deleteProduct);
        deleteProduct.append("Delete")
        deleteProduct.className = "bg-[#cc0000] hover:bg-[#b30000] py-[6px] px-[16px] rounded-[4px] text-white text-[10px]"; 
        
        //displaying added carts
        shoppingCartBtn.onclick=function() {
            cartContainer.style.display = "flex";
        }

        //closing added cart section
        closeBtn.onclick=function() {
            cartContainer.style.display = "none";
        }

        deleteProduct.onclick=function() {
            cartProducts.remove();
        }
    }

    cancelBtn.onclick=function() {
        cartModal.style.display = "none";
    }

    
}