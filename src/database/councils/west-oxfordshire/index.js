const puppeteer = require("puppeteer");

async function typeAndSelectAddress(page, address, timeout = 500) {
  await page.waitForSelector("#combobox-input-19", {
    visible: true,
  });

  await page.type("#combobox-input-19", address, {
    delay: 500,
  });

  try {
    await page.waitForSelector(".slds-listbox__item", {
      visible: true,
      timeout: timeout,
    });
  } catch (error) {
    if (error instanceof puppeteer.TimeoutError) {
      throw new Error(`Address ${address} not found!`);
    }
  }

  await page.click(".slds-listbox__item");

  const [button] = await page.$x("//button[contains(., 'Next')]");
  if (!button) throw new Error("Unable to click Next button!");
  await button.click();
}

async function getTableRows(page) {
  await page.waitForSelector(".slds-table", {
    visible: true,
  });

  const table = await page.$(".slds-table");
  const tableRows = await table.$$("tr");

  return tableRows;
}

async function toJSON(page, tableRows) {
  let binCollectionData = {};

  for (let i = 1; i < tableRows.length; i++) {
    const row = tableRows.at(i);
    const rowText = await page.evaluate((row) => row.innerText, row);
    const data = rowText.split("\n\t\n");

    binCollectionData[data[0].trim()] = data[1].trim();
  }

  return binCollectionData;
}

async function get(address, headless = "new") {
  const browser = await puppeteer.launch({
    headless: headless,
  });

  const page = await browser.newPage();

  await page.goto(
    "https://community.westoxon.gov.uk/s/waste-collection-enquiry"
  );

  try {
    await typeAndSelectAddress(page, address.toUpperCase());
  } catch (error) {
    console.error(error.toString());
    await browser.close();
    return {};
  }

  const tableRows = await getTableRows(page);
  const json = await toJSON(page, tableRows);

  await browser.close();

  return json;
}

//   const json = await get("98 Newland, Witney, OX28 3JQ");
//   console.log(json);
module.exports = get;
