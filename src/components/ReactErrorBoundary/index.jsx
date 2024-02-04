import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallbackMock = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Oops!Something went wrong...:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const ReactErrorBoundary = ({ children }) => {
  const [, setIsErrorDetected] = useState(false);

  const logErrorToService = (error, errorInfo) => {
    console.error("Logging error to service:", error, errorInfo);
    setIsErrorDetected(true);
  };

  const resetError = () => {
    console.error("Reseting Error...");
    setIsErrorDetected(false);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallbackMock}
      onError={logErrorToService}
      onReset={resetError}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ReactErrorBoundary;
