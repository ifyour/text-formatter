/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "__saber/assets/js/main.912f7e.js",
    "revision": "53602273f3a9b4a4d7ba573a2518e6a7"
  },
  {
    "url": "__saber/assets/js/page-index.121b68.js",
    "revision": "dd8ac65111bf48d5d50c6de336706ee6"
  },
  {
    "url": "__saber/assets/js/vendors~page-index.685185.js",
    "revision": "0f118f774097c4b3a8e60b7a1ce0c064"
  },
  {
    "url": "index.html",
    "revision": "97352c1ccdd5af1abdeae8edc1f1ba03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
