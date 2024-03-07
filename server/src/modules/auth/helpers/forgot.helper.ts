const subject = 'Reset your password';

const html = (link: string) => {
  return `
  <div style="background-color: #f1f1f1; padding: 2rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; " dir="auto">
  <div style="margin: auto;">
    <h1 style="color: #29221f">Password Reset Request</h1>
    <div style="margin-bottom: 2rem">
      <p style="font-size: large; margin-bottom: 4rem; color: #81322a;">
        You are receiving this email because we received a request to reset your password.
      </p>
      <div style="margin-bottom: 4rem; margin-top: 4rem !important;">
        <a
          style="
            margin-bottom: 4rem;
            text-decoration: none;
            padding: 0.75rem 1.2rem;
            background: #29221f;
            color: #dad7ce;
            cursor: pointer;
            border: 1px solid #29221f;
            border-radius: 0.4rem;
          "
          href=${link}
          target="_blank"
        >Reset Password
        </a>
      </div>
    </div>
    <div style="margin-bottom: 2rem">
      <div style="margin-top: 2rem">
        <b>Wishing you a great day!</b>
      </div>
      <small style="color: #a38579">Our Team.</small>
    </div>
  </div>
</div>
`;
};

export { subject, html };
