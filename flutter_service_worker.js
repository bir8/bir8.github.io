'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "781b6ac295360636f81ee93516f090f9",
"version.json": "66ce24a7a962932cdd25fbdf6d3dfb82",
"index.html": "fa259a10b3cf08ab1491f09912550274",
"/": "fa259a10b3cf08ab1491f09912550274",
"main.dart.js": "4c91294b602e812f1a8dba2d76a2e9a4",
"404.html": "93e20ee3620e254494663f4f1460f37f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"_redirects": "5f52dbefcf63c9f677ace09fcf8bc7d8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c8e6dc8d0e0304c5ff70ae0148408e28",
".git/config": "d5f890325891edcb1f607e54df7fca54",
".git/objects/3e/534099e880fe2958298108731fefd97843d1bc": "129e97c8fafa41f9cb525c2c665bbe89",
".git/objects/3b/23bbe7713ba2dc7aa003bd302f2830b06e34c6": "bdc8509b4ac10e1ad399483ae01ef6b9",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/74c224c14a41de80abd964f17b457f674bf9f3": "cdc155f012c659f83d1ef4955ab4f325",
".git/objects/6a/5c1728515e0ba2cf41c45bd3987662e3cf7887": "01bbabfe4523fc461469f68ba0b52e42",
".git/objects/69/971d081c542fdb1eb802db5eb0434506ae5ef9": "d120d192d2be7e2ed6884e312dba0bed",
".git/objects/3d/16e0169b00ca73c67d7a3194ad66af2d6857ee": "b035a93bf94938ead0f3b809fdef2f46",
".git/objects/3d/8f5d3cecd82ad7d932cb7565af9f62a6843de3": "2503c53dc89b709c3a441bc5ecfe4cc2",
".git/objects/67/8b52d828a0c85d14585959c0c9b3c5f5445fcd": "21be2d0f6a94dab47d660f8ceedb730a",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/5a/f800b4e803cc110583fc77c2bab49fd6bc5f07": "1fd11aed14aae2e0660dd640cbf095ee",
".git/objects/5a/078b3a7ab82fe52dfa0e794db0d376d06bcd08": "71948bf5b7eb1eef4dce5b479698d814",
".git/objects/a4/43384b3c160d65fee82c7dd87cfdc249ffb7d5": "e0b15ffabd2a32b164e8beedb02f2f08",
".git/objects/a3/5e2426ddab16f9f361b6f0eb5230ee71dd047d": "c6f39905c6b0225de31a84c481b5eee6",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/bb/198f61f55122fa98bd89abf044c9c03786c45e": "428015454b3d09e7d9655898d65a56fc",
".git/objects/bb/57e1df55e6d90ce6b177a15941855a99a9de0f": "5083815017adeecb649d6c8d31b09ae5",
".git/objects/be/9dda0f9c9f96dd53320d7af13009d5b5d39735": "5281ead6f2a9c60b0474ae38f2ff2c65",
".git/objects/da/e0a116f72d429242a774cbd285f74ee505d81a": "d860e183765053248b06d82fcc713505",
".git/objects/da/ee35205a46bfe42c40e55cf2a3c783009be628": "b1eb18892915a3e0a0008999896f4f35",
".git/objects/da/ee848d564ed7b8efe227d54a11308704b3cd62": "8c5d95a21c4af61197f6d00c554e1add",
".git/objects/a2/1f64be7ce32b90a0c821005768612112e042ca": "578f03c5d5a422a2690492b0c43ebf6f",
".git/objects/d6/57faa26d6b043120c63e4145a9b25e8513beec": "d14d64c2af8de2c2000b0c18cf9be0fc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/588044d775c0e0ffd520e0322f54b5dc462594": "f2d3209116816bfb483358e9d51a9191",
".git/objects/e2/b82ba387bf70fe312423bf37085a73a2603e0c": "b4b5742fcf259c36ad3c2a28e91774e3",
".git/objects/e2/095649b7a1970f43e2ab77bf68bec32b73f1b2": "6bacf9c970a59feac4a91131aaa5df2f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/fc/15313eea1fdf1c1481e1dae57a901ccb1f515f": "39d4cd9b9532e5b5dc3ff9c55fe5e183",
".git/objects/fd/f3a047b3b1d84f7cedf6efb435caf851921596": "e74ec10544385d793644894e6392aab8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/810d2eb3021582cb771e9bf46deffc3ef2b165": "4ee16b25a63c0dde5e7b49e52825b637",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/c1/3d903f6ba64f7a45d97329f277e0ff76675d38": "b6f6035343878e5a8d259b0a6277dff4",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/2f2d5068e958ce515c4e5a89185a583b53340e": "1e3aea3ab35e7232dc07e24b42364fb0",
".git/objects/4e/aaf4ba99d5064c455c1fe138c44f7794913bf4": "064ff98797ae2a5f742636fc37144d88",
".git/objects/18/7436aeaca8c88c414ca7769e841235b2c157f9": "891d9123617c74cb9df6e839942c2c61",
".git/objects/18/67bac01d68cc415381b50585a3dafcf492eda1": "10e9cf7dee0f8c9f66d14616d5824353",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/11/19e224379b8bb41e09fcad9b33ee39437c3d9a": "808563ca0a0a3367f8e22ea5cb43cb3e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/28/4c0ede5bccc1b5ea7bec9486e0df3463e409a9": "3e49f736916ff704110d1c3202e3f735",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d04c47adf1640468d34c9dc8256a1d4e3b4941": "1955f92f8dceb9a6f00cc5f2d2a90a55",
".git/objects/21/d1774818017c955c1f8edce995c4293415f3c4": "2995fbe33f36d9e5b279ce24191b7ef4",
".git/objects/75/c681bdcce17453c1bed802347bf8f480bfc26a": "8cdf0ce5020c8de622f6ef6a8fb6a093",
".git/objects/72/be14e8a7e00d9c6fd379f351efacb88f1a2c9e": "bff53e22d5dc87ef99bfe1e917095d76",
".git/objects/2a/fd149d480e169384d779017a341afb34082ba2": "9e1f32d049a13b65f9c5894d994272f3",
".git/objects/88/f69c73defe9239db003bd51c3b8437d0687f7c": "c1c4a491ef23f84b0a9f96af46764b8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/d283493b380d5e85a9f4ce365648a6936a77cf": "5e20375ef9fe2f04fdf052cc0428c88a",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/00/202a7fca9be3683bc8d775d038fa892292ae94": "bc21184c71b7bcbdbf2ced95dc3931be",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/5e/6544a711109dfd82ff0c8aa4f99a00aae2772e": "f5023641bb260a59809ab60b58c173a4",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/81b873b89461f4347df3d34493a8f5c76ed13a": "ec5363da47d42d33acc8b1c36451a712",
".git/objects/6c/5bd8507b9b15ece3e17a0631b2be9c92422fb8": "b93596655fde4297af86ea48ed532d61",
".git/objects/39/07b3576663adbc1991cdee171f903e17247d17": "21db8bc9cd6d73d5ff8b4092bb600c74",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/97/ac5a37921a84108d4ae38a57660be4392d0ef6": "c205f9e84ade97524be04deec7921555",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/607d7101b42dc18724d8b8781aae56f351d6a5": "2a659d176188b40b431ad2c73339adc0",
".git/objects/90/6e1c1cddaf5abe006f711dccd68c459c49c02a": "44fdc7ae0298c75bea25013e3ba5a0d9",
".git/objects/bf/ae7ab8285cbe98f2eafa1b5829661cc71c6641": "b51c5740ffafc4478f9258d1790cfa03",
".git/objects/d3/0411291fb5bcda0e6d4b9042f32a3b9894e0c3": "8336d13c6a3fd2a26f87592baa1761ec",
".git/objects/d3/3feeefa66601a2046cea1192a4af44cfd375bc": "710e911718f93c78a64cd34cba6221e1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/123406cc92d2af2db893346f664d9fbfb85c8c": "68114acde268465194c03a44f4909559",
".git/objects/a7/22b8d3e15890830a2b20ec322c6be7f151f681": "9b802c980f8ef24a474fdd42c28c0720",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dd/cfbfa5f635bf7de1d3fd1f2b0ea9554376d89c": "2d97b56aacc27e9eb28165bdcba6e73a",
".git/objects/dd/e38774b35d33bbd5d4ab3f345e6a319b0af295": "4f18404e9f653d514b12c8ad2b5a5069",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d2/9e1fd41da878688e4dc5f035cd2914d703386d": "e03ce2153874d63da55fe5ebec24bf06",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/65bc4d7c20f7f81b79dbf9448a22bf67419c74": "be0489635e8bba71215fd35a0c24f97a",
".git/objects/db/25cd9efae93a193ba8775645a98d4bf95dd78a": "4e104f05d3f23f7688d4d0b67e91cd81",
".git/objects/a6/3b3057bce0f7231c4281d1a8d6e6df3b70aa31": "32e166bd57f3ff6426077b97e876a1a9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/860916487e8a9773b007a940b09d3dd0de947e": "aefea325ab95d2d16216b25753b407c5",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/cd/5491596c722fc06488e6804153a568303e742e": "8522d2085066d2715cc4e937a4cc6deb",
".git/objects/e8/880cc77b1db422e93a7a022a13a4c8ed99aacc": "2712370747b4fca6fbe336613fc6d2dd",
".git/objects/e9/556cb6c589e0ff2903a92ef3d72b1c828143e4": "e0875eb9d7ca43b332c9852c5fa49d52",
".git/objects/f1/a3fc6d2305137872f109844c57d087868f813f": "a9069e4becc3e0a5947509eafedfd9e0",
".git/objects/e0/a8c157f0956167cc67e5ccff7a1b94aced5db2": "e55293ecffaa717309c211998c3000c0",
".git/objects/2c/5a69dd7196e777ca7d718f5a968ef16247aa1a": "a76b253ba6b176d2c9f439f290b72c7f",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4a/0f83d77159cb457aae3ba6765d8dc10f97408f": "7f44835fe62489c3371e2982a9aee536",
".git/objects/4a/17b61e50df387ce70508ff053c1bee690a07fa": "76281da27a5ff00261032c66e65a2321",
".git/objects/23/00153547732a83b81fc30bcb529d768a7cd746": "c67ff9b40d614734e42534f8e1422bab",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/14/98cbc3235d1880d2041f5d1a33810f78e41260": "e2b61e89b0c484674473b91d17a04c32",
".git/objects/8e/fcdabf749a0bdda69b01b8724466969234e62d": "179037d75b9a992840a0ae5333e18d2e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73eddf28d6a01328c00a2caade302ae2",
".git/logs/refs/heads/main": "2d82b30be738db4eda18d2933a8e4dd3",
".git/logs/refs/remotes/origin/main": "a199c07ef26d565e4faeff4a3856aee3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bc26123365c9f82880f81daa49b27fa2",
".git/refs/remotes/origin/main": "bc26123365c9f82880f81daa49b27fa2",
".git/index": "9d652b442c0b261473d16096eb0faff2",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "75d288a9b5526dc5fcc86d3c8e9a935b",
"assets/NOTICES": "1ae16cbfb70aac82cad75a93df860340",
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
