/* THARU Juice Bar frontend. No secrets belong in this file. */
(() => {
  'use strict';
  const CONFIG = window.THARU_CONFIG || {};
  const page = document.body.dataset.page || 'home';
  const STORAGE = { lang: 'tharu-lang', theme: 'tharu-theme', cart: 'tharu-cart' };
  const DEMO_IMAGE = 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80';

  const I18N = {
    en: {
      skip:'Skip to content', brandTag:'Fresh • Fruity • Feel-good', navHome:'Home', navMenu:'Our Menu', navAbout:'About us', navReviews:'Reviews', navCart:'Cart', adminLink:'Admin',
      heroEyebrow:'☀️ Freshly made • Feel-good sips', heroTitle:'A little more fruit.<br><span class="highlight">A lot more joy.</span>', heroLead:'Bright, refreshing sips made for your kind of day. Pick a favourite, made fresh and served with a little extra sunshine.', statusOpen:'Shop status: Open', statusClosed:'Shop status: Closed', statusPreview:'Preview status: Open', statusPreviewClosed:'Preview status: Closed', exploreMenu:'Explore the menu', findUs:'📍 Find us on Maps', freshEveryDay:'Fresh every day', madeWithCare:'Made with care, served with a smile', freshIngredients:'Fresh ingredients<small>Goodness in every sip</small>', tropicalMood:'Tropical mood<small>Made to brighten your day</small>',
      galleryKicker:'Fresh from our bar', galleryTitle:'Colour your day.', galleryLead:'A little look at the bright, fruity world of juice and good vibes.', seeMenu:"See what's on the menu ↗", galleryOne:'Freshly blended favourites', galleryTwo:'Citrus sunshine', galleryThree:'Fruitful little moments', aboutKicker:'A fresh kind of happy', aboutTitle:'Simple goodness, every day.', aboutLead:'At THARU Juice Bar, we believe the little things can brighten your day: fresh flavours, a friendly hello, and a drink made just for you.', perkOneTitle:'Fruit-forward flavour', perkOneText:'A colourful menu inspired by the fruits you love.', perkTwoTitle:'Made for your moment', perkTwoText:'Easy favourites for a quick refresh or a little treat.', perkThreeTitle:'Friendly local service', perkThreeText:'A local juice bar where your next favourite sip is waiting.',
      reviewsKicker:'Your words matter', reviewsTitle:'Customer Reviews', reviewsLead:'Have you enjoyed a sip from THARU? Share your experience and help our little local business grow.', reviewPromptOne:'Loved your drink? Tell others what made it special.', reviewCardOneTitle:'Share your moment', reviewCardOneSub:'Your honest feedback helps', reviewPromptTwo:'A favourite flavour, friendly service, or a fresh new discovery?', reviewCardTwoTitle:'Help someone discover us', reviewCardTwoSub:'Reviews help local customers', reviewPromptThree:'We appreciate every customer who takes a moment to leave a review.', reviewCardThreeTitle:'Thanks for the love', reviewCardThreeSub:'See and share feedback on Google', reviewNote:'This button opens THARU Juice Bar on Google Maps, where you can check location details and available review options.', reviewMapsCta:'⭐ Leave a Review / Get Directions on Google Maps', locationKicker:'Come say hello', locationTitle:'Your next fresh sip is close.', locationLead:'Open our map link to check the shop location, directions, and the latest Google information.', directionsCta:'📍 Get directions on Google Maps', mapBubbleTitle:'THARU Juice Bar', mapBubbleText:'Tap below to open our location in Google Maps.', openMaps:'Open Maps ↗', contactKicker:"Let's make it fresh", contactTitle:'A craving? Let’s chat.', contactLead:'Message us on WhatsApp to ask about the menu or place your order.', whatsappUs:'💬 Message us on WhatsApp ↗', footerMade:'Made fresh with care.',
      menuEyebrow:'Made fresh, just for you', menuTitle:'Find your fresh favourite.', menuLead:'Explore the menu, choose your happy sip, and send your order straight to us on WhatsApp.', menuLoading:'Connecting to the live menu…', menuPreview:'Preview menu — connect Firebase to manage real items.', menuLive:'Live menu connected', menuLoadError:'Could not load the live menu. Check Firebase setup and Firestore rules.', menuLoadingBig:'Loading the freshest picks…', searchPlaceholder:'Search juices, smoothies…', viewCart:'View cart', catAll:'All items', menuFooterNote:'Prices and availability are managed by THARU Juice Bar. Items marked sold out cannot be added to the cart.', soldOut:'SOLD OUT', available:'FRESH PICK', addToCart:'Add to cart', addedToCart:'Added to your cart', noMenuItems:'The menu is being prepared. Please check back soon.', noSearchResults:'No menu items match your search.', allCategory:'All items',
      checkoutEyebrow:'Almost time for a fresh sip', cartTitle:'Your cart, your way.', cartLead:'Double-check your picks, add your details, and send everything to us on WhatsApp.', orderSummary:'Order summary', emptyCartTitle:'Your cart is looking fresh and empty.', emptyCartText:'Head to our menu and add something delicious.', browseMenu:'Browse menu ↗', subtotal:'Subtotal', deliveryNote:'Delivery', confirmDelivery:'Confirm with shop', totalLabel:'Estimated subtotal', totalNote:'Final delivery charges and availability are confirmed by the shop on WhatsApp.', customerDetails:'Your details', nameLabel:'Full name *', namePlaceholder:'Your name', phoneLabel:'Phone number *', phonePlaceholder:'07X XXX XXXX', addressLabel:'Delivery address *', addressPlaceholder:'House number, street, town', notesLabel:'Order notes (optional)', notesPlaceholder:'Any special instructions?', placeOrder:'Place Order via WhatsApp', whatsappNote:'WhatsApp will open with a prepared order message. Review it and press Send to place your order.', remove:'Remove', increaseQty:'Increase quantity', decreaseQty:'Decrease quantity', removeItem:'Remove item', emptyCartToast:'Your cart is empty. Add something from the menu first.', cartQuantity:'Qty', orderMessageTitle:'THARU JUICE BAR — NEW ORDER', orderCustomer:'Customer', orderPhone:'Phone', orderAddress:'Delivery address', orderItems:'Items', orderSubtotal:'Estimated subtotal', orderNotes:'Notes', orderDeliveryDisclaimer:'Delivery fee / final availability: please confirm with the customer.',
      adminEyebrow:'Shop owner workspace', adminTitle:'Small shop. Easy controls.', adminLead:'Update your menu, switch shop status, and share today’s special — right from your phone.', secureAdminTitle:'Secure admin sign-in', adminSecurityNote:'Admin access is protected with Firebase Authentication and Firestore rules. A hidden URL or JavaScript password prompt would not protect your menu data.', firebaseNotConfigured:'Firebase is not configured yet. Follow README.md to connect your Firebase project first.', emailLabel:'Admin email', passwordLabel:'Password', signIn:'Sign in securely', adminCreateNote:'Create the admin user from Firebase Console → Authentication. This page intentionally has no public sign-up button.', dashboardTitle:'Shop dashboard', signOut:'Sign out', shopControls:'Shop status & announcement', shopOpenToggle:'Shop is open (show green status)', promoEnglish:'Announcement (English)', promoSinhala:'Announcement (Sinhala)', saveSettings:'Save shop settings', addMenuItem:'Add menu item', editMenuItem:'Edit menu item', clearForm:'Clear form', itemNameEnglish:'Name (English) *', itemNameSinhala:'Name (Sinhala) *', itemCategoryEnglish:'Category (English) *', itemCategorySinhala:'Category (Sinhala) *', itemPrice:'Price (LKR) *', itemImageUrl:'Image URL (HTTPS)', soldOutToggle:'Out of stock / Sold out', itemVisibleToggle:'Show this item in the customer menu', saveMenuItem:'Save menu item', currentMenu:'Current menu', currentMenuHint:'Edits sync to the customer menu automatically.', edit:'Edit', delete:'Delete', deleteConfirm:'Delete this menu item? This cannot be undone.', adminNoItems:'No menu items yet. Add your first item using the form.', adminNeedConfig:'Firebase is not connected yet. Replace the values in assets/firebase-config.js first.', adminWrongAccount:'This account is not the configured admin. Sign in using the admin account only.', loginFailed:'Sign-in failed. Check your email and password.', loginNeedConfig:'Please finish the Firebase setup before signing in.', settingsSaved:'Shop settings saved.', itemSaved:'Menu item saved and synced.', itemDeleted:'Menu item deleted.', itemSaveFailed:'Could not save this item. Check required fields and Firestore rules.', settingsSaveFailed:'Could not save settings. Check Firestore rules.', itemDeleteFailed:'Could not delete the item. Check Firestore rules.', itemCount:'items', firebaseConnected:'Firebase connected', menuItemRequired:'Please fill in both names, both categories, and a valid price.', badImageUrl:'Image URLs must start with https://.',
    },
    si: {
      skip:'අන්තර්ගතයට යන්න', brandTag:'නැවුම් • රසවත් • සතුටුදායක', navHome:'මුල් පිටුව', navMenu:'මෙනුව', navAbout:'අප ගැන', navReviews:'පාරිභෝගික අදහස්', navCart:'කරත්තය', adminLink:'පරිපාලක',
      heroEyebrow:'☀️ නැවුම්ව සකස් කළ • සතුට ගෙනෙන පානයන්', heroTitle:'තවත් පලතුරු ටිකක්.<br><span class="highlight">තවත් සතුට ගොඩක්.</span>', heroLead:'ඔබේ දවසට ගැළපෙන නැවුම්, ප්‍රබෝධමත් පානයන්. ඔබ කැමති රසය තෝරන්න — ආදරයෙන් සකස් කර සතුටින් පිළිගන්වන්නෙමු.', statusOpen:'වෙළඳසැල: විවෘතයි', statusClosed:'වෙළඳසැල: වසා ඇත', statusPreview:'පරීක්ෂණ තත්ත්වය: විවෘතයි', statusPreviewClosed:'පරීක්ෂණ තත්ත්වය: වසා ඇත', exploreMenu:'මෙනුව බලන්න', findUs:'📍 සිතියමේ අප සොයන්න', freshEveryDay:'සෑම දිනකම නැවුම්', madeWithCare:'සැලකිල්ලෙන් සාදා, සිනහවකින් පිළිගන්වමු', freshIngredients:'නැවුම් අමුද්‍රව්‍ය<small>සෑම උගුරකම ගුණය</small>', tropicalMood:'නිවර්තන රසය<small>දවසට නැවුම් බවක්</small>',
      galleryKicker:'අපේ ජූස් බාර් එකෙන්ම', galleryTitle:'ඔබේ දවසට වර්ණ එක්කරන්න.', galleryLead:'ජූස් සහ සතුට පිරුණු නැවුම් ලෝකයෙන් පොඩි දසුනක්.', seeMenu:'මෙනුව බලන්න ↗', galleryOne:'නැවුම්ව මිශ්‍ර කළ ප්‍රියතම රස', galleryTwo:'දොඩම් රසැති හිරු එළිය', galleryThree:'පලතුරු රසැති මොහොතක්', aboutKicker:'නැවුම් සතුටක්', aboutTitle:'හැමදාම සරල හොඳකම.', aboutLead:'THARU Juice Bar හි අපි විශ්වාස කරන්නේ නැවුම් රස, සුහද පිළිගැනීම සහ ඔබ වෙනුවෙන් සකස් කරන පානයක් වැනි කුඩා දේවල් දවස ලස්සන කරන බවයි.', perkOneTitle:'පලතුරු රස ඉස්මතු කරමින්', perkOneText:'ඔබ කැමති පලතුරු රසවලින් ආභාසය ලැබූ වර්ණවත් මෙනුවක්.', perkTwoTitle:'ඔබේ මොහොතට ගැළපෙන', perkTwoText:'ඉක්මන් ප්‍රබෝධයකට හෝ පොඩි රස විඳීමකට ගැළපෙන පානයන්.', perkThreeTitle:'සුහද දේශීය සේවාව', perkThreeText:'ඔබේ ඊළඟ ප්‍රියතම පානය බලා සිටින දේශීය ජූස් බාර් එකක්.',
      reviewsKicker:'ඔබේ අදහස් වැදගත්', reviewsTitle:'පාරිභෝගික අදහස්', reviewsLead:'THARU වෙතින් පානයක් රස වින්දාද? ඔබේ අත්දැකීම බෙදාගෙන අපේ දේශීය ව්‍යාපාරයට සහය වන්න.', reviewPromptOne:'ඔබේ පානයට කැමති වුණාද? එය විශේෂ කළ දේ අනෙක් අයටත් කියන්න.', reviewCardOneTitle:'ඔබේ අත්දැකීම බෙදාගන්න', reviewCardOneSub:'ඔබේ අවංක අදහස වටිනවා', reviewPromptTwo:'කැමතිම රසයක්, සුහද සේවාවක්, නැතිනම් අලුත් සොයාගැනීමක්ද?', reviewCardTwoTitle:'අපව හඳුනාගන්න උදව් කරන්න', reviewCardTwoSub:'දේශීය පාරිභෝගිකයන්ට අදහස් උපකාරී වේ', reviewPromptThree:'අදහසක් ලිවීමට කාලය වෙන් කරන හැම පාරිභෝගිකයෙකුටම ස්තුතියි.', reviewCardThreeTitle:'ඔබේ සහයට ස්තුතියි', reviewCardThreeSub:'Google හි අදහස් බලන්න හෝ බෙදාගන්න', reviewNote:'මෙම බොත්තම Google Maps හි THARU Juice Bar විවෘත කරයි. එහි ස්ථානය, මාර්ගය සහ ලබාගත හැකි සමාලෝචන විකල්ප බලන්න.', reviewMapsCta:'⭐ Google Maps හි අදහසක් දක්වන්න / මාර්ගය බලන්න', locationKicker:'ඇවිත් යන්න', locationTitle:'ඔබේ ඊළඟ නැවුම් පානය ළඟයි.', locationLead:'වෙළඳසැලේ ස්ථානය, මාර්ගය සහ නවතම Google තොරතුරු බලන්න සිතියම් සබැඳිය විවෘත කරන්න.', directionsCta:'📍 Google Maps හි මාර්ගය බලන්න', mapBubbleTitle:'THARU Juice Bar', mapBubbleText:'Google Maps හි ස්ථානය විවෘත කිරීමට පහත බොත්තම ඔබන්න.', openMaps:'සිතියම විවෘත කරන්න ↗', contactKicker:'නැවුම්ව රස විඳිමු', contactTitle:'පානයක් ඕනෙද? කතා කරමු.', contactLead:'මෙනුව ගැන විමසීමට හෝ ඇණවුමක් ලබාදීමට WhatsApp හරහා පණිවිඩයක් එවන්න.', whatsappUs:'💬 WhatsApp හරහා පණිවිඩයක් ↗', footerMade:'සැලකිල්ලෙන් නැවුම්ව සකස් කළෙමු.',
      menuEyebrow:'ඔබ වෙනුවෙන්ම නැවුම්ව', menuTitle:'ඔබේ ප්‍රියතම නැවුම් රසය තෝරන්න.', menuLead:'මෙනුව බලන්න, කැමති පානය තෝරන්න, WhatsApp හරහා ඇණවුම එවන්න.', menuLoading:'සජීවී මෙනුවට සම්බන්ධ වෙමින්…', menuPreview:'පෙරදසුන් මෙනුව — සැබෑ මෙනුව කළමනාකරණයට Firebase සම්බන්ධ කරන්න.', menuLive:'සජීවී මෙනුව සම්බන්ධයි', menuLoadError:'සජීවී මෙනුව ලබාගත නොහැක. Firebase සැකසුම් සහ Firestore නීති පරීක්ෂා කරන්න.', menuLoadingBig:'නැවුම් රස තෝරාගනිමින්…', searchPlaceholder:'ජූස්, ස්මූති සොයන්න…', viewCart:'කරත්තය බලන්න', catAll:'සියල්ල', menuFooterNote:'මිල සහ ලබාගත හැකි බව THARU Juice Bar විසින් යාවත්කාලීන කරයි. අවසන් වූ බව සලකුණු කළ දේ කරත්තයට එක් කළ නොහැක.', soldOut:'අවසන්', available:'නැවුම් තේරීමක්', addToCart:'කරත්තයට එක් කරන්න', addedToCart:'කරත්තයට එක් කළා', noMenuItems:'මෙනුව සකස් කරමින් පවතී. කරුණාකර පසුව නැවත බලන්න.', noSearchResults:'ඔබ සෙවූ දේට ගැළපෙන මෙනු අයිතම නැත.', allCategory:'සියල්ල',
      checkoutEyebrow:'නැවුම් පානයක් ළඟයි', cartTitle:'ඔබේ කරත්තය.', cartLead:'තෝරාගත් දේ නැවත පරීක්ෂා කර, විස්තර එක්කර WhatsApp හරහා අපට එවන්න.', orderSummary:'ඇණවුමේ සාරාංශය', emptyCartTitle:'ඔබේ කරත්තය තවම හිස්.', emptyCartText:'මෙනුවට ගොස් රසවත් දෙයක් එක්කරගන්න.', browseMenu:'මෙනුව බලන්න ↗', subtotal:'එකතුව', deliveryNote:'බෙදාහැරීම', confirmDelivery:'වෙළඳසැලෙන් තහවුරු කරගන්න', totalLabel:'ඇස්තමේන්තුගත එකතුව', totalNote:'අවසාන බෙදාහැරීමේ ගාස්තු සහ භාණ්ඩ තිබේද යන්න WhatsApp හරහා වෙළඳසැල තහවුරු කරයි.', customerDetails:'ඔබේ විස්තර', nameLabel:'සම්පූර්ණ නම *', namePlaceholder:'ඔබේ නම', phoneLabel:'දුරකථන අංකය *', phonePlaceholder:'07X XXX XXXX', addressLabel:'බෙදාහැරීමේ ලිපිනය *', addressPlaceholder:'නිවසේ අංකය, වීදිය, නගරය', notesLabel:'ඇණවුම් සටහන් (අත්‍යවශ්‍ය නොවේ)', notesPlaceholder:'විශේෂ උපදෙස් තිබේද?', placeOrder:'WhatsApp හරහා ඇණවුම් කරන්න', whatsappNote:'සකස් කළ ඇණවුම් පණිවිඩයක් සමඟ WhatsApp විවෘත වේ. එය පරීක්ෂා කර Send ඔබා ඇණවුම යවන්න.', remove:'ඉවත් කරන්න', increaseQty:'ප්‍රමාණය වැඩි කරන්න', decreaseQty:'ප්‍රමාණය අඩු කරන්න', removeItem:'භාණ්ඩය ඉවත් කරන්න', emptyCartToast:'කරත්තය හිස්. මුලින් මෙනුවෙන් යමක් එක්කරන්න.', cartQuantity:'ප්‍රමාණය', orderMessageTitle:'THARU JUICE BAR — නව ඇණවුම', orderCustomer:'පාරිභෝගිකයා', orderPhone:'දුරකථනය', orderAddress:'බෙදාහැරීමේ ලිපිනය', orderItems:'භාණ්ඩ', orderSubtotal:'ඇස්තමේන්තුගත එකතුව', orderNotes:'සටහන්', orderDeliveryDisclaimer:'බෙදාහැරීමේ ගාස්තුව / අවසන් ලබාගත හැකි බව: පාරිභෝගිකයා සමඟ තහවුරු කරන්න.',
      adminEyebrow:'වෙළඳසැල් හිමිකරුගේ පැනලය', adminTitle:'වෙළඳසැල පහසුවෙන් පාලනය කරන්න.', adminLead:'මෙනුව යාවත්කාලීන කරන්න, විවෘත/වසා ඇති තත්ත්වය වෙනස් කරන්න, අද විශේෂය දමන්න — ඔබේ දුරකථනයෙන්ම.', secureAdminTitle:'ආරක්ෂිත පරිපාලක පිවිසුම', adminSecurityNote:'පරිපාලක පිවිසුම Firebase Authentication සහ Firestore නීති මඟින් ආරක්ෂා කර ඇත. රහස් URL එකක් හෝ JavaScript password prompt එකක් පමණක් මෙනු දත්ත ආරක්ෂා නොකරයි.', firebaseNotConfigured:'තවම Firebase සකසා නැත. මුලින් README.md අනුව ඔබේ Firebase ව්‍යාපෘතිය සම්බන්ධ කරන්න.', emailLabel:'පරිපාලක ඊමේල්', passwordLabel:'මුරපදය', signIn:'ආරක්ෂිතව පිවිසෙන්න', adminCreateNote:'Firebase Console → Authentication තුළින් පරිපාලක ගිණුම සාදන්න. මෙම පිටුවේ පොදු ලියාපදිංචි වීමක් නැත.', dashboardTitle:'වෙළඳසැල් පුවරුව', signOut:'ඉවත් වන්න', shopControls:'වෙළඳසැලේ තත්ත්වය සහ නිවේදනය', shopOpenToggle:'වෙළඳසැල විවෘතයි (කොළ තත්ත්වය පෙන්වන්න)', promoEnglish:'නිවේදනය (ඉංග්‍රීසි)', promoSinhala:'නිවේදනය (සිංහල)', saveSettings:'වෙළඳසැල් සැකසුම් සුරකින්න', addMenuItem:'මෙනු අයිතමයක් එක් කරන්න', editMenuItem:'මෙනු අයිතමය සංස්කරණය', clearForm:'පෝරමය හිස් කරන්න', itemNameEnglish:'නම (ඉංග්‍රීසි) *', itemNameSinhala:'නම (සිංහල) *', itemCategoryEnglish:'වර්ගය (ඉංග්‍රීසි) *', itemCategorySinhala:'වර්ගය (සිංහල) *', itemPrice:'මිල (LKR) *', itemImageUrl:'රූප URL (HTTPS)', soldOutToggle:'තොග අවසන් / විකිණී අවසන්', itemVisibleToggle:'පාරිභෝගික මෙනුවේ පෙන්වන්න', saveMenuItem:'මෙනු අයිතමය සුරකින්න', currentMenu:'දැනට ඇති මෙනුව', currentMenuHint:'වෙනස්කම් පාරිභෝගික මෙනුවට ස්වයංක්‍රීයව යයි.', edit:'සංස්කරණය', delete:'මකන්න', deleteConfirm:'මෙම මෙනු අයිතමය මකන්නද? මෙය ආපසු හැරවිය නොහැක.', adminNoItems:'තවම මෙනු අයිතම නැත. පෝරමයෙන් පළමු අයිතමය එක්කරන්න.', adminNeedConfig:'Firebase තවම සම්බන්ධ කර නැත. මුලින් assets/firebase-config.js හි අගයන් යොදන්න.', adminWrongAccount:'මෙය නියමිත පරිපාලක ගිණුම නොවේ. පරිපාලක ගිණුමෙන් පමණක් පිවිසෙන්න.', loginFailed:'පිවිසීම අසාර්ථකයි. ඊමේල් සහ මුරපදය පරීක්ෂා කරන්න.', loginNeedConfig:'පිවිසීමට පෙර Firebase සැකසුම සම්පූර්ණ කරන්න.', settingsSaved:'වෙළඳසැලේ සැකසුම් සුරැකිණි.', itemSaved:'මෙනු අයිතමය සුරක්ෂිත කර සමමුහුර්ත කළා.', itemDeleted:'මෙනු අයිතමය මකා දැමුවා.', itemSaveFailed:'මෙම අයිතමය සුරැකීමට නොහැකි විය. අවශ්‍ය ක්ෂේත්‍ර සහ Firestore නීති පරීක්ෂා කරන්න.', settingsSaveFailed:'සැකසුම් සුරැකීමට නොහැකි විය. Firestore නීති පරීක්ෂා කරන්න.', itemDeleteFailed:'අයිතමය මකා දැමීමට නොහැකි විය. Firestore නීති පරීක්ෂා කරන්න.', itemCount:'අයිතම', firebaseConnected:'Firebase සම්බන්ධයි', menuItemRequired:'නම් දෙකම, වර්ග දෙකම සහ වලංගු මිලක් ඇතුළත් කරන්න.', badImageUrl:'රූප URL එක https:// වලින් ආරම්භ විය යුතුයි.'
    }
  };
  let lang = localStorage.getItem(STORAGE.lang) === 'si' ? 'si' : 'en';
  let theme = localStorage.getItem(STORAGE.theme) === 'dark' ? 'dark' : 'light';
  let menuItems = [];
  let activeCategory = 'all';
  let query = '';
  let liveShopSettings = { isOpen: true, promoEn: '', promoSi: '' };
  let unsubscribeMenu = null;
  let unsubscribeSettings = null;
  let adminItems = [];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
  const formatLKR = (amount) => `LKR ${Number(amount || 0).toLocaleString('en-LK', { maximumFractionDigits: 2 })}`;
  const currentName = (item) => (lang === 'si' ? item.nameSi : item.nameEn) || item.nameEn || item.nameSi || 'Juice';
  const currentCategory = (item) => (lang === 'si' ? item.categorySi : item.categoryEn) || item.categoryEn || item.categorySi || '';

  function applyTranslations() {
    document.documentElement.lang = lang === 'si' ? 'si' : 'en';
    $$('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(I18N[lang], key)) {
        // Only the fixed, developer-authored hero text contains intentional markup.
        if (['heroTitle', 'freshIngredients', 'tropicalMood'].includes(key)) el.innerHTML = t(key);
        else el.textContent = t(key);
      }
    });
    $$('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    const toggle = $('#languageToggle');
    if (toggle) toggle.textContent = lang === 'en' ? 'සිංහල' : 'English';
    const themeToggle = $('#themeToggle');
    if (themeToggle) { themeToggle.textContent = theme === 'dark' ? '☀' : '☾'; themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'); }
    document.title = page === 'menu' ? `${t('navMenu')} — THARU Juice Bar` : page === 'cart' ? `${t('navCart')} — THARU Juice Bar` : page === 'admin' ? `${t('adminLink')} — THARU Juice Bar` : 'THARU Juice Bar — Freshly made, feel-good sips';
    renderShopStatus();
    if (page === 'menu') { renderCategoryFilters(); renderMenu(); }
    if (page === 'cart') renderCart();
    if (page === 'admin') { renderAdminItems(); updateAdminText(); }
  }

  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101d18' : '#fff9eb');
    localStorage.setItem(STORAGE.theme, theme);
    const button = $('#themeToggle');
    if (button) { button.textContent = theme === 'dark' ? '☀' : '☾'; button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'); }
  }

  function showToast(message) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => el.classList.remove('show'), 2300);
  }

  function getCart() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE.cart) || '[]');
      return Array.isArray(parsed) ? parsed.filter((item) => item && typeof item.id === 'string' && Number(item.price) >= 0 && Number(item.qty) > 0) : [];
    } catch { return []; }
  }
  function saveCart(cart) { localStorage.setItem(STORAGE.cart, JSON.stringify(cart)); updateCartBadges(); }
  function updateCartBadges() {
    const count = getCart().reduce((sum, item) => sum + Number(item.qty || 0), 0);
    $$('[data-cart-count]').forEach((el) => { el.textContent = String(count); el.setAttribute('aria-label', `${count} items in cart`); });
  }
  function addToCart(item) {
    if (item.soldOut) { showToast(t('soldOut')); return; }
    const cart = getCart();
    const existing = cart.find((cartItem) => cartItem.id === item.id);
    if (existing) existing.qty = Math.min(99, Number(existing.qty || 1) + 1);
    else cart.push({ id: item.id, nameEn: item.nameEn || '', nameSi: item.nameSi || '', categoryEn: item.categoryEn || '', categorySi: item.categorySi || '', price: Number(item.price || 0), imageUrl: validImage(item.imageUrl) ? item.imageUrl : DEMO_IMAGE, qty: 1 });
    saveCart(cart);
    showToast(t('addedToCart'));
  }
  function validImage(url) {
    if (typeof url !== 'string' || !url.trim()) return false;
    try { return new URL(url).protocol === 'https:'; } catch { return false; }
  }

  function renderShopStatus() {
    const status = $('#shopStatus');
    if (status) {
      const isOpen = liveShopSettings.isOpen !== false;
      status.classList.toggle('closed', !isOpen);
      const label = !window.THARU_FIREBASE_READY ? (isOpen ? t('statusPreview') : t('statusPreviewClosed')) : (isOpen ? t('statusOpen') : t('statusClosed'));
      const text = status.querySelector('[data-i18n]');
      if (text) text.textContent = label;
      else status.textContent = label;
    }
    const promo = $('#promoBanner');
    if (promo) {
      const message = (lang === 'si' ? liveShopSettings.promoSi : liveShopSettings.promoEn) || '';
      promo.textContent = message;
      promo.classList.toggle('visible', Boolean(message.trim()));
    }
  }

  function normalizeMenuItem(doc) {
    const data = doc.data ? doc.data() : doc;
    return {
      id: doc.id || data.id || `demo-${Math.random().toString(36).slice(2)}`,
      nameEn: String(data.nameEn || data.name || ''), nameSi: String(data.nameSi || data.nameEn || data.name || ''),
      categoryEn: String(data.categoryEn || data.category || 'Juice'), categorySi: String(data.categorySi || data.categoryEn || data.category || 'ජූස්'),
      price: Math.max(0, Number(data.price || 0)), imageUrl: validImage(data.imageUrl) ? data.imageUrl : DEMO_IMAGE,
      soldOut: data.soldOut === true, active: data.active !== false
    };
  }
  const DEMO_ITEMS = [
    { id:'demo-mango', nameEn:'Mango Magic', nameSi:'අඹ මැජික්', categoryEn:'Fresh Juice', categorySi:'නැවුම් ජූස්', price:650, imageUrl:'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=700&q=80', soldOut:false, active:true },
    { id:'demo-watermelon', nameEn:'Watermelon Cooler', nameSi:'කොමඩු කූලර්', categoryEn:'Fresh Juice', categorySi:'නැවුම් ජූස්', price:550, imageUrl:'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=700&q=80', soldOut:false, active:true },
    { id:'demo-mixed', nameEn:'Tropical Mix', nameSi:'ට්‍රොපිකල් මිශ්‍රණය', categoryEn:'Fresh Juice', categorySi:'නැවුම් ජූස්', price:750, imageUrl:'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80', soldOut:false, active:true },
    { id:'demo-avocado', nameEn:'Avocado Smoothie', nameSi:'අලිගැටපේර ස්මූති', categoryEn:'Smoothies', categorySi:'ස්මූති', price:800, imageUrl:'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80', soldOut:true, active:true },
    { id:'demo-orange', nameEn:'Orange Sunshine', nameSi:'දොඩම් සන්ෂයින්', categoryEn:'Fresh Juice', categorySi:'නැවුම් ජූස්', price:600, imageUrl:'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80', soldOut:false, active:true },
    { id:'demo-banana', nameEn:'Banana Smoothie', nameSi:'කෙසෙල් ස්මූති', categoryEn:'Smoothies', categorySi:'ස්මූති', price:700, imageUrl:'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=700&q=80', soldOut:false, active:true }
  ];

  function bootPublicFirestore() {
    if (!window.THARU_FIREBASE_READY || !window.THARU_DB) {
      liveShopSettings = { isOpen: true, promoEn: '', promoSi: '' };
      renderShopStatus();
      if (page === 'menu') {
        menuItems = DEMO_ITEMS.map((item) => ({ ...item }));
        const status = $('#menuDataStatus'); if (status) status.textContent = t('menuPreview');
        renderCategoryFilters(); renderMenu();
      }
      return;
    }
    const db = window.THARU_DB;
    if (page === 'home' || page === 'menu') {
      unsubscribeSettings = db.collection('settings').doc('shop').onSnapshot((snap) => {
        if (snap.exists) liveShopSettings = { isOpen: snap.data().isOpen !== false, promoEn: String(snap.data().promoEn || ''), promoSi: String(snap.data().promoSi || '') };
        renderShopStatus();
      }, (err) => { console.error('Unable to read shop settings:', err); });
    }
    if (page === 'menu') {
      unsubscribeMenu = db.collection('menuItems').onSnapshot((snapshot) => {
        menuItems = snapshot.docs.map(normalizeMenuItem).filter((item) => item.active);
        const status = $('#menuDataStatus'); if (status) status.textContent = t('menuLive');
        renderCategoryFilters(); renderMenu();
      }, (err) => {
        console.error('Unable to load menu:', err);
        const status = $('#menuDataStatus'); if (status) status.textContent = t('menuLoadError');
        menuItems = [];
        renderCategoryFilters(); renderMenu();
      });
    }
  }

  function renderCategoryFilters() {
    const root = $('#categoryFilters'); if (!root) return;
    const categories = [];
    menuItems.forEach((item) => {
      const category = currentCategory(item).trim();
      const key = `${item.categoryEn}|${item.categorySi}`;
      if (category && !categories.some((entry) => entry.key === key)) categories.push({ key, display: category, categoryEn: item.categoryEn, categorySi: item.categorySi });
    });
    root.innerHTML = `<button class="chip ${activeCategory === 'all' ? 'active' : ''}" data-category="all" type="button">${escapeHTML(t('catAll'))}</button>` + categories.map((category) => {
      const id = category.key;
      return `<button class="chip ${activeCategory === id ? 'active' : ''}" data-category="${escapeHTML(id)}" type="button">${escapeHTML(category.display)}</button>`;
    }).join('');
  }

  function renderMenu() {
    const root = $('#menuGrid'); if (!root) return;
    const filtered = menuItems.filter((item) => {
      const catKey = `${item.categoryEn}|${item.categorySi}`;
      const matchesCategory = activeCategory === 'all' || activeCategory === catKey;
      const searchable = `${item.nameEn} ${item.nameSi} ${item.categoryEn} ${item.categorySi}`.toLocaleLowerCase();
      return matchesCategory && searchable.includes(query.toLocaleLowerCase());
    });
    if (!filtered.length) {
      const message = menuItems.length === 0 ? t('noMenuItems') : t('noSearchResults');
      root.innerHTML = `<div class="menu-empty"><div style="font-size:36px;margin-bottom:9px">🍹</div>${escapeHTML(message)}</div>`;
      return;
    }
    root.innerHTML = filtered.map((item) => {
      const sold = item.soldOut;
      const alt = currentName(item);
      return `<article class="product-card">
        <div class="product-image-wrap"><img class="product-image" src="${escapeHTML(item.imageUrl || DEMO_IMAGE)}" alt="${escapeHTML(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${DEMO_IMAGE}'"><span class="product-badge ${sold ? 'sold' : ''}">${escapeHTML(t(sold ? 'soldOut' : 'available'))}</span></div>
        <div class="product-body"><div class="product-category">${escapeHTML(currentCategory(item))}</div><h3>${escapeHTML(alt)}</h3><div class="product-bottom"><div class="price">${formatLKR(item.price)}<small>LKR</small></div><button class="button ${sold ? 'button-outline' : 'button-lime'} button-small" type="button" data-add-item="${escapeHTML(item.id)}" ${sold ? 'disabled' : ''}>${escapeHTML(sold ? t('soldOut') : t('addToCart'))}</button></div></div>
      </article>`;
    }).join('');
  }

  function initMenu() {
    $('#menuSearch')?.addEventListener('input', (e) => { query = e.target.value.trim(); renderMenu(); });
    $('#categoryFilters')?.addEventListener('click', (e) => {
      const button = e.target.closest('[data-category]'); if (!button) return;
      activeCategory = button.dataset.category || 'all';
      renderCategoryFilters(); renderMenu();
    });
    $('#menuGrid')?.addEventListener('click', (e) => {
      const button = e.target.closest('[data-add-item]'); if (!button) return;
      const item = menuItems.find((entry) => entry.id === button.dataset.addItem);
      if (item) addToCart(item);
    });
  }

  function renderCart() {
    const root = $('#cartItems'); if (!root) return;
    const cart = getCart();
    const totals = $('#cartTotals');
    if (!cart.length) {
      root.innerHTML = `<div class="empty-cart"><div class="empty-icon">🛒</div><h3>${escapeHTML(t('emptyCartTitle'))}</h3><p class="section-intro" style="margin:0 auto 17px">${escapeHTML(t('emptyCartText'))}</p><a class="button button-primary" href="menu.html">${escapeHTML(t('browseMenu'))}</a></div>`;
      if (totals) totals.hidden = true;
      return;
    }
    root.innerHTML = cart.map((item) => {
      const name = currentName(item);
      return `<article class="cart-item"><img class="cart-thumb" src="${escapeHTML(validImage(item.imageUrl) ? item.imageUrl : DEMO_IMAGE)}" alt="${escapeHTML(name)}" loading="lazy" onerror="this.onerror=null;this.src='${DEMO_IMAGE}'"><div><h3>${escapeHTML(name)}</h3><div class="cart-price">${formatLKR(item.price)} × ${Number(item.qty)} = <strong>${formatLKR(Number(item.price) * Number(item.qty))}</strong></div><div class="qty-control"><button type="button" data-qty="minus" data-item-id="${escapeHTML(item.id)}" aria-label="${escapeHTML(t('decreaseQty'))}">−</button><span>${Number(item.qty)}</span><button type="button" data-qty="plus" data-item-id="${escapeHTML(item.id)}" aria-label="${escapeHTML(t('increaseQty'))}">+</button></div></div><button type="button" class="remove-button" data-remove-item="${escapeHTML(item.id)}" aria-label="${escapeHTML(t('removeItem'))}">${escapeHTML(t('remove'))}</button></article>`;
    }).join('');
    const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
    if (totals) totals.hidden = false;
    if ($('#cartSubtotal')) $('#cartSubtotal').textContent = formatLKR(subtotal);
    if ($('#cartTotal')) $('#cartTotal').textContent = formatLKR(subtotal);
  }

  function initCart() {
    $('#cartItems')?.addEventListener('click', (e) => {
      const qtyButton = e.target.closest('[data-qty]');
      const removeButton = e.target.closest('[data-remove-item]');
      let cart = getCart();
      if (qtyButton) {
        const item = cart.find((entry) => entry.id === qtyButton.dataset.itemId); if (!item) return;
        item.qty = qtyButton.dataset.qty === 'plus' ? Math.min(99, Number(item.qty) + 1) : Math.max(1, Number(item.qty) - 1);
        saveCart(cart); renderCart();
      } else if (removeButton) {
        cart = cart.filter((entry) => entry.id !== removeButton.dataset.removeItem);
        saveCart(cart); renderCart();
      }
    });
    $('#checkoutForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const cart = getCart();
      if (!cart.length) { showToast(t('emptyCartToast')); return; }
      const name = $('#customerName').value.trim();
      const phone = $('#customerPhone').value.trim();
      const address = $('#customerAddress').value.trim();
      const notes = $('#orderNotes').value.trim();
      if (!name || !phone || !address) return;
      const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
      const itemLines = cart.map((item, index) => `${index + 1}. ${currentName(item)} × ${item.qty} — ${formatLKR(Number(item.price) * Number(item.qty))}`).join('\n');
      const lines = [
        t('orderMessageTitle'),
        '------------------------------',
        `${t('orderCustomer')}: ${name}`,
        `${t('orderPhone')}: ${phone}`,
        `${t('orderAddress')}: ${address}`,
        '',
        `${t('orderItems')}:`, itemLines,
        `${t('orderSubtotal')}: ${formatLKR(subtotal)}`,
        notes ? `${t('orderNotes')}: ${notes}` : '',
        '',
        t('orderDeliveryDisclaimer')
      ].filter((line) => line !== '');
      const whatsapp = String(CONFIG.shopWhatsApp || '94789280918').replace(/[^0-9]/g, '');
      const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  function setAdminMessage(id, message, kind = 'success') {
    const el = $(id); if (!el) return;
    el.hidden = false; el.className = `alert ${kind}`; el.textContent = message;
  }
  function updateAdminText() {
    const heading = $('#menuFormHeading');
    if (heading) heading.textContent = $('#itemId')?.value ? t('editMenuItem') : t('addMenuItem');
  }
  function renderAdminItems() {
    const root = $('#adminMenuList'); if (!root) return;
    const count = $('#adminItemCount');
    if (count) count.textContent = `${adminItems.length} ${t('itemCount')}`;
    if (!adminItems.length) { root.innerHTML = `<p class="admin-auth-state">${escapeHTML(t('adminNoItems'))}</p>`; return; }
    root.innerHTML = adminItems.map((item) => `<article class="admin-item">
      <div class="admin-item-info"><img src="${escapeHTML(item.imageUrl || DEMO_IMAGE)}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${DEMO_IMAGE}'"><div><h3>${escapeHTML(lang === 'si' ? (item.nameSi || item.nameEn) : (item.nameEn || item.nameSi))}</h3><p>${formatLKR(item.price)} · ${escapeHTML(lang === 'si' ? (item.categorySi || item.categoryEn) : (item.categoryEn || item.categorySi))}${item.soldOut ? ` · ${escapeHTML(t('soldOut'))}` : ''}${item.active === false ? ' · Hidden' : ''}</p></div></div>
      <div class="admin-item-actions"><button class="small-action" type="button" data-edit-item="${escapeHTML(item.id)}">${escapeHTML(t('edit'))}</button><button class="small-action danger" type="button" data-delete-item="${escapeHTML(item.id)}">${escapeHTML(t('delete'))}</button></div>
    </article>`).join('');
  }

  function fillAdminForm(item) {
    $('#itemId').value = item.id;
    $('#itemNameEn').value = item.nameEn || '';
    $('#itemNameSi').value = item.nameSi || '';
    $('#itemCategoryEn').value = item.categoryEn || '';
    $('#itemCategorySi').value = item.categorySi || '';
    $('#itemPrice').value = Number(item.price || 0);
    $('#itemImage').value = item.imageUrl || '';
    $('#itemSoldOut').checked = item.soldOut === true;
    $('#itemActive').checked = item.active !== false;
    updateAdminText();
    $('#menuFormHeading')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function resetAdminForm() {
    $('#menuItemForm')?.reset();
    if ($('#itemId')) $('#itemId').value = '';
    if ($('#itemActive')) $('#itemActive').checked = true;
    updateAdminText();
  }
  function initAdmin() {
    if (page !== 'admin') return;
    const loginPanel = $('#adminLoginPanel');
    const dashboard = $('#adminDashboard');
    const warning = $('#adminSetupWarning');
    const authMessage = $('#adminAuthMessage');
    const ready = window.THARU_FIREBASE_READY && window.THARU_AUTH && window.THARU_DB;
    if (!ready) {
      if (warning) warning.hidden = false;
      if ($('#adminLoginForm')) $$('#adminLoginForm input, #adminLoginForm button').forEach((el) => { el.disabled = true; });
    }
    $('#adminLoginForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!window.THARU_FIREBASE_READY || !window.THARU_AUTH) { setAdminMessage('#adminAuthMessage', t('loginNeedConfig'), 'error'); return; }
      try {
        const email = $('#adminEmail').value.trim();
        const password = $('#adminPassword').value;
        await window.THARU_AUTH.signInWithEmailAndPassword(email, password);
        if (authMessage) authMessage.hidden = true;
      } catch (err) {
        console.error('Admin sign-in error:', err);
        setAdminMessage('#adminAuthMessage', t('loginFailed'), 'error');
      }
    });
    if (ready) {
      window.THARU_AUTH.onAuthStateChanged(async (user) => {
        if (!user) { loginPanel.hidden = false; dashboard.hidden = true; return; }
        const adminUid = String(CONFIG.adminUid || '');
        if (!adminUid || adminUid.includes('PASTE_') || user.uid !== adminUid) {
          setAdminMessage('#adminAuthMessage', t('adminWrongAccount'), 'error');
          try { await window.THARU_AUTH.signOut(); } catch (e) { console.warn(e); }
          loginPanel.hidden = false; dashboard.hidden = true; return;
        }
        loginPanel.hidden = true; dashboard.hidden = false;
        if ($('#adminIdentity')) $('#adminIdentity').textContent = `${user.email || user.uid} · ${t('firebaseConnected')}`;
        startAdminListeners();
      });
    }
    $('#adminSignOut')?.addEventListener('click', async () => {
      if (window.THARU_AUTH) await window.THARU_AUTH.signOut();
      if (unsubscribeMenu) { unsubscribeMenu(); unsubscribeMenu = null; }
      if (unsubscribeSettings) { unsubscribeSettings(); unsubscribeSettings = null; }
    });
    $('#saveShopSettings')?.addEventListener('click', async () => {
      if (!window.THARU_DB) return;
      try {
        await window.THARU_DB.collection('settings').doc('shop').set({
          isOpen: $('#shopIsOpen').checked,
          promoEn: $('#promoEn').value.trim(),
          promoSi: $('#promoSi').value.trim(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        setAdminMessage('#adminActionMessage', t('settingsSaved'), 'success');
      } catch (err) { console.error(err); setAdminMessage('#adminActionMessage', t('settingsSaveFailed'), 'error'); }
    });
    $('#menuItemForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nameEn = $('#itemNameEn').value.trim();
      const nameSi = $('#itemNameSi').value.trim();
      const categoryEn = $('#itemCategoryEn').value.trim();
      const categorySi = $('#itemCategorySi').value.trim();
      const price = Number($('#itemPrice').value);
      const imageUrl = $('#itemImage').value.trim();
      if (!nameEn || !nameSi || !categoryEn || !categorySi || !Number.isFinite(price) || price < 0) { setAdminMessage('#adminActionMessage', t('menuItemRequired'), 'error'); return; }
      if (imageUrl && !validImage(imageUrl)) { setAdminMessage('#adminActionMessage', t('badImageUrl'), 'error'); return; }
      const payload = { nameEn, nameSi, categoryEn, categorySi, price, imageUrl, soldOut: $('#itemSoldOut').checked, active: $('#itemActive').checked, updatedAt: firebase.firestore.FieldValue.serverTimestamp() };
      try {
        const id = $('#itemId').value;
        if (id) await window.THARU_DB.collection('menuItems').doc(id).set(payload, { merge: true });
        else { payload.createdAt = firebase.firestore.FieldValue.serverTimestamp(); await window.THARU_DB.collection('menuItems').add(payload); }
        resetAdminForm(); setAdminMessage('#adminActionMessage', t('itemSaved'), 'success');
      } catch (err) { console.error(err); setAdminMessage('#adminActionMessage', t('itemSaveFailed'), 'error'); }
    });
    $('#resetMenuForm')?.addEventListener('click', resetAdminForm);
    $('#adminMenuList')?.addEventListener('click', async (e) => {
      const editButton = e.target.closest('[data-edit-item]');
      const deleteButton = e.target.closest('[data-delete-item]');
      if (editButton) { const item = adminItems.find((entry) => entry.id === editButton.dataset.editItem); if (item) fillAdminForm(item); }
      if (deleteButton) {
        const item = adminItems.find((entry) => entry.id === deleteButton.dataset.deleteItem);
        if (!item || !window.confirm(t('deleteConfirm'))) return;
        try { await window.THARU_DB.collection('menuItems').doc(item.id).delete(); setAdminMessage('#adminActionMessage', t('itemDeleted'), 'success'); }
        catch (err) { console.error(err); setAdminMessage('#adminActionMessage', t('itemDeleteFailed'), 'error'); }
      }
    });
  }

  function startAdminListeners() {
    if (!window.THARU_DB) return;
    if (unsubscribeMenu) unsubscribeMenu();
    if (unsubscribeSettings) unsubscribeSettings();
    unsubscribeMenu = window.THARU_DB.collection('menuItems').orderBy('nameEn').onSnapshot((snapshot) => {
      adminItems = snapshot.docs.map((doc) => ({ ...normalizeMenuItem(doc), active: doc.data().active !== false }));
      renderAdminItems();
    }, (err) => { console.error(err); setAdminMessage('#adminActionMessage', t('itemSaveFailed'), 'error'); });
    unsubscribeSettings = window.THARU_DB.collection('settings').doc('shop').onSnapshot((snapshot) => {
      const data = snapshot.exists ? snapshot.data() : { isOpen: true, promoEn: '', promoSi: '' };
      liveShopSettings = { isOpen: data.isOpen !== false, promoEn: String(data.promoEn || ''), promoSi: String(data.promoSi || '') };
      if ($('#shopIsOpen')) $('#shopIsOpen').checked = liveShopSettings.isOpen;
      if ($('#promoEn')) $('#promoEn').value = liveShopSettings.promoEn;
      if ($('#promoSi')) $('#promoSi').value = liveShopSettings.promoSi;
      renderShopStatus();
    }, (err) => { console.error(err); setAdminMessage('#adminActionMessage', t('settingsSaveFailed'), 'error'); });
  }

  function initNavigation() {
    $('#languageToggle')?.addEventListener('click', () => {
      lang = lang === 'en' ? 'si' : 'en'; localStorage.setItem(STORAGE.lang, lang); applyTranslations();
    });
    $('#themeToggle')?.addEventListener('click', () => { theme = theme === 'light' ? 'dark' : 'light'; applyTheme(); });
    $('#mobileMenuToggle')?.addEventListener('click', () => {
      const nav = $('#mainNav'); if (!nav) return;
      const isOpen = nav.classList.toggle('open');
      $('#mobileMenuToggle').setAttribute('aria-expanded', String(isOpen));
      $('#mobileMenuToggle').textContent = isOpen ? '×' : '☰';
    });
    if ($('#yearNow')) $('#yearNow').textContent = String(new Date().getFullYear());
    updateCartBadges();
    window.addEventListener('storage', (event) => { if (event.key === STORAGE.cart) { updateCartBadges(); if (page === 'cart') renderCart(); } });
  }

  function boot() {
    applyTheme();
    initNavigation();
    applyTranslations();
    if (page === 'menu') initMenu();
    if (page === 'cart') initCart();
    if (page === 'admin') initAdmin();
    bootPublicFirestore();
    if (page === 'home' || page === 'menu') renderShopStatus();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
