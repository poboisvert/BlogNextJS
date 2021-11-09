import { useState } from "react";
import { decode } from "html-entities";
import styled from "styled-components";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <Container>
        <div className="mc-field-group">
          <Input
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Your email"
            className="mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <Button className="wp-block-button__link" onClick={handleFormSubmit}>
            Subscribe
          </Button>
        </div>
      </Container>
      <div className="newsletter-form-info">
        {status === "sending" && <div>Sending...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </>
  );
};
const defPadding = 5;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
  display: inline-block;
  color: #222323;
  background-color: #f0f6f0;
  margin: 1rem;
  padding: 1rem 1rem;
  border: 2px solid #222323;
  border-radius: 3px;
  display: block;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    font-weight: 400;
    align-items: center;
    margin: 0;
    padding: 0.7em;
  }
`;

const Input = styled.input`
  padding: 1.1em;
  margin: 0.5em;
  color: #222323;
  background: #f0f6f0;
  border: none;
  border-radius: 3px;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    font-weight: 400;
    align-items: center;
  }
`;

export default NewsletterForm;
