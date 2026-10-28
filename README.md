# THARU Juice Bar — Static website + Firebase menu/admin

A mobile-first, bilingual (Sinhala / English) website for THARU Juice Bar. It uses plain HTML, CSS and JavaScript, GitHub Pages for the public website, Firebase Authentication for owner sign-in, and Cloud Firestore for the live menu and shop-status announcement.

## Project files

```text
tharu-juice-bar/
├── index.html             # Home, gallery, about, reviews CTA, location, contact
├── menu.html              # Live Firestore menu, categories, search, add-to-cart
├── cart.html              # Local cart, customer form, WhatsApp checkout
├── admin.html             # Firebase-authenticated owner dashboard
├── firestore.rules        # Firestore read/write access controls
├── assets/
│   ├── styles.css         # Responsive styles, glassmorphism, light/dark themes
│   ├── app.js             # Shared page logic, language, cart and Firebase listeners
│   ├── firebase-config.js # YOUR Firebase web config + admin UID go here
│   └── firebase-init.js   # Firebase initialization
└── README.md
```

## Before publishing: important security notes

- **Do not use a JavaScript password prompt as the only admin protection.** Anyone can read frontend code on a static site. This project instead requires Firebase Authentication, checks the signed-in admin UID in the page, and applies Firestore Security Rules on the database.
- Firebase web configuration values (including the web `apiKey`) are intended to appear in browser code. They are not an admin password. The actual write protection is enforced by `firestore.rules`.
- Use a unique, strong password for the admin Firebase account. Do not put it in this repository or in `firebase-config.js`.
- The site does not process card payments or store orders in Firestore. Checkout builds a message and opens WhatsApp; the customer must review and send the message.
- Google Maps button: `https://maps.app.goo.gl/sts6Jc5GBXbinUr2A`. WhatsApp checkout number: `+94 78 928 0918`.

## 1. Create the Firebase project (no-cost plan)

1. Open [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Add a **Web app** to the project and copy its Firebase configuration object.
3. In **Build → Authentication → Sign-in method**, enable **Email/Password**.
4. In **Authentication → Users**, create the shop owner's user. Do not add a public sign-up flow to the website.
5. Open that user's details and copy the **User UID**.
6. Go to **Build → Firestore Database** and create a database. For this site, use the default database and select a location suitable for your visitors.
7. In the project's web app settings, copy the config values into `assets/firebase-config.js`:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket` (use the exact value provided by Firebase)
   - `messagingSenderId`
   - `appId`
8. Paste the admin user's UID into the `adminUid` field in `assets/firebase-config.js`.
9. Open **Firestore Database → Rules** and replace the rules with the contents of `firestore.rules`. In those rules, replace `PASTE_YOUR_ADMIN_USER_UID_HERE` with the exact same UID. Publish the rules.
10. In **Authentication → Settings → Authorized domains**, make sure your GitHub Pages hostname is present after you publish, for example `yourname.github.io`. Use your actual GitHub username/org hostname; you do not need a custom domain.

The Firebase SDK config must be filled in before live data and admin sign-in work. If it is not configured, the menu shows clearly labelled sample items so you can preview the design. Those demo items are not live inventory.

## 2. Add the site to GitHub Pages (free default subdomain)

1. Sign in at [GitHub](https://github.com/) and create a repository such as `tharu-juice-bar`. A public repository is the simplest choice for a free GitHub Pages deployment.
2. Upload the **contents** of this folder to the repository root. Do not upload the parent folder as a nested directory; `index.html` should be at the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under the build/deployment source, choose **Deploy from a branch**; select the `main` branch and `/ (root)`, then save. If your repository uses a different default branch, select that branch instead.
5. Wait for GitHub Pages to finish the first deployment, then open the URL displayed there. For a project repository it normally looks like `https://YOUR-USERNAME.github.io/tharu-juice-bar/`.
6. Add that site's `github.io` hostname to Firebase Authentication's authorized domains if it is not already listed. Refresh the site and try signing in at `/admin.html`.

This is a static site, so no Node.js build, server, paid web host, or custom domain is required. GitHub Pages has usage limits, and Firebase has free-tier quotas; “free” means staying within those current limits. See [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [Firebase pricing plans](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans), and [Firestore billing](https://firebase.google.com/docs/firestore/pricing).

## 3. Add and manage menu items

1. Open `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/admin.html`.
2. Sign in with the owner account you created in Firebase Authentication.
3. Add both English and Sinhala names and categories, enter a price in LKR, and optionally provide an image URL beginning with `https://`.
4. Use **Out of stock / Sold out** to show the sold-out badge and disable adding that item to the cart. Uncheck “Show this item” to hide it from customers without deleting the record.
5. Tap **Save menu item**. The public menu updates from Firestore in real time.
6. Use **Shop status & announcement** to switch the green/red open indicator and publish the daily banner in both languages.

Only the configured admin UID can write menu or shop settings. The public can read the menu and public shop status. If an admin operation is denied, verify that the exact same UID appears in both `assets/firebase-config.js` and `firestore.rules`, and that the rules were published.

## 4. Firestore data model

The admin page creates these records automatically:

- `menuItems/{autoId}`: `nameEn` (string), `nameSi` (string), `categoryEn` (string), `categorySi` (string), `price` (number, LKR), `imageUrl` (HTTPS URL or empty string), `soldOut` (boolean), `active` (boolean), `createdAt` and `updatedAt` timestamps.
- `settings/shop`: `isOpen` (boolean), `promoEn` (string), `promoSi` (string), and `updatedAt` timestamp.

You do not need to create a `settings/shop` record manually; the admin dashboard creates it when you save settings. Add menu items in the admin dashboard after the deployment is connected to Firebase.

## 5. Features included

- Responsive, mobile-first layout with touch-friendly controls and no intended horizontal page scrolling.
- Sinhala / English live text switching without reloading; the choice persists in local storage.
- Light and dark themes; the choice persists in local storage.
- Glass-like navigation/cards, fruit palette, responsive grid/flex layouts and a mobile bottom navigation bar.
- Live Firestore menu and open/closed status; announcement banner in both languages.
- Category chips, bilingual search, sold-out badges and local-storage cart shared between pages.
- Quantity controls, remove item, checkout form, subtotal in LKR, and WhatsApp message builder.
- Google Maps location/review CTA using the requested link.

## 6. Before opening to customers

- Replace the Firebase config placeholders and both admin UID placeholders.
- Add the real menu and verify prices, Sinhala spelling, images, and stock status on a phone and a computer.
- Replace external image URLs with your own approved photos if desired. Images hosted on third-party websites can change or disappear; for reliable loading, use optimized images you have permission to publish.
- Confirm the exact WhatsApp number and Google Maps link.
- Test open/closed status, promotions, language switching, dark mode, cart quantity/removal, and WhatsApp checkout.
- Set a strong owner password and secure access to the owner email account. Never give visitors access to the admin account.

## 7. Troubleshooting

**Menu shows preview items:** Firebase config values are still placeholders or `assets/firebase-init.js` could not initialize. Check the browser console and verify the web app config.

**Menu is empty after Firebase setup:** Add menu items using `/admin.html`. Check Firestore's `menuItems` collection and rules. An active menu item must have `active: true` (or the field may be omitted for older manually-created records, which the public page treats as active).

**Admin sign-in works but dashboard does not open:** Paste the correct Firebase Authentication User UID in both `assets/firebase-config.js` and `firestore.rules`.

**Admin gets permission-denied:** The rules were not published, the UID does not match, or a record is missing a required field. Use the exact included rules and save the item from the form.

**Google sign-in domain warning:** Add the `github.io` hostname shown in your deployed site URL to Firebase Authentication's authorized domains.

**WhatsApp does not open:** The user's device must have a browser and WhatsApp/WhatsApp Web available. The customer still needs to press Send inside WhatsApp; this website does not silently send messages.

## Official setup links

- [Firebase web app setup](https://firebase.google.com/docs/web/setup)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Cloud Firestore security rules](https://firebase.google.com/docs/firestore/security/get-started)
- [GitHub Pages documentation](https://docs.github.com/en/pages)
