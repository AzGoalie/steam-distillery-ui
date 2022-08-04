interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="p-4 mx-auto my-8 bg-red-100 rounded-md w-fit">
    <h2 className="mb-4 text-xl font-normal text-red-900 sm:text-2xl">An Error Occured</h2>
    <pre>{message}</pre>
  </div>
);

export default ErrorMessage;
