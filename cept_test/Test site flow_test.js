
Feature('Test site flow');

Scenario('Testing website flow', (I) => {
    I.amOnPage('/');
    I.see('Afroze');
    I.see('Kabeer');
    I.see('Khan');
    I.click('Who Am I');
    I.see("மத்ராசபட்டினம்");
    I.click('Me and Unique');
    I.see("Always remember that you are absolutely unique. Just like everyone else.");
    I.click("Alma mater");
    I.see("Develop a passion for learning. if you do, you will never cease to grow.");
});

Scenario('Responsive website flow',(I) => {
    I.amOnPage("/");
    I.see("Afroze");
    I.see("Kabeer");
    I.see("Khan");
    I.click({ css: "div.navswitch" });
    I.wait(1);
    I.see("Soon To");
    I.click({ css: "div.navswitch.mainTogglr" });
    I.wait(1);
    I.click({ css: "div#subTogglrNav" });
    I.click("Who Am I", "div.navholderStyle.block");
    I.wait(1);
    I.see("மத்ராசபட்டினம்");
});
