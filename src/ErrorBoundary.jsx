import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You may optionally log/send the error to an error reporting service (like track.js or NewRelic).
    console.error("ErrorBoundary COMPONENT CAUGH AN ERROR", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing{" "}
          <Link to={"/"}>Click here to return to homepage</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
