import React, { ReactNode, useState } from "react";
import { BoundaryWrapper } from "./ErrorBoundary.styled";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [error, setError] = useState<Error | null>(null);

  const handleError = (error: Error) => {
    console.error("Error caught by Error Boundary:", error);
    setError(error);
  };

  return error ? (
    <BoundaryWrapper >
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={() => setError(null)}>Try Again</button>
    </BoundaryWrapper>
  ) : (
    <ErrorCatcher onError={handleError}>{children}</ErrorCatcher>
  );
};

// ✅ Fixed: Explicitly define `children` in props
class ErrorCatcher extends React.Component<{
  onError: (error: Error) => void;
  children: ReactNode; // 🔹 Add this
}> {
  componentDidCatch(error: Error) {
    this.props.onError(error);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
