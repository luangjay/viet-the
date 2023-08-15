const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const companyName = document.getElementById("companyName");
const companyNameError = document.getElementById("companyNameError");

const boothSize = document.getElementById("boothSize");

const tablesNeeded = document.getElementById("tablesNeeded");

const numChairs = document.getElementById("numChairs");
const numChairsError = document.getElementById("numChairsError");

const contactName = document.getElementById("contactName");
const contactNameError = document.getElementById("contactNameError");

const contactTel = document.getElementById("contactTel");
const contactTelError = document.getElementById("contactTelError");

const result = document.getElementById("result");

const handleCompanyNameValue = async (value, focus) => {
  if (!value.trim()) {
    companyName.classList.replace("focus-ring", "destructive-ring");
    if (focus) {
      companyName.classList.replace("destructive-ring", "no-ring");
      await sleep(100);
      companyName.classList.replace("no-ring", "destructive-ring");
      companyName.focus();
      companyName.select();
    }
    companyNameError.classList.replace("hidden", "block");
    return true;
  }
  companyName.classList.replace("destructive-ring", "focus-ring");
  companyNameError.classList.replace("block", "hidden");
  return false;
};

const handleNumChairsValue = async (value, focus) => {
  if (value < 1 || value > 10) {
    numChairs.classList.replace("focus-ring", "destructive-ring");
    if (focus) {
      numChairs.classList.replace("destructive-ring", "no-ring");
      await sleep(100);
      numChairs.classList.replace("no-ring", "destructive-ring");
      numChairs.focus();
      numChairs.select();
    }
    numChairsError.classList.replace("hidden", "block");
    return true;
  }
  numChairs.classList.replace("destructive-ring", "focus-ring");
  numChairsError.classList.replace("block", "hidden");
  return false;
};

const handleContactNameValue = async (value, focus) => {
  if (!value.trim()) {
    contactName.classList.replace("focus-ring", "destructive-ring");
    if (focus) {
      contactName.classList.replace("destructive-ring", "no-ring");
      await sleep(100);
      contactName.classList.replace("no-ring", "destructive-ring");
      contactName.focus();
      contactName.select();
    }
    contactNameError.classList.replace("hidden", "block");
    return true;
  }
  contactName.classList.replace("destructive-ring", "focus-ring");
  contactNameError.classList.replace("block", "hidden");
  return false;
};

const handleContactTelValue = async (value, focus) => {
  const regex = /^[0-9]+$/;
  if (!value.trim() || !regex.test(value.trim())) {
    contactTel.classList.replace("focus-ring", "destructive-ring");
    if (focus) {
      contactTel.classList.replace("destructive-ring", "no-ring");
      await sleep(100);
      contactTel.classList.replace("no-ring", "destructive-ring");
      contactTel.focus();
      contactTel.select();
    }
    contactTelError.classList.replace("hidden", "block");
    return true;
  }
  contactTel.classList.replace("destructive-ring", "focus-ring");
  contactTelError.classList.replace("block", "hidden");
  return false;
};

companyName.oninput = (e) => void handleCompanyNameValue(e.target.value);
numChairs.oninput = (e) => void handleNumChairsValue(e.target.value);
contactName.oninput = (e) => void handleContactNameValue(e.target.value);
contactTel.oninput = (e) => void handleContactTelValue(e.target.value);

const form = document.getElementById("form");

const handleFormSubmit = async (e) => {
  e.preventDefault();

  let focused = false;
  if (await handleCompanyNameValue(companyName.value, !focused)) {
    focused = true;
  }
  if (await handleNumChairsValue(numChairs.value, !focused)) {
    focused = true;
  }
  if (await handleContactNameValue(contactName.value, !focused)) {
    focused = true;
  }
  if (await handleContactTelValue(contactTel.value, !focused)) {
    focused = true;
  }

  if (!focused) {
    alert(`Registration complete!\n\
      Company name: ${companyName.value}\n\
      Booth size: ${boothSize.value}\n\
      Tables needed: ${tablesNeeded.checked}\n\
      Number of chairs: ${numChairs.value}\n\
      Contact name: ${contactName.value}\n\
      Contact tel: ${contactTel.value}\
    `);
    form.classList.add("hidden");
    result.classList.remove("hidden");
  }
};

form.onsubmit = (e) => void handleFormSubmit(e);
