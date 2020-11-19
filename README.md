# pixel-battle-capture
Node.js script that captures [VK Pixel Battle](https://vk.com/pixelbattle) canvas and creates .png out of it in high resolution.

![Example image](/src/example/1x1.png?raw=true)

How to use?
---
1. Install [Node.js]( https://nodejs.org/en/download/).
2. Clone or donwload this repo and unpack somewhere on your computer.
3. In the `pixel-battle-capture` folder open terminal (e.g. cmd.exe) and run `npm i`.
4. When all dependencies is installed close the terminal.
5. Go to `/src/` folder → open `start.cmd` or run `node index` in that folder.
6. Wait till your .png is finished.
7. Check out `/src/` folder. Your image must already be there.

If you want to create another caption just begin from step 5.


Variables
---
Well, for now you can change only one thing — resolution. By default it's set to 10 which means that one pixel on Pixel Battle canvas will take 10x10 pixel of your .png. If you want to change it, open `/src/index.js` in any text editor and find line `const pixelSize = 10`. Change 10 to your value (max 20, min 1) → save the file → run `start.cmd`.


Feedback
---
Have any questions? Contact me on Telegram [@mikhailsdv](https://t.me/mikhailsdv).
Subscribe to my Telegram chanel [@mikhailsdv](https://t.me/FilteredInternet).
