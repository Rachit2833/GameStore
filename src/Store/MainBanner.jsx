import "./Store.css"
function MainBanner() {
  return (
    <div class="Store-banner">
      <span class="Store-main-head">WELCOME TO GAME SHOP: WHERE FUN AWAITS YOU!</span>
      <p class="Store-sub-head">Where Games Are More Than That</p>

      <div  class="Store-banner-images">
        <img class="Store-banner-image" src="images/images (2).png" alt=""></img>
        <img class="Store-banner-image" src="images/images (2).png" alt=""></img>
        <img class="Store-banner-image" src="images/images (2).png" alt=""></img>
        <img class="Store-banner-image" src="images/images (2).png" alt=""></img>
        <img class="Store-banner-image" src="images/images (2).png" alt=""></img>
      </div>
      <button class="Store-banner-button">See Collection</button>
      <div class="Store-banner-controls">
        <button class="Store-ctl-btn left">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <span class="Store-slide-numbers">1 / 5</span>
        <button class="Store-ctl-btn left">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
} 

export default MainBanner;
