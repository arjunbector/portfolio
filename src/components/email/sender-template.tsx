import * as React from "react";

interface SenderEmailTemplateProps {
  name: string;
}

const currentYear = new Date().getFullYear();
export const SenderEmailTemplate: React.FC<
  Readonly<SenderEmailTemplateProps>
> = ({ name }) => (
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
        <h1 style={{ margin: "0", color: "#0073e6" }}>Thank You!</h1>
      </div>
      <div style={{ fontSize: "16px", lineHeight: "1.8" }}>
        <p>Dear {name},</p>
        <p>
          Thank you for taking the time to fill out the form on my portfolio.
          I’ve received your details and will get back to you as soon as
          possible.
        </p>
        <p>
          In the meantime, feel free to explore more of my work or connect with
          me on{" "}
          <a
            href="https://www.linkedin.com/in/arjun-bector-348118248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          . If you have any additional information or questions, please don’t
          hesitate to reply to this email.
        </p>
        <p>Looking forward to connecting with you soon!</p>
        <p>
          Best regards,
          <br />
          <strong>Arjun Bector</strong>
          <br />
          <a
            href={process.env.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My Portfolio
          </a>
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
