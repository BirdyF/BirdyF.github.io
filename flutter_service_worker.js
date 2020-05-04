'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "00fa4d0e5c5956ceb97755d9981ce3d0",
"/": "00fa4d0e5c5956ceb97755d9981ce3d0",
"main.dart.js": "35d7e0a0279c7694e881f327999c50ef",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/0d/4a2e3574a417fd39562baff3e05f4ed2c9003b": "6a2bc8a041859d1dfeb614495337aa8b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/ac/8fd8cbac356165a31e8e7c13f437821f45c040": "240907fbfcf2855e10614bc83bb10282",
".git/objects/df/e409212a45458eec1bfd4341159dfadf4170bc": "ce08b3c2dc26230ceeb8c96ed598e9c0",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/c8/1499e08295eec39f8d74420e00e60888bcde44": "96e63102da6a25df660abd761626bb3d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/17/315ce0c04c89868fef6022f38ddb696fa10908": "e87c63af74d0b54069b8c5bfc0d5d7ef",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/d7c5ab9779c5419fd4d415ce5bb63d12f3de71": "ec5a56845965f47546a4ec2a924f44c4",
".git/objects/07/7dd61ca3a06c42ee991fcb14b94c2d73872950": "030422c12d5114d5da5938cced1693a2",
".git/objects/6e/ff9a740d434d58218140a375406d4cbc00880e": "88dacf1888f2686f0c546570f539a85b",
".git/objects/97/12d20950947dd41a51bc249bf7f11918a0fe21": "e93dce0cd3a0b03d94f4c1c138fb4699",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/64/d1d1a42139de585e3e8c25a5b99f17b513f8aa": "e942beaf2b7114f6b59d3903f6129875",
".git/objects/d4/f4f075757e83978c1f25e7c9c0f90653b504a6": "25d32b664bf24efcd42423f8fdd688a3",
".git/objects/b1/7e8f78ddedd6ad94e4f1cf90f07b1941b91fe1": "50bb886f3734746fe8081a5d3f992ab1",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e6/c2d97eb87812b0f50c931230ea5d07a0e1331d": "976e0b19283098b2be845af57634e423",
".git/objects/f7/1d6afbe435a794595bd89ddb99baab916baa49": "74ab1fe6a8d02e914fab40d1d2d875db",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/7f/61db05e05bff708f5aca60a722a21c8804c62d": "87ccd608ab64e44e56685ae81aed62ca",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "217dcafa52613471a22285bec92de295",
".git/logs/refs/heads/master": "217dcafa52613471a22285bec92de295",
".git/logs/refs/remotes/origin/master": "a4cb8dbef79f5b350248dcebbfe8f80f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "1c633ab8e76993f8d54b75cabc86933d",
".git/refs/remotes/origin/master": "bb6383f185742383f3cc2b04039a1d8d",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/COMMIT_EDITMSG": "26fbb2fee9066e77f4644bf23260b0d1",
"assets/LICENSE": "cd53ee5459046c8088b4d9ab86883f5c",
"assets/AssetManifest.json": "364edd657049138c5255dddc4551a1dd",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/Bormes.gpx": "ded02e9effbb0bc58456899c0b20a2b4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
