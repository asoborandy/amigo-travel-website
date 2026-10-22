const enquiryForm = document.getElementById("contact-form");

enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!enquiryForm.reportValidity()) return;

  const formData = new FormData(enquiryForm);
  const message = [
    "Hello Amigo Travel, I would like to make an enquiry.",
    "",
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Service: ${formData.get("service")}`,
    "",
    `Message: ${formData.get("message")}`
  ].join("\n");

  window.location.href = `https://wa.me/237674518729?text=${encodeURIComponent(message)}`;
});
