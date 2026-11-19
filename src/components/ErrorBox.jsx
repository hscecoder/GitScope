function ErrorBox({ message }) {
  return (
    <div className="mx-auto my-10 max-w-lg rounded-2xl border border-red-500/40 bg-red-500/10 p-5 text-center text-red-300">
      <p className="text-lg font-semibold">Oops!</p>
      <p>{message}</p>
    </div>
  );
}

export default ErrorBox;
