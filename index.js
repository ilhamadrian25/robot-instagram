const { Builder, By, until } = require("selenium-webdriver");
const {chrome, Options} = require('selenium-webdriver/chrome');

(async function example() {

  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://instagram.com')
    await driver.wait(until.elementsLocated(By.name("username")));
    const username = await driver.findElement(By.css('input[name="username"]')); // Ganti 'username' dengan nama elemen yang diinginkan
    const password = await driver.findElement(By.css('input[name="password"]')); // Ganti 'username' dengan nama elemen yang diinginkan
    // let password = await driver.findElement(By.name('password')); // Ganti 'username' dengan nama elemen yang diinginkan

    // Masukkan nilai ke dalam elemen input
    await username.sendKeys("testingtungtung1");
    await password.sendKeys("ilham123");

    const button = await driver.findElement(By.tagName("button"));
    await button.submit();
    try {
      const db = await driver.findElement(By.css("div._ab2z"));
      console.log(db);
      await driver.quit();
    } catch (e) {
      await driver.wait(until.elementLocated(By.tagName("iframe")));
      // let iframeElement = await driver.findElement(By.tagName('iframe'));

      // // Beralih ke iframe
      // await driver.switchTo().frame(iframeElement);
      await driver.findElement(By.tagName("button")).click();

      await driver.wait(until.elementLocated(By.tagName("body")));
      await driver.get("https://www.instagram.com/ilhamadrian25");

      await driver.wait(until.elementLocated(By.tagName("button")));

      const button = await driver.findElement(By.css('button._acan._acap._acat._aj1-._ap30'));

      // Melakukan klik pada tombol
      await button.click();
      const message = await driver.findElement(By.css('.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x18d9i69.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x6s0dn4.xjyslct.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.x1ypdohk.x78zum5.x1f6kntn.xwhw2v2.x10w6t97.xl56j7k.x17ydfre.x1swvt13.x1pi30zi.x1n2onr6.x2b8uid.xlyipyv.x87ps6o.x14atkfc.xcdnw81.x1i0vuye.x1gjpkn9.x5n08af.xsz8vos'));
      await message.click();

      const inputMessage = await driver.findElement(By.css('.x6s0dn4.x78zum5.x1gg8mnh.x1pi30zi.xlu9dua'));

      // Melakukan operasi yang diinginkan pada elemen, contohnya klik
      await inputMessage.click();
      // Sisipkan logika di sini untuk menjalankan tugas yang Anda perlukan
      // Misalnya: interaksi dengan elemen, navigasi, dll.

      // Loop tak terbatas untuk menjaga driver tetap berjalan
      // while (true) {
      //   await new Promise((resolve) => setTimeout(resolve, 1000)); // Tunggu 1 detik
      // }
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Jika Anda ingin menutup driver, Anda dapat menyematkan logika penutupan di sini
    // await driver.quit();
  }
})();

