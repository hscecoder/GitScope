function ErrorBox({ message }) {
  return (
    <div className="card mx-auto my-10 max-w-lg bg-[#ffc9c9] text-center">
      <p className="pixel text-lg">Oops!</p>
      <p className="text-lg">{message}</p>
    </div>
  );
}

export default ErrorBox;
