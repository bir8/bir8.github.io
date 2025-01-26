'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "82cf42a45d8273eaa96d246703edae16",
"version.json": "66ce24a7a962932cdd25fbdf6d3dfb82",
"index.html": "fa259a10b3cf08ab1491f09912550274",
"/": "fa259a10b3cf08ab1491f09912550274",
"main.dart.js": "6a85464ca594dd5ca0b44552d83509da",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c8e6dc8d0e0304c5ff70ae0148408e28",
"assets/AssetManifest.json": "75d288a9b5526dc5fcc86d3c8e9a935b",
"assets/NOTICES": "5dc1c15e3416732064bac11639d04567",
"assets/FontManifest.json": "c56fd326a85258aa2183a579be0c4681",
"assets/AssetManifest.bin.json": "680a2ba700d1a56203790d5da27bc88c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3528c816d46fecdcba823ab4165591a9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/svg/tick-square.svg": "4b2c42f345083c2ede1c8099bdb790f6",
"assets/assets/images/svg/chart.svg": "02ccd493ee848a267f2dae1924ddd17e",
"assets/assets/images/svg/padding.svg": "ef1b8e4e1743f2aead73b497cabd11ee",
"assets/assets/images/svg/account-number.svg": "361efcfb3f03adea203459473c235489",
"assets/assets/images/svg/location2.svg": "1abd5533f90ac56b7924beceb03e222e",
"assets/assets/images/svg/gallery-photos.svg": "5fc71183ec0e17fd2609755e18c4dc7c",
"assets/assets/images/svg/camera2.svg": "3e215c55709f93ea35c0d030eb2d7e31",
"assets/assets/images/svg/gallery.svg": "069b0f16c979d14b8db4fbe1dd292100",
"assets/assets/images/svg/card.svg": "a87e5750c385e4ea4a2817bfbb317584",
"assets/assets/images/svg/close.svg": "92b06a0e204c9bcdc4b4c69776f26fa2",
"assets/assets/images/svg/box.svg": "5969adf7c7e7d9c2e9d7f21b34db75dc",
"assets/assets/images/svg/notification.svg": "d94a9c4e431d013e0f0e3c100867c614",
"assets/assets/images/svg/Flag_of_Iraq.svg": "1f220df23d7fa5565405850606107f19",
"assets/assets/images/svg/camera.svg": "ce30ab03f5946ab581a460dac30bc517",
"assets/assets/images/svg/account-number-lock.svg": "04f1c677b822d2df734031be290ebd69",
"assets/assets/images/svg/success.svg": "cf46892ddda2a54966555bb56000f2ea",
"assets/assets/images/svg/location.svg": "95fef1950100dc92e7ce82a2d15501c2",
"assets/assets/images/svg/car.svg": "c8a9355ea86647b816c5adf3f776a726",
"assets/assets/images/svg/error-message.svg": "85d068bd6754e7b3aff3bb34259d9261",
"assets/assets/images/svg/error.svg": "92ebf7337b24c25d80a5b20dded6f66d",
"assets/assets/images/svg/lock-account.svg": "7899b777ace926942e2400f03194bb3a",
"assets/assets/images/svg/user1.svg": "a9a4bb144be6444ab97b85d8abe7a579",
"assets/assets/images/png/verify-icon.png": "3c42be5a0857c1ce8268fce85ce334e0",
"assets/assets/images/png/news-profile-shape.png": "7e451d6be5b5352926298d5ea1d5a2eb",
"assets/assets/images/png/package.png": "7bd33c2354649669f82ae253f62e056d",
"assets/assets/images/png/in.png": "c6401a5629ccba44a3d4fdcbce8a6b58",
"assets/assets/images/png/card4digits.png": "2a8babc733c4f1269ae144f675a982c0",
"assets/assets/images/png/out.png": "0544a5be3dddc1f38f129b8e7f7b71a3",
"assets/assets/images/png/user.png": "be71c36f2e0b4e49212ff3737cab7061",
"assets/assets/images/png/logo.png": "793509ac797554e85a3480f2987d36ad",
"assets/assets/images/png/motorcycle.png": "381146e5c1575558186f751a4b739bc1",
"assets/assets/images/png/car.png": "89e8e4ca49baae48352a1ef522891399",
"assets/assets/images/png/call.png": "f1809efd44774103bd301588bfeda9a6",
"assets/assets/images/png/bgLogin.png": "3fbdd22c2f8a400663656bd9fca66948",
"assets/assets/images/png/scan1.png": "8e196dc1819a1521f2f66dc2625816ca",
"assets/assets/images/png/whatsapp.png": "8e726159b1595b49ef5e8d38efb5d517",
"assets/assets/images/png/box.png": "727fcbc2042b4121ae9ef1b9a535205f",
"assets/assets/images/png/scan.png": "3a19cf73891e58ccb19e0d15cdcd913c",
"assets/assets/images/png/social.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/assets/lottie/error.json": "53a618b53a7cf3ed511e5431f8f5342a",
"assets/assets/lottie/splash2.json": "92f877ef728ac051d3cef4a238cd1c98",
"assets/assets/fonts/cairo/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/fonts/cairo/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/fonts/cairo/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/cairo/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/nrt/NRT-Reg.ttf": "dc9a8bb1a3a65504c8d90566a26d5327",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
