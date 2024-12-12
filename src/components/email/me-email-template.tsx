import * as React from "react";

interface NotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const NotificationEmail: React.FC<Readonly<NotificationEmailProps>> = ({
  name,
  email,
  message,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333333",
        backgroundColor: "#f9f9f9",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ margin: "0", color: "#0073e6" }}>New Form Submission</h1>
        </div>
        <div style={{ fontSize: "16px", lineHeight: "1.8" }}>
          <p>Hi Arjun,</p>
          <p>You have received a new form submission. Here are the details:</p>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Message:</strong>
          </p>
          <p>{message}</p>
          <p>
            Best regards,
            <br />
            Your Portfolio Website
          </p>
        </div>
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "#777777",
          }}
        >
          <p>&copy; {currentYear} Arjun Bector. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
