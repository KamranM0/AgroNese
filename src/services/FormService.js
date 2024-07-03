export const sendTelegramNotification = async (
  name,
  surName,
  area,
  areaUnit,
  number,
  comment
) => {
  const chatId = "-1002188196682"; // Replace with your actual chat ID
  const botToken = "7082201574:AAEncqXODJwK9rDKPN54KZSXrE54AgyyEmg"; // Replace with your bot token

  const message = `New form submission:\n\nName: ${name}\nSurname: ${surName}\nNumber: ${number}\nArea: ${`${area} ${areaUnit}\nComment: ${comment}`}`;

  try {
    await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`
    );
    console.log("Telegram notification sent successfully");
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
};
