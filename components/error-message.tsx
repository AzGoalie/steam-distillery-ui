interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="mx-auto my-8 w-fit rounded-md bg-red-100 p-4">
    <h2 className="mb-4 text-xl font-normal text-red-900 sm:text-2xl">
      An Error Occured
    </h2>
    <pre>{message}</pre>
  </div>
);

export default ErrorMessage;
